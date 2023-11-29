import { updateFlightNumber, updateDepartureDate, searchByFlightNumber } from '../store/slices/flightSearch';
import { FlightNumber } from '../types';
import { useDispatch } from './useDispatch';
import { searchByDestination } from '../store/slices/flightSearch';
import { useSelector } from './useSelector';

export const useSearchingData = () => {

    const dispatch = useDispatch();
    const flightSearch = useSelector(state => state.flightSearch);

    const setFlightNumber = (flightNumber: FlightNumber) => {
        dispatch(updateFlightNumber(flightNumber));
    }

    const setDepartureDate = (date: string) => {
        dispatch(updateDepartureDate(date));
    }

    const searchFlightByDestination = () => {
        dispatch(searchByDestination());
    }

    const searchFlightByNumber = () => {
        dispatch(searchByFlightNumber());
    }

    return {
        flightSearch,
        setFlightNumber,
        setDepartureDate,
        searchFlightByDestination,
        searchFlightByNumber,
    }

};