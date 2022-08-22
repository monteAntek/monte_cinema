import { defineStore } from 'pinia';

import { getAllMovies } from '../api/monteCinemaApi';

export const useMoviesStore = defineStore({
  id: 'moviesStore',
  state: () => {
    return {
      allMovies: []
    };
  },
  getters: {
    genres() {
      return this.allMovies.map((movie) => movie.genre.name);
    }
  },
  actions: {
    async fetchAllMovies() {
      try {
        const data = await getAllMovies();
        this.allMovies = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
});
