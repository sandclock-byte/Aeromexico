import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FlightStatus } from '../../../interfaces/FlightStatus';
import { Place } from '../../../types';

export interface FlightSearchState {
    arrival: Place | null;
    departure: Place | null;
    flightNumber: string;
    flightResults: FlightStatus[];
    isLoading: boolean;
    searchingtype: 'flightNumber' | 'destination';
}

const initialState: FlightSearchState = {
    arrival: null,
    departure: null,
    flightNumber: '',
    flightResults: [],
    isLoading: false,
    searchingtype: 'flightNumber'
};

export const flightSearchSlice = createSlice({
    name: 'flightSearch',
    initialState,
    reducers: {

        setFlightResults: (state, action: PayloadAction<FlightStatus[]>) => {
            state.flightResults = action.payload;
            state.isLoading = false;
        },

        setFlightNumber: (state, action: PayloadAction<string>) => {
            state.flightNumber = action.payload;
        },

        setDeparture: (state, action: PayloadAction<Place>) => {
            state.departure = action.payload;
        },

        setArrival: (state, action: PayloadAction<Place>) => {
            state.arrival = action.payload;
        },

        startSearchingByFlightNumber: (state) => {
            state.searchingtype = 'flightNumber';
            state.isLoading = true;
        },

        startSearchingByDestination: (state) => {
            state.searchingtype = 'destination';
            state.isLoading = true;
        },

    }
});

export const {
    setFlightResults,
    setFlightNumber,
    setDeparture,
    setArrival,
    startSearchingByFlightNumber,
    startSearchingByDestination
} = flightSearchSlice.actions;