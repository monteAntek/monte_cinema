<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import { useRoute } from 'vue-router';

import { getMovieDetails } from '@/api/movies';

import BreadCrumbs from '@/components/global/BreadCrumbs.vue';
import BaseTag from '@/components/global/BaseTag.vue';
import ScreeningsPage from '@/views/ScreeningsPage.vue';

const route = useRoute();

const movie = ref();

const movieId = computed(() => {
  const id = route.params.movieId;
  return id;
});

const movieDuration = computed(() => {
  const hours = Math.floor(movie.value.length / 60);
  const minutes = `0${movie.value.length % 60}`.slice(-2);
  return `${hours}h ${minutes}min`;
});

const movieGenre = computed(() => {
  return movie.value.genre.name;
});

const movieReleaseYear = computed(() => {
  const releaseDate = new Date(movie.value.release_date);
  return releaseDate.getFullYear();
});

const breadCrumbs = computed(() => {
  return [{ label: 'Movies', route: 'Movies' }, { label: movie.value.title }];
});

watch(
  movieId,
  async () => {
    if (movieId.value) {
      try {
        movie.value = await getMovieDetails(movieId.value);
      } catch (error) {
        console.error(error);
      }
    }
  },
  { immediate: true }
);
</script>

<template>
  <section class="movie">
    <BreadCrumbs backRoute="Movies" :crumbs="breadCrumbs" />
    <div class="movie__body">
      <div class="movie__body__text-container">
        <h2 class="movie__body__text-container__title">
          {{ movie.title }}
        </h2>
        <div class="movie__body__text-container__tags">
          <BaseTag
            class="movie__body__text-container__tags__tag"
            :labels="[movieGenre]"
            colorScheme="red"
          />
          <BaseTag
            class="movie__body__text-container__tags__tag"
            :labels="[movieReleaseYear, movieDuration]"
            colorScheme="gray"
          />
        </div>
        <p class="movie__body__text-container__description">
          {{ movie.description }}
        </p>
      </div>
      <div class="movie__body__image-container">
        <img
          class="movie__body__image-container__image"
          :src="movie.poster_url"
          :alt="movie.title"
        />
      </div>
    </div>
    <ScreeningsPage
      :movie-title="movie.title"
      header-size="small"
      for-single-movie
    />
  </section>
</template>

<style lang="scss" scoped>
.movie {
  &__body {
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
}
</style>
