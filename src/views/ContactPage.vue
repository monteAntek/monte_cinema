<script setup lang="ts">
import { computed } from 'vue';

import ContactSection from '@/components/ContactPage/ContactSection.vue';
import BreadCrumbs from '@/components/global/BreadCrumbs.vue';

const breadCrumbs = computed(() => {
  return [{ label: 'Contact' }];
});
</script>

<template>
  <section class="contact">
    <BreadCrumbs :crumbs="breadCrumbs" />
    <ContactSection />
  </section>
</template>

<style lang="scss" scoped></style>
