<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { formatDate, nextDay, dayNameENG } from '@/helpers/date';

import BaseButton from '@/components/global/BaseButton.vue';
import BaseSelect from '@/components/global/BaseSelect.vue';
import CalendarIcon from '@/assets/icons/calendar-icon.svg?component';
import Datepicker from '@vuepic/vue-datepicker';

import { useScreeningsStore } from '@/store/screenings';
import { useMoviesStore } from '@/store/movies';

const screenings = useScreeningsStore();
const { currentDate } = storeToRefs(screenings);

const movies = useMoviesStore();

interface Props {
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  modelValue: ''
});

const selectDays = computed(() => {
  const today = new Date();
  const selectDays = [];
  selectDays.push({
    id: 1,
    date: formatDate(today),
    title: 'Today'
  });
  for (let i = 1; i < 6; i++) {
    const date = nextDay(today);
    selectDays.push({
      id: i + 1,
      date: formatDate(date),
      title: dayNameENG(date, 'short')
    });
  }
  return selectDays;
});

const movieTitles = computed(() => {
  return ['All movies', ...movies.titles];
});

function setCurrentDate(date: string) {
  screenings.setCurrentDate(date);
}
</script>

<template>
  <section class="search-bar">
    <div class="search-bar__date">
      <div class="search-bar__date__radio-group">
        <BaseButton
          class="search-bar__date__radio-group__button"
          v-for="day of selectDays"
          :key="day.id"
          @click="setCurrentDate(day.date)"
          colorScheme="dark-gray-text"
          >{{ day.title }}</BaseButton
        >
      </div>
      <Datepicker v-model="currentDate">
        <template #trigger>
          <div class="search-bar__date__picker">
            <CalendarIcon />
          </div>
        </template>
      </Datepicker>
    </div>
    <div class="search-bar__movie">
      <BaseSelect
        :selectOptions="movieTitles"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 64px;
  &__label {
    @include inputLabel;
  }
  &__date {
    display: flex;
    flex-direction: row;
    gap: 12px;
    &__radio-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      &__button {
        @include screen-medium {
          &:nth-child(5),
          &:nth-child(6) {
            display: none;
          }
        }
        @include screen-small {
          &:nth-child(5),
          &:nth-child(6) {
            display: none;
          }
        }
      }
      @include screen-small {
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    }
    &__picker {
      padding: 10px;
      border: 2px solid $color-tuna-gray;
      border-radius: 40px;
      svg {
        color: $color-snow-white;
      }
      &:hover {
        background-color: $color-tuna-gray;
        color: $color-snow-white;
        cursor: pointer;
      }
    }
  }
  &__movie {
    width: 100%;
  }
  @include screen-small {
    flex-direction: column;
  }
}
</style>
