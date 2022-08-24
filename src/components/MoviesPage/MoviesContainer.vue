<script>
import { defineComponent } from 'vue';

import MovieCard from '@/components/MoviesPage/MovieCard.vue';

export default defineComponent({
  name: 'MoviesContainer',
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
});
</script>

<template>
  <section class="container">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </section>
</template>

<style lang="scss" scoped>
.container {
  @include moviesGrid;
  margin-bottom: 64px;
}
</style>
