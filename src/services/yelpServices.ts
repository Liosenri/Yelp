import {BusinessDetails, GetBusinessessResponse} from '../types';
import YelpApi from './YelpApi';

export const getBusinesses = (term: string, location: string) =>
  YelpApi.get<GetBusinessessResponse>(
    `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
  );

export const getBusinessById = (id: string) =>
  YelpApi.get<BusinessDetails>(`https://api.yelp.com/v3/businesses/${id}`);
