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
      inputType: 'password'
    };
  },
  methods: {
    toggleIsPasswordVisible() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.inputType === 'text' ? 'password' : 'text';
    }
  },
  emits: ['focus', 'input', 'update:modelValue']
});
</script>

<template>
  <div class="password-input" v-bind="$attrs">
    <BaseTextInput
      :type="inputType"
      :model-value="modelValue"
      :id="$attrs.id"
      :required="$attrs.required"
      :placeholder="$attrs.placeholder"
      @update:modelValue="$emit('update:modelValue', $event)"
      @focus="$emit('focus', $event)"
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
