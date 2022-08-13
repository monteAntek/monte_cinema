<script>
    import { defineComponent } from 'vue';

    import MonteCinemaIcon from '@/assets/icons/monte-cinema-logo.svg';
    import ToggleNavOpenIcon from '@/assets/icons/toggle-nav-open-icon.svg';
    import ToggleNavClosedIcon from '@/assets/icons/toggle-nav-closed-icon.svg';
    import NavLinks from './nav-links.vue';
    import NavButtonContainer from './nav-button-container.vue';

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
                isVisible: 'is-visible',
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
                <ToggleNavOpenIcon v-if="!isNavOpen" />
                <ToggleNavClosedIcon v-if="isNavOpen" />
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
        height: 112px;

        .nav-toggle-icon {
            display: none;
        }
        
        @include screen-small {
            flex-direction: column;
            padding: 0 24px;
            height: 98px;

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