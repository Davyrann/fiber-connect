# Product Requirements Document (PRD)
## Media Pembelajaran Interaktif Berbasis Web: Menyambung Kabel Fiber Optik (Fase F SMK)

- **Target Pengguna**: Peserta Didik Kelas XI Konsentrasi Keahlian TJKT (Fase F) SMK Negeri 1 Banyudono
- **Mata Pelajaran**: Kabel (Jaringan Komputer dan Telekomunikasi)
- **Pengembang**: Muhammad Dava Syahputra (NIM: K3524058)
- **Status Dokumen**: Baseline v1.0 (Menindaklanjuti Proposal UTS TP)
- **Target Platform**: Desktop (Browser Lab Komputer) & Mobile Responsive (Peramban Ponsel Siswa)
- **Hosting**: Netlify / GitHub Pages (Statis, biaya Rp0)

---

## 1. Latar Belakang & Masalah Teknis

Berdasarkan data observasi dan wawancara lapangan (23–24 September 2026):
1. **Rasio Alat Kritis**: Terdapat ketimpangan sarana praktik (contoh riil: 12 unit Mikrotik untuk 36 siswa; perangkat *fusion splicer* fisik terbatas karena harga tinggi Rp29–70 juta/unit).
2. **Keterbatasan Waktu**: Alokasi praktik nyata hanya 35 menit per pertemuan, mayoritas waktu tersita untuk demonstrasi guru dan antrean giliran.
3. **Risiko & Biaya**: Kesalahan pemotongan (*cleaving* miring) atau serat kotor merusak material dan menghasilkan redaman (*insertion loss*) tinggi baru terdeteksi saat uji fisik.

**Tujuan Produk**:
Menyediakan media web simulasi prosedural *zero-cost* yang dapat dijalankan secara daring maupun luring (file lokal/PWA) di lab sekolah, memungkinkan repetisi latihan mandiri 7 langkah *fusion splicing* dengan *immediate corrective feedback* sebelum praktik alat fisik.

---

## 2. Arsitektur Sistem & Spesifikasi Teknis

- **Paradigma**: Client-Side Single Page Application (SPA), *zero backend*, *zero database server*.
- **Tech Stack**:
  - Core: HTML5, Modern CSS (CSS Grid/Flexbox, CSS Variables), Vanilla JavaScript (ES6+ modular).
  - Grafis/Simulasi: Interactive SVG & HTML5 Canvas 2D (ringan, skalabel tanpa dependensi library berat).
  - State Persistence: Web Storage API (`localStorage`) untuk menyimpan progres belajar, status *gate K3*, dan riwayat skor.
  - Offline Support: Service Worker / Cache API (standar PWA) agar tetap berfungsi saat koneksi internet lab terputus.
- **Batasan Kinerja**:
  - Ukuran total bundle aset: < 5 MB (cepat dimuat pada jaringan sekolah berkecepatan rendah).
  - Waktu muat awal (*First Contentful Paint*): < 1,5 detik.
  - Kompatibilitas browser: Chrome 100+, Edge 100+, Firefox 100+, Safari Mobile.

---

## 3. Struktur Modul & Alur Pengguna (Sitemap)

```
[Beranda]
   └── [Menu Utama]
         ├── Modul 1: Konsep Jaringan & Media Transmisi
         ├── Modul 2: Struktur Serat Optik & Konektor
         ├── [K3 Gatekeeper] ──(Wajib Lolos)──> Modul 3: Simulasi Fusion Splicing
         ├── Modul 4: Pengujian Virtual OTDR & OPM
         ├── Evaluasi: Kuis Diagnostik & Tes Formatif
         └── Profil & Lisensi Aset
```

---

## 4. Rincian Fitur & Spesifikasi Fungsional

### 4.1. Gatekeeper K3 (Prasyarat Wajib Simulasi)
- **Tujuan**: Mencegah siswa langsung masuk ke simulasi teknis sebelum memahami bahaya serat optik.
- **Logika**:
  - Modul 3 (Simulasi) terkunci (`disabled` / *locked state*) secara *default*.
  - Menampilkan 4 poin verifikasi K3:
    1. Penggunaan kacamata pelindung & sarung tangan antistatis.
    2. Larangan menatap langsung ujung serat aktif (bahaya sinar inframerah laser).
    3. Prosedur pembuangan pecahan serat kaca ke wadah khusus tertutup (*fiber disposal bin*).
    4. Pemeriksaan kebersihan elektroda dan V-groove *splicer*.
  - Event `onAllChecked`: State `k3_passed = true` tersimpan di `localStorage`, tombol akses Modul 3 aktif.

### 4.2. Modul Materi Interaktif (Modul 1 & 2)
- **Fitur Diagram Interaktif**:
  - Visualisasi SVG potongan melintang serat optik (*Core*, *Cladding*, *Coating*, *Outer Jacket*).
  - Interaksi *hover/click* pada label bagian menghasilkan *highlight* dan panel penjelasan teknis.
  - Mini simulasi visual: Animasi perambatan gelombang cahaya menunjukkan prinsip *Total Internal Reflection* (refleksi internal total) saat indeks bias *core* ($n_1$) > *cladding* ($n_2$).
- **Komparasi Serat & Konektor**:
  - Matriks interaktif Singlemode (9/125 µm) vs Multimode (50/125 µm & 62.5/125 µm).
  - Galeri visual konektor: SC, FC, LC, ST dengan mekanisme penguncian (*push-pull*, *screw*, *bayonet*).

### 4.3. Simulasi Inti: 7 Langkah Fusion Splicing (Modul 3)
Setiap langkah mensimulasikan aksi prosedural nyata dengan percabangan benar/salah (*decision branch*) serta umpan balik langsung (*immediate feedback*):

| No | Tahap Prosedur | Interaksi Pengguna | Skenario Error (Salah) | Konsekuensi & Umpan Balik |
|---|---|---|---|---|
| 1 | Persiapan & APD | Cek kondisi meja dan kenakan APD | Langsung mengambil kabel tanpa APD | *Warning modal*: Risiko serpihan serat menancap pada kulit. |
| 2 | Pengupasan (*Stripping*) | Memilih lubang *stripper* yang tepat, mengupas *jacket* & *coating* (3–4 cm) | Mengupas terlalu pendek (<2 cm) atau menggunakan lubang pisau yang salah | Serat patah atau tergores (*microbending*). Harus mengulang langkah. |
| 3 | Pembersihan (*Cleaning*) | Mengusap serat dengan alkohol isopropil 90%+ dan tisu bebas serat (*lint-free*) | Menyentuh serat dengan tangan kosong atau tisu kasar | Serat terkontaminasi lemak/debu. *Insertion loss* meningkat drastis. |
| 4 | Pemotongan (*Cleaving*) | Memposisikan serat lurus pada *cleaver*, menutup dan memotong sudut 90° | Posisi serat miring atau menekan *blade* tidak stabil | Sudut potong > 1°. Splicer akan menolak proses *arc*. |
| 5 | Peletakan (*Alignment*) | Meletakkan serat pada kedua sisi V-groove tanpa menyentuh elektroda | Ujung serat menyentuh elektroda atau melewati batas tengah | Layar *splicer* menampilkan *error: Fiber overlap / Out of focus*. |
| 6 | Pengelasan Busur (*Arc Fusion*) | Memilih profil program (SM/MM) dan menekan tombol *Set/Fuse* | Menjalankan program MM untuk serat SM | Pelepasan busur tidak cocok; timbul gelembung udara pada titik sambung. |
| 7 | Proteksi Sambungan | Menggeser *protection sleeve* ke titik sambungan dan memanaskan di *heater* | Menggulung kabel tanpa memasang pelindung *sleeve* | Serat rapuh dan patah saat diangkat dari mesin. |

- **Logika Penalti & Skor**:
  - Nilai awal: 100 poin.
  - Setiap kesalahan mengurangi 10 poin dan menambahkan estimasi redaman (+0,15 dB sampai +0,40 dB).
  - Syarat sambungan ideal: Redaman total $\le 0,10\text{ dB}$.

### 4.4. Virtual OTDR & OPM (Optical Power Meter)
- **Output Grafik OTDR (Canvas/SVG)**:
  - Sumbu X: Jarak (km/meter), Sumbu Y: Level Daya / Redaman (dB).
  - Menampilkan kurva penurunan daya (*fiber attenuation slope*).
  - Event Marker:
    - *Event 1*: *Fresnel reflection* pada konektor awal.
    - *Event 2*: *Splice loss step* pada titik penyambungan hasil simulasi.
    - *Event 3*: Ujung serat (*end of fiber*).
- **Interaktivitas**: Siswa dapat menggeser *cursor line* pada grafik untuk membaca nilai redaman sambungan secara mandiri.

### 4.5. Modul Evaluasi & Kuis
- **Kuis Formatif (5 PG)**:
  - Soal diacak (*randomized option order*).
  - Disertai pembahasan langsung setelah submisi.
- **Latihan Diagnosis Studi Kasus (3 Soal)**:
  - Diberikan grafik hasil pengukuran redaman tinggi; siswa diminta mengidentifikasi akar penyebab kesalahan (apakah pembersihan kurang, *cleave* miring, atau kesalahan elektroda).
- **Laporan Capaian**:
  - Rekapitulasi: Skor Kuis, Nilai Kinerja Simulasi (dB Loss), dan Waktu Pengerjaan.
  - Tombol simpan/cetak ringkasan format PDF/tangkapan layar.

---

## 5. Skema Data State (localStorage)

```json
{
  "user_profile": {
    "name": "Nama Siswa",
    "class": "XI TJKT"
  },
  "progress": {
    "k3_completed": true,
    "module_1": true,
    "module_2": true,
    "simulation": {
      "completed": true,
      "attempts": 2,
      "last_loss_db": 0.08,
      "mistakes": ["cleave_angle_error"]
    },
    "quiz": {
      "score": 80,
      "total_questions": 5,
      "completed_at": "2026-10-30T10:00:00Z"
    }
  }
}
```

---

## 6. Aksesibilitas & UI/UX Standar

- **Warna & Kontras**:
  - Primary Navy: `#0F3D5C`
  - Accent Cyan: `#22D3EE`
  - Sukses/Benar: `#16A34A`
  - Bahaya/Salah: `#DC2626`
  - Kontras teks rasio minimal 4,5:1 (kategori WCAG AA).
- **Aksesibilitas**:
  - Navigasi penuh mendukung tombol `Tab` dan `Enter` (akses keyboard tanpa mouse).
  - Teks deskriptif eksplisit (*aria-label*) pada setiap ikon interaktif.

---

## 7. Rencana Tahapan Eksekusi (Roadmap Pengkodean)

- **Tahap 1: Setup Skeleton & Layout Responsif**
  - Struktur HTML semantik, CSS Grid/Flexbox shell, sistem navigasi SPA tanpa reload.
- **Tahap 2: Implementasi Modul K3 & Materi Interaktif**
  - State gatekeeper K3, visualisasi SVG struktur core-cladding + animasi refleksi internal total.
- **Tahap 3: Mesin Simulasi Prosedural 7 Langkah**
  - State machine langkah kerja, logika verifikasi aksi, dialog umpan balik visual & auditori ringkas.
- **Tahap 4: Mesin Visualisasi Virtual OTDR**
  - Render grafik Canvas/SVG pembacaan dB loss sesuai hasil akurasi langkah siswa.
- **Tahap 5: Evaluasi, Rekapitulasi & PWA/Offline Caching**
  - Integrasi kuis, generator skor, Service Worker caching untuk eksekusi luring 100%.
- **Tahap 6: QA, Validasi Lintas Peramban & Rilis Netlify**
  - Pengujian Chrome/Edge/Firefox dan Android viewports.
