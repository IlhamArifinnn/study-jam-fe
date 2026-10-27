import { createContext, useContext } from "react";

const STORAGE_KEY = "movie-app-watchlist";

const WatchlistContext = createContext(null);

// TODO 3.1 · Fase 3 · Modul Bab 5.2
// loadWatchlist(): baca STORAGE_KEY -> JSON.parse -> array.
// Kembalikan [] kalau belum ada isinya. Bungkus try/catch.

export const WatchlistProvider = ({ children }) => {
  // TODO 3.2 · Fase 3 · Modul Bab 5.2
  // 1. const [watchlist, setWatchlist] = useState(loadWatchlist)   <- tanpa tanda kurung
  // 2. useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist)), [watchlist])

  // TODO 3.3 · Fase 3 · Modul Bab 5.2
  // isSaved(imdbID)      -> .some()
  // addMovie(movie)      -> [{ ...movie, addedAt: Date.now() }, ...prev], lewati kalau sudah ada
  // removeMovie(imdbID)  -> .filter()
  // Semuanya pakai setWatchlist((prev) => ...). Jangan push atau splice.

  const nilaiSementara = {
    watchlist: [],
    isSaved: () => false,
    addMovie: () => console.warn("TODO 3.3 — addMovie belum dikerjakan"),
    removeMovie: () => console.warn("TODO 3.3 — removeMovie belum dikerjakan"),
  };

  return (
    <WatchlistContext.Provider value={nilaiSementara}>
      {children}
    </WatchlistContext.Provider>
  );
};

// Custom hook: komponen lain cukup menulis const { watchlist, addMovie } = useWatchlist();
export const useWatchlist = () => useContext(WatchlistContext);

export { STORAGE_KEY };
