<script setup lang="ts">
import MovieCard from '@/components/MoviesPage/MovieCard.vue';

import type { Movie } from '@/types/movie';

defineProps<{
  movies: Movie[];
}>();
</script>

<template>
  <section class="container">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </section>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  @include moviesGrid;
  margin-bottom: 64px;
}
</style>
