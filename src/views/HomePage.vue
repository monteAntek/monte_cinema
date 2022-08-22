<script>
import { defineComponent } from 'vue';

import HeroSection from '@/components/HomePage/HeroSection/HeroSection.vue';
import MoviesSection from '@/components/HomePage/MoviesSection/MoviesSection.vue';

import { useMoviesStore } from '@/store/movies';
const moviesStore = useMoviesStore();

export default defineComponent({
  name: 'HomePage',
  components: {
    HeroSection,
    MoviesSection
  },
  computed: {
    movies() {
      return moviesStore.allMovies;
    },
    comingSoon() {
      return this.movies.filter((movie, index) => index < 3);
    }
  }
});
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <MoviesSection :movies="comingSoon" />
  </div>
</template>

<style lang="scss" scoped></style>
