import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getAllMovies = async () => {
  const response = await axios.get('/movies');
  return response.data;
};
