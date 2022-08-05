import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getBusinessesByCoordinates} from '../../services/yelpServices';
import {Business, Coordinates} from '../../types';

export type BusinessesReducerStateType = {
  businesses: Business[] | null;
  errorMessage: string | null;
  isLoading: boolean;
};

const initialState: BusinessesReducerStateType = {
  businesses: null,
  errorMessage: null,
  isLoading: false,
};

export const fetchBusinessesByCoordinatesAction = createAsyncThunk<
  Business[],
  {term: string; coordinates: Coordinates}
>('businesses/fetchBusinessesByCoordinates', async (data, _) => {
  const {term, coordinates} = data;
  const {
    data: {businesses},
  } = await getBusinessesByCoordinates(term, coordinates);
  return businesses;
});

export const businessesSlice = createSlice({
  name: 'businesses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBusinessesByCoordinatesAction.pending, state => {
        state.isLoading = true;
        state.businesses = null;
        state.errorMessage = null;
      })
      .addCase(
        fetchBusinessesByCoordinatesAction.fulfilled,
        (state, action) => {
          state.businesses = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchBusinessesByCoordinatesAction.rejected, (state, action) => {
        const error = action.error as Error;
        state.errorMessage = error.message;
        state.isLoading = false;
      });
  },
});

export default businessesSlice.reducer;
