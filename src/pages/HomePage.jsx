// TODO 1.3 · Fase 1 · Modul Bab 3.4 — tidak ada kode yang ditulis di sini.
// Halaman ini sudah siap; kamu hanya memasangnya sebagai rute di App.jsx (TODO 1.4).

function HomePage() {
  // TODO 2.6 · Fase 2 · Modul Bab 4.3
  // 1. State: movies [], loading false, error null, searched false
  // 2. handleSearch(keyword): loading on -> searchMovies(keyword) -> setMovies / setError,
  //    loading off di blok finally
  // 3. Render <Hero onSearch={handleSearch} />
  // 4. Urutan pengecekan tampilan: loading -> error -> belum mencari -> data

  // TODO 3.5 · Fase 3 · Modul Bab 5.4
  // 1. const { isSaved, addMovie } = useWatchlist();
  // 2. Kirim props renderAction ke <MovieList>: "✓ Tersimpan" kalau isSaved(movie.imdbID),
  //    selain itu tombol "+ Watchlist" yang memanggil addMovie(movie)

  return <h1 className="p-6 text-xl">Home</h1>;
}

export default HomePage;
