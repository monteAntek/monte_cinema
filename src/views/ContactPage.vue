<script setup lang="ts">
import ContactMap from '@/components/ContactPage/ContactMap.vue';
import ContactDetails from '@/components/ContactPage/ContactDetails.vue';
import ContactIconPanel from '@/components/ContactPage/ContactIconPanel.vue';
</script>

<template>
  <div class="contact">
    <ContactMap />
    <ContactDetails />
    <ContactIconPanel />
  </div>
</template>

<style lang="scss" scoped>
.contact {
  margin: 0 24px !important;
}
</style>
