import { defineStore } from 'pinia';

import * as screeningsApi from '@/api/screenings';

// import { formatDate } from '@/helpers/date';

export const useScreeningsStore = defineStore('screenings', {
  state: () => {
    return {
      currentDate: new Date(),
      currentScreenings: []
    };
  },
  getters: {
    filteredScreenings(id) {
      return this.currentScreenings.filter(
        (screening) => screening.movie === id
      );
    },
    filteredMovies() {
      return [
        ...new Set(this.currentScreenings.map((screening) => screening.movie))
      ];
    }
  },
  actions: {
    async getCurrentScreenings(date) {
      try {
        this.currentScreenings = await screeningsApi.getDailyScreenings(date);
      } catch (error) {
        console.error(error);
      }
    },
    setCurrentDate(date) {
      this.currentDate = new Date(date);
    }
  }
});
