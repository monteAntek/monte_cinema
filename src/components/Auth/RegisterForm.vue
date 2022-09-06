<script>
import { defineComponent } from 'vue';

import { mapActions } from 'pinia';
import { useAuthStore } from '@/store/auth';

import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import {
  hasNumber,
  hasLetter,
  least8Chars,
  min18Years,
  privPolicyChecked
} from '@/helpers/validations';

import Datepicker from '@vuepic/vue-datepicker';

import BaseButton from '@/components/global/BaseButton.vue';
import BaseTextInput from '@/components/global/BaseTextInput.vue';
import BaseCheckbox from '@/components/global/BaseCheckbox.vue';

import AuthHeader from '@/components/Auth/AuthHeader.vue';

export default defineComponent({
  name: 'RegisterForm',
  components: {
    AuthHeader,
    BaseButton,
    BaseTextInput,
    BaseCheckbox,
    Datepicker
  },
  data() {
    return {
      v$: useVuelidate(),
      activeStep: 1,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      privPolicy: false,
      passwordHints: [
        { id: 1, message: 'At least 8 characters' },
        { id: 2, message: 'At least one letter' },
        { id: 3, message: 'At least one digit' }
      ]
    };
  },
  computed: {},
  methods: {
    ...mapActions(useAuthStore, ['register']),
    nextStep() {
      if (!this.v$.email.$invalid && !this.v$.password.$invalid) {
        this.activeStep < 2 ? this.activeStep++ : this.activeStep;
      } else alert('Some form fields must be empty!');
    },
    async onSubmit() {
      this.v$.$validate();
      if (!this.v$.$invalid && this.privPolicy) {
        try {
          await this.register({
            email: this.email,
            password: this.password,
            dateOfBirth: this.dateOfBirth,
            firstName: this.firstName,
            lastName: this.lastName
          });

          this.$router.push({ name: 'Home' });
        } catch (error) {
          alert(error);
          console.error(error);
        }
      } else
        alert(
          'Some form fields must be empty or invalid, please check the hints!'
        );
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('Please enter Your email', required),
        email: helpers.withMessage('Invalid email address', email)
      },
      password: {
        required: helpers.withMessage('Please enter a password', required),
        hasNumber,
        hasLetter,
        least8Chars
      },
      firstName: {
        required: helpers.withMessage('Please enter Your first name', required)
      },
      lastName: {
        required: helpers.withMessage('Please enter Your last name', required)
      },
      dateOfBirth: {
        required: helpers.withMessage(
          'Please enter Your date of birth',
          required
        ),
        min18Years
      },
      privPolicy: {
        privPolicyChecked
      }
    };
  }
});
</script>

<template>
  <section class="register">
    <AuthHeader :activeStep="activeStep" />
    <form class="register__form" @submit.prevent="onSubmit" novalidate>
      <template v-if="activeStep === 1">
        <BaseTextInput
          class="register__form__input"
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
        <BaseTextInput
          class="register__form__input"
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Enter your password"
          @focus="v$.password.$touch()"
        >
          <template #label> password </template>
        </BaseTextInput>
        <div class="input-hints">
          <span
            class="input-hints__element"
            :class="{
              'input-hints__element--invalid': v$.password.required.$invalid
            }"
            v-if="v$.password.$dirty && v$.password.required.$invalid"
            >Please enter a password</span
          >
          <span
            class="input-hints__element"
            :class="{
              'input-hints__element--invalid':
                v$.password.$dirty && v$.password.least8Chars.$invalid,
              'input-hints__element--cleared':
                v$.password.$dirty && !v$.password.least8Chars.$invalid
            }"
            >At least 8 characters</span
          >
          <span
            class="input-hints__element"
            :class="{
              'input-hints__element--invalid':
                v$.password.$dirty && v$.password.hasLetter.$invalid,
              'input-hints__element--cleared':
                v$.password.$dirty && !v$.password.hasLetter.$invalid
            }"
            >At least one letter</span
          >
          <span
            class="input-hints__element"
            :class="{
              'input-hints__element--invalid':
                v$.password.$dirty && v$.password.hasNumber.$invalid,
              'input-hints__element--cleared':
                v$.password.$dirty && !v$.password.hasNumber.$invalid
            }"
            >At least one digit</span
          >
        </div>
        <div class="register__form__actions">
          <BaseButton
            class="register__form__actions__login"
            :to="{ name: 'Login' }"
            colorScheme="red-text"
            >Log in instead</BaseButton
          >
          <BaseButton
            class="register__form__actions__submit"
            type="button"
            @click="nextStep()"
            >Next step</BaseButton
          >
        </div>
      </template>
      <template v-if="activeStep === 2">
        <BaseTextInput
          class="register__form__input"
          id="firstName"
          v-model="firstName"
          type="text"
          placeholder="e.g. Jessica"
          @blur="v$.firstName.$touch()"
          ><template #label> first name </template>
          <template v-if="v$.firstName.$error && v$.firstName.$dirty" #error>
            <span v-for="error of v$.firstName.$errors" :key="error.$uid">{{
              error.$message
            }}</span>
          </template>
        </BaseTextInput>
        <BaseTextInput
          class="register__form__input"
          id="lastName"
          v-model="lastName"
          type="text"
          required
          placeholder="e.g. Walton"
          @blur="v$.lastName.$touch()"
          ><template #label> last name </template>
          <template v-if="v$.lastName.$error && v$.lastName.$dirty" #error>
            <span v-for="error of v$.lastName.$errors" :key="error.$uid">{{
              error.$message
            }}</span>
          </template>
        </BaseTextInput>
        <div class="register__form__date-picker">
          <label class="register__form__date-picker__label"
            >date of birth</label
          >
          <Datepicker
            class="register__form__date-picker__input"
            hideInputIcon
            autoApply
            format="yyyy-MM-dd"
            placeholder="YYYY-MM-DD"
            v-model="dateOfBirth"
            modelType="yyyy-MM-dd"
            @open="v$.dateOfBirth.$touch()"
            escClose
            spaceConfirm
            monthChangeOnArrows
            arrowNavigation
          />
          <div class="input-hints">
            <span
              class="input-hints__element"
              :class="{
                'input-hints__element--invalid':
                  v$.dateOfBirth.required.$invalid
              }"
              v-if="v$.dateOfBirth.$dirty && v$.dateOfBirth.required.$invalid"
              >Please enter Your birth date</span
            >
            <span
              class="input-hints__element"
              :class="{
                'input-hints__element--invalid':
                  v$.dateOfBirth.$dirty && v$.dateOfBirth.min18Years.$invalid,
                'input-hints__element--cleared':
                  v$.dateOfBirth.$dirty && !v$.dateOfBirth.min18Years.$invalid
              }"
              >You should be minimum 18 years old</span
            >
          </div>
        </div>
        <BaseCheckbox
          class="register__form__input"
          id="isPrivPolicyAccepted"
          v-model="privPolicy"
          required
          @focus="v$.privPolicy.$touch()"
        >
          <template #label>
            I accept <a href="#" class="label-link">Privacy Policy</a>
          </template>
          <template
            #error
            v-if="
              v$.privPolicy.$dirty && v$.privPolicy.privPolicyChecked.$invalid
            "
          >
            <span>{{ v$.privPolicy.privPolicyChecked.$message }}</span>
          </template>
        </BaseCheckbox>
        <div class="register__form__actions">
          <BaseButton
            class="register__form__actions__login"
            :to="{ name: 'Login' }"
            colorScheme="red-text"
            >Log in instead</BaseButton
          >
          <BaseButton class="register__form__actions__submit" type="submit"
            >Register</BaseButton
          >
        </div>
      </template>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.register {
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
    &__input {
      margin-bottom: 24px;
    }

    &__date-picker {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 24px;
      &__label {
        @include inputLabel;
      }
      &__input {
        width: 100%;
      }
    }

    .input-hints {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 8px;
      &__element {
        font-family: $font-roboto;
        font-weight: $fw-400;
        font-size: $fs-14;
        line-height: 1.7;
        letter-spacing: 0.04em;
        &--invalid {
          color: $color-cherry-red;
        }
        &--cleared {
          color: $color-success-green;
        }
      }
    }

    .label-link {
      color: inherit;
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
