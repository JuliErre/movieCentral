import { configureStore } from '@reduxjs/toolkit';
import watchlistReducer from "../features/watchlist/WatchlistSlice"
import userDataReducer from "../features/userData/UserData"


const store = configureStore({
    reducer: {
        watchlist : watchlistReducer,
        userData : userDataReducer,
    },
});


export default store;