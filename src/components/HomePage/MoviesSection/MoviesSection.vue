<script>
import { defineComponent } from 'vue';

import MovieCard from '@/components/MoviesPage/MovieCard.vue';

export default defineComponent({
  name: 'MoviesSection',
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array,
      default() {
        return [];
      }
    }
  }
});
</script>

<template>
  <section class="movies" v-if="movies.length">
    <div class="movies__header">
      <h2 class="movies__header__text">
        soon<span class="movies__header__text--toggle"> in the cinema</span>
      </h2>
      <router-link :to="{ name: 'Movies' }" class="movies__header__link">
        see all
      </router-link>
    </div>
    <div class="movies__cards">
      <MovieCard
        class="movies__cards__item"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.movies {
  margin-bottom: 64px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    &__text,
    &__link {
      font-family: $font-roboto-mono;
      font-weight: $fw-700;
      font-size: $fs-22;
      line-height: 1.7;
      letter-spacing: 0.015em;
      text-transform: uppercase;
    }

    &__text {
      color: $color-tuna-gray;

      &--toggle {
        @include screen-small {
          display: none;
        }
      }
    }

    &__link {
      color: $color-cherry-red;
      text-decoration: none;
    }
  }

  &__cards {
    @include moviesGrid;

    &__item {
      @include screen-medium {
        &:nth-child(3) {
          display: none;
        }
      }
    }
  }

  @include screen-small {
    padding: 24px;
    margin-bottom: 88px;
  }
}
</style>
