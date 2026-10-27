import SearchBar from "./SearchBar";

function Hero({ onSearch }) {
  // TODO 2.5 · Fase 2 · Modul Bab 4.2
  // Lengkapi banner-nya: judul "Cari Film Favoritmu", satu kalimat keterangan,
  // lalu bungkus <SearchBar /> dengan <div className="mx-auto max-w-md">.
  // Kelas: judul "mb-2 text-3xl font-bold", keterangan "mb-4 text-gray-500".

  return (
    <section className="mb-8 text-center">
      <SearchBar onSearch={onSearch} />
    </section>
  );
}

export default Hero;
