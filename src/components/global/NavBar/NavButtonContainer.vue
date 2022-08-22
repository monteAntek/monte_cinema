<script>
import { defineComponent } from 'vue';

import BaseButton from '@/components/global/BaseButton.vue';

export default defineComponent({
  name: 'NavButtonContainer',
  components: {
    BaseButton
  }
});
</script>

<template>
  <div class="container">
    <BaseButton
      class="container__button"
      :to="{ name: 'Register' }"
      colorScheme="red-text"
      size="large"
    >
      Register</BaseButton
    >
    <BaseButton
      class="container__button"
      :to="{ name: 'Login' }"
      colorScheme="red-fill"
      size="large"
    >
      Login
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background-color: $color-snow-white;

  @include screen-small {
    width: 100%;
    &__button {
      margin-bottom: 24px;
    }
  }
}
</style>
