import axios from 'axios';

const BASE_URL = 'https://dev-api.pocaalbum.com/apis/v1/pocaalbum';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxODAzNzgxNjU1LCJpYXQiOjE3MTc0NjgwNTUsImp0aSI6IjM3NTlhOGFjMzg5YjRmM2I5YTQ1M2QwNjk4NzlkMTQzIiwidXNlcl9pZCI6MTczNTE2Niwib3JpZ2luX3VzZXJfaWQiOjE3MzUxNjYsInVzZXIiOiI9MDJiajVDYnBGV2JuQmtjaFIzY2x0V1l0NUNkcFZuY2pWbWMiLCJsb2dpbl9tZXRob2QiOiJlbWFpbCIsImxlZ2FjeV91c2VyX2lkIjotMX0.5ko1VkSMiLsCbZun4PxZaqYmHjdn0JC9Qk54BJ-EOpA';

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default API;
