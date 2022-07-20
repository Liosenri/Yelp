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
  config.headers.Authorization = 'Bearer YOU_API_KEY_HERE';
  return config;
});

export default YelpAPI;
