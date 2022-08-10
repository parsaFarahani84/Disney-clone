import { createSlice } from "@reduxjs/toolkit";

const initaialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initaialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
