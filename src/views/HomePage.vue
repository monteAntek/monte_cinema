<script>
import { defineComponent } from 'vue';

import { mapState } from 'pinia';

import HeroSection from '@/components/HomePage/HeroSection/HeroSection.vue';
import MoviesSection from '@/components/HomePage/MoviesSection/MoviesSection.vue';

import { useMoviesStore } from '@/store/movies';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeroSection,
    MoviesSection
  },
  computed: {
    ...mapState(useMoviesStore, ['allMovies']),
    comingSoon() {
      return this.allMovies.filter((movie, index) => index < 3);
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
