import "../css/MovieCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite, selectIsFavourite } from "../store/favouritesSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const isFav = useSelector((state) => selectIsFavourite(state, movie.id));

  const toggleFavourite = () => {
    if (isFav) {
      dispatch(removeFavourite(movie.id));
    } else {
      dispatch(addFavourite(movie));
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${isFav ? "active" : ""}`}
            onClick={toggleFavourite}
          >
            {isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
