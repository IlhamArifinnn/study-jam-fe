// File sementara. Tujuannya cuma satu: membuktikan bahwa starter project kamu
// sudah jalan (React + Vite + Tailwind aktif) sebelum hands-on dimulai.
// Ini checkpoint Fase 0 — Modul Sesi 2, Bab 2.5.
//
// File ini akan kamu hapus di TODO 1.4.

const FASE = [
  { kode: "Fase 1", judul: "Routing dan Navbar", todo: "TODO 1.1 - 1.4", bab: "Bab 03", menit: 15 },
  { kode: "Fase 2", judul: "Pencarian film dari OMDb", todo: "TODO 2.1 - 2.6", bab: "Bab 04", menit: 45 },
  { kode: "Fase 3", judul: "Watchlist dengan Context + localStorage", todo: "TODO 3.1 - 3.7", bab: "Bab 05", menit: 45 },
];

function WelcomeScreen() {
  const adaApiKey = Boolean(import.meta.env.VITE_OMDB_API_KEY);

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold">Starter project siap 🎉</h1>
      <p className="mt-2 text-gray-600">
        React, Vite, dan Tailwind sudah aktif. Kalau tulisan ini tampil rapi dan
        berwarna, setup kamu benar.
      </p>

      <div
        className={`mt-6 rounded-lg border p-4 text-sm ${
          adaApiKey
            ? "border-green-300 bg-green-50 text-green-800"
            : "border-amber-300 bg-amber-50 text-amber-800"
        }`}
      >
        {adaApiKey ? (
          <>
            <strong>VITE_OMDB_API_KEY terbaca.</strong> Kamu siap masuk Fase 1.
          </>
        ) : (
          <>
            <strong>VITE_OMDB_API_KEY belum terbaca.</strong> Salin{" "}
            <code className="rounded bg-amber-100 px-1">.env.example</code> jadi{" "}
            <code className="rounded bg-amber-100 px-1">.env</code>, isi API key
            OMDb kamu, lalu restart server dev (Ctrl+C lalu{" "}
            <code className="rounded bg-amber-100 px-1">npm run dev</code>).
          </>
        )}
      </div>

      <h2 className="mt-8 text-lg font-semibold">Urutan pengerjaan</h2>
      <p className="mt-1 text-sm text-gray-500">
        Nomor bab mengacu ke <strong>Modul Sesi 2 (Offline)</strong>.
      </p>
      <ol className="mt-3 space-y-2">
        {FASE.map((f) => (
          <li
            key={f.kode}
            className="flex items-baseline justify-between gap-4 rounded-lg border p-3"
          >
            <span>
              <span className="font-semibold">{f.kode}</span> — {f.judul}
              <br />
              <code className="text-xs text-gray-500">{f.todo}</code>
              <span className="text-xs text-gray-500"> · modul {f.bab}</span>
            </span>
            <span className="shrink-0 text-sm text-gray-500">{f.menit} menit</span>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-sm text-gray-500">
        Cari komentar <code className="rounded bg-gray-100 px-1">TODO</code> di
        folder <code className="rounded bg-gray-100 px-1">src/</code> dan kerjakan
        berurutan. Di VS Code: Ctrl+Shift+F lalu ketik <code>TODO</code>. Daftar
        lengkapnya ada di <code className="rounded bg-gray-100 px-1">TODO.md</code>.
      </p>
    </main>
  );
}

export default WelcomeScreen;
