# SPPE Smart Documentation System

Sistem dokumentasi mesyuarat untuk **Seksyen Prestasi Produktiviti dan Ekonomi (SPPE)**, Malaysia Productivity Corporation (MPC): minit mesyuarat rasmi (BM/EN), penjejak penyediaan minit, tindakan susulan, arkib minit dan laporan prestasi pegawai.

> **Prototaip.** Data disimpan dalam pelayar (localStorage). Bukan untuk data sulit sebenar.

**Teknologi:** React + TypeScript + Vite + Tailwind CSS, Lucide, Recharts, Whisper (transkripsi dalam peranti).

## Jalankan secara lokal
```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # build produksi -> dist/
npm run build:single   # satu fail HTML -> dist-single/index.html
```

## Terbitkan ke GitHub Pages
1. Push kod ke branch `main`.
2. Di GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` akan build dan terbitkan secara automatik.
   Laman akan berada di `https://<username>.github.io/<repo>/`.

## Log masuk
- Pilih nama anda daripada senarai pegawai SPPE.
- **Kali pertama:** cipta kata laluan sendiri (minimum 6 aksara).
- Seterusnya log masuk dengan kata laluan tersebut.
- Lupa kata laluan: Admin (Mahirah Zulhairee) set semula di **Direktori Pegawai**.

## Struktur projek
```
src/
  config/app.ts          Nama sistem, seksyen, tetapan
  types/                 Model data (User, Meeting, Minutes, ActionItem, Folder)
  data/seed.ts           Data contoh: 14 pegawai SPPE, mesyuarat, minit, tindakan
  services/              storage, auth, ai (jana minit), export (PDF/Word/CSV),
                         whisper (transkripsi), fileStore (IndexedDB), platform
  context/AppContext.tsx Keadaan aplikasi, notifikasi, kelulusan
  components/ pages/     Antara muka
  i18n.ts                Terjemahan BM/EN
scripts/prepare-models.mjs  (Pilihan) bundle model Whisper bersama build
```

## Transkripsi audio
Model Whisper dimuat turun secara automatik dari Hugging Face semasa kali pertama digunakan, kemudian disimpan dalam cache pelayar. Untuk bundle model bersama build (tanpa internet), letak fail model dalam `vendor/models/Xenova/whisper-base/` dan jalankan `npm run build:artifact`.
