import router from '@/router';
import axios from 'axios';

import { useAuthStore } from '@/store/auth.js';

export const defaultClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

defaultClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const auth = useAuthStore();
      await auth.logout();
      router.push({ name: 'Login' });
    }
    return Promise.reject(error);
  }
);

export const setAuthHeader = (authHeader) => {
  defaultClient.defaults.headers.common['Authorization'] = authHeader;
};

export const removeAuthHeader = () => {
  delete defaultClient.defaults.headers.common['Authorization'];
};
