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
  data() {
    return {
      isSelectOpen: false
    };
  },
  computed: {
    currentOption() {
      return this.modelValue;
    }
  },
  methods: {
    toggleSelect() {
      this.isSelectOpen = !this.isSelectOpen;
    }
  },
  emits: ['click', 'update:modelValue']
});
</script>

<template>
  <div class="select" v-bind="$attrs">
    <label class="select__label" :for="$attrs.id" v-if="$slots.label">
      <slot name="label" />
    </label>
    <button
      class="select__button"
      aria-haspopup="true"
      aria-controls="list"
      @click="toggleSelect()"
    >
      <span class="select__selectedOption">{{ currentOption }}</span>
      <SelectArrowIcon class="select__icon" />
    </button>
    <div
      class="select__dropdown"
      v-if="isSelectOpen"
      id="list"
      role="listbox"
      :aria-activedescendant="modelValue"
    >
      <div
        class="select__dropdown__option"
        v-for="option in selectOptions"
        :key="option"
        :value="option"
        role="option"
        @click="$emit('update:modelValue', option), toggleSelect()"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;

  &__label {
    @include inputLabel;
  }

  &__button {
    width: 100%;
    @include inputInput;
    position: relative;
    text-align: left;
    &:hover {
      cursor: pointer;
      background: $color-inputHover-gray;
    }
  }

  &__selectedOption {
    font-family: $font-roboto;
    font-weight: $fw-400;
    font-size: $fs-18;
    color: $color-tuna-gray;
  }

  &__icon {
    position: absolute;
    top: 25%;
    right: 2%;
  }

  &__dropdown {
    position: absolute;
    top: 97%;
    left: 0;
    right: 0;
    z-index: 99;
    border-radius: 0 0 $br-8 $br-8;
    background-color: $color-athens-gray;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__option {
      padding: 18px 24px;
      font-family: $font-roboto;
      font-weight: $fw-400;
      font-size: $fs-18;
      color: $color-tuna-gray;
      border-radius: $br-8;
      &:hover {
        cursor: pointer;
        background: $color-inputHover-gray;
      }
    }
  }
}
</style>
