import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppState} from '..';
import {getBusinessesByCoordinates} from '../../services/yelpServices';
import {Business, Coordinates} from '../../types';
import {
  FetchBusinessesRequest,
  FetchBusinessesRequestFulfilled,
  FetchBusinessesRequestRejected,
} from './BusinessesActionsTypes';

export const fetchBusinessesRequestAction = (): FetchBusinessesRequest => ({
  type: 'FETCH_BUSINESSES_REQUEST',
});

export const fetchBusinessesRequestFulfilledAction = (
  businesses: Business[],
): FetchBusinessesRequestFulfilled => ({
  type: 'FETCH_BUSINESSES_REQUEST_FULFILLED',
  payload: businesses,
});

export const fetchBusinessesRequestRejectedAction = (
  errorMessage: string,
): FetchBusinessesRequestRejected => ({
  type: 'FETCH_BUSINESSES_REQUEST_REJECTED',
  payload: errorMessage,
});

export const fetchBusinessesByCoordinateAction =
  (
    searchQuery: string,
    coordinate: Coordinates,
  ): ThunkAction<void, AppState, undefined, AnyAction> =>
  async dispatch => {
    dispatch(fetchBusinessesRequestAction());
    try {
      const response = await getBusinessesByCoordinates(
        searchQuery,
        coordinate,
      );
      dispatch(fetchBusinessesRequestFulfilledAction(response.data.businesses));
    } catch (error) {
      const typedError = error as Error;
      dispatch(fetchBusinessesRequestRejectedAction(typedError.message));
    }
  };
