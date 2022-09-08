<script>
import { defineComponent } from 'vue';

import BaseTextInput from '@/components/global/BaseTextInput.vue';
import SearchIcon from '@/assets/icons/search-icon.svg';

export default defineComponent({
  name: 'PasswordInput',
  components: {
    BaseTextInput,
    SearchIcon
  },
  props: {
    modelValue: {
      type: String
    }
  },
  data() {
    return {
      inputValue: ''
    };
  },
  watch: {
    inputValue() {
      this.$emit('update:modelValue', this.inputValue);
    }
  },
  emits: ['focus', 'input', 'update:modelValue']
});
</script>

<template>
  <div class="search-input" v-bind="$attrs">
    <BaseTextInput
      :type="$attrs.type"
      v-model="inputValue"
      :id="$attrs.id"
      :required="$attrs.required"
      :placeholder="$attrs.placeholder"
    >
      <template #label> search </template>
      <template #icon>
        <SearchIcon />
      </template>
    </BaseTextInput>
  </div>
</template>

<style lang="scss" scoped></style>
