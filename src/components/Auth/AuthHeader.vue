<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthHeader',
  props: {
    activeStep: {
      type: Number
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    mainText() {
      if (this.activeStep === 1) {
        return 'Ahoy You!';
      } else if (this.activeStep === 2) {
        return 'Great!';
      } else return 'Hi there!';
    },
    subText() {
      if (this.activeStep === 1) {
        return 'Care to register?';
      } else if (this.activeStep === 2) {
        return 'Now Your name';
      } else return 'Care to log in?';
    }
  }
});
</script>

<template>
  <section class="auth-header">
    <h1 class="auth-header__main">{{ mainText }}</h1>
    <h2 class="auth-header__sub">{{ subText }}</h2>
  </section>
</template>

<style lang="scss" scoped>
.auth-header {
  width: 603px;
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
  }
}
</style>
