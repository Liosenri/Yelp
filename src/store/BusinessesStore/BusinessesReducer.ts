import {
  BusinessesActionTypes,
  BusinessesReducerStateType,
} from './BusinessesActionsTypes';

const initialState: BusinessesReducerStateType = {
  isLoading: false,
  businesses: null,
  errorMessage: null,
};

export default (
  state = initialState,
  action: BusinessesActionTypes,
): BusinessesReducerStateType => {
  switch (action.type) {
    case 'FETCH_BUSINESSES_REQUEST':
      return {...state, isLoading: true};
    case 'FETCH_BUSINESSES_REQUEST_FULFILLED':
      return {...state, isLoading: false, businesses: action.payload};
    case 'FETCH_BUSINESSES_REQUEST_REJECTED':
      return {...state, isLoading: false, errorMessage: action.payload};
    default:
      return state;
  }
};
