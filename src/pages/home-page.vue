<script>
    import { defineComponent } from 'vue';

    import HeroSection from '@/components/home-page/hero-section/hero-section.vue';
    
    export default defineComponent({
        name: 'HomePage',
        components: {
            HeroSection,
        },
        props: {},
        data() {
            return {}
        },
    });
</script>

<template>
    <div class="homepage">
        <HeroSection />
    </div>
</template>

<style lang="scss" scoped>
    .homepage {
        margin: 0 48px;
        @include screen-small {
            margin: 0 48px;
        @include screen-small {
            margin: 0 auto;
        }
        }
    }
</style>