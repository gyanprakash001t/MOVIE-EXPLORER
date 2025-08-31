import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/trendingMovies";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch trending movies when page loads
  useEffect(() => {
    const loadTrending = async () => {
      setLoading(true);
      const data = await getTrendingMovies();
      setMovies(data);
      setLoading(false);
    };
    loadTrending();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔥 Trending Movies</h1>

      {loading && <p>Loading...</p>}

      {!loading && movies.length > 0 && <MovieList movies={movies} />}

      {!loading && movies.length === 0 && <p>No movies found</p>}
    </div>
  );
}

export default Home;
