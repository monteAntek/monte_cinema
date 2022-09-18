<script setup lang="ts">
import ContactMap from '@/components/ContactPage/ContactMap.vue';
import ContactDetails from '@/components/ContactPage/ContactDetails.vue';
import ContactIconPanel from '@/components/ContactPage/ContactIconPanel.vue';
import BaseHeader from '@/components/global/BaseHeader.vue';
</script>
<template>
  <section class="container">
    <BaseHeader class="container__header" header-text="Contact us" />
    <div class="container__body">
      <ContactMap v-if="$route.name !== 'Home'" class="container__body__map" />
      <ContactDetails class="container__body__details" />
      <ContactIconPanel class="container__body__icons" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-bottom: 64px;

  &__body {
    display: flex;

    &__details {
      flex-grow: 2;
    }

    @include screen-medium {
      flex-grow: 0;
    }

    @include screen-small {
      flex-direction: column;
      margin: 0 24px;
    }
  }
}
</style>
