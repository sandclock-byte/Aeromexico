import { useContext } from 'react';
import { AirplaneStatusContext } from '../context/AirplaneStatusContext';

export const useAirplaneStatus = () => useContext(AirplaneStatusContext);