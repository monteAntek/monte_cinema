<script setup lang="ts">
import ContactMap from '@/components/ContactPage/ContactMap.vue';
import ContactDetails from '@/components/ContactPage/ContactDetails.vue';
import ContactIconPanel from '@/components/ContactPage/ContactIconPanel.vue';
import BaseHeader from '../components/global/BaseHeader.vue';
</script>

<template>
  <section class="contact">
    <BaseHeader class="contact__header" header-text="Contact us" />
    <div class="contact__body">
      <ContactMap class="contact__body__map" />
      <ContactDetails class="contact__body__details" />
      <ContactIconPanel class="contact__body__icons" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &__body {
    display: flex;
    @include screen-small {
      margin: 0 24px;
    }
  }
}
</style>
