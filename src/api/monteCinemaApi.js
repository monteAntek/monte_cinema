import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getAllMovies = async () => {
  const response = await axios.get('/movies');
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movies/${id}`);
  return response.data;
};
