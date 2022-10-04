<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  headerText: string;
  subHeaderText?: string;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  headerText: 'Header',
  size: 'large'
});

const sizeClasses = computed(() => {
  return [
    { 'header--large': props.size === 'large' },
    { 'header--medium': props.size === 'medium' },
    { 'header--small': props.size === 'small' }
  ];
});
</script>

<template>
  <section class="header" :class="sizeClasses">
    <h1 class="header__main">{{ headerText }}</h1>
    <h2 v-if="subHeaderText" class="header__sub">{{ subHeaderText }}</h2>
  </section>
</template>

<style lang="scss" scoped>
.header {
  align-self: flex-start;
  font-family: $font-eczar;
  font-weight: $fw-600;
  line-height: 1.02;
  letter-spacing: -0.01em;

  &--large {
    font-size: $fs-80;

    @include screen-small {
      font-size: $fs-48;
    }
  }

  &--medium {
    font-size: $fs-64;

    @include screen-small {
      font-size: $fs-48;
    }
  }

  &--small {
    font-size: $fs-32;

    @include screen-small {
      font-size: $fs-24;
    }
  }

  &__main {
    color: $color-tuna-gray;
  }

  &__sub {
    color: $color-jumbo-gray;
  }

  @include screen-small {
    text-align: center;
    width: 100%;
    margin-top: 40px;
  }
}
</style>
