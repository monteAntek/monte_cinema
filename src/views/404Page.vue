<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: '404Page'
});
</script>

<template>
  <div class="error-message">
    <h1>404</h1>
    <h2>Seems that we caught You accessing a URL that doesnt exist!</h2>
  </div>
</template>

<style lang="scss" scoped>
.error-message {
  text-align: center;
  padding: 48px;
  @include flex-Col-JCenter-ACenter;

  h1 {
    font-size: 200px;
    font-family: $font-eczar;
    color: $color-cherry-red;

    @include screen-small {
      font-size: 100px;
    }
  }

  h2 {
    font-size: 45px;
    font-family: $font-eczar;
    color: $color-jumbo-gray;
    @include screen-small {
      font-size: 22px;
    }
  }
  @include screen-small {
    padding: 24px;
  }
}
</style>
