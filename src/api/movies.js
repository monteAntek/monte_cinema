import { defaultClient } from '@/api/client';

export const getAllMovies = async () => {
  const { data } = await defaultClient.get('/movies');
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await defaultClient.get(`/movies/${id}`);
  return data;
};
