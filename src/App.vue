<script>
import { defineComponent } from 'vue';

import HomePage from '@/views/HomePage.vue';
import NavBar from '@/components/global/NavBar/NavBar.vue'

export default defineComponent({
  components: {
    HomePage,
    NavBar,
  }
});
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <HomePage />
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
