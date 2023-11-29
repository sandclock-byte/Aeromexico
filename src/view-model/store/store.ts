import { configureStore } from '@reduxjs/toolkit';
import { flightSearchSlice } from './slices/flightSearch';

export const store = configureStore({
    reducer: {
        flightSearch: flightSearchSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;