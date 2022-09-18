<script setup lang="ts"></script>

<template>
  <div class="map">
    <img
      src="@/assets/images/contact-map.png"
      alt="Monte Cinema Location map"
    />
  </div>
</template>

<style lang="scss" scoped>
.map {
  img {
    object-fit: cover;
    height: 412px;
    width: 100%;
    display: block;
    border-radius: 8px 0 0 8px;

    @include screen-small {
      border-radius: 8px 8px 0 0;
      height: 284px;
    }
  }
}
</style>
