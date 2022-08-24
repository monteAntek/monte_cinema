<script>
import { defineComponent } from 'vue';

import BaseButton from '@/components/global/BaseButton.vue';

export default defineComponent({
  name: 'HeroSection',
  components: {
    BaseButton
  }
});
</script>

<template>
  <section class="hero">
    <div class="hero__text-container">
      <h1 class="hero__text-container__heading">
        Welcome to the <br />
        best cinema in Monterail
      </h1>
      <p class="hero__text-container__paragraph">
        Best movies, best experiences, best people. And all of that doesn't
        exist. Yikes.
      </p>
      <BaseButton
        class="hero__text-container__action-button"
        colorScheme="red-fill"
        size="x-large"
      >
        Book a ticket
      </BaseButton>
    </div>
    <div class="hero__image-container">
      <img
        class="hero__image-container__image"
        src="@/assets/images/hero-section-image.png"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  margin-bottom: 64px;

  &__text-container {
    padding: 80px;
    background-color: $color-wisp-pink;
    text-align: start;
    @include screen-small {
      padding: 40px 32px;
      flex-direction: column;
      text-align: center;
    }

    &__heading {
      font-family: $font-eczar;
      font-size: $fs-80;
      font-weight: $fw-600;
      line-height: 1.02;
      letter-spacing: -0.01em;
      margin-bottom: 40px;
      @include screen-small {
        font-size: $fs-48;
        br {
          display: none;
        }
      }
    }

    &__paragraph {
      font-family: $font-roboto-mono;
      font-size: $fs-22;
      font-weight: $fw-400;
      color: $color-tuna-gray;
      line-height: 1.7;
      margin-bottom: 40px;
    }

    &__action-button {
      @include screen-small {
        width: 100%;
      }
    }
  }

  &__image-container {
    &__image {
      height: 100%;
    }
    @include screen-medium {
      display: none;
    }
    @include screen-small {
      display: none;
    }
  }
}
</style>
