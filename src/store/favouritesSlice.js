import { createSlice } from '@reduxjs/toolkit';

const loadFavouritesFromStorage = () => {
  const saved = localStorage.getItem('favourites');
  return saved ? JSON.parse(saved) : [];
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    items: loadFavouritesFromStorage(),
  },
  reducers: {
    addFavourite: (state, action) => {
      const exists = state.items.some((m) => m.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('favourites', JSON.stringify(state.items));
      }
    },
    removeFavourite: (state, action) => {
      state.items = state.items.filter((m) => m.id !== action.payload);
      localStorage.setItem('favourites', JSON.stringify(state.items));
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export const selectFavourites = (state) => state.favourites.items;
export const selectIsFavourite = (state, movieId) =>
  state.favourites.items.some((m) => m.id === movieId);

export default favouritesSlice.reducer;
