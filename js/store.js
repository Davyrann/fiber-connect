const STORAGE_KEY = 'fiber_connect_state_v1';

const DEFAULT_STATE = {
  theme: 'day',
  density: 'comfortable',
  activeTab: 'beranda',
  user_profile: {
    name: 'Siswa TJKT',
    class: 'XI TJKT'
  },
  progress: {
    k3_completed: false,
    k3_items: {
      apd: false,
      laser: false,
      bin: false,
      clean: false
    },
    module_1: false,
    module_2: false,
    simulation: {
      completed: false,
      attempts: 0,
      last_loss_db: 0.00,
      score: 100,
      mistakes: []
    },
    quiz: {
      completed: false,
      score: 0,
      total_questions: 5,
      answers: {},
      case_answers: {},
      case_score: 0,
      completed_at: null
    }
  }
};

function loadStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STATE,
      ...parsed,
      user_profile: { ...DEFAULT_STATE.user_profile, ...(parsed.user_profile || {}) },
      progress: {
        ...DEFAULT_STATE.progress,
        ...(parsed.progress || {}),
        k3_items: { ...DEFAULT_STATE.progress.k3_items, ...(parsed.progress?.k3_items || {}) },
        simulation: { ...DEFAULT_STATE.progress.simulation, ...(parsed.progress?.simulation || {}) },
        quiz: { ...DEFAULT_STATE.progress.quiz, ...(parsed.progress?.quiz || {}) }
      }
    };
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return DEFAULT_STATE;
  }
}

function saveStoredState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
}

window.FiberStore = {
  state: loadStoredState(),
  toasts: [],
  _initialized: false,

  init() {
    if (window.Alpine && typeof window.Alpine.reactive === 'function') {
      this.state = window.Alpine.reactive(this.state);
      this.toasts = window.Alpine.reactive(this.toasts);
    }

    if (!this._initialized) {
      this.applyTheme();
      this.applyDensity();
      window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '') || 'beranda';
        this.navigate(hash);
      });
      if (window.location.hash) {
        const initialTab = window.location.hash.replace('#', '');
        if (initialTab) this.navigate(initialTab);
      }
      this._initialized = true;
    }
  },

  navigate(tab) {
    if (tab === 'modul3' && !this.state.progress.k3_completed) {
      this.showToast('Peringatan: Modul 3 terkunci. Selesaikan verifikasi Gatekeeper K3 terlebih dahulu!', 'warn');
      window.location.hash = '#k3';
      this.state.activeTab = 'k3';
      return;
    }
    this.state.activeTab = tab;
    window.location.hash = '#' + tab;
    this.persist();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  toggleTheme() {
    this.state.theme = this.state.theme === 'day' ? 'night' : 'day';
    this.applyTheme();
    this.persist();
    this.showToast(`Mode tampilan diubah ke: ${this.state.theme === 'night' ? 'Malam' : 'Siang'}`);
  },

  applyTheme() {
    const isNight = this.state.theme === 'night';
    if (isNight) {
      document.documentElement.classList.add('theme-night');
    } else {
      document.documentElement.classList.remove('theme-night');
    }
  },

  toggleDensity() {
    this.state.density = this.state.density === 'comfortable' ? 'compact' : 'comfortable';
    this.applyDensity();
    this.persist();
    this.showToast(`Kerapatan antarmuka: ${this.state.density === 'compact' ? 'Kompak (32px)' : 'Nyaman (44px)'}`);
  },

  applyDensity() {
    document.documentElement.setAttribute('data-density', this.state.density);
  },

  updateProfile(name, studentClass) {
    if (name) this.state.user_profile.name = name.trim();
    if (studentClass) this.state.user_profile.class = studentClass.trim();
    this.persist();
    this.showToast('Data profil berhasil diperbarui');
  },

  updateK3Item(key, checked) {
    this.state.progress.k3_items[key] = !!checked;
    const items = this.state.progress.k3_items;
    const allChecked = items.apd && items.laser && items.bin && items.clean;
    if (allChecked && !this.state.progress.k3_completed) {
      this.state.progress.k3_completed = true;
      this.showToast('Selamat! Syarat K3 terpenuhi. Modul 3 (Simulasi Splicing) telah dibuka.', 'ok');
    } else if (!allChecked) {
      this.state.progress.k3_completed = false;
    }
    this.persist();
  },

  markModuleComplete(moduleKey) {
    if (this.state.progress[moduleKey] !== undefined) {
      if (typeof this.state.progress[moduleKey] === 'object' && this.state.progress[moduleKey] !== null) {
        this.state.progress[moduleKey].completed = true;
      } else {
        this.state.progress[moduleKey] = true;
      }
      this.persist();
    }
  },

  recordSimulationResult({ score, loss_db, mistakes }) {
    this.state.progress.simulation.attempts += 1;
    this.state.progress.simulation.score = Math.max(0, score);
    this.state.progress.simulation.last_loss_db = Number(loss_db.toFixed(2));
    this.state.progress.simulation.mistakes = mistakes || [];
    this.state.progress.simulation.completed = true;
    this.persist();
    this.showToast(`Simulasi selesai. Redaman sambungan: ${loss_db.toFixed(2)} dB, Nilai: ${score}/100`, loss_db <= 0.10 ? 'ok' : 'warn');
  },

  recordQuizResult({ score, total, answers, case_answers, case_score }) {
    this.state.progress.quiz.score = score;
    this.state.progress.quiz.total_questions = total;
    this.state.progress.quiz.answers = answers || {};
    this.state.progress.quiz.case_answers = case_answers || {};
    this.state.progress.quiz.case_score = case_score || 0;
    this.state.progress.quiz.completed = true;
    this.state.progress.quiz.completed_at = new Date().toISOString();
    this.persist();
    this.showToast(`Kuis selesai. Nilai Formatif: ${score}/100, Nilai Diagnosis: ${case_score}/100`, 'ok');
  },

  resetAllProgress() {
    this.state.progress = JSON.parse(JSON.stringify(DEFAULT_STATE.progress));
    this.persist();
    this.showToast('Semua progres latihan dan riwayat skor berhasil direset.', 'info');
  },

  persist() {
    saveStoredState(this.state);
  },

  showToast(message, type = 'info') {
    const id = Date.now() + Math.random();
    this.toasts.push({ id, message, type });
    setTimeout(() => {
      this.dismissToast(id);
    }, 3500);
  },

  dismissToast(id) {
    const idx = this.toasts.findIndex(t => t.id === id);
    if (idx !== -1) {
      this.toasts.splice(idx, 1);
    }
  }
};
