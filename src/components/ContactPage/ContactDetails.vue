<script setup lang="ts">
import ContactIconLocation from '@/assets/icons/contact/contact-icon-location.svg?component';
import ContactIconEmail from '@/assets/icons/contact/contact-icon-email.svg?component';
import ContactIconPhone from '@/assets/icons/contact/contact-icon-phone.svg?component';
</script>

<template>
  <section class="details">
    <div class="details__element">
      <ContactIconLocation />
      <div class="details__element__rows">
        <p>Monterail Sp. z o. o.</p>
        <p>ul. Oławska 27-29</p>
        <p>50-123 Wrocław</p>
        <p>Poland</p>
      </div>
    </div>
    <div class="details__element">
      <ContactIconEmail />
      <p>hello@monterail.com</p>
    </div>
    <div class="details__element">
      <ContactIconPhone />
      <p>+48 533 600 136</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.details {
  height: 412px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 46px;
  background-color: $color-athens-gray;
  padding: 64px 90px;

  &__element {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    font-family: $font-roboto-mono;
    font-weight: $fw-400;
    font-size: $fs-18;
    line-height: 1.8;
    letter-spacing: 0.015em;
    color: $color-tuna-gray;
  }
}
</style>
