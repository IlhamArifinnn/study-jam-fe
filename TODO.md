# Peta TODO ↔ Modul

Satu lembar yang memetakan **setiap `TODO` di starter** ke **bab di modul**, dan sebaliknya.

Semua nomor bab mengacu ke **Modul Sesi 2 (Offline)**, kecuali yang ditandai *Sesi 1*.

## Cara membaca TODO di kode

Setiap `TODO` ditaruh **tepat di tempat kodenya ditulis**, bukan menumpuk di atas file, dan bentuknya selalu sama:

```jsx
// TODO 2.6 · Fase 2 · Modul Bab 4.3
// 1. ...
// 2. ...
```

Baris pertama memberi tahu tiga hal sekaligus: nomor TODO, **fase mana yang mengerjakannya**, dan bab modul yang menjelaskannya. Kalau kamu sedang di Fase 1 lalu menemukan blok bertanda `Fase 3`, lewati saja — belum waktunya.

Penjelasan "kenapa"-nya sengaja tidak diulang di kode. Itu tugas modul; kode hanya memberi daftar langkahnya.

---

## Fase 0 — Verifikasi Persiapan · 15 menit · Modul Bab 02

Belum ada kode yang ditulis. Yang dicek:

| Yang dicek | Modul |
| --- | --- |
| `npm run dev` jalan, halaman "Starter project siap" terbuka | Bab 2.1 |
| Kotak status API key berwarna hijau | Bab 2.1 |
| Link uji OMDb menampilkan JSON | Bab 2.1 |
| Tur struktur folder | Bab 2.2 |
| Console, React DevTools, dan tab Application sudah dibuka | Bab 2.3 |

**Checkpoint (Bab 2.5):** keempat hal di atas beres dan Console tidak menampilkan error merah.

---

## Fase 1 — Routing dan Navbar · 15 menit · Modul Bab 03

| TODO | File | Yang dikerjakan | Modul |
| --- | --- | --- | --- |
| **1.1** | `src/main.jsx` | Bungkus `<App />` dengan `<BrowserRouter>` | Bab 3.2 |
| **1.2** | `src/components/Navbar.jsx` | Ganti `<a href>` jadi `<Link to>` | Bab 3.3 |
| **1.3** | `src/pages/HomePage.jsx`<br>`src/pages/WatchlistPage.jsx` | Tidak ada kode — kedua halaman sudah siap, tinggal dipasang di TODO 1.4 | Bab 3.4 |
| **1.4** | `src/App.jsx` | Pasang `Routes`, `Route`, rute `*`, hapus `WelcomeScreen` | Bab 3.5 |

**Checkpoint (Bab 3.6):** menu Navbar menukar halaman tanpa layar berkedip, dan `/asdf` kembali ke beranda.

---

## Fase 2 — Pencarian Film dari OMDb · 45 menit · Modul Bab 04

| TODO | File | Yang dikerjakan | Modul |
| --- | --- | --- | --- |
| **2.1** | `src/services/omdb.js` | `toMovie`, `request`, `searchMovies` | Bab 4.1 |
| **2.2** | `src/components/MovieCard.jsx` | Kartu film + penanganan poster `"N/A"` | Bab 4.2 |
| **2.3** | `src/components/MovieList.jsx` | `.map()`, `key`, props `renderAction` | Bab 4.2 |
| **2.4** | `src/components/SearchBar.jsx` | Controlled input + `preventDefault` | Bab 4.2 |
| **2.5** | `src/components/Hero.jsx` | Banner pembungkus SearchBar | Bab 4.2 |
| **2.6** | `src/pages/HomePage.jsx` | State, `handleSearch`, empat kondisi tampilan | Bab 4.3 |

> Bab 4.2 mencakup TODO 2.2 sampai 2.5 sekaligus. Khusus **2.4**, contoh kode lengkapnya ada di *Sesi 1* Bab 13.5 — tapi langkahnya tetap bagian dari Bab 4.2.

**Checkpoint (Bab 4.4):** mengetik "batman" menampilkan kartu, "Memuat..." sempat terlihat, kata acak memunculkan pesan error yang ramah.

---

## Fase 3 — Watchlist dengan Context dan localStorage · 45 menit · Modul Bab 05

| TODO | File | Yang dikerjakan | Modul |
| --- | --- | --- | --- |
| **3.1** | `src/context/WatchlistContext.jsx` | `loadWatchlist` dari localStorage | Bab 5.2 |
| **3.2** | `src/context/WatchlistContext.jsx` | `useState` + `useEffect` penyimpan | Bab 5.2 |
| **3.3** | `src/context/WatchlistContext.jsx` | `isSaved`, `addMovie`, `removeMovie` | Bab 5.2 |
| **3.4** | `src/main.jsx` | Bungkus dengan `<WatchlistProvider>` | Bab 5.3 |
| **3.5** | `src/pages/HomePage.jsx` | Tombol "+ Watchlist" lewat `renderAction` | Bab 5.4 |
| **3.6** | `src/pages/WatchlistPage.jsx` | Daftar simpanan + tombol Hapus | Bab 5.5 |
| **3.7** | `src/components/Navbar.jsx` | Angka jumlah watchlist | Bab 5.6 |

**Checkpoint (Bab 5.8):** simpan film, **refresh halaman**, watchlist masih ada. Cek di `F12` → Application → Local Storage.

---

## Penutup · 10 menit · Modul Bab 06

Tidak ada TODO. Isinya recap alur data (Bab 6.1), tiga error tersering (Bab 6.2), tantangan lanjutan (Bab 6.3), dan cara mem-publish ke Vercel (Bab 6.4).

---

## Urutan menyentuh file

Diurutkan dari **TODO pertama** yang menyentuh tiap file:

| Urutan | File | TODO |
| --- | --- | --- |
| 1 | `src/main.jsx` | 1.1 → lalu 3.4 |
| 2 | `src/components/Navbar.jsx` | 1.2 → lalu 3.7 |
| 3 | `src/pages/HomePage.jsx` | 1.3 → 2.6 → lalu 3.5 |
| 4 | `src/pages/WatchlistPage.jsx` | 1.3 → lalu 3.6 |
| 5 | `src/App.jsx` | 1.4 |
| 6 | `src/services/omdb.js` | 2.1 |
| 7 | `src/components/MovieCard.jsx` | 2.2 |
| 8 | `src/components/MovieList.jsx` | 2.3 |
| 9 | `src/components/SearchBar.jsx` | 2.4 |
| 10 | `src/components/Hero.jsx` | 2.5 |
| 11 | `src/context/WatchlistContext.jsx` | 3.1, 3.2, 3.3 |

> 💡 **Untuk pemateri.** Empat file disentuh lebih dari sekali: `HomePage.jsx` **tiga kali** (1.3 → 2.6 → 3.5), lalu `main.jsx`, `Navbar.jsx`, dan `WatchlistPage.jsx` masing-masing **dua kali**. Ingatkan peserta bahwa ini normal — aplikasi dibangun berlapis, bukan file per file sampai selesai. Di TODO 1.3 kedua halaman belum ditulis apa-apa, hanya dipasang sebagai rute.

---

## Kalau peserta tertinggal

Prioritas kalau waktu menipis:

1. **Fase 1 dan 2 wajib selesai.** Tanpa keduanya tidak ada aplikasi yang jalan.
2. **Fase 3 bisa sebagian.** Yang penting TODO 3.1–3.5 (Context dan tombol simpan). TODO 3.6 dan 3.7 bisa jadi pekerjaan rumah.
3. **Komponen tampilan (2.2, 2.3, 2.5) boleh disalin** dari modul kalau peserta tertinggal — yang penting mereka paham 2.1 dan 2.6, karena di situlah logikanya.
