<script>
    import { defineComponent } from 'vue';

    import MonteCinemaIcon from '../../../assets/icons/monte-cinema-logo.svg';
    import ToggleNavOpenIcon from '../../../assets/icons/toggle-nav-open-icon.svg';
    import ToggleNavClosedIcon from '../../../assets/icons/toggle-nav-closed-icon.svg';
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
                type: String,
                default: 'public', //Others: client, employee
            },
        },
        data() {
            return {
                isScreenSmall: false,
                isNavOpen: false,
            }
        },
        methods: {
            watchScreenSmall() {
                this.isScreenSmall = window.innerWidth < 1024;
            },
            toggleNavOpen() {
                this.isNavOpen = !this.isNavOpen;
            },
        },
        created() {
            this.watchScreenSmall();
            window.addEventListener('resize', this.watchScreenSmall);
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
                v-if="isScreenSmall" 
                @click="toggleNavOpen"
            >
                <ToggleNavOpenIcon v-if="!isNavOpen" />
                <ToggleNavClosedIcon v-if="isNavOpen" />
            </div>
        </div>
        <NavLinks v-if="isScreenSmall && isNavOpen || !isScreenSmall" />
        <NavButtonContainer v-if="isScreenSmall && isNavOpen || !isScreenSmall" />
        

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
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            
        }

        
    }
</style>