# Movie App — Starter Project

Starter untuk **Study Jam FE: Frontend Web Development Lab** — GDGoC STT Terpadu Nurul Fikri.

Struktur folder, konfigurasi Vite, dan Tailwind sudah jadi. Tugasmu mengisi 17 komentar `TODO` secara berurutan sampai Movie App-nya hidup.

Repo ini dipakai bersama **Modul Sesi 2 (Offline)**. Setiap `TODO` menyebut nomor babnya, dan setiap langkah di modul menyebut nomor `TODO`-nya — jadi kamu tidak akan tersesat di antara keduanya.

---

## Persiapan (kerjakan sebelum hari-H)

Langkah lengkapnya ada di **Modul Sesi 1, Bab 04**. Ringkasnya:

```bash
# 1. ambil project
git clone <URL_REPO_INI>
cd movie-app-starter

# 2. pasang dependency
npm install

# 3. siapkan API key OMDb
cp .env.example .env
# buka .env, isi VITE_OMDB_API_KEY dengan key kamu

# 4. jalankan
npm run dev
```

Buka `http://localhost:5173`. Kalau muncul halaman **"Starter project siap"** berwarna dengan kotak hijau, setup kamu benar.

Belum punya API key? Daftar gratis di [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx), pilih **FREE**, lalu **klik link aktivasi di email** — tanpa itu key tidak berfungsi.

> Setiap kali mengubah `.env`, restart server dev (`Ctrl+C` lalu `npm run dev`). File `.env` hanya dibaca saat server dinyalakan.

---

## Cara mengerjakan

Cari semua komentar `TODO` di folder `src/`, lalu kerjakan **berurutan**: 1.1 → 1.2 → … → 3.7.

Di VS Code: `Ctrl+Shift+F` (Mac: `Cmd+Shift+F`), ketik `TODO`.

Setiap `TODO` ada **tepat di tempat kodenya ditulis**, dan baris pertamanya selalu berbentuk:

```jsx
// TODO 2.6 · Fase 2 · Modul Bab 4.3
```

Jadi kamu langsung tahu nomornya, **fase mana yang mengerjakannya**, dan bab mana yang menjelaskannya. Menemukan blok bertanda `Fase 3` saat kamu masih di Fase 1? Lewati — belum waktunya.

**Peta lengkapnya ada di [`TODO.md`](./TODO.md)** — 17 TODO, filenya, dan bab modulnya, dalam satu tabel.

| Fase | TODO | Modul Sesi 2 | Durasi |
| --- | --- | --- | --- |
| 0 — Verifikasi persiapan | — | Bab 02 | 15 menit |
| 1 — Routing dan Navbar | 1.1 – 1.4 | Bab 03 | 15 menit |
| 2 — Pencarian film dari OMDb | 2.1 – 2.6 | Bab 04 | 45 menit |
| 3 — Watchlist dengan Context | 3.1 – 3.7 | Bab 05 | 45 menit |
| Penutup | — | Bab 06 | 10 menit |

---

## Struktur folder

```
src/
├── components/    potongan UI yang dipakai ulang (Navbar, MovieCard, SearchBar)
├── context/       state global yang dipakai banyak halaman (WatchlistContext)
├── pages/         satu file per halaman (HomePage, WatchlistPage)
├── services/      kode yang berbicara dengan dunia luar (OMDb API)
├── App.jsx        daftar rute
├── main.jsx       titik masuk aplikasi
└── index.css      import Tailwind
```

`src/components/WelcomeScreen.jsx` hanya penanda bahwa setup berhasil. Hapus saat mengerjakan TODO 1.4.

---

## Kalau mentok

1. Buka Console (`F12`) dan baca **baris pertama** pesan error.
2. Cek **Modul Sesi 2, Bab 08 — Troubleshooting Kode**, atau **Modul Sesi 1, Bab 19** untuk masalah instalasi.
3. Salin pesan error ke Google, tambahkan kata "react".
4. Tanya di grup peserta: sertakan potongan kode, pesan error lengkap, dan apa yang sudah dicoba.

## Stack

React 19 · Vite 8 · Tailwind CSS 4 · React Router 8 · Lucide React · OMDb API
