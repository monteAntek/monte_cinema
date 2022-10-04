<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

import { dayNameENG } from '@/helpers/date';

import BreadCrumbs from '@/components/global/BreadCrumbs.vue';
import BaseHeader from '@/components/global/BaseHeader.vue';
import ScreeningsSearchBar from '@/components/Screenings/ScreeningsSearchBar.vue';
import ScreeningsCard from '@/components/Screenings/ScreeningsCard.vue';

import { useScreeningsStore } from '@/store/screenings';
import { useMoviesStore } from '@/store/movies';

import type { Screening } from '@/types/screening';

const screenings = useScreeningsStore();
const movies = useMoviesStore();

interface Props {
  headerSize?: string;
  movieTitle?: string;
  forSingleMovie?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  headerSize: 'large',
  forSingleMovie: false
});

const selectedMovie = ref(props.movieTitle ? props.movieTitle : 'All movies');

const headerDate = computed(() => {
  const date = new Date(screenings.currentDate);
  const weekday = dayNameENG(date, 'long');
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const capitalizedDay = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  return `${capitalizedDay} ${day}/${month}/${year}`;
});

const moviesByTitle = computed(() => {
  return selectedMovie.value === 'All movies'
    ? movies.allMovies
    : movies.allMovies.filter((movie) => movie.title === selectedMovie.value);
});

const displayMovies = computed(() => {
  const movies = screenings.currentScreenings.map(
    (screening) => screening.movie
  );
  return moviesByTitle.value.filter((movie) => movies.includes(movie.id));
});

const breadCrumbs = computed(() => {
  return [{ label: 'Screenings' }];
});

function getMovieScreenings(movieId: number): Screening[] {
  return screenings.currentScreenings.filter(
    (screening) => screening.movie === movieId
  );
}

watchEffect(() => {
  screenings.getDailyScreenings();
});
</script>

<template>
  <section class="screenings">
    <BreadCrumbs v-if="!forSingleMovie" :crumbs="breadCrumbs" />
    <div class="screenings__body">
      <BaseHeader
        class="screenings__body__header"
        headerText="Screenings:"
        :subHeaderText="headerDate"
        :size="headerSize"
      />
      <ScreeningsSearchBar
        v-model="selectedMovie"
        :for-single-movie="forSingleMovie"
      />
      <div class="screenings__body__cards">
        <ScreeningsCard
          v-for="movie of displayMovies"
          :key="movie.id"
          :movie="movie"
          :screenings="getMovieScreenings(movie.id)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.screenings {
  &__body {
    &__header {
      margin-top: 64px;
      margin-bottom: 32px;
    }
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
}
</style>
