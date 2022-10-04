import { defaultClient } from '@/api/client';
import type { Movie } from '@/types/movie';

export const getAllMovies = async (): Promise<Movie[]> => {
  const { data } = await defaultClient.get('/movies');
  return data;
};

export const getMovieDetails = async (
  id: string | string[]
): Promise<Movie> => {
  const { data } = await defaultClient.get(`/movies/${id}`);
  return data;
};
