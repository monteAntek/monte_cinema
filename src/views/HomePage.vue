<script setup lang="ts">
import { computed } from 'vue';

import HeroSection from '@/components/HomePage/HeroSection/HeroSection.vue';
import MoviesSection from '@/components/HomePage/MoviesSection/MoviesSection.vue';
import ContactDetails from '@/components/ContactPage/ContactDetails.vue';
import ScreeningsPage from '@/views/ScreeningsPage.vue';

import { useMoviesStore } from '@/store/movies';
const moviesStore = useMoviesStore();

const comingSoon = computed(() => {
  return moviesStore.allMovies.filter((movie, index) => index < 3);
});
</script>

<template>
  <div class="homepage">
    <HeroSection />
    <MoviesSection :movies="comingSoon" />
    <ScreeningsPage header-size="medium" for-single-movie class="screenings" />
    <ContactDetails class="contact" />
  </div>
</template>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .screenings {
    width: 100%;
  }
  .contact {
    width: 600px;
    border-radius: 24px;
    align-self: center;
    margin-bottom: 124px;

    @include screen-small {
      max-width: 311px;
      border-radius: 8px;
    }
  }
}
</style>
