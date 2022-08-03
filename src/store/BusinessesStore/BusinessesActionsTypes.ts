import {Business} from '../../types';

export type BusinessesReducerStateType = {
  businesses: Business[] | null;
  errorMessage: string | null;
  isLoading: boolean;
};

export const FETCH_BUSINESSES_REQUEST = 'FETCH_BUSINESSES_REQUEST';
export const FETCH_BUSINESSES_REQUEST_FULFILLED =
  'FETCH_BUSINESSES_REQUEST_FULFILLED';
export const FETCH_BUSINESSES_REQUEST_REJECTED =
  'FETCH_BUSINESSES_REQUEST_REJECTED';

export interface FetchBusinessesRequest {
  type: typeof FETCH_BUSINESSES_REQUEST;
}

export interface FetchBusinessesRequestFulfilled {
  type: typeof FETCH_BUSINESSES_REQUEST_FULFILLED;
  payload: Business[];
}

export interface FetchBusinessesRequestRejected {
  type: typeof FETCH_BUSINESSES_REQUEST_REJECTED;
  payload: string;
}

export type BusinessesActionTypes =
  | FetchBusinessesRequest
  | FetchBusinessesRequestFulfilled
  | FetchBusinessesRequestRejected;
