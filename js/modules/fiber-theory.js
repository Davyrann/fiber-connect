window.FiberTheory = {
  activeLayer: 'core',
  tirAngle: 84,
  criticalAngle: 81.8,
  n1: 1.465, // Core
  n2: 1.450, // Cladding
  activeConnector: 'SC',

  layersData: {
    core: {
      name: 'Inti Serat (Core)',
      dim: '9 µm (Singlemode) atau 50/62.5 µm (Multimode)',
      material: 'Silika Murni (SiO2) didoping Germanium (GeO2)',
      index: 'n1 ≈ 1.465 (Indeks bias tertinggi)',
      desc: 'Saluran fisik utama di mana gelombang cahaya merambat. Cahaya terperangkap di dalam inti ini melalui prinsip Refleksi Internal Total (Total Internal Reflection).'
    },
    cladding: {
      name: 'Selubung Kaca (Cladding)',
      dim: 'Diameter standar seragam: 125 µm',
      material: 'Kaca Silika dengan kemurnian tinggi tanpa doping',
      index: 'n2 ≈ 1.450 (Lebih rendah dari core)',
      desc: 'Lapisan optik pengurung yang memantulkan kembali berkas cahaya ke dalam core. Perbedaan indeks bias n1 > n2 adalah syarat mutlak terjadinya pemantulan sempurna.'
    },
    coating: {
      name: 'Pelapis Primer (Primary Coating / Buffer)',
      dim: '250 µm (micro-coating) hingga 900 µm (tight buffer)',
      material: 'Polimer Akrilik / Plastik UV-cured elastis',
      index: 'Non-optik (Proteksi fisik)',
      desc: 'Melindungi kaca silika yang rapuh dari kelembaban udara, abrasi mekanik, goresan mikroskopis, dan tekanan tekukan mikro (microbending).'
    },
    strength: {
      name: 'Serat Penguat (Aramid Yarn / Kevlar)',
      dim: 'Untaian serat benang sintetis kekuatan tarik tinggi',
      material: 'Poli-parafenilen tereftalamid (Kevlar)',
      index: 'Struktural mekanik',
      desc: 'Menahan beban tarikan (tensile strength) saat kabel ditarik melalui pipa saluran (conduit) atau tiang gantung agar serat kaca tidak terputus.'
    },
    jacket: {
      name: 'Jaket Luar (Outer Jacket)',
      dim: '2.0 mm s.d. 3.0 mm (kabel patchcord/indoor drop)',
      material: 'PVC tahan api atau LSZH (Low Smoke Zero Halogen)',
      index: 'Pelindung lingkungan terluar',
      desc: 'Melindungi seluruh susunan kabel dari sinar radiasi ultraviolet matahari, air hujan, gigitan hewan pengerat, serta bahan kimia korosif di lapangan.'
    }
  },

  connectorsData: {
    SC: {
      fullName: 'Subscriber Connector / Standard Connector',
      shape: 'Bodi Persegi (Square Body), Ferrule 2.5 mm',
      locking: 'Push-Pull (Dorong-Tarik dengan bunyi klik)',
      typicalUse: 'Koneksi FTTH ONT, OTB, Switch jaringan data dan rack server.',
      advantages: 'Pemasangan cepat, akurasi tinggi, tahan terhadap tarikan kabel searah.'
    },
    LC: {
      fullName: 'Lucent Connector / Little Connector',
      shape: 'Bodi Persegi Ringkas (Small Form Factor), Ferrule 1.25 mm',
      locking: 'Push-Pull Latching Clip (mirip RJ-45)',
      typicalUse: 'Modul SFP/SFP+ transceiver switch data center dengan densitas port tinggi.',
      advantages: 'Ukuran separuh dari SC, menghemat 50% ruang panel pada ODF dan router core.'
    },
    FC: {
      fullName: 'Ferrule Connector / Fiber Channel',
      shape: 'Bodi Logam Silinder Bulat Berulir, Ferrule Keramik 2.5 mm',
      locking: 'Screw / Threaded Coupling (Diputar berulir kencang)',
      typicalUse: 'Port alat ukur presisi (OTDR, OLS, OPM) dan lingkungan bergetar tinggi.',
      advantages: 'Sangat stabil terhadap goncangan mekanik dan getaran mesin industri.'
    },
    ST: {
      fullName: 'Straight Tip',
      shape: 'Bodi Silinder Logam dengan Slot Pengunci, Ferrule 2.5 mm',
      locking: 'Bayonet Twist Lock (Dorong dan putar seperempat lingkaran)',
      typicalUse: 'Jaringan kampus lama, instalasi industri legacy, sistem transmisi video CCTV.',
      advantages: 'Koneksi kokoh berkat sistem pegas internal bayonet.'
    }
  },

  initTIRCanvas(canvasEl) {
    if (!canvasEl) return;
    const ctx = canvasEl.getContext('2d');
    const width = canvasEl.width;
    const height = canvasEl.height;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background Cladding top
      ctx.fillStyle = '#1B2520';
      ctx.fillRect(0, 0, width, 55);
      // Core center
      ctx.fillStyle = '#2A3B31';
      ctx.fillRect(0, 55, width, height - 110);
      // Cladding bottom
      ctx.fillStyle = '#1B2520';
      ctx.fillRect(0, height - 55, width, 55);

      // Boundary lines
      ctx.strokeStyle = '#4F5B53';
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 55);
      ctx.lineTo(width, 55);
      ctx.moveTo(0, height - 55);
      ctx.lineTo(width, height - 55);
      ctx.stroke();
      ctx.setLineDash([]);

      // Labels
      ctx.fillStyle = '#B8BFB3';
      ctx.font = '11px Plus Jakarta Sans, sans-serif';
      ctx.fillText('Cladding (n2 = 1.450)', 14, 34);
      ctx.fillText('Core (n1 = 1.465)', 14, 90);
      ctx.fillText('Cladding (n2 = 1.450)', 14, height - 22);

      // Normal line at reflection point
      const hitX = width / 2;
      const hitY = 55;
      ctx.strokeStyle = '#626C65';
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(hitX, 10);
      ctx.lineTo(hitX, 110);
      ctx.stroke();
      ctx.setLineDash([]);

      // Calculate angles
      // angle is measured from normal (0 to 90 deg)
      const rad = (this.tirAngle * Math.PI) / 180;
      const startX = hitX - Math.tan(rad) * (height / 2 - 55);
      const startY = height / 2;

      // Incident Ray
      ctx.strokeStyle = '#E3A857';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(hitX, hitY);
      ctx.stroke();

      const isTIR = this.tirAngle >= this.criticalAngle;

      if (isTIR) {
        // Reflected Ray inside Core
        const endX = hitX + Math.tan(rad) * (height / 2 - 55);
        const endY = height / 2;
        ctx.strokeStyle = '#22D3EE';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(hitX, hitY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Bounce text
        ctx.fillStyle = '#6FBF86';
        ctx.font = 'bold 12px Plus Jakarta Sans, sans-serif';
        ctx.fillText('TOTAL INTERNAL REFLECTION (Cahaya Terpantul Sempurna)', hitX - 170, height - 70);
      } else {
        // Refracted Ray leaks into Cladding
        const sinRefracted = (this.n1 / this.n2) * Math.sin(rad);
        const refAngle = Math.asin(Math.min(0.999, sinRefracted));
        const leakX = hitX + Math.tan(refAngle) * 45;
        const leakY = 10;

        ctx.strokeStyle = '#E5736A';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(hitX, hitY);
        ctx.lineTo(leakX, leakY);
        ctx.stroke();

        // Weak reflected ray
        ctx.strokeStyle = 'rgba(227, 168, 87, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(hitX, hitY);
        ctx.lineTo(hitX + Math.tan(rad) * 40, hitY + 40);
        ctx.stroke();

        ctx.fillStyle = '#E5736A';
        ctx.font = 'bold 12px Plus Jakarta Sans, sans-serif';
        ctx.fillText(`CAHAYA BOCOR KE CLADDING (Sudut < Sudut Kritis ${this.criticalAngle}°)`, hitX - 160, height - 70);
      }
    };

    render();
    this._renderTIR = render;
  },

  updateAngle(newAngle) {
    this.tirAngle = Number(newAngle);
    if (this._renderTIR) {
      this._renderTIR();
    }
  }
};
