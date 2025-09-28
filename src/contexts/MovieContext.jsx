// src/contexts/MovieContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    // Load from localStorage on first render
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie) => {
    setFavourites((prev) => {
      if (!prev.some((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavourite = (id) => favourites.some((m) => m.id === id);

  return (
    <MovieContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
