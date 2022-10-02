<script>
import { defineComponent } from 'vue';

import { mapState } from 'pinia';

import HeroSection from '@/components/HomePage/HeroSection/HeroSection.vue';
import MoviesSection from '@/components/HomePage/MoviesSection/MoviesSection.vue';
import ContactDetails from '@/components/ContactPage/ContactDetails.vue';

import { useMoviesStore } from '@/store/movies';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeroSection,
    MoviesSection,
    ContactDetails
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
    <div></div>
    <ContactDetails class="contact" />
  </div>
</template>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
