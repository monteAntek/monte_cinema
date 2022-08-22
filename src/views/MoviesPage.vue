<script>
import { defineComponent } from 'vue';

import BaseTextInput from '@/components/global/BaseTextInput.vue';
import BaseSelect from '@/components/global/BaseSelect.vue';
import MoviesContainer from '@/components/MoviesPage/MoviesContainer.vue';

import { useMoviesStore } from '@/store/movies';
const moviesStore = useMoviesStore();

export default defineComponent({
  name: 'MoviesPage',
  components: {
    BaseTextInput,
    BaseSelect,
    MoviesContainer
  },
  data() {
    return {
      searchQuery: '',
      movieCategory: ''
    };
  },
  computed: {
    movies() {
      return moviesStore.allMovies;
    },
    genres() {
      return [...new Set(moviesStore.genres)];
    },
    moviesByGenre() {
      return this.movieCategory === '' ||
        this.movieCategory === 'All Categories'
        ? this.movies
        : this.movies.filter(
            (movie) => movie.genre.name === this.movieCategory
          );
    },
    filteredMovies() {
      return this.searchQuery
        ? this.moviesByGenre.filter((movie) =>
            movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        : this.moviesByGenre;
    },
    selectGenres() {
      return ['All Categories', ...this.genres];
    }
  }
});
</script>

<template>
  <div class="movies">
    <h1 class="movies__heading">All the movies</h1>
    <div class="movies__search-bar">
      <BaseTextInput
        class="movies__search-bar__search"
        inputName="search"
        type="text"
        v-model="searchQuery"
        placeholder="What are you looking for?"
        isSearch
      >
        search
      </BaseTextInput>
      <BaseSelect
        class="movies__search-bar__category"
        inputName="category"
        v-model="movieCategory"
        :selectOptions="selectGenres"
      >
        category
      </BaseSelect>
    </div>
    <MoviesContainer class="movies__container" :movies="filteredMovies" />
  </div>
</template>

<style lang="scss" scoped>
.movies {
  @include flex-Col-JCenter-ACenter;

  &__heading {
    align-self: flex-start;
    font-family: $font-eczar;
    font-size: $fs-80;
    font-weight: $fw-600;
    line-height: 1.02;
    letter-spacing: -0.01em;
    color: $color-tuna-gray;
    margin-top: $mt-40;
    margin-bottom: 32px;

    @include screen-small {
      font-size: $fs-48;
      align-self: center;
    }
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
</style>
