import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import BusinessesReducer from './slices/businessesSlices';
import {RTKYelpApi} from '../services/RTKYelpApi';

const middleWares: any[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleWares.push(createDebugger());
}

middleWares.push(RTKYelpApi.middleware);

const store = configureStore({
  reducer: {
    businesses: BusinessesReducer,
    [RTKYelpApi.reducerPath]: RTKYelpApi.reducer,
  },
  middleware: getDetaultMiddleware =>
    getDetaultMiddleware().concat(middleWares),
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; //

export default store;
