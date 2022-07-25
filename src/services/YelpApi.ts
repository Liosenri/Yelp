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
  config.headers.Authorization = 'Bearer XkJ1V14GUmZcT_EGD5KRBKEINKTg2frjIhMHe-Lzka4YSoLQBxvjVQE9IV5hXK0rFwkGWQcykJAoavTxc_gaX04nK7ulCExZL1Q-L2APXAoHqgxK8YF49G9jImTYYnYx';
  return config;
});

export default YelpAPI;
