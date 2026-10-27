function Navbar() {
  // TODO 3.7 · Fase 3 · Modul Bab 5.6
  // const { watchlist } = useWatchlist();   // dari "../context/WatchlistContext"

  return (
    <nav className="flex items-center justify-between border-b px-6 py-3">
      {/* TODO 1.2 · Fase 1 · Modul Bab 3.3
          Ganti ketiga <a href="..."> di bawah jadi <Link to="..."> dari "react-router". */}
      <a href="/" className="flex items-center gap-2 text-lg font-bold">
        MovieApp
      </a>

      <div className="flex items-center gap-4 text-sm">
        <a href="/">Cari Film</a>

        {/* TODO 3.7 — tampilkan jumlahnya: My Watchlist ({watchlist.length}) */}
        <a href="/watchlist">My Watchlist</a>
      </div>
    </nav>
  );
}

export default Navbar;
