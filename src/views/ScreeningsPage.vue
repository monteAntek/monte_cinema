<script>
import { defineComponent } from 'vue';

import { mapState, mapActions } from 'pinia';

import { useScreeningsStore } from '@/store/screenings';
import { useMoviesStore } from '@/store/movies';

import { dayNameENG, formatDate } from '@/helpers/date';

import BaseHeader from '@/components/global/BaseHeader.vue';

import ScreeningsSearchBar from '@/components/Screenings/ScreeningsSearchBar.vue';
import ScreeningsCard from '@/components/Screenings/ScreeningsCard.vue';

export default defineComponent({
  name: 'ScreeningsPage',
  components: {
    BaseHeader,
    ScreeningsSearchBar,
    ScreeningsCard
  },
  data() {
    return {
      selectedMovie: 'All movies'
    };
  },
  computed: {
    ...mapState(useScreeningsStore, ['currentScreenings', 'currentDate']),
    ...mapState(useMoviesStore, ['allMovies']),
    formattedDate() {
      return formatDate(this.currentDate);
    },
    headerDate() {
      const date = this.currentDate;
      const weekday = dayNameENG(date, 'long');
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const capitalizedDay = weekday.charAt(0).toUpperCase() + weekday.slice(1);
      return `${capitalizedDay} ${day}/${month}/${year}`;
    },
    moviesByTitle() {
      return this.selectedMovie === 'All movies'
        ? this.allMovies
        : this.allMovies.filter((movie) => movie.title === this.selectedMovie);
    },
    displayMovies() {
      const movies = this.currentScreenings.map((screening) => screening.movie);
      return this.moviesByTitle.filter((movie) => movies.includes(movie.id));
    }
  },
  methods: {
    ...mapActions(useScreeningsStore, ['getCurrentScreenings']),
    getMovieScreenings(movieId) {
      return this.currentScreenings.filter(
        (screening) => screening.movie === movieId
      );
    }
  },
  watch: {
    currentDate: {
      immediate: true,
      async handler() {
        this.getCurrentScreenings(this.formattedDate);
      }
    }
  }
});
</script>

<template>
  <section class="screenings">
    <BaseHeader headerText="Screenings:" :subHeaderText="headerDate" />
    <section class="screenings__search-bar">
      <ScreeningsSearchBar v-model="selectedMovie">
        <template #label>day</template>
      </ScreeningsSearchBar>
    </section>
    <section class="screenings__cards">
      <ScreeningsCard
        v-for="movie of displayMovies"
        :key="movie.id"
        :movie="movie"
        :screenings="getMovieScreenings(movie.id)"
      />
    </section>
  </section>
</template>

<style lang="scss" scoped>
.screenings {
  &__cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin-bottom: 64px;
  }
  @include screen-small {
    padding: 0 24px;
  }
}
</style>
