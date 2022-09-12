<script>
import { defineComponent } from 'vue';

import { hoursAndMinutes } from '@/helpers/date';

import BaseTag from '@/components/global/BaseTag.vue';
import BaseButton from '@/components/global/BaseButton.vue';

export default defineComponent({
  name: 'ScreeningsCard',
  components: {
    BaseTag,
    BaseButton
  },
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    screenings: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getMovieDuration(length) {
      return hoursAndMinutes(length);
    },
    getScreeningTime(time) {
      return new Date(time).toLocaleTimeString().slice(0, 5);
    }
  }
});
</script>

<template>
  <div class="card">
    <img class="card__image" :src="movie.poster_url" :alt="movie.title" />
    <div class="card__body">
      <h3 class="card__body__title">
        <router-link :to="{ name: 'Movie', params: { movieId: movie.id } }">
          {{ movie.title }}
        </router-link>
      </h3>
      <div class="card__body__tags">
        <BaseTag :labels="[movie.genre.name]" />
        <BaseTag
          :labels="[getMovieDuration(movie.length)]"
          colorScheme="gray"
        />
      </div>
      <div class="card__body__screenings">
        <BaseButton
          v-for="screening of screenings"
          :key="screening.id"
          colorScheme="red-border"
          size="large"
          >{{ getScreeningTime(screening.datetime) }}</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  gap: 40px;
  border-radius: $br-8;
  box-shadow: $movie-card-shadow;
  padding: 40px;
  &__image {
    max-width: 100px;
    @include screen-small {
      max-width: 200px;
    }
  }
  &__body {
    &__title {
      font-family: $font-roboto;
      font-weight: $fw-700;
      font-size: $fs-24;
      line-height: 1.16;
      margin-bottom: 16px;
      a {
        color: $color-tuna-gray;
        text-decoration: none;
      }
    }
    &__tags {
      display: flex;
      gap: 16px;
      margin-bottom: 32px;
    }
    &__screenings {
      display: flex;
      gap: 8px;
      @include screen-small {
        flex-wrap: wrap;
      }
    }
    @include screen-small {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @include screen-small {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
