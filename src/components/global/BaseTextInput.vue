<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTextInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
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
          :type="type"
          :modelValue="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <div v-if="$slots.icon" class="base-input__container__icon">
          <slot name="icon" />
        </div>
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

    &__icon {
      font-size: $fs-32;
      position: absolute;
      right: 3%;
      top: 20%;
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
