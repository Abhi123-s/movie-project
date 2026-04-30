import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, searchMovies, selectMovies, selectMoviesLoading, selectMoviesError } from "../store/moviesSlice";
import '../css/Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectMoviesLoading);
  const error = useSelector(selectMoviesError);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    dispatch(searchMovies(searchQuery));
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
