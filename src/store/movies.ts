import { defineStore } from 'pinia';

import { getAllMovies } from '@/api/movies';

import type { Movie } from '@/types/movie';

interface State {
  allMovies: Movie[] | [];
}

export const useMoviesStore = defineStore({
  id: 'moviesStore',
  state: () => {
    return {
      allMovies: []
    } as State;
  },
  getters: {
    genres(): string[] {
      return [
        ...new Set(this.allMovies.map((movie: Movie) => movie.genre.name))
      ];
    },
    titles(): string[] {
      return [...new Set(this.allMovies.map((movie: Movie) => movie.title))];
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
