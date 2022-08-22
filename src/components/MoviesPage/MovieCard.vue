<script>
import { defineComponent } from 'vue';

import BaseTag from '@/components/global/BaseTag.vue';

export default defineComponent({
  name: 'MovieCard',
  components: {
    BaseTag
  },
  props: {
    movieId: {
      type: Number,
      default: 1
    },
    movieTitle: {
      type: String,
      default: 'Movie Title I'
    },
    movieImgUrl: {
      type: String,
      default: 'https://via.placeholder.com/300x150'
    },
    movieLength: {
      type: Number,
      default: 150
    },
    movieGenre: {
      type: String,
      default: 'Genre'
    }
  },
  methods: {
    movieDuration(movieLength) {
      const hours = Math.floor(movieLength / 60);
      const minutes = `0${movieLength % 60}`.slice(-2);
      return `${hours}h ${minutes}min`;
    }
  }
});
</script>

<template>
  <div class="card">
    <router-link
      class="card__title"
      :to="{ name: 'Movie', params: { movieId: movieId } }"
    >
      {{ movieTitle }}
    </router-link>
    <span class="card__duration">{{ movieDuration(movieLength) }}</span>
    <img class="card__image" :src="movieImgUrl" />
    <BaseTag :labels="[movieGenre]" colorScheme="red" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  border-radius: $br-8;
  box-shadow: $movie-card-shadow;

  &__title,
  &__duration {
    font-family: $font-roboto;
    font-weight: $fw-700;
    margin-bottom: 16px;
  }

  &__title {
    text-decoration: none;
    font-size: $fs-36;
    line-height: 1.17;
    color: $color-tuna-gray;
  }

  &__duration {
    font-size: $fs-14;
    line-height: 1.14;
    color: $color-jumbo-gray;
  }

  &__image {
    width: 100%;
    max-height: 192px;
    object-fit: cover;
    object-position: top;
    margin-bottom: 16px;
  }

  @include screen-small {
    padding: 24px;
  }
}
</style>
