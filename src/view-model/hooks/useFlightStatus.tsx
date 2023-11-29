import { FlightStatus } from '../interfaces/FlightStatus';
import { updateFlightStatus } from '../store/slices/flightStatus';
import { useDispatch } from './useDispatch';
import { useSelector } from './useSelector';

export const useFlightStatus = () => {

    const dispatch = useDispatch();
    const flightStatus = useSelector(state => state.flightSearch);

    const setFlightStatus = (flightStatus: FlightStatus) => {
        dispatch(updateFlightStatus(flightStatus));
    }

    return {
        flightStatus,
        setFlightStatus,
    }

};