<script>
import { defineComponent } from 'vue';

import BaseTextInput from '../global/BaseTextInput.vue';
import ViewOffIcon from '@/assets/icons/view-off-icon.svg';
import ViewOnIcon from '@/assets/icons/view-on-icon.svg';

export default defineComponent({
  name: 'PasswordInput',
  components: {
    BaseTextInput,
    ViewOnIcon,
    ViewOffIcon
  },
  props: {
    modelValue: {
      type: String
    }
  },
  data() {
    return {
      isPasswordVisible: false,
      inputType: 'password',
      inputValue: ''
    };
  },
  watch: {
    inputValue() {
      this.$emit('update:modelValue', this.inputValue);
      this.$emit('focus');
    }
  },
  methods: {
    toggleIsPasswordVisible() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType === 'text'
        ? (this.inputType = 'password')
        : (this.inputType = 'text');
    }
  },
  emits: ['focus', 'input', 'update:modelValue']
});
</script>

<template>
  <div class="password-input" v-bind="$attrs">
    <BaseTextInput
      :type="inputType"
      v-model="inputValue"
      :id="$attrs.id"
      :required="$attrs.required"
      :placeholder="$attrs.placeholder"
    >
      <template #label> password </template>
      <template #icon>
        <button
          type="button"
          class="password-input__button"
          @click="toggleIsPasswordVisible"
        >
          <ViewOnIcon v-show="!isPasswordVisible" />
          <ViewOffIcon v-show="isPasswordVisible" />
        </button>
      </template>
    </BaseTextInput>
  </div>
</template>

<style lang="scss" scoped>
.password-input {
  &__button {
    background-color: inherit;
    border: none;
    border-radius: $br-8;
    &:hover {
      cursor: pointer;
      background-color: inherit;
    }
    &:focus {
      border: 2px solid $color-cherry-red;
    }
  }
}
</style>
