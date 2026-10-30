# FiberConnect: Media Pembelajaran Fusion Splicing Serat Optik

Media pembelajaran interaktif berbasis web (*Single Page Application*) untuk materi penyambungan kabel serat optik (*Fusion Splicing*) pada mata pelajaran Jaringan Komputer dan Telekomunikasi Fase F SMK (Konsentrasi Keahlian TJKT, SMK Negeri 1 Banyudono).

## 🚀 Fitur Utama

1. **Gatekeeper K3**:
   Verifikasi 4 poin keselamatan kerja (APD kacamata & sarung tangan antistatis, peringatan laser inframerah, wadah serpihan kaca *disposal bin*, dan kebersihan bilik elektroda) sebelum modul simulasi dapat diakses.

2. **Modul 1: Konsep Transmisi & TIR**:
   Diagram SVG interaktif penampang serat optik (*Core, Cladding, Coating, Strength Member, Outer Jacket*) dan simulasi *Total Internal Reflection* (TIR) dengan perhitungan sudut kritis Snellius ($\theta_c \approx 81.8^\circ$).

3. **Modul 2: Struktur Serat & Galeri Konektor**:
   Eksplorasi tipe penguncian mekanis konektor SC, LC, FC, ST serta perbedaan tipe pemolesan ferrule UPC (0° biru) vs APC (8° hijau).

4. **Modul 3: Simulasi Prosedural 7 Langkah Fusion Splicing**:
   - Langkah 1: Persiapan Meja & APD
   - Langkah 2: Pengupasan (*Stripping*)
   - Langkah 3: Pembersihan (*Cleaning*)
   - Langkah 4: Pemotongan (*Cleaving 90°*)
   - Langkah 5: Penempatan (*V-Groove Alignment*)
   - Langkah 6: Pengelasan Busur Listrik (*Arc Fusion*)
   - Langkah 7: Proteksi Sambungan (*Heater Sleeve*)
   - Umpan balik korektif instan dan akumulator penalti redaman (*insertion loss* dB).

5. **Modul 4: Pengujian Virtual OTDR & OPM**:
   Kurva jejak Canvas 2D interaktif dengan penanda *Event* (Fresnel konektor awal, *step loss* titik sambung dari hasil Modul 3, ujung kabel) dan kursor pembaca jarak/redaman mandiri.

6. **Evaluasi & Rekapitulasi Capaian**:
   5 soal kuis formatif pilihan ganda acak dengan pembahasan teknis instan, 3 studi kasus diagnosis lapangan, dan kartu capaian siap cetak (PDF).

7. **Dukungan Luring (Offline PWA)**:
   Dilengkapi *Service Worker* dan *Web App Manifest* untuk eksekusi mandiri tanpa koneksi internet di lab komputer sekolah.

## 🛠️ Tech Stack

- **Markup & Struktur**: Semantic HTML5
- **Gaya & Token**: Modern CSS (CSS Custom Properties / Variables)
- **Logika & Reaktivitas**: Vanilla JavaScript (ES6+ modular) + Alpine.js v3.14.8 (lokal mandiri)
- **Grafis**: Interactive SVG & HTML5 Canvas 2D
- **Penyimpanan State**: Web Storage API (`localStorage`)

## 💻 Cara Menjalankan

Aplikasi ini berbasis *zero-build* statis tanpa dependensi kompilator:

1. Buka berkas `index.html` langsung di peramban (Chrome / Edge / Firefox), atau
2. Jalankan server lokal sederhana:
   ```bash
   npx serve .
   # atau
   python -m http.server 8000
   ```
3. Akses `http://localhost:8000` di peramban.

## 👥 Pengembang

- **Pengembang**: Muhammad Dava Syahputra (NIM: K3524058)
- **Mitra Sekolah**: SMK Negeri 1 Banyudono (Konsentrasi Keahlian TJKT)
