<script>
import { defineComponent } from 'vue';

import { mapActions } from 'pinia';
import { useAuthStore } from '@/store/auth';

import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

import BaseButton from '@/components/global/BaseButton.vue';
import BaseTextInput from '@/components/global/BaseTextInput.vue';
import PasswordInput from '@/components/Auth/PasswordInput.vue';

import AuthHeader from '@/components/Auth/AuthHeader.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    AuthHeader,
    BaseButton,
    BaseTextInput,
    PasswordInput
  },
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(useAuthStore, ['login']),
    async onSubmit() {
      if (!this.v$.$invalid) {
        try {
          await this.login({
            email: this.email,
            password: this.password
          });
          this.$router.push({ name: 'Home' });
        } catch (error) {
          alert(`Ooops, something went wrong: ${error}`);
          console.error(error);
          if (error.response.status === 401) {
            location.reload();
          }
        }
      } else alert('Wrong credentials!');
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('Please enter Your email', required),
        email: helpers.withMessage('Invalid email address', email)
      },
      password: {
        required: helpers.withMessage('Please enter a password', required)
      }
    };
  }
});
</script>

<template>
  <section class="login">
    <AuthHeader />
    <form class="login__form" @submit.prevent="onSubmit" novalidate>
      <BaseTextInput
        class="login__form__input"
        id="email"
        v-model="email"
        name="email"
        placeholder="Something ending with monterail.com"
        type="email"
        required
        @blur="v$.email.$touch()"
      >
        <template #label> email </template>
        <template v-if="v$.email.$error && v$.email.$dirty" #error>
          <span v-for="error of v$.email.$errors" :key="error.$uid">{{
            error.$message
          }}</span>
        </template>
      </BaseTextInput>
      <PasswordInput
        class="login__form__input"
        id="password"
        v-model="password"
        type="password"
        required
        placeholder="Enter your password"
        @blur="v$.password.$touch()"
      >
        <template #label> password </template>
        <template v-if="v$.password.$dirty && v$.password.$error" #error>
          <span v-for="error of v$.password.$errors" :key="error.$uid">{{
            error.$message
          }}</span>
        </template>
      </PasswordInput>
      <div class="login__form__actions">
        <BaseButton
          class="login__form__actions__login"
          :to="{ name: 'Register' }"
          colorScheme="red-text"
          >Register instead</BaseButton
        >
        <BaseButton class="login__form__actions__submit" type="submit"
          >Log in</BaseButton
        >
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 124px 0;

  &__form {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: $br-24;
    box-shadow: $form-container-shadow;
    padding: 64px;
    margin-bottom: 124px;
    &__input {
      margin-bottom: 24px;
    }

    &__actions {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      gap: 16px;
      &__login {
        flex-grow: 1;
        @include screen-small {
          order: 2;
        }
      }
      &__next-step {
        flex-grow: 1;
      }
      @include screen-small {
        flex-direction: column;
      }
    }
    @include screen-small {
      width: 100%;
      box-shadow: none;
      padding: 0;
    }
  }

  @include screen-small {
    padding: 24px;
    margin: 64px 0;
  }
}
</style>
