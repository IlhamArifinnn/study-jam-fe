function SearchBar({ onSearch }) {
  // TODO 2.4 · Fase 2 · Modul Bab 4.2
  // 1. const [query, setQuery] = useState("")
  // 2. input WAJIB punya value={query} DAN onChange — kalau cuma value, input terkunci
  // 3. handleSubmit: e.preventDefault() -> abaikan kalau kosong -> onSearch(query)
  // Contoh kode lengkapnya ada di Modul Sesi 1, Bab 13.5.

  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="TODO 2.4 — SearchBar belum aktif"
        className="flex-1 rounded border px-3 py-2"
        readOnly
      />
      <button
        type="button"
        onClick={() => onSearch?.("batman")}
        className="rounded bg-blue-600 px-4 text-white"
      >
        Cari
      </button>
    </form>
  );
}

export default SearchBar;
