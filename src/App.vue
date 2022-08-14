<script>
  import { defineComponent } from 'vue';

  import HomePage from '@/pages/home-page.vue';
  import NavBar from '@/components/global/nav-bar/nav-bar.vue'

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
