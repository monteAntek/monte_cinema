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
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :movieId="movie.id"
      :movieTitle="movie.title"
      :movieImgUrl="movie.poster_url"
      :movieLength="movie.length"
      :movieGenre="movie.genre.name"
    />
  </section>
</template>

<style lang="scss" scoped>
.container {
  @include moviesGrid;
  margin-bottom: 64px;
}
</style>
