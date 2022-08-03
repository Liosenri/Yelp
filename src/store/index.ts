import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import BusinessesReducer from './BusinessesStore/BusinessesReducer';

export const rootReducer = combineReducers({
  businesses: BusinessesReducer,
});

const middleWares = [ReduxThunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middleWares));
export type AppState = ReturnType<typeof rootReducer>;

export default store;
