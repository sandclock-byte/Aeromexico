import { updateFlightNumber, updateDepartureDate } from '../store/slices/flightSearch';
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

    const setDepartureDate = (date: Date) => {
        dispatch(updateDepartureDate(date));
    }

    const searchFlightByDestination = () => {
        dispatch(searchByDestination());
    }

    return {
        flightSearch,
        setFlightNumber,
        setDepartureDate,
        searchFlightByDestination
    }

};