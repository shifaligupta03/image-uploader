import axios from 'axios';
import { BASE_URL, CLIENT_ID } from '../constants/env-constants';

const BASE_API_URL = `${BASE_URL}`;

const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
  withCredentials: false,
});

export default api;
