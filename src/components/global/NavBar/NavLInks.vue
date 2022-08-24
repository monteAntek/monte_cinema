<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavLinks',
  urls: [
    { id: 1, displayName: 'Movies', routeName: 'Movies' },
    { id: 2, displayName: 'Screenings', routeName: 'Screenings' },
    { id: 3, displayName: 'Contact us', routeName: 'Contact' }
  ]
});
</script>

<template>
  <div class="container">
    <router-link
      class="container__link"
      v-for="url in $options.urls"
      :key="url.id"
      :to="{ name: url.routeName }"
    >
      {{ url.displayName }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: $color-snow-white;

  &__link {
    align-self: stretch;
    display: block;
    text-decoration: none;
    font-family: $font-roboto;
    font-size: $fs-18;
    color: $color-jumbo-gray;
    padding: 48px 24px 24px 24px;
    border-bottom: 5px solid transparent;
    &:hover {
      cursor: pointer;
      border-bottom: 5px solid $color-cherry-red;

      @include screen-small {
        width: 100%;
      }
    }
  }
  .router-link-active {
    border-bottom: 5px solid $color-cherry-red;
  }
  @include screen-small {
    flex-direction: column;
    width: 100%;
  }
}
</style>
