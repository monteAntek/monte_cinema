<script setup lang="ts">
import ContactIconLocation from '@/assets/icons/contact/contact-icon-location.svg?component';
import ContactIconEmail from '@/assets/icons/contact/contact-icon-email.svg?component';
import ContactIconPhone from '@/assets/icons/contact/contact-icon-phone.svg?component';
</script>

<template>
  <section class="details">
    <div class="details__element">
      <div class="details__element__icon">
        <ContactIconLocation />
      </div>
      <div class="details__element__text">
        <p>
          Monterail Sp. z o.o.<br />
          ul. Oławska 27-29<br />
          50-123 Wrocław<br />
          Poland
        </p>
      </div>
    </div>
    <div class="details__element">
      <div class="details__element__icon">
        <ContactIconEmail />
      </div>
      <div class="details__element__text">
        <p>hello@monterail.com</p>
      </div>
    </div>
    <div class="details__element">
      <div class="details__element__icon">
        <ContactIconPhone />
      </div>
      <div class="details__element__text">
        <p>+48 533 600 136</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: $color-athens-gray;
  padding: 64px 32px 64px 64px;

  &__element {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @include screen-small {
      gap: 10px;
    }

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    &__icon {
      align-self: flex-start;
    }

    &__text {
      font-family: $font-roboto-mono;
      font-weight: $fw-400;
      font-size: $fs-18;
      line-height: 1.77;
      letter-spacing: 0.015em;
      color: $color-tuna-gray;

      @include screen-small {
        font-size: $fs-16;
      }

      p {
        display: block;
        white-space: nowrap;
      }
    }
  }

  @include screen-small {
    padding: 30px;
  }
}
</style>
