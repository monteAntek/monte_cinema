<script>
import { defineComponent } from 'vue';

import BaseHeader from '@/components/global/BaseHeader.vue';

export default defineComponent({
  name: 'AuthHeader',
  components: {
    BaseHeader
  },
  props: {
    activeStep: {
      type: Number
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    mainText() {
      if (this.activeStep === 1) {
        return 'Ahoy You!';
      } else if (this.activeStep === 2) {
        return 'Great!';
      } else return 'Hi there!';
    },
    subText() {
      if (this.activeStep === 1) {
        return 'Care to register?';
      } else if (this.activeStep === 2) {
        return 'Now Your name';
      } else return 'Care to log in?';
    }
  }
});
</script>

<template>
  <div class="auth-header">
    <BaseHeader :headerText="mainText" :subHeaderText="subText" />
  </div>
</template>

<style lang="scss" scoped>
.auth-header {
  width: 603px;
}
</style>
