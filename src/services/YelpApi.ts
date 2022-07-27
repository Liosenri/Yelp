import axios from 'axios';

const YelpAPI = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});

YelpAPI.interceptors.request.use(config => {
  // @ts-ignore
  config.headers.Authorization =
    'Bearer BUXZnRa5K1PFFQU4zBnCBkNok_H-IELqR_bwkaLbgP9nWv6uHViQOKv6hmKfRMN5ITGTTEuO7Ujc_FCiWMXqop1tS8CoNtkkxzUWn8ZePPyudVb7ESitfI39oXXVYnYx';
  return config;
});

export default YelpAPI;
