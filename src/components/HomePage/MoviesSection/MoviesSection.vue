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
      default: [
        {
          id: 1,
          title: "Harry Potter and the Philosopher's Stone",
          genre: { id: 3, name: 'Fantasy' },
          poster_url:
            'https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg',
          length: 159
        },
        {
          id: 2,
          title: 'Star Wars Episode IV: A New Hope',
          genre: { id: 4, name: 'Sci-Fi' },
          poster_url:
            'https://img01.mgo-images.com/image/thumbnail/v2/content/MMVD85527F13D6BC8CB6518D4B8DF956FAD2.jpeg',
          length: 125
        },
        {
          id: 3,
          title: "You've got Mail",
          genre: { id: 5, name: 'Romance' },
          poster_url: 'https://miro.medium.com/max/520/0*JeA6QiQ6BzuNzKHP.jpg',
          length: 120
        }
      ]
    }
  }
});
</script>

<template>
  <section class="movies">
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
        :movieId="movie.id"
        :movieTitle="movie.title"
        :movieImgUrl="movie.poster_url"
        :movieLength="movie.length"
        :movieGenre="movie.genre.name"
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
