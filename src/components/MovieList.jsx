import MovieCard from "./MovieCard";

function MovieList({ movies, renderAction }) {
  // TODO 2.3 · Fase 2 · Modul Bab 4.2
  // 1. movies.map() -> satu <MovieCard /> per film
  // 2. key={movie.imdbID}, bukan index
  // 3. Sisipkan {renderAction && renderAction(movie)} sebagai children kartu

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <p className="col-span-full text-sm text-gray-400">
        TODO 2.3 — MovieList menerima {movies?.length ?? 0} film
      </p>
      <MovieCard title="(belum dirender)" year="" poster="">
        {renderAction ? "(renderAction belum dipakai)" : null}
      </MovieCard>
    </div>
  );
}

export default MovieList;
