<script>
import { defineComponent } from 'vue';

import MonteCinemaIcon from '@/assets/icons/monte-cinema-logo.svg';

export default defineComponent({
  name: 'DataLoader',
  components: {
    MonteCinemaIcon
  }
});
</script>

<template>
  <div class="container">
    <MonteCinemaIcon class="container__loader" />
  </div>
</template>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  &__loader {
    animation: pulse 3s ease-in-out infinite;
  }
}
</style>
