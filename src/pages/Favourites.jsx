import { useSelector } from "react-redux";
import { selectFavourites } from "../store/favouritesSlice";
import MovieCard from "../components/MovieCard";
import "../css/Favourites.css";

function Favourite() {
  const favourites = useSelector(selectFavourites);

  if (favourites.length === 0) {
    return (
      <div className="favourites-page">
        <div className="favourites-empty">
          <h2>No favourite movies yet</h2>
          <p>Start adding movies to your favourites!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-page">
      <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
