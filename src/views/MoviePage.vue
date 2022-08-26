<script>
import { defineComponent } from 'vue';

import { getMovieDetails } from '../api/monteCinemaApi';

import BaseTag from '@/components/global/BaseTag.vue';

export default defineComponent({
  name: 'MoviePage',
  components: {
    BaseTag
  },
  data() {
    return {
      id: this.$route.params.movieId,
      movie: {
        id: null,
        title: '',
        genre: '',
        length: null,
        release_date: '',
        description: '',
        poster_url: ''
      }
    };
  },
  methods: {
    async getMovieData() {
      this.movie = await getMovieDetails(this.id);
    }
  },
  computed: {
    movieDuration() {
      const hours = Math.floor(this.movie.length / 60);
      const minutes = `0${this.movie.length % 60}`.slice(-2);
      return `${hours}h ${minutes}min`;
    },
    movieGenre() {
      return this.movie.genre.name;
    },
    movieReleaseYear() {
      return this.movie.release_date.slice(0, 4);
    }
  },
  mounted() {
    this.getMovieData(this.id);
  }
});
</script>

<template>
  <section class="movie">
    <div class="movie__text-container">
      <h2 class="movie__text-container__title">{{ movie.title }}</h2>
      <div class="movie__text-container__tags">
        <BaseTag
          class="movie__text-container__tags__tag"
          :labels="[movieGenre]"
          colorScheme="red"
        />
        <BaseTag
          class="movie__text-container__tags__tag"
          :labels="[movieReleaseYear, movieDuration]"
          colorScheme="gray"
        />
      </div>
      <p class="movie__text-container__description">{{ movie.description }}</p>
    </div>
    <div class="movie__image-container">
      <img
        class="movie__image-container__image"
        :src="movie.poster_url"
        :alt="movie.title"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.movie {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
  margin: 64px 0;

  &__text-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &__title {
      @include headingFontFace;
      color: $color-tuna-gray;
      margin-bottom: 32px;

      @include screen-small {
        font-size: 48px;
      }
    }

    &__tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    &__description {
      font-family: $font-roboto-mono;
      font-weight: $fw-400;
      font-size: $fs-22;
      line-height: 1.7;
      letter-spacing: 0.015rem;
      color: $color-tuna-gray;
    }

    @include screen-small {
      width: 100%;
    }
  }

  &__image-container {
    flex: 1;
    display: flex;

    &__image {
      width: 100%;
      object-fit: cover;
      object-position: top;
    }

    @include screen-small {
      order: -1;
      width: 100%;
    }
  }

  @include screen-small {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    padding: 24px;
  }
}
</style>
