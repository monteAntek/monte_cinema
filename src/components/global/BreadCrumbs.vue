<script setup lang="ts">
import { useRouter } from 'vue-router';

import BaseButton from '@/components/global/BaseButton.vue';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?component';
import ChevronRightIcon from '@/assets/icons/chevron-right-icon.svg?component';

const router = useRouter();

interface Crumb {
  label: string;
  route?: string;
}

interface Props {
  crumbs?: Crumb[];
}

defineProps<Props>();

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="bread-crumbs">
    <BaseButton
      colorScheme="dark-gray-text"
      size="medium"
      @click="goBack"
      class="bread-crumbs__back-btn"
    >
      <ArrowLeftIcon />
      <span class="bread-crumbs__back-btn__label">Back</span>
    </BaseButton>
    <div v-if="crumbs" class="bread-crumbs__items">
      <template v-for="(crumb, index) in crumbs" :key="index">
        <component
          :is="crumb.route ? 'router-link' : 'span'"
          :to="crumb.route ? { name: crumb.route } : ''"
        >
          {{ crumb.label }}
        </component>
        <ChevronRightIcon v-if="index < crumbs.length - 1" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-crumbs {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  background-color: $color-wisp-pink;
  padding: 22px 24px;
  margin-bottom: 64px;

  @include screen-small {
    gap: 8px;
    padding: 4px 24px;
    margin-bottom: 40px;
  }

  &__back-btn {
    @include screen-small {
      padding: 0;
    }

    &__label {
      @include screen-small {
        display: none;
      }
    }

    @include screen-small {
      border-color: transparent;
    }
  }

  &__items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-family: $font-roboto-mono;
    font-weight: $fw-500;
    font-size: $fs-16;
    line-height: 1.5;
    text-overflow: ellipsis;

    @include screen-small {
      gap: 12px;
      font-size: $fs-12;
    }

    a {
      text-decoration: none;
      color: $color-cherry-red;
    }

    span {
      color: $color-tuna-gray;
    }
  }
}
</style>
