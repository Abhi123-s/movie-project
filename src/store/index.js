import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';
import moviesReducer from './moviesSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    movies: moviesReducer,
  },
});
