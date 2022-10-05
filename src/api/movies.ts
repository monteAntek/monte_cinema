import { defaultClient } from '@/api/client';
import type { Movie } from '@/types/movie';

export const getAllMovies = async () => {
  const { data } = await defaultClient.get<Movie[]>('/movies');
  return data;
};

export const getMovieDetails = async (id: string | string[]) => {
  const { data } = await defaultClient.get<Movie>(`/movies/${id}`);
  return data;
};
