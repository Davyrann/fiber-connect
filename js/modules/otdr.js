window.FiberOTDR = {
  cursorKm: 2.20,
  totalDistanceKm: 5.0,
  fiberLengthKm: 4.2,
  spliceLocationKm: 2.2,
  canvasEl: null,
  ctx: null,

  init(canvasId, sliderId) {
    this.canvasEl = document.getElementById(canvasId);
    if (!this.canvasEl) return;
    this.ctx = this.canvasEl.getContext('2d');

    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.value = this.cursorKm;
      slider.addEventListener('input', (e) => {
        this.cursorKm = Number(e.target.value);
        this.render();
      });
    }

    this.render();
  },

  render() {
    if (!this.ctx || !this.canvasEl) return;
    const ctx = this.ctx;
    const w = this.canvasEl.width;
    const h = this.canvasEl.height;

    // Fetch dynamic splice loss from store if available
    const simResult = window.FiberStore?.state?.progress?.simulation;
    const spliceLoss = simResult?.completed ? simResult.last_loss_db : 0.08;

    ctx.clearRect(0, 0, w, h);

    // Dark screen background
    ctx.fillStyle = '#0B130E';
    ctx.fillRect(0, 0, w, h);

    // Grid margins
    const padL = 48;
    const padR = 24;
    const padT = 24;
    const padB = 34;

    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    // Gridlines (dB vertical, Km horizontal)
    ctx.strokeStyle = '#18271E';
    ctx.lineWidth = 1;

    // dB lines (-5 dB to -30 dB)
    ctx.fillStyle = '#6F7B72';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'right';

    for (let db = 0; db >= -30; db -= 5) {
      const y = padT + (Math.abs(db) / 30) * plotH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(w - padR, y);
      ctx.stroke();
      ctx.fillText(`${db} dB`, padL - 8, y + 3);
    }

    // Distance lines (0 km to 5 km)
    ctx.textAlign = 'center';
    for (let km = 0; km <= 5; km += 1) {
      const x = padL + (km / 5) * plotW;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, h - padB);
      ctx.stroke();
      ctx.fillText(`${km} km`, x, h - padB + 16);
    }

    // Mathematical coordinate helper
    const getX = (km) => padL + (km / 5) * plotW;
    const getY = (db) => padT + (Math.abs(db) / 30) * plotH;

    // OTDR TRACE CALCULATION
    // Fiber attenuation standard ~0.35 dB/km
    const attenuationPerKm = 0.35;

    // Event 1: Initial Connector at 0 km
    // High Fresnel reflection spike at x=0
    ctx.strokeStyle = '#22D3EE';
    ctx.lineWidth = 2;
    ctx.beginPath();

    // Start at connector reflection peak (-4 dB)
    ctx.moveTo(getX(0), getY(-4));
    // Drops down to launch baseline (-8 dB)
    ctx.lineTo(getX(0.08), getY(-8));

    // Section 1: 0.08 km to 2.2 km (Fiber span 1)
    const dbBeforeSplice = -8 - (this.spliceLocationKm * attenuationPerKm);
    ctx.lineTo(getX(this.spliceLocationKm), getY(dbBeforeSplice));

    // Event 2: Splice Loss Step at 2.2 km
    // Sudden vertical drop by spliceLoss dB
    const dbAfterSplice = dbBeforeSplice - spliceLoss;
    ctx.lineTo(getX(this.spliceLocationKm), getY(dbAfterSplice));

    // Section 2: 2.2 km to 4.2 km (Fiber span 2)
    const span2Length = this.fiberLengthKm - this.spliceLocationKm;
    const dbBeforeEnd = dbAfterSplice - (span2Length * attenuationPerKm);
    ctx.lineTo(getX(this.fiberLengthKm), getY(dbBeforeEnd));

    // Event 3: End of Fiber Fresnel peak at 4.2 km
    ctx.lineTo(getX(this.fiberLengthKm), getY(-6)); // spike
    ctx.lineTo(getX(this.fiberLengthKm + 0.06), getY(-28)); // cliff drop into noise floor

    // Noise floor to 5 km
    ctx.lineTo(getX(5.0), getY(-28));
    ctx.stroke();

    // Draw Event Markers
    this._drawMarker(ctx, getX(0), getY(-4), 'E1: Konektor (Fresnel)');
    this._drawMarker(ctx, getX(this.spliceLocationKm), getY(dbBeforeSplice), `E2: Sambungan (-${spliceLoss.toFixed(2)} dB)`);
    this._drawMarker(ctx, getX(this.fiberLengthKm), getY(-6), 'E3: Ujung Serat (End)');

    // Draw Draggable Measurement Cursor Line
    const cursorX = getX(this.cursorKm);
    ctx.strokeStyle = '#E3A857';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(cursorX, padT);
    ctx.lineTo(cursorX, h - padB);
    ctx.stroke();
    ctx.setLineDash([]);

    // Calculate current readings under cursor
    let currentDb = -8;
    let eventNote = 'Zona Normal Kabel';

    if (this.cursorKm < 0.1) {
      currentDb = -4.0;
      eventNote = 'Refleksi Fresnel Konektor Awal';
    } else if (this.cursorKm <= this.spliceLocationKm) {
      currentDb = -8 - (this.cursorKm * attenuationPerKm);
      eventNote = 'Penurunan Redaman Alami Serat';
    } else if (this.cursorKm <= this.fiberLengthKm) {
      currentDb = -8 - (this.spliceLocationKm * attenuationPerKm) - spliceLoss - ((this.cursorKm - this.spliceLocationKm) * attenuationPerKm);
      eventNote = `Setelah Sambungan (Step Loss -${spliceLoss.toFixed(2)} dB)`;
    } else {
      currentDb = -28.0;
      eventNote = 'Noise Floor (Melewati Ujung Kabel)';
    }

    // Cursor tag bubble
    ctx.fillStyle = '#E3A857';
    ctx.fillRect(cursorX - 28, padT - 18, 56, 16);
    ctx.fillStyle = '#131A16';
    ctx.font = 'bold 9px JetBrains Mono, monospace';
    ctx.fillText(`${this.cursorKm.toFixed(2)} km`, cursorX, padT - 6);

    // Update readout DOM
    const kmDisplay = document.getElementById('otdrKmDisplay');
    const dbDisplay = document.getElementById('otdrDbDisplay');
    const noteDisplay = document.getElementById('otdrNoteDisplay');

    if (kmDisplay) kmDisplay.textContent = `${this.cursorKm.toFixed(2)} km`;
    if (dbDisplay) dbDisplay.textContent = `${currentDb.toFixed(2)} dB`;
    if (noteDisplay) noteDisplay.textContent = eventNote;
  },

  _drawMarker(ctx, x, y, text) {
    ctx.fillStyle = '#E5736A';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#BFE3C4';
    ctx.font = '9px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(text, x + 6, y - 6);
  }
};
