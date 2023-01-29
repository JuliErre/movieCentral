import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState:[],
    reducers: {
        initWatchList: (state, action) => {
            return action.payload;
        },
        addToList: (state, action) => {
            state.push(action.payload);
        },
        deleteFromList: (state, action) => {
            return state.filter((movie) => movie.id !== action.payload);
        },
        removeAllMovies: (state, action) => {
            return [];
        },
    },
});

export const { initWatchList, addToList, deleteFromList, removeAllMovies } = watchlistSlice.actions;

export default watchlistSlice.reducer;
