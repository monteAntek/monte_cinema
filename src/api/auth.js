import { defaultClient } from '@/api/client';

export const register = async (credentials) =>
  defaultClient.post('/register', {
    user: {
      email: credentials.email,
      password: credentials.password,
      first_name: credentials.firstName,
      last_name: credentials.lastName,
      date_of_birth: credentials.dateOfBirth
    }
  });

export const login = async (credentials) =>
  defaultClient.post('/login', {
    user: {
      email: credentials.email,
      password: credentials.password
    }
  });

export const getCurrentUser = async () => defaultClient.get('/user');

export const logout = async () => defaultClient.delete('/logout');
