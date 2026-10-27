function MovieCard({ title, poster, year, children }) {
  // TODO 2.2 · Fase 2 · Modul Bab 4.2
  // 1. Poster bernilai "N/A" -> jangan render <img>, tampilkan kotak "Tidak ada poster"
  // 2. Render title dan year
  // 3. Render {children} di bagian bawah kartu (tombol dikirim dari halaman)
  // Kelas: kartu "flex flex-col overflow-hidden rounded-lg shadow",
  //        poster "aspect-[2/3] w-full object-cover", isi "flex flex-1 flex-col gap-1 p-3"

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-dashed p-3">
      <p className="text-sm text-gray-400">TODO 2.2 — MovieCard</p>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{year}</p>
      <p className="truncate text-xs text-gray-400">{poster}</p>
      {children}
    </div>
  );
}

export default MovieCard;
