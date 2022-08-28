<script>
import { defineComponent } from 'vue';

import BaseButton from '@/components/global/BaseButton.vue';

export default defineComponent({
  name: 'ErrorBoundary',
  components: {
    BaseButton
  },
  data() {
    return {
      error: false,
      errorMessage: ''
    };
  },
  errorCaptured(error) {
    this.error = true;
    this.errorMessage = error;
  }
});
</script>

<template>
  <template v-if="error">
    <div class="error-message">
      <h1>A wild error appears!</h1>
      <p>{{ errorMessage }}</p>
      <h2>Don't run away, please just return to our home page :)</h2>
      <BaseButton :to="{ name: 'Home' }" colorScheme="red-text"
        >HOME</BaseButton
      >
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<style lang="scss" scoped>
.error-message {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 48px;

  h1 {
    font-size: 100px;
    font-family: $font-eczar;
    color: $color-cherry-red;

    @include screen-small {
      font-size: 48px;
    }
  }

  h2 {
    font-size: 45px;
    font-family: $font-eczar;
    color: $color-jumbo-gray;
    @include screen-small {
      font-size: $fs-22;
    }
  }

  p {
    font-family: $font-roboto-mono;
    font-size: $fs-22;
  }
  @include screen-small {
    padding: 24px;
  }
}
</style>
