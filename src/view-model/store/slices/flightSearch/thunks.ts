import { flightService } from '../../../../model/api/flightService';
import { setFlightResults, startSearchingByDestination, startSearchingByFlightNumber } from './flightSearchSlice';

export const searchByFlightNumber = () => {
    return async (dispatch: any, getState: any) => {
        dispatch(startSearchingByFlightNumber());
        const state = getState();
        const { flightNumber, date } = state.flightSearch;
        const flightResults = await flightService.getFlightByNumber({ date, flightNumber });
        dispatch(setFlightResults(flightResults));
    }
};

export const searchByDestination = () => {
    return async (dispatch: any, getState: any) => {
        dispatch(startSearchingByDestination());
        const state = getState();
        const { arrival, departure, date } = state.flightSearch;
        const flightResults = await flightService.getFlightByDestination({ date, destination: arrival.name, origin: departure.name });
        dispatch(setFlightResults(flightResults));
    }
};