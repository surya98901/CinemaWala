import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailer: null,
    },
    reducers: {
        addMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovie : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
    },
});
export const { addMovie,addTrailer,addPopularMovie,addTopRatedMovie,addUpcomingMovie  } = movieSlice.actions;
export default movieSlice.reducer;