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
  emits: ['focus', 'input', 'update:modelValue']
});
</script>

<template>
  <div class="search-input" v-bind="$attrs">
    <BaseTextInput
      :type="$attrs.type"
      :model-value="inputValue"
      :id="$attrs.id"
      :required="$attrs.required"
      :placeholder="$attrs.placeholder"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
      <template #label> search </template>
      <template #icon>
        <SearchIcon />
      </template>
    </BaseTextInput>
  </div>
</template>

<style lang="scss" scoped></style>
