<script>
import { defineComponent } from 'vue';

import { mapState, mapActions } from 'pinia';

import NavBar from '@/components/global/NavBar/NavBar.vue';
import DataLoader from '@/components/global/DataLoader.vue';
import ErrorBoundary from '@/components/global/ErrorBoundary.vue';

import { useMoviesStore } from '@/store/movies';

export default defineComponent({
  components: {
    NavBar,
    DataLoader,
    ErrorBoundary
  },
  computed: {
    ...mapState(useMoviesStore, ['allMovies', 'genres'])
  },
  methods: {
    ...mapActions(useMoviesStore, ['fetchAllMovies'])
  },
  mounted() {
    this.fetchAllMovies();
  }
});
</script>

<template>
  <header>
    <NavBar />
  </header>
  <ErrorBoundary>
    <Suspense>
      <main>
        <router-view class="main-view"></router-view>
      </main>
      <template #fallback>
        <DataLoader />
      </template>
    </Suspense>
  </ErrorBoundary>
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
