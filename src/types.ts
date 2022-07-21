export interface Category {
  alias: string;
  title: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: Coordinates;
  transactions: string[];
  price: string;
  location: Location;
  phone: string;
  display_phone: string;
  distance: number;
}

export interface Center {
  longitude: number;
  latitude: number;
}

export interface Region {
  center: Center;
}

export interface GetBusinessessResponse {
  businesses: Business[];
  total: number;
  region: Region;
}

export interface Category {
  alias: string;
  title: string;
}

export interface Location {
  address1?: string;
  address2?: string;
  address3?: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
  cross_streets?: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Hour{
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}

export interface Hours{
  open: Hour[];
  hours_type: string;
  is_open_now: boolean;
}

export interface BusinessDetails {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: Category[];
  rating: number;
  location: Location;
  coordinates: Coordinates;
  hours: Hours[];
  photos: string[];
  price: string;
  transactions: any[];
}
