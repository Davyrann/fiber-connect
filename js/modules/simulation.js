window.FiberSimulation = {
  currentStep: 1,
  totalSteps: 7,
  score: 100,
  lossDb: 0.02, // baseline ideal loss
  mistakes: [],
  activeWarning: null,
  isArcing: false,
  isFused: false,
  fiberGap: 24, // pixels in view
  alignmentOffset: 0,
  selectedStripperHole: null,
  stripLength: 3.5, // cm
  cleaningDone: false,
  cleaningSolvent: null,
  cleaveAngle: 0.4, // degrees (ideal < 1.0 deg)
  vgroovePosition: null,
  programMode: 'SM',
  sleeveHeated: false,

  stepsMeta: [
    { num: 1, title: 'Persiapan Meja & APD', desc: 'Kenakan kacamata pelindung dan sarung tangan antistatis sebelum menyentuh serat kaca.' },
    { num: 2, title: 'Pengupasan (Stripping)', desc: 'Kupas jaket pelindung dan acrylate coating dengan lubang fiber stripper yang sesuai (3-4 cm).' },
    { num: 3, title: 'Pembersihan (Cleaning)', desc: 'Bersihkan sisa partikel dan kotoran menggunakan alkohol isopropil 90%+ dan tisu bebas serat.' },
    { num: 4, title: 'Pemotongan (Cleaving)', desc: 'Potong ujung serat menggunakan precision cleaver untuk menghasilkan sudut potongan tegak lurus 90°.' },
    { num: 5, title: 'Penempatan (Alignment)', desc: 'Letakkan serat pada V-groove mesin fusion splicer tanpa menyentuh elektroda discharge.' },
    { num: 6, title: 'Pengelasan Busur (Arc Fusion)', desc: 'Pilih profil serat yang tepat (SM) lalu lakukan proses peleburan busur listrik bertegangan tinggi.' },
    { num: 7, title: 'Proteksi Sambungan', desc: 'Pasang protection sleeve pada titik lebur dan panaskan pada slot heater hingga menyusut rapat.' }
  ],

  reset() {
    this.currentStep = 1;
    this.score = 100;
    this.lossDb = 0.02;
    this.mistakes = [];
    this.activeWarning = null;
    this.isArcing = false;
    this.isFused = false;
    this.fiberGap = 24;
    this.alignmentOffset = 0;
    this.selectedStripperHole = null;
    this.stripLength = 3.5;
    this.cleaningDone = false;
    this.cleaningSolvent = null;
    this.cleaveAngle = 0.4;
    this.vgroovePosition = null;
    this.programMode = 'SM';
    this.sleeveHeated = false;
    this.renderSplicerScreen();
  },

  applyPenalty(code, message, penaltyPoints = 10, addedLoss = 0.20) {
    if (!this.mistakes.includes(code)) {
      this.mistakes.push(code);
      this.score = Math.max(0, this.score - penaltyPoints);
      this.lossDb = Number((this.lossDb + addedLoss).toFixed(2));
    }
    this.activeWarning = {
      code,
      message,
      points: penaltyPoints,
      loss: addedLoss
    };
  },

  closeWarning() {
    this.activeWarning = null;
  },

  // Step 1: APD Check
  submitStep1(wearsGlasses, wearsGloves) {
    if (!wearsGlasses || !wearsGloves) {
      this.applyPenalty(
        'apd_missing',
        'Bahaya K3! Bekerja tanpa kacamata pelindung atau sarung tangan berisiko serpihan serat kaca tak kasat mata menusuk kornea mata atau kulit.',
        10,
        0.15
      );
      return false;
    }
    this.currentStep = 2;
    this.closeWarning();
    this.renderSplicerScreen();
    window.FiberStore.showToast('Langkah 1 Selesai: APD lengkap terpasang dengan benar.', 'ok');
    return true;
  },

  // Step 2: Stripping
  submitStep2(hole, lengthCm) {
    // Correct hole is hole 3 (250µm coating) or hole 2 (900µm buffer)
    this.selectedStripperHole = hole;
    this.stripLength = Number(lengthCm);

    if (hole === 'jacket_hole') {
      this.applyPenalty(
        'stripper_hole_wrong',
        'Lubang stripper terlalu besar! Lubang jacket tidak dapat mengupas lapisan acrylate coating 250 µm.',
        10,
        0.20
      );
      return false;
    }

    if (this.stripLength < 2.5) {
      this.applyPenalty(
        'strip_too_short',
        'Kupasan terlalu pendek (< 2.5 cm). Serat tidak akan mencapai klem cleaver dan V-groove splicer dengan stabil.',
        10,
        0.15
      );
      return false;
    }

    if (this.stripLength > 5.0) {
      this.applyPenalty(
        'strip_too_long',
        'Kupasan terlalu panjang (> 5 cm). Kaca silika terbuka rentan patah dan tidak muat di dalam protection sleeve.',
        10,
        0.15
      );
      return false;
    }

    this.currentStep = 3;
    this.closeWarning();
    this.renderSplicerScreen();
    window.FiberStore.showToast('Langkah 2 Selesai: Pengupasan serat tepat 3.5 cm.', 'ok');
    return true;
  },

  // Step 3: Cleaning
  submitStep3(solvent, wipeTechnique) {
    this.cleaningSolvent = solvent;

    if (solvent !== 'alcohol_90') {
      this.applyPenalty(
        'dirty_cleaning_agent',
        'Pembersihan gagal! Menggunakan tisu kering/air biasa meninggalkan partikel minyak dan residu pada permukaan kaca silika.',
        10,
        0.30
      );
      return false;
    }

    if (wipeTechnique !== 'single_direction') {
      this.applyPenalty(
        'back_and_forth_wipe',
        'Penyeka bolak-balik dilarang! Usapan harus satu arah (one-way stroke) agar debu yang sudah terangkat tidak menempel kembali.',
        10,
        0.15
      );
      return false;
    }

    this.cleaningDone = true;
    this.currentStep = 4;
    this.closeWarning();
    this.renderSplicerScreen();
    window.FiberStore.showToast('Langkah 3 Selesai: Serat bersih mengkilap dengan alkohol 90%+. Terdengar bunyi decit (squeak).', 'ok');
    return true;
  },

  // Step 4: Cleaving
  submitStep4(isStraight, clampClosed) {
    if (!clampClosed || !isStraight) {
      this.cleaveAngle = 2.6; // High angle defect
      this.applyPenalty(
        'bad_cleave_angle',
        'Sudut potongan miring (2.6° > batas maksimal 1.0°)! Ujung serat cacat/retak. Mesin splicer akan menolak penyambungan.',
        15,
        0.35
      );
      this.renderSplicerScreen();
      return false;
    }

    this.cleaveAngle = 0.3; // Excellent mirror cut
    this.currentStep = 5;
    this.closeWarning();
    this.renderSplicerScreen();
    window.FiberStore.showToast('Langkah 4 Selesai: Potongan rata presisi, sudut potong 0.3° (< 1.0°).', 'ok');
    return true;
  },

  // Step 5: V-groove Alignment
  submitStep5(position) {
    this.vgroovePosition = position;

    if (position === 'touch_electrode') {
      this.applyPenalty(
        'electrode_collision',
        'Fatal: Ujung serat menabrak elektroda! Kaca terbakar hangus dan elektroda splicer mengalami kerusakan busur.',
        15,
        0.40
      );
      this.renderSplicerScreen();
      return false;
    }

    if (position === 'too_far') {
      this.applyPenalty(
        'gap_too_wide',
        'Ujung serat terlalu jauh dari jangkauan motor fokus kamera (gap > 40 µm). Kamera otomatis tidak dapat mendeteksi inti serat.',
        10,
        0.20
      );
      this.renderSplicerScreen();
      return false;
    }

    this.fiberGap = 12; // Ready for arc
    this.currentStep = 6;
    this.closeWarning();
    this.renderSplicerScreen();
    window.FiberStore.showToast('Langkah 5 Selesai: Serat duduk sempurna di V-groove, siap peleburan.', 'ok');
    return true;
  },

  // Step 6: Arc Fusion
  executeArcFusion(selectedProfile) {
    this.programMode = selectedProfile;
    this.isArcing = true;
    this.renderSplicerScreen();

    setTimeout(() => {
      this.isArcing = false;
      this.isFused = true;

      if (selectedProfile !== 'SM_AUTO') {
        this.applyPenalty(
          'wrong_arc_profile',
          'Salah Profil! Memilih program MM (Multimode) untuk serat Singlemode menghasilkan suhu lebur terlalu tinggi; timbul gelembung udara (bubble).',
          15,
          0.35
        );
      } else {
        window.FiberStore.showToast('Proses Arc Fusion Berhasil! Kedua inti serat menyatu sempurna.', 'ok');
      }

      this.currentStep = 7;
      this.renderSplicerScreen();
    }, 1200);
  },

  // Step 7: Heat Shrink Protection Sleeve
  submitStep7(sleevePositioned, heaterTimeSec) {
    if (!sleevePositioned) {
      this.applyPenalty(
        'no_sleeve_protection',
        'Serat Patah! Sambungan tanpa protection sleeve sangat rapuh dan langsung terbelah saat dipindahkan dari V-groove.',
        20,
        0.50
      );
      return false;
    }

    if (Number(heaterTimeSec) < 15) {
      this.applyPenalty(
        'under_heated_sleeve',
        'Waktu pemanasan kurang (< 15 detik). Tabung pelindung belum menciut sempurna, terdapat rongga udara internal.',
        10,
        0.15
      );
      return false;
    }

    this.sleeveHeated = true;
    this.closeWarning();
    this.renderSplicerScreen();

    // Finalize simulation
    window.FiberStore.recordSimulationResult({
      score: this.score,
      loss_db: this.lossDb,
      mistakes: this.mistakes
    });

    window.FiberStore.markModuleComplete('simulation');
    window.FiberStore.showToast('Simulasi Splicing 7 Langkah Selesai! Hasil tercatat di rekapitulasi capaian.', 'ok');
    return true;
  },

  renderSplicerScreen() {
    const canvasX = document.getElementById('splicerCanvasX');
    const canvasY = document.getElementById('splicerCanvasY');
    if (!canvasX || !canvasY) return;

    this._drawCameraView(canvasX, 'X-AXIS', this.cleaveAngle > 1.0);
    this._drawCameraView(canvasY, 'Y-AXIS', false);
  },

  _drawCameraView(canvas, label, hasAngleDefect) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Dark screen grid
    ctx.fillStyle = '#060B08';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#121F17';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Center crosshair
    const cx = w / 2;
    const cy = h / 2;
    ctx.strokeStyle = '#274432';
    ctx.beginPath();
    ctx.moveTo(cx, cy - 30);
    ctx.lineTo(cx, cy + 30);
    ctx.moveTo(cx - 30, cy);
    ctx.lineTo(cx + 30, cy);
    ctx.stroke();

    const fiberHeight = 44;
    const coreHeight = 8;
    const gap = this.isFused ? 0 : this.fiberGap;

    // Left fiber
    const leftEndX = cx - gap / 2;
    const leftStartX = 10;

    ctx.fillStyle = '#3F5948';
    ctx.fillRect(leftStartX, cy - fiberHeight / 2, leftEndX - leftStartX, fiberHeight);
    ctx.fillStyle = '#6FBF86';
    ctx.fillRect(leftStartX, cy - coreHeight / 2, leftEndX - leftStartX, coreHeight);

    // Right fiber
    const rightStartX = cx + gap / 2;
    const rightEndX = w - 10;

    ctx.fillStyle = '#3F5948';
    ctx.fillRect(rightStartX, cy - fiberHeight / 2, rightEndX - rightStartX, fiberHeight);
    ctx.fillStyle = '#6FBF86';
    ctx.fillRect(rightStartX, cy - coreHeight / 2, rightEndX - rightStartX, coreHeight);

    // Angle defect drawing if cleave was tilted
    if (hasAngleDefect && !this.isFused) {
      ctx.fillStyle = '#060B08';
      ctx.beginPath();
      ctx.moveTo(rightStartX, cy - fiberHeight / 2);
      ctx.lineTo(rightStartX + 12, cy - fiberHeight / 2);
      ctx.lineTo(rightStartX, cy + fiberHeight / 2);
      ctx.fill();

      ctx.fillStyle = '#E5736A';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText('ANG: 2.6° (BAD)', rightStartX - 10, cy - fiberHeight / 2 - 8);
    } else if (!this.isFused) {
      ctx.fillStyle = '#A8C79A';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText(`ANG: ${this.cleaveAngle.toFixed(1)}°`, cx - 32, cy - fiberHeight / 2 - 8);
    }

    // Arc flash effect
    if (this.isArcing) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(cx, cy, 32, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#E3A857';
      ctx.beginPath();
      ctx.moveTo(cx, cy - 45);
      ctx.lineTo(cx, cy + 45);
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    // Joint visualization after fusion
    if (this.isFused) {
      if (this.mistakes.includes('wrong_arc_profile')) {
        // Draw air bubble inside core
        ctx.fillStyle = '#F3B7AE';
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#E5736A';
        ctx.stroke();

        ctx.fillStyle = '#E5736A';
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillText('DEFECT: BUBBLE', cx - 40, cy + 34);
      } else {
        ctx.fillStyle = '#BFE3C4';
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillText(`EST LOSS: ${this.lossDb.toFixed(2)} dB`, cx - 46, cy + 34);
      }
    }
  }
};
