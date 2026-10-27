// TODO 2.1 · Fase 2 · Modul Bab 4.1
// Tulis tiga function di file ini:
//   toMovie(item)       Title/Year/Poster/imdbID  ->  title/year/poster/imdbID
//   request(params)     fetch + tangani dua kegagalan: jaringan putus, dan
//                       data.Response === "False" (OMDb menolak dengan status HTTP 200)
//   searchMovies(kata)  parameter s=, kembalikan data.Search.map(toMovie)
// Bungkus kata kunci dengan encodeURIComponent.

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// Sudah disiapkan — tinggal dipakai di dalam request().
const ERROR_MESSAGES = {
  "Movie not found!": "Film tidak ditemukan. Coba judul lain.",
  "Too many results.": "Kata kunci terlalu umum. Coba lebih spesifik.",
  "Invalid API key!": "API key tidak valid. Periksa file .env kamu.",
  "Request limit reached!": "Batas request harian OMDb sudah tercapai.",
};

export const searchMovies = async (keyword) => {
  console.warn("TODO 2.1 belum dikerjakan.", { keyword, API_KEY, BASE_URL, ERROR_MESSAGES });
  return [];
};

// Bonus, untuk tantangan halaman detail film (Modul Bab 6.3):
// getMovieDetail(imdbID) memakai parameter i= dan plot=full.
