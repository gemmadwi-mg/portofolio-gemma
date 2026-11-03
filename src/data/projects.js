/*
  CARA MENAMBAH PORTOFOLIO BARU
  Salin salah satu objek di bawah, taruh di paling atas array, lalu isi.
  Tidak perlu mengubah file lain.

  {
    id: 'nama-unik',               // unik, tanpa spasi
    title: 'Judul Proyek',
    role: 'Peran Anda',
    year: '2026',
    category: 'Web',               // dipakai untuk filter: Web | Data & ML | Riset | dst.
    summary: 'Satu kalimat: apa yang dibuat dan untuk siapa.',
    highlights: ['Hasil/fitur 1', 'Hasil/fitur 2'],
    stack: ['Laravel', 'Vue.js'],
    links: [{ label: 'Live demo', url: 'https://...' }, { label: 'Source code', url: 'https://github.com/...' }],
    image: '',                     // opsional: '/screenshots/nama.png' (taruh di folder public/)
  }
*/
export const projects = [
  {
    id: 'hris',
    title: 'Sistem HRIS (Human Resource Information System)',
    role: 'Full-Stack Developer',
    year: '2026',
    category: 'Web',
    summary: 'Aplikasi HR dengan portal terpisah untuk admin dan karyawan, mencakup absensi sampai payroll.',
    highlights: [
      'RESTful API Laravel untuk karyawan, absensi, lembur, cuti, izin, dan payroll, dengan RBAC.',
      'Impor data absensi dengan progress real-time, notifikasi pengajuan cuti, dan saldo cuti.',
      'Payroll memperhitungkan kelompok PTKP dan tarif TER PPh 21.',
      'Frontend Vue.js (Vite) dengan layout admin dan karyawan, dashboard, dan detail slip gaji via Axios.',
    ],
    stack: ['Laravel', 'Vue.js', 'Vite', 'Axios', 'RBAC'],
    links: [{ label: 'Live Demo', url: 'https://hris.103.197.189.156.nip.io' }],
    image: '/screenshots/hris.svg',
  },
  {
    id: 'plant-intelligence',
    title: 'Plant Performance Intelligence & AI System',
    role: 'Data Engineer & Full-Stack Developer',
    year: '2026',
    category: 'Data & ML',
    summary: 'Platform yang mengubah log operasional pabrik menjadi dashboard OEE dan prediksi kerusakan mesin.',
    highlights: [
      'ETL engine Python yang mengonsolidasi log CSV/Excel multi-format secara otomatis.',
      'Dashboard OEE interaktif (Availability, Performance, Quality) dengan alert saat OEE di bawah 80% dan ekspor laporan Excel multi-sheet.',
      'Model Random Forest untuk Predictive Maintenance dari sensor suhu dan getaran.',
      'Deploy di VPS Biznet Gio dengan Docker dan Nginx Reverse Proxy.',
    ],
    stack: ['Python', 'Streamlit', 'Pandas', 'Scikit-Learn', 'Plotly', 'Docker', 'Nginx'],
    links: [{ label: 'Live demo', url: 'https://hris.103.197.189.156.nip.io/analytics' }],
    image: '/screenshots/plant.svg',
  },
  {
    id: 'aset-tanah',
    title: 'Sistem Manajemen Aset Tanah Dinas PU-SDA Jatim',
    role: 'Backend Developer & Git Master',
    year: '2022',
    category: 'Web',
    summary: 'Sistem untuk dinas PU-SDA Jawa Timur dan 6 UPT yang menggantikan rekap manual puluhan berkas Excel.',
    highlights: [
      'Desain ERD MySQL dan RESTful API untuk data bidang tanah dan rekonsiliasi pembayaran.',
      'RBAC untuk pembagian hak akses antar unit.',
      'Deployment dengan Docker, Nginx, dan GitLab CI/CD.',
    ],
    stack: ['MySQL', 'RESTful API', 'RBAC', 'Docker', 'Nginx', 'GitLab CI/CD'],
    links: [{ label: 'Source code', url: 'https://github.com/gemmadwi-mg/pusda' }],
    image: '/screenshots/aset-tanah.svg',
  },
  {
    id: 'sentimen-genshin',
    title: 'Analisis Sentimen Ulasan Genshin Impact (PCA & SVM)',
    role: 'Peneliti Utama — Skripsi S1',
    year: '2026',
    category: 'Riset',
    summary: 'Klasifikasi sentimen positif/negatif pada 944 ulasan, dipublikasikan di jurnal SINTA 4.',
    highlights: [
      'Pipeline: preprocessing, lemmatization, TF-IDF, seleksi fitur Chi-Square, dan SMOTE.',
      'Perbandingan SVM (linear, RBF, polynomial, sigmoid) dengan dan tanpa PCA/SMOTE; evaluasi dengan confusion matrix, cross validation, dan hyperparameter tuning.',
      'Dashboard Streamlit mengikuti alur KDD untuk evaluasi dan prediksi.',
    ],
    stack: ['Python', 'NLP', 'SVM', 'PCA', 'Streamlit'],
    links: [{ label: 'Source code', url: 'https://github.com/gemmadwi-mg/Analisis-Sentimen-Ulasan-Genshin-Impact-PCA-SVM-' }],
    image: '/screenshots/sentimen.svg',
  },
]
