import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    latestMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTpoRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTpoRatedMovies,
  addUpcomingMovies,
  addLatestMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
