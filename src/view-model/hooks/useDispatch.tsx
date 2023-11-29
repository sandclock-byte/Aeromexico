import { useDispatch as useDispatchReacRedux } from 'react-redux';
import { AppDispatch } from '../store';


export const useDispatch = () => useDispatchReacRedux<AppDispatch>(); 