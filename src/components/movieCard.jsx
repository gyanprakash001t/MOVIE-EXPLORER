function MovieCard({ movie }) {
  const imgUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/200";

  return (
    <div className="border rounded-lg shadow p-3 hover:scale-105 transition">
      <img
        src={imgUrl}
        alt={movie.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p className="text-gray-500">{movie.release_date?.split("-")[0]}</p>
    </div>
  );
}

export default MovieCard;
