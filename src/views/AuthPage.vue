<script>
import { defineComponent } from 'vue';

import RegisterForm from '@/components/Auth/RegisterForm.vue';
import LoginForm from '@/components/Auth/LoginForm.vue';

export default defineComponent({
  name: 'AuthPage',
  components: { RegisterForm, LoginForm },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
});
</script>

<template>
  <template v-if="currentRouteName === 'Register'">
    <RegisterForm />
  </template>

  <template v-if="currentRouteName === 'Login'">
    <LoginForm />
  </template>
</template>
