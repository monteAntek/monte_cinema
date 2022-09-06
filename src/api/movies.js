import { defaultClient } from '@/api/client';

export const getAllMovies = async () => {
  const response = await defaultClient.get('/movies');
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await defaultClient.get(`/movies/${id}`);
  return response.data;
};
