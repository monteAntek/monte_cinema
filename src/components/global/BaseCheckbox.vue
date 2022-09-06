<script>
import { defineComponent } from 'vue';

import CheckedIcon from '@/assets/icons/checked-icon.svg';

export default defineComponent({
  name: 'BaseCheckbox',
  components: {
    CheckedIcon
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input', 'update:modelValue']
});
</script>

<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <slot name="label" />
      <input
        class="checkbox__input-hidden"
        type="checkbox"
        v-bind="$attrs"
        :checked="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)"
      />
      <div class="checkbox__input-visible" />
      <CheckedIcon class="checkbox__icon" />
      <div v-if="$slots.error" class="checkbox__error">
        <slot name="error" />
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  &__label {
    position: relative;
    padding-left: 32px;
    margin: 24px 0;
    cursor: pointer;
    font-family: $font-roboto;
    font-weight: $fw-400;
    font-size: $fs-18;
    line-height: 1.16;
    color: $color-charade-gray;
  }
  &__input-hidden {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
  }
  &__input-visible {
    position: absolute;
    top: -2px;
    width: 24px;
    height: 24px;
    border: 1px solid $color-jumbo-gray;
    border-radius: $br-8;
  }
  &__icon {
    position: absolute;
    top: 15%;
    left: 2.5%;
    display: none;
  }
  &__input-hidden:checked ~ &__input-visible {
    background-color: $color-bittersweet-red;
  }
  &__input-hidden:checked ~ &__icon {
    display: block;
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
</style>
