<script>
import { defineComponent } from 'vue';

import TagEllipse from '@/assets/icons/tag-ellipse.svg';

export default defineComponent({
  name: 'BaseTag',
  components: {
    TagEllipse
  },
  props: {
    labels: {
      type: Array,
      default: () => ['label']
    },
    colorScheme: {
      validator(value) {
        return ['red', 'gray', 'transparent'].includes(value);
      },
      default: 'red'
    }
  },
  computed: {
    tagLabels() {
      return [
        'tag',
        { 'tag--red': this.colorScheme === 'red' },
        { 'tag--gray': this.colorScheme === 'gray' },
        { 'tag--transparent': this.colorScheme === 'transparent' }
      ];
    }
  }
});
</script>

<template>
  <div :class="tagLabels" :colorScheme="colorScheme">
    <div
      class="tag__label-container"
      v-for="(label, index) in labels"
      :key="index"
    >
      <span class="tag__label">{{ label }}</span>
      <TagEllipse class="tag__label-ellipse" v-if="index < labels.length - 1" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  flex-shrink: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: $br-64;
  &__label-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    .tag__label {
      font-family: $font-roboto;
      font-weight: $fw-700;
      font-size: $fs-14;
      line-height: 1.14;
    }
  }
  &--red {
    background-color: $color-wisp-pink;
    color: $color-bittersweet-red;
  }

  &--gray {
    background-color: $color-athens-gray;
    color: $color-jumbo-gray;
  }

  &--transparent {
    background-color: transparent;
    color: $color-athens-gray;
  }
}
</style>
