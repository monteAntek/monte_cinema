<script setup lang="ts"></script>

<template>
  <div class="map">
    <img src="@/assets/images/contact-map.png" alt="" srcset="" />
  </div>
</template>

<style lang="scss" scoped>
.map {
  img {
    width: 100%;
    height: 412px;
    object-fit: cover;
    @include screen-small {
      height: 284px;
    }
  }
}
</style>
