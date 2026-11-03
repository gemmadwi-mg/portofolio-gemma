# Portofolio Gemma Dwi Prasetya (Vue 3 + Vite + Tailwind CSS v4)

## Menjalankan
Butuh Node.js 18+ (cek: `node -v`).

    npm install
    npm run dev        # buka http://localhost:5173

## Build untuk hosting
    npm run build      # hasil ada di folder dist/
    npm run preview    # coba hasil build secara lokal

Folder `dist/` bisa di-upload ke Netlify, Vercel, GitHub Pages, atau VPS (Nginx).

## Menambah portofolio baru
Buka `src/data/projects.js`, salin salah satu objek proyek ke paling atas array, lalu isi.
Filter kategori dan kartu akan muncul otomatis.
Screenshot: taruh di `public/screenshots/` lalu isi `image: '/screenshots/nama.png'`.

## Mengubah data diri
Edit `src/data/profile.js` (kontak, keahlian, pengalaman, pendidikan).
Untuk tombol "Unduh CV": taruh PDF di `public/` lalu isi `cvFile`.

## Gambar proyek
Gambar di `public/screenshots/*.svg` hanyalah ilustrasi antarmuka. Ganti dengan screenshot asli
(PNG/JPG/WebP, rasio sekitar 16:10) lalu ubah `image` di `src/data/projects.js`.
