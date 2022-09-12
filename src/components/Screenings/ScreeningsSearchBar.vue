<script>
import { defineComponent } from 'vue';
import { formatDate, nextDay, dayNameENG } from '../../helpers/date';

import { mapActions, mapState, mapWritableState } from 'pinia';
import { useScreeningsStore } from '@/store/screenings';
import { useMoviesStore } from '@/store/movies';

import BaseSelect from '@/components/global/BaseSelect.vue';
import BaseButton from '@/components/global/BaseButton.vue';

import CalendarIcon from '@/assets/icons/calendar-icon.svg';

import Datepicker from '@vuepic/vue-datepicker';

export default defineComponent({
  name: 'ScreeningsSearchBar',
  components: {
    BaseButton,
    BaseSelect,
    Datepicker,
    CalendarIcon
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState(useScreeningsStore, ['formattedDate']),
    ...mapWritableState(useScreeningsStore, ['currentDate']),
    ...mapState(useMoviesStore, ['titles']),
    selectDays() {
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
    },
    movieTitles() {
      return ['All movies', ...this.titles];
    },
    screenWidth() {
      return screen.width;
    }
  },
  methods: {
    ...mapActions(useScreeningsStore, ['setCurrentDate'])
  },
  emits: ['click', 'update:modelValue']
});
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__date">
      <label class="search-bar__label" v-if="$slots.label">
        <slot name="label" />
      </label>
      <div class="search-bar__date__radio-group" role="radiogroup">
        <BaseButton
          class="search-bar__date__radio-group__button"
          v-for="day of selectDays"
          :key="day.id"
          @click="setCurrentDate(day.date)"
          colorScheme="dark-gray-text"
        >
          {{ day.title }}
        </BaseButton>
        <Datepicker v-model="currentDate" autoApply>
          <template #trigger>
            <div class="search-bar__date__picker">
              <CalendarIcon />
            </div>
          </template>
        </Datepicker>
      </div>
    </div>
    <div class="search-bar__movie">
      <BaseSelect
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :selectOptions="movieTitles"
      >
        <template #label>movie</template>
      </BaseSelect>
    </div>
  </div>
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
    flex-direction: column;
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
