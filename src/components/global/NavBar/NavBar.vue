<script>
import { defineComponent } from 'vue';

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
        NavButtonContainer,
    },
    props: {
        userType: {
            validator(value) {
                return ['public', 'client', 'employee'].includes(value);
            },
        },
    },
    data() {
        return {
            isNavOpen: false,
        }
    },
    methods: {
        toggleNavOpen() {
            this.isNavOpen = !this.isNavOpen;
        },
    },
});
</script>

<template>
    <nav 
        class="navbar"
        :userType="userType" 
    >
        <div class="nav-header-small">
            <div class="nav-monte-logo">
                <MonteCinemaIcon />
            </div>
            <div 
                class="nav-toggle-icon" 
                @click="toggleNavOpen"
            >
                <ToggleNavOpenIcon v-show="!isNavOpen" />
                <ToggleNavClosedIcon v-show="isNavOpen" />
            </div>
        </div>
        <NavLinks class="nav-links" :class="{'is-visible' : isNavOpen}" />
        <NavButtonContainer class="nav-button-container" :class="{'is-visible' : isNavOpen}" />
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 48px;
    min-height: 112px;
    background-color: $color-snow-white;

    .nav-toggle-icon {
        display: none;
    }
        
    @include screen-small {
        flex-direction: column;
        padding: 0 24px;
        min-height: 98px;

        .nav-header-small {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 30px 24px;

            .nav-toggle-icon {
                display: block;
                &:hover {
                    cursor: pointer;
                }
            }
        }

        .nav-links, .nav-button-container {
            display: none;
        }
        .is-visible {
            display: flex;
        }
    }       
}
</style>