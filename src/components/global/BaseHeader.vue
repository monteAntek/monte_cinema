<script setup lang="ts">
interface Props {
  headerText: string;
  subHeaderText: string;
}

withDefaults(defineProps<Props>(), {
  headerText: 'Header',
  subHeaderText: 'Sub Header'
});
</script>

<template>
  <section class="header">
    <h1 class="header__main">{{ headerText }}</h1>
    <h2 class="header__sub">{{ subHeaderText }}</h2>
  </section>
</template>

<style lang="scss" scoped>
.header {
  margin-top: 124px;
  margin-bottom: 40px;
  &__main,
  &__sub {
    align-self: flex-start;
    font-family: $font-eczar;
    font-weight: $fw-600;
    font-size: $fs-80;
    line-height: 1.02;
    letter-spacing: -0.01em;
    @include screen-small {
      font-size: $fs-40;
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
