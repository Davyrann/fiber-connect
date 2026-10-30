// Global controllers for Alpine.js
window.appController = function() {
  return {
    get store() {
      return window.FiberStore.state;
    },
    get toasts() {
      return window.FiberStore.toasts;
    },
    navigate(tab) {
      window.FiberStore.navigate(tab);
    },
    toggleTheme() {
      window.FiberStore.toggleTheme();
    },
    toggleDensity() {
      window.FiberStore.toggleDensity();
    },
    dismissToast(id) {
      window.FiberStore.dismissToast(id);
    }
  };
};

window.k3GateController = function() {
  return {
    get items() {
      return window.FiberStore.state.progress.k3_items;
    },
    get isUnlocked() {
      return window.FiberStore.state.progress.k3_completed;
    },
    toggleCheck(key, e) {
      window.FiberStore.updateK3Item(key, e.target.checked);
    },
    proceedToSimulation() {
      if (this.isUnlocked) {
        window.FiberStore.navigate('modul3');
      } else {
        window.FiberStore.showToast('Lengkapi keempat ceklis keselamatan kerja K3 terlebih dahulu.', 'warn');
      }
    }
  };
};

window.theoryController = function() {
  return {
    get layers() {
      return window.FiberTheory.layersData;
    },
    get activeLayerKey() {
      return window.FiberTheory.activeLayer;
    },
    get activeLayer() {
      return window.FiberTheory.layersData[window.FiberTheory.activeLayer];
    },
    get connectors() {
      return window.FiberTheory.connectorsData;
    },
    get activeConnKey() {
      return window.FiberTheory.activeConnector;
    },
    get activeConn() {
      return window.FiberTheory.connectorsData[window.FiberTheory.activeConnector];
    },
    tirAngle: 84,
    init() {
      this.$nextTick(() => {
        const canvas = document.getElementById('tirCanvas');
        if (canvas) {
          window.FiberTheory.initTIRCanvas(canvas);
        }
      });
    },
    selectLayer(key) {
      window.FiberTheory.activeLayer = key;
    },
    selectConnector(key) {
      window.FiberTheory.activeConnector = key;
    },
    onAngleChange(e) {
      this.tirAngle = Number(e.target.value);
      window.FiberTheory.updateAngle(this.tirAngle);
    }
  };
};

window.simulationController = function() {
  return {
    get sim() {
      return window.FiberSimulation;
    },
    step1Glasses: false,
    step1Gloves: false,
    step2Hole: 'coating_250',
    step2Length: 3.5,
    step3Solvent: 'alcohol_90',
    step3Wipe: 'single_direction',
    step4Straight: true,
    step4Clamp: true,
    step5Pos: 'ideal_gap',
    step6Profile: 'SM_AUTO',
    step7Sleeve: true,
    step7Time: 25,

    init() {
      this.$nextTick(() => {
        window.FiberSimulation.renderSplicerScreen();
      });
    },
    resetSim() {
      window.FiberSimulation.reset();
    },
    submitStep1() {
      window.FiberSimulation.submitStep1(this.step1Glasses, this.step1Gloves);
    },
    submitStep2() {
      window.FiberSimulation.submitStep2(this.step2Hole, this.step2Length);
    },
    submitStep3() {
      window.FiberSimulation.submitStep3(this.step3Solvent, this.step3Wipe);
    },
    submitStep4() {
      window.FiberSimulation.submitStep4(this.step4Straight, this.step4Clamp);
    },
    submitStep5() {
      window.FiberSimulation.submitStep5(this.step5Pos);
    },
    submitStep6() {
      window.FiberSimulation.executeArcFusion(this.step6Profile);
    },
    submitStep7() {
      window.FiberSimulation.submitStep7(this.step7Sleeve, this.step7Time);
    },
    closeWarning() {
      window.FiberSimulation.closeWarning();
    }
  };
};

window.otdrController = function() {
  return {
    cursorKm: 2.2,
    init() {
      this.$nextTick(() => {
        window.FiberOTDR.init('otdrCanvas', 'otdrRangeSlider');
      });
    }
  };
};

window.quizController = function() {
  return {
    get questions() {
      return window.FiberQuiz.questions;
    },
    get caseStudies() {
      return window.FiberQuiz.caseStudies;
    },
    get userAnswers() {
      return window.FiberQuiz.userAnswers;
    },
    get userCaseAnswers() {
      return window.FiberQuiz.userCaseAnswers;
    },
    get isSubmitted() {
      return window.FiberQuiz.isSubmitted;
    },
    selectAnswer(qId, optId) {
      window.FiberQuiz.selectAnswer(qId, optId);
    },
    selectCaseAnswer(caseId, optId) {
      window.FiberQuiz.selectCaseAnswer(caseId, optId);
    },
    submitAll() {
      window.FiberQuiz.submitEvaluation();
    },
    printReport() {
      window.print();
    }
  };
};

window.profileController = function() {
  return {
    name: window.FiberStore.state.user_profile.name,
    studentClass: window.FiberStore.state.user_profile.class,
    saveProfile() {
      window.FiberStore.updateProfile(this.name, this.studentClass);
    },
    resetData() {
      if (confirm('Apakah Anda yakin ingin mereset seluruh progres pembelajaran dan riwayat skor?')) {
        window.FiberStore.resetAllProgress();
        this.name = window.FiberStore.state.user_profile.name;
        this.studentClass = window.FiberStore.state.user_profile.class;
      }
    }
  };
};

// Register with Alpine.data as well
function registerAlpineData() {
  if (!window.Alpine) return;
  window.FiberStore.init();

  if (typeof window.Alpine.reactive === 'function') {
    window.FiberSimulation = window.Alpine.reactive(window.FiberSimulation);
    window.FiberTheory = window.Alpine.reactive(window.FiberTheory);
    window.FiberQuiz = window.Alpine.reactive(window.FiberQuiz);
  }

  Alpine.data('appController', window.appController);
  Alpine.data('k3GateController', window.k3GateController);
  Alpine.data('theoryController', window.theoryController);
  Alpine.data('simulationController', window.simulationController);
  Alpine.data('otdrController', window.otdrController);
  Alpine.data('quizController', window.quizController);
  Alpine.data('profileController', window.profileController);
}

document.addEventListener('alpine:init', registerAlpineData);
if (window.Alpine) {
  registerAlpineData();
} else {
  window.FiberStore.init();
}

// Service Worker for offline PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(() => {
      console.log('FiberConnect Service Worker registered for offline operation.');
    }).catch((err) => {
      console.warn('Service Worker registration skipped:', err);
    });
  });
}
