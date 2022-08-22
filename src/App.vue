<script>
import { defineComponent } from 'vue';

import NavBar from '@/components/global/NavBar/NavBar.vue';
import MainView from '@/views/MainView.vue';

import { useMoviesStore } from '@/store/movies.js';

export default defineComponent({
  components: {
    NavBar,
    MainView
  },
  data() {
    return {
      allMovies: useMoviesStore().fetchAllMovies()
    };
  },
  mounted() {
    this.allMovies;
  }
});
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <MainView class="main-view" />
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1440px;
  margin: 0 auto;
  .main-view {
    margin: 0 48px;

    @include screen-small {
      margin: 0 auto;
    }
  }
}
</style>
