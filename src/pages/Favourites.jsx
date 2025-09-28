import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourite() {
  const { favourites } = useMovieContext();

  if (favourites.length === 0) {
    return (
      <div className="favourites-empty">
        <h2>No favourite movies yet</h2>
        <p>Start adding movies to your favourites!</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {favourites.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Favourite;
