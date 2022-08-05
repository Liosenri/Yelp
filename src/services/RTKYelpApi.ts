import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BusinessDetails} from '../types';

export const RTKYelpApi = createApi({
  reducerPath: 'businessDetails',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.yelp.com/v3/',
    prepareHeaders: header => {
      header.set(
        'Authorization',
        'Bearer BUXZnRa5K1PFFQU4zBnCBkNok_H-IELqR_bwkaLbgP9nWv6uHViQOKv6hmKfRMN5ITGTTEuO7Ujc_FCiWMXqop1tS8CoNtkkxzUWn8ZePPyudVb7ESitfI39oXXVYnYx',
      );
      return header;
    },
  }),
  endpoints: builder => ({
    getBusinessDetailsById: builder.query<BusinessDetails, string>({
      query: businessId => 'businesses/' + businessId,
    }),
  }),
});

export const {useGetBusinessDetailsByIdQuery} = RTKYelpApi;
