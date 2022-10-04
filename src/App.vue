<script setup lang="ts">
import { onMounted } from 'vue';

import NavBar from '@/components/global/NavBar/NavBar.vue';
import DataLoader from '@/components/global/DataLoader.vue';
import ErrorBoundary from '@/components/global/ErrorBoundary.vue';

import { useMoviesStore } from '@/store/movies';
const moviesStore = useMoviesStore();
const { fetchAllMovies } = moviesStore;

onMounted(() => {
  fetchAllMovies();
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
