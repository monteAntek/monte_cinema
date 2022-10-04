<script setup lang="ts">
import { computed, ref } from 'vue';

import BreadCrumbs from '@/components/global/BreadCrumbs.vue';
import BaseHeader from '@/components/global/BaseHeader.vue';
import BaseSelect from '@/components/global/BaseSelect.vue';
import SearchInput from '@/components/MoviesPage/SearchInput.vue';
import MoviesContainer from '@/components/MoviesPage/MoviesContainer.vue';

import { useMoviesStore } from '@/store/movies';
const moviesStore = useMoviesStore();

const searchQuery = ref('');
const movieCategory = ref('All Categories');

const moviesByGenre = computed(() => {
  return movieCategory.value === '' || movieCategory.value === 'All Categories'
    ? moviesStore.allMovies
    : moviesStore.allMovies.filter(
        (movie) => movie.genre.name === movieCategory.value
      );
});

const filteredMovies = computed(() => {
  return searchQuery.value
    ? moviesByGenre.value.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : moviesByGenre.value;
});

const selectGenres = computed(() => {
  return ['All Categories', ...moviesStore.genres];
});

const breadCrumbs = computed(() => {
  return [{ label: 'Movies' }];
});
</script>

<template>
  <section class="movies">
    <BreadCrumbs :crumbs="breadCrumbs" />
    <div class="movies__body">
      <BaseHeader header-text="All the movies" class="movies__body__header" />
      <div class="movies__body__search-bar">
        <SearchInput
          class="movies__body__search-bar__search"
          inputName="search"
          type="text"
          v-model="searchQuery"
          placeholder="What are you looking for?"
        />
        <BaseSelect
          class="movies__body__search-bar__category"
          inputName="category"
          v-model="movieCategory"
          :selectOptions="selectGenres"
        >
          <template #label> category </template>
        </BaseSelect>
      </div>
      <MoviesContainer
        class="movies__body__container"
        :movies="filteredMovies"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.movies {
  &__body {
    @include flex-Col-JCenter-ACenter;

    &__header {
      margin-bottom: 32px;
    }

    &__search-bar {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      margin-bottom: 64px;

      &__search {
        flex-grow: 5;
      }

      &__category {
        flex-grow: 2;
      }
      @include screen-small {
        flex-direction: column;
        &__search,
        &__category {
          width: 100%;
        }
      }
    }

    @include screen-small {
      padding: 0 24px;
    }
  }
}
</style>
