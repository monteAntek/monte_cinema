<script>
import { defineComponent } from 'vue';

import SearchIcon from '@/assets/icons/search-icon.svg';

export default defineComponent({
  name: 'BaseTextInput',
  components: {
    SearchIcon
  },
  props: {
    inputName: {
      type: String,
      default: 'BaseInput'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'placeholder'
    },
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input', 'update:modelValue']
});
</script>

<template>
  <div class="text-input">
    <label :for="inputName" class="text-input__label"><slot /></label>
    <input
      class="text-input__input"
      :id="inputName"
      :type="inputType"
      :modelValue="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <SearchIcon class="text-input--search" v-if="isSearch" />
  </div>
</template>

<style lang="scss" scoped>
.text-input {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  &__label {
    @include inputLabel;
  }

  &__input {
    @include inputInput;
    color: $color-jumbo-gray;
  }

  &--search {
    font-size: $fs-32;
    position: absolute;
    right: 3%;
    top: 48%;
  }
}
</style>
