<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String
    },
    to: {
      type: [String, Object]
    },
    colorScheme: {
      type: String,
      validator(value) {
        return [
          'red-fill',
          'red-border',
          'pink-border',
          'pink-BG',
          'gray-fill',
          'gray-border',
          'red-text',
          'gray-text',
          'dark-gray-text'
        ].includes(value);
      },
      default: 'red-fill'
    },
    size: {
      type: String,
      validator(value) {
        return ['small', 'medium', 'large', 'x-large'].includes(value);
      },
      default: 'x-large'
    }
  },
  computed: {
    buttonClasses() {
      return [
        'button',
        { 'button--red-fill': this.colorScheme === 'red-fill' },
        { 'button--red-border': this.colorScheme === 'red-border' },
        { 'button--pink-border': this.colorScheme === 'pink-border' },
        { 'button--pink-BG': this.colorScheme === 'pink-BG' },
        { 'button--gray-fill': this.colorScheme === 'gray-fill' },
        { 'button--gray-border': this.colorScheme === 'gray-border' },
        { 'button--red-text': this.colorScheme === 'red-text' },
        { 'button--gray-text': this.colorScheme === 'gray-text' },
        { 'button--dark-gray-text': this.colorScheme === 'dark-gray-text' },
        { 'button--small': this.size === 'small' },
        { 'button--medium': this.size === 'medium' },
        { 'button--large': this.size === 'large' },
        { 'button--x-large': this.size === 'x-large' }
      ];
    }
  },
  emits: ['click']
});
</script>

<template>
  <template v-if="to">
    <router-link :class="buttonClasses" :colorScheme="colorScheme" :to="to">
      <slot />
    </router-link>
  </template>
  <template v-else>
    <button
      :type="type"
      :class="buttonClasses"
      :colorScheme="colorScheme"
      @click="$emit('click', $event)"
    >
      <slot />
    </button>
  </template>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 2px solid transparent;
  border-radius: $br-64;
  text-align: center;
  font-weight: $fw-500;
  line-height: 1;
  letter-spacing: 0.015em;
  font-family: $font-roboto-mono;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  &--red-fill {
    background-color: $color-cherry-red;
    border-color: $color-cherry-red;
    color: $color-snow-white;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      background-color: $color-totem-pole-red;
      border-color: $color-bittersweet-red;
      color: $color-snow-white;
    }
  }

  &--red-border {
    background-color: $color-snow-white;
    border-color: $color-cherry-red;
    color: $color-cherry-red;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      background-color: $color-cherry-red;
      border-color: $color-totem-pole-red;
      color: $color-snow-white;
    }
  }

  &--gray-fill {
    background-color: $color-athens-gray;
    border-color: $color-athens-gray;
    color: $color-jumbo-gray;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      border-color: $color-jumbo-gray;
    }
  }

  &--red-text {
    background-color: transparent;
    border-color: transparent;
    color: $color-cherry-red;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      background-color: $color-wisp-pink;
      border-color: $color-cherry-red;
    }
  }

  &--dark-gray-text {
    background-color: transparent;
    border-color: $color-tuna-gray;
    color: $color-tuna-gray;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      background-color: $color-tuna-gray;
      color: $color-snow-white;
    }
  }

  &--pink-BG {
    background-color: $color-fair-pink;
    border-color: $color-fair-pink;
    color: $color-cherry-red;
    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      border-color: $color-cherry-red;
    }
  }

  &--x-large {
    padding: 19px 40px;
    font-size: $fs-18;
  }

  &--large {
    padding: 12px 32px;
    font-size: $fs-16;
  }

  &--medium {
    padding: 0 24px;
    font-size: $fs-16;
  }
}
</style>
