import MovieCard from "./movieCard";

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        // <MovieCard key={movie.id} movie={movie} />
        <MovieCard key={`${movie.id}-${movie.release_date}`} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
