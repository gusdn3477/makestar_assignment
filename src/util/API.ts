import axios from 'axios';

const BASE_URL = '/apis/v1/pocaalbum';
export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export default API;
