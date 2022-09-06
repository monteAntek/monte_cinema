<script>
import { defineComponent } from 'vue';

import { mapState } from 'pinia';
import { useAuthStore } from '@/store/auth.js';

import MonteCinemaIcon from '@/assets/icons/monte-cinema-logo.svg';
import ToggleNavOpenIcon from '@/assets/icons/toggle-nav-open-icon.svg';
import ToggleNavClosedIcon from '@/assets/icons/toggle-nav-closed-icon.svg';
import NavLinks from '@/components/global/NavBar/NavLinks.vue';
import NavButtonContainer from '@/components/global/NavBar/NavButtonContainer.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    MonteCinemaIcon,
    ToggleNavOpenIcon,
    ToggleNavClosedIcon,
    NavLinks,
    NavButtonContainer
  },
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNavOpen() {
      this.isNavOpen = !this.isNavOpen;
    }
  },
  computed: {
    ...mapState(useAuthStore, ['isLoggedIn']),
    currentRouteName() {
      return this.$route.name;
    }
  }
});
</script>

<template>
  <nav class="nav">
    <div class="nav__header--small">
      <router-link :to="{ name: 'Home' }" class="nav__logo">
        <MonteCinemaIcon />
      </router-link>
      <div class="nav__toggle-icon" @click="toggleNavOpen">
        <ToggleNavOpenIcon v-show="!isNavOpen" />
        <ToggleNavClosedIcon v-show="isNavOpen" />
      </div>
    </div>
    <template
      v-if="currentRouteName === 'Login' || currentRouteName === 'Register'"
    >
      <span class="auth-slogan" :class="{ 'is-visible': isNavOpen }"
        >developed with ❤️ by monterail</span
      >
    </template>
    <template v-else>
      <NavLinks class="nav__links" :class="{ 'is-visible': isNavOpen }" />
      <NavButtonContainer
        class="nav__actions"
        :class="{ 'is-visible': isNavOpen }"
        :isLoggedIn="isLoggedIn"
      />
    </template>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  min-height: 112px;
  background-color: $color-snow-white;

  &__toggle-icon {
    display: none;
  }

  @include screen-small {
    flex-direction: column;
    padding: 0 24px;
    min-height: 98px;

    &__header--small {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 30px 24px;

      .nav__toggle-icon {
        display: block;
        &:hover {
          cursor: pointer;
        }
      }
    }

    &__links,
    &__actions {
      display: none;
    }
    .is-visible {
      display: block;
      margin-bottom: 32px;
    }
  }

  .auth-slogan {
    font-family: $font-roboto-mono;
    font-weight: $fw-500;
    font-size: $fs-16;
    line-height: 1.3;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: $color-tuna-gray;
    @include screen-small {
      display: none;
    }
  }
}
</style>
