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
    <a to="#" class="panel__link"><ContactIconTwitter /></a>
    <a to="#" class="panel__link"> <ContactIconFacebook /></a>
    <a to="#" class="panel__link"> <ContactIconLinkedin /></a>
    <a to="#" class="panel__link"> <ContactIconInstagram /></a>
    <a to="#" class="panel__link"><ContactIconGithub /></a>
    <a to="#" class="panel__link"><ContactIconBehance /></a>
    <a to="#" class="panel__link"><ContactIconDribble /></a>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  background-color: $color-athens-gray;
  border-radius: 0 8px 8px 0;

  &__link {
    &:hover {
      cursor: pointer;
    }
  }

  @include screen-small {
    flex-direction: row;
    border-radius: 0 0 8px 8px;
  }
}
</style>
