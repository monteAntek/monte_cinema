<script>
import { defineComponent } from 'vue';

import { mapState, mapActions } from 'pinia';

import NavBar from '@/components/global/NavBar/NavBar.vue';

import { useMoviesStore } from '@/store/movies.js';

export default defineComponent({
  components: {
    NavBar
  },
  data() {
    return {
      error: null,
      errorInstance: null,
      errorInfo: ''
    };
  },
  computed: {
    ...mapState(useMoviesStore, ['allMovies', 'genres'])
  },
  methods: {
    ...mapActions(useMoviesStore, ['fetchAllMovies'])
  },
  mounted() {
    this.fetchAllMovies();
  },
  errorCaptured(err, instance, info) {
    this.error = err;
    this.errorInstance = instance;
    this.errorInfo = info;
    return false;
  }
});
</script>

<template>
  <header>
    <NavBar />
  </header>
  <template v-if="error">
    <div class="error">
      <p>{{ error }}</p>
      <br />
      <p>{{ errorInstance }}</p>
      <br />
      <p>{{ errorInfo }}</p>
    </div>
  </template>
  <template v-if="!error">
    <main>
      <router-view class="main-view"></router-view>
    </main>
  </template>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
main {
  max-width: 1440px;
  margin: 0 48px;
  @include screen-small {
    margin: 0 auto;
  }
}
</style>
