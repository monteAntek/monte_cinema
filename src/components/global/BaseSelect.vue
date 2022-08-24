<script>
import { defineComponent } from 'vue';

import SelectArrowIcon from '@/assets/icons/select-arrow-icon.svg';

export default defineComponent({
  name: 'BaseSelect',
  components: {
    SelectArrowIcon
  },
  props: {
    selectOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'update:modelValue']
});
</script>

<template>
  <div class="select-input">
    <label for="" class="select-input__label"><slot /></label>
    <select
      class="select-input__select"
      :modelValue="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        class="select-input__select__option"
        v-for="option in selectOptions"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <SelectArrowIcon class="select-input__icon" />
  </div>
</template>

<style lang="scss" scoped>
.select-input {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  &__label {
    @include inputLabel;
  }

  &__select,
  &__icon {
    &:hover {
      cursor: pointer;
    }
  }

  &__select {
    appearance: none;
    @include inputInput;
    color: $color-tuna-gray;
  }

  &__icon {
    position: absolute;
    right: 3%;
    top: 48%;
  }
}
</style>
