window.FiberQuiz = {
  questions: [
    {
      id: 1,
      question: 'Berapakah batas standar redaman sambungan (insertion loss) ideal hasil fusion splicing untuk serat optik singlemode menurut standar teknis telekomunikasi?',
      options: [
        { id: 'a', text: '≤ 0.10 dB (ideal ≤ 0.05 dB)', isCorrect: true },
        { id: 'b', text: 'Antara 0.50 dB s.d. 1.20 dB', isCorrect: false },
        { id: 'c', text: 'Tidak boleh kurang dari 2.0 dB', isCorrect: false },
        { id: 'd', text: 'Bebas asalkan cahaya laser masih tembus', isCorrect: false }
      ],
      explanation: 'Standar ITU-T G.652 dan Telkom mensyaratkan redaman penyambungan fusion splicing singlemode idealnya ≤ 0.05 dB dan maksimal toleransi lab ≤ 0.10 dB per titik sambung.'
    },
    {
      id: 2,
      question: 'Mengapa cairan pembersih yang wajib digunakan pada prosedur pembersihan serat optik adalah alkohol isopropil dengan kemurnian minimal 90%?',
      options: [
        { id: 'a', text: 'Agar cepat menguap dan tidak meninggalkan residu air/minyak pada kaca silika', isCorrect: true },
        { id: 'b', text: 'Karena alkohol membuat kaca menjadi lentur dan tidak mudah patah', isCorrect: false },
        { id: 'c', text: 'Untuk melarutkan inti serat agar menyatu saat di-cleave', isCorrect: false },
        { id: 'd', text: 'Sebagai bahan bakar pemicu busur elektroda', isCorrect: false }
      ],
      explanation: 'Alkohol isopropil (IPA) 90%+ menguap dengan sangat cepat tanpa meninggalkan sisa mineral atau lapisan minyak yang dapat membiaskan cahaya di dalam inti serat.'
    },
    {
      id: 3,
      question: 'Apa fungsi utama dari sudut potong tegak lurus 90° (toleransi sudut cleave < 1.0°) pada tahap pemotongan (cleaving)?',
      options: [
        { id: 'a', text: 'Memastikan kedua penampang serat bertemu rata tanpa celah udara saat dilebur', isCorrect: true },
        { id: 'b', text: 'Menambah diameter cladding agar sesuai dengan V-groove', isCorrect: false },
        { id: 'c', text: 'Menghilangkan lapisan jacket luar secara otomatis', isCorrect: false },
        { id: 'd', text: 'Mengubah serat singlemode menjadi multimode', isCorrect: false }
      ],
      explanation: 'Jika sudut cleave miring (> 1.0°), permukaan serat tidak dapat melebur secara homogen sehingga terjadi rongga udara (air gap) dan redaman meningkat drastis.'
    },
    {
      id: 4,
      question: 'Pada struktur penampang kabel fiber optik, syarat terjadinya fenomena Total Internal Reflection (TIR) yang benar adalah:',
      options: [
        { id: 'a', text: 'Indeks bias core (n1) harus lebih besar dari indeks bias cladding (n2)', isCorrect: true },
        { id: 'b', text: 'Indeks bias cladding (n2) harus lebih besar dari indeks bias core (n1)', isCorrect: false },
        { id: 'c', text: 'Kedua indeks bias harus bernilai sama persis', isCorrect: false },
        { id: 'd', text: 'Sudut datang cahaya harus lebih kecil dari sudut kritis', isCorrect: false }
      ],
      explanation: 'Sesuai hukum Snellius, pemantulan internal total hanya terjadi saat gelombang merambat dari medium lebih rapat (n1 core ≈ 1.465) menuju medium kurang rapat (n2 cladding ≈ 1.450) dengan sudut datang melampaui sudut kritis.'
    },
    {
      id: 5,
      question: 'Mengapa serpihan sisa potongan serat optik (fiber scraps) wajib langsung dibuang ke wadah khusus tertutup (fiber disposal bin)?',
      options: [
        { id: 'a', text: 'Serpihan kaca mikroskopis transparan berbahaya bila menusuk kulit atau terhirup', isCorrect: true },
        { id: 'b', text: 'Agar serpihan dapat didaur ulang menjadi konektor baru', isCorrect: false },
        { id: 'c', text: 'Untuk mencegah korsleting arus listrik pada baterai splicer', isCorrect: false },
        { id: 'd', text: 'Serat kaca mudah terbakar jika terkena udara terbuka', isCorrect: false }
      ],
      explanation: 'Pecahan serat optik sangat kecil, bening, dan tajam. Jika masuk ke bawah kulit atau pembuluh darah, pecahan kaca sulit dikeluarkan dan berpotensi menyebabkan infeksi serius.'
    }
  ],

  caseStudies: [
    {
      id: 'case_1',
      title: 'Studi Kasus 1: Redaman Tinggi & Refleksi di Titik Sambung',
      scenario: 'Seorang teknisi menguji kabel fiber sepanjang 3 km dengan OTDR. Pada titik penyambungan km 1.5, grafik OTDR menunjukkan penurunan daya tiba-tiba sebesar -0.45 dB disertai refleksi abnormal. Hasil pengamatan fisik menunjukkan sebelum disambung, teknisi menyeka serat bolak-balik dengan tisu dapur biasa.',
      question: 'Apakah akar penyebab teknis dari tingginya redaman pada kasus ini?',
      options: [
        { id: 'a', text: 'Kontaminasi partikel debu dan serat tisu kasar yang tertinggal di penampang kaca', isCorrect: true },
        { id: 'b', text: 'Tegangan baterai splicer terlalu tinggi', isCorrect: false },
        { id: 'c', text: 'Kabel optik terlalu panjang untuk diuji dengan OTDR', isCorrect: false }
      ],
      explanation: 'Menyeka dengan tisu dapur biasa dan bolak-balik meninggalkan serat selulosa dan minyak. Kontaminan ini terbakar saat arc fusion dan menghalangi inti transmisi.'
    },
    {
      id: 'case_2',
      title: 'Studi Kasus 2: Penolakan Proses Peleburan oleh Mesin Splicer',
      scenario: 'Saat tombol "Set" ditekan pada mesin fusion splicer, layar monitor menampilkan pesan kesalahan "Right Fiber Cleave Error: 2.7°" dan proses pelepasan busur listrik tidak mau berjalan.',
      question: 'Tindakan perbaikan prosedural apa yang harus dilakukan oleh siswa?',
      options: [
        { id: 'a', text: 'Buka klem cleaver, periksa kebersihan bantalan karet, posisikan serat tegak lurus 90°, lalu lakukan pemotongan ulang', isCorrect: true },
        { id: 'b', text: 'Paksa menekan tombol Set berulang-ulang sampai mesin mau melebur', isCorrect: false },
        { id: 'c', text: 'Teteskan minyak pelumas pada elektroda splicer', isCorrect: false }
      ],
      explanation: 'Splicer otomatis memverifikasi sudut potong. Jika > 1.0°, serat harus dikeluarkan, dikupas kembali sedikit, dibersihkan ulang, dan dipotong dengan precision cleaver yang stabil.'
    },
    {
      id: 'case_3',
      title: 'Studi Kasus 3: Gelembung Udara (Bubble) Pasca Pengelasan',
      scenario: 'Penyambungan kabel drop core Singlemode (G.652) selesai dilakukan, namun pada monitor kamera splicer tampak lingkaran gelembung udara transparan tepat di garis sambungan. Redaman terbaca 0.38 dB.',
      question: 'Kesalahan konfigurasi apa yang paling mungkin terjadi pada mesin splicer?',
      options: [
        { id: 'a', text: 'Pengaturan program pengelasan keliru memilih profil MM (Multimode) yang memberikan panas berlebih', isCorrect: true },
        { id: 'b', text: 'Protection sleeve dipanaskan terlalu lama di heater', isCorrect: false },
        { id: 'c', text: 'Penggunaan kacamata pelindung yang terlalu gelap', isCorrect: false }
      ],
      explanation: 'Setiap tipe serat membutuhkan energi busur (arc power) dan durasi berbeda. Profil Multimode melepaskan panas lebih tinggi sehingga kaca silika singlemode mendidih dan membentuk rongga udara.'
    }
  ],

  userAnswers: {},
  userCaseAnswers: {},
  isSubmitted: false,

  selectAnswer(qId, optionId) {
    this.userAnswers[qId] = optionId;
  },

  selectCaseAnswer(caseId, optionId) {
    this.userCaseAnswers[caseId] = optionId;
  },

  submitEvaluation() {
    let correctCount = 0;
    this.questions.forEach(q => {
      const selected = this.userAnswers[q.id];
      const correctOpt = q.options.find(o => o.isCorrect);
      if (selected === correctOpt.id) {
        correctCount += 1;
      }
    });

    const formatScore = Math.round((correctCount / this.questions.length) * 100);

    let caseCorrectCount = 0;
    this.caseStudies.forEach(c => {
      const selected = this.userCaseAnswers[c.id];
      const correctOpt = c.options.find(o => o.isCorrect);
      if (selected === correctOpt.id) {
        caseCorrectCount += 1;
      }
    });

    const caseScore = Math.round((caseCorrectCount / this.caseStudies.length) * 100);

    this.isSubmitted = true;

    window.FiberStore.recordQuizResult({
      score: formatScore,
      total: this.questions.length,
      answers: this.userAnswers,
      case_answers: this.userCaseAnswers,
      case_score: caseScore
    });

    window.FiberStore.markModuleComplete('quiz');
  }
};
