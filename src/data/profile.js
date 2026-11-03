// Data diri & CV. Edit di sini, tampilan ikut berubah.
export const profile = {
  name: 'Gemma Dwi Prasetya',
  role: 'Backend & Full-Stack Developer',
  location: 'Tuban, Jawa Timur',
  email: 'gemmaameg@gmail.com',
  phone: '+62 813-3207-7753',
  linkedin: 'https://id.linkedin.com/in/gemma-prasetya-ba1a3822a',
  github: 'https://github.com/gemmadwi-mg',
  cvFile: '', // taruh PDF di folder public/ lalu isi, mis. '/CV_Gemma.pdf'
  summary:
    'Lulusan S1 Teknik Informatika Unesa (IPK 3.77). Saya membangun RESTful API, mengelola database, merancang hak akses (RBAC), dan men-deploy aplikasi dengan Docker, Nginx, dan GitLab CI/CD. Selain web, saya juga mengerjakan data pipeline (ETL), dashboard KPI, dan Machine Learning.',
  stats: [
    { value: '3.77', label: 'IPK S1 Teknik Informatika' },
    { value: 'SINTA 4', label: 'Penulis utama jurnal terakreditasi' },
    { value: '4', label: 'Proyek & pengalaman utama' },
  ],
}

export const skills = [
  { group: 'Pemrograman & framework', items: ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'Python', 'Streamlit', 'HTML/CSS'] },
  { group: 'Database & infrastruktur', items: ['MySQL', 'PostgreSQL', 'Docker', 'Nginx', 'Linux/VPS', 'Git/GitHub', 'GitLab CI/CD', 'RESTful API', 'RBAC'] },
  { group: 'Data & Machine Learning', items: ['Data Pipeline (ETL)', 'Pandas', 'NumPy', 'Scikit-Learn', 'Plotly', 'SQL'] },
  { group: 'Tools & metodologi', items: ['Agile/Scrum', 'Trello', 'ERD Design', 'Dokumentasi teknis'] },
]

export const experience = [
  {
    org: 'SEAL (Social Economic Accelerator Lab)',
    place: 'Kab. Malang, Jawa Timur',
    role: 'Backend Developer & Git Master — Magang Kampus Merdeka',
    period: 'Agustus 2022 – Desember 2022',
    points: [
      'Membangun Sistem Manajemen Aset Tanah Dinas PU-SDA Jawa Timur & 6 UPT untuk mengotomasi rekap dari puluhan berkas Excel manual.',
      'Menyusun ERD database MySQL dan RESTful API untuk data bidang tanah, rekonsiliasi pembayaran, dan RBAC.',
      'Mengelola repositori sebagai Git Master; mengonfigurasi deployment Docker, Nginx, dan GitLab CI/CD; menerapkan Agile Scrum, PRD, dan Customer Journey Map.',
    ],
  },
]

export const education = {
  school: 'Universitas Negeri Surabaya (UNESA)',
  place: 'Kota Surabaya, Jawa Timur',
  degree: 'S1 Teknik Informatika',
  period: '2019 – 2026',
  gpa: '3.77 / 4.00',
}

export const achievements = [
  'Penulis utama artikel ilmiah di jurnal terakreditasi SINTA 4 (2026)',
  'Pelatihan Full-Stack Laravel 12 & Vue 3 Developer — Buildwithangga (2026)',
  'Pelatihan Ebook Laravel 12, Midtrans & Filament Web Course — Buildwithangga (2026)',
]
