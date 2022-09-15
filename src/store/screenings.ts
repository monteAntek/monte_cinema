import { getScreeningsByDate } from './../api/screenings';
import { defineStore } from 'pinia';
import type { Screening } from '@/types/screening';

interface State {
  currentDate: string;
  currentScreenings: Screening[] | [];
}

export const useScreeningsStore = defineStore('screenings', {
  state: () => {
    return {
      currentDate: new Date().toISOString().slice(0, 10),
      currentScreenings: []
    } as State;
  },
  actions: {
    async getDailyScreenings() {
      try {
        this.currentScreenings = await getScreeningsByDate(this.currentDate);
      } catch (error) {
        console.error(error);
      }
    },
    setCurrentDate(date: string) {
      this.currentDate = date;
    }
  }
});
