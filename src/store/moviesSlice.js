import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies, searchPopularMovies } from '../services/api';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopular',
  async (_, { rejectWithValue }) => {
    try {
      const movies = await getPopularMovies();
      return movies;
    } catch {
      return rejectWithValue('Failed to fetch popular movies');
    }
  }
);

export const searchMovies = createAsyncThunk(
  'movies/search',
  async (query, { rejectWithValue }) => {
    try {
      const movies = await searchPopularMovies(query);
      return movies;
    } catch {
      return rejectWithValue('Failed to fetch search results');
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Popular
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Search
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectMovies = (state) => state.movies.items;
export const selectMoviesLoading = (state) => state.movies.loading;
export const selectMoviesError = (state) => state.movies.error;

export default moviesSlice.reducer;
