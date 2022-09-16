<script setup lang="ts">
import ContactIconTwitter from '@/assets/icons/contact/contact-icon-twitter.svg?component';
import ContactIconFacebook from '@/assets/icons/contact/contact-icon-facebook.svg?component';
import ContactIconLinkedin from '@/assets/icons/contact/contact-icon-linkedin.svg?component';
import ContactIconInstagram from '@/assets/icons/contact/contact-icon-instagram.svg?component';
import ContactIconGithub from '@/assets/icons/contact/contact-icon-github.svg?component';
import ContactIconBehance from '@/assets/icons/contact/contact-icon-behance.svg?component';
import ContactIconDribble from '@/assets/icons/contact/contact-icon-dribble.svg?component';
</script>
<template>
  <div class="panel">
    <ContactIconTwitter class="panel__icon" />
    <ContactIconFacebook class="panel__icon" />
    <ContactIconLinkedin class="panel__icon" />
    <ContactIconInstagram class="panel__icon" />
    <ContactIconGithub class="panel__icon" />
    <ContactIconBehance class="panel__icon" />
    <ContactIconDribble class="panel__icon" />
  </div>
</template>

<style lang="scss" scoped>
.panel {
  max-width: 80px;
  max-height: 412px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: $color-athens-gray;

  @include screen-small {
    flex-direction: row;
    gap: 9px;
    max-width: 320px;
  }
}
</style>
