<script>
import { defineComponent } from 'vue';

import { mapActions } from 'pinia';
import { useAuthStore } from '@/store/auth.js';

import BaseButton from '@/components/global/BaseButton.vue';

export default defineComponent({
  name: 'NavButtonContainer',
  components: {
    BaseButton
  },
  props: {
    isLoggedIn: {
      type: Boolean
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    async onLogout() {
      try {
        await this.logout();
      } catch (error) {
        alert(error);
        console.error(error);
      }
    }
  }
});
</script>

<template>
  <div class="container">
    <template v-if="!isLoggedIn">
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
    </template>
    <template v-if="isLoggedIn">
      <BaseButton
        class="container__button"
        :to="{ name: 'Home' }"
        colorScheme="pink-BG"
        size="large"
      >
        My Account</BaseButton
      >
      <BaseButton
        class="container__button"
        colorScheme="gray-fill"
        size="large"
        @click="onLogout"
      >
        Logout
      </BaseButton>
    </template>
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
