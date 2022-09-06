<script>
import { defineComponent } from 'vue';

import SearchIcon from '@/assets/icons/search-icon.svg';
import ViewOffIcon from '@/assets/icons/view-off-icon.svg';
import ViewOnIcon from '@/assets/icons/view-on-icon.svg';

export default defineComponent({
  name: 'BaseTextInput',
  components: {
    SearchIcon,
    ViewOffIcon,
    ViewOnIcon
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isPasswordVisible: false,
      inputType: this.type
    };
  },
  methods: {
    toggleIsPasswordVisible() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType === 'text'
        ? (this.inputType = 'password')
        : (this.inputType = 'text');
    }
  },
  computed: {
    inputClasses() {
      return ['base-input', { 'base-input--hasError': this.$slots.error }];
    }
  },
  emits: ['input', 'update:modelValue']
});
</script>

<template>
  <div :class="inputClasses">
    <label v-if="$slots.label" :for="$attrs.id" class="base-input__label">
      <slot name="label" />
    </label>
    <div class="base-input__container">
      <div class="icon-wrapper">
        <input
          class="base-input__container__input"
          v-bind="$attrs"
          :type="inputType"
          :modelValue="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <SearchIcon class="base-input__container__search" v-if="isSearch" />
        <ViewOffIcon
          class="base-input__container__show-password"
          v-if="inputType === 'text' && isPasswordVisible"
          @click="toggleIsPasswordVisible"
        />
        <ViewOnIcon
          class="base-input__container__show-password"
          v-if="inputType === 'password' && !isPasswordVisible"
          @click="toggleIsPasswordVisible"
        />
      </div>
      <div v-if="$slots.error" class="base-input__container__error">
        <slot name="error" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  &__label {
    @include inputLabel;
  }

  &__container {
    width: 100%;

    .icon-wrapper {
      position: relative;
    }

    &__input {
      position: relative;
      @include inputInput;
      color: $color-jumbo-gray;

      &:hover {
        background: $color-inputHover-gray;
      }

      &:active,
      &:focus-within,
      &:focus-visible {
        @include inputActive;
      }
    }

    &__search,
    &__show-password {
      font-size: $fs-32;
      position: absolute;
      right: 3%;
      top: 25%;
    }

    &__show-password {
      &:hover {
        cursor: pointer;
      }
    }

    &__error {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 8px;
      margin-top: 8px;
      font-family: $font-roboto;
      font-weight: $fw-400;
      font-size: $fs-14;
      line-height: 1.7;
      letter-spacing: 0.04em;
      color: $color-cherry-red;
    }
  }
  &--hasError {
    &__input {
      @include inputError;
    }
  }
}
</style>
