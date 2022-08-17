<script>
import { defineComponent } from 'vue';

import HeroSection from '@/components/HomePage/HeroSection/HeroSection.vue';
import MoviesSection from '@/components/HomePage/MoviesSection/MoviesSection.vue';

export default defineComponent({
    name: 'HomePage',
    components: {
        HeroSection,
        MoviesSection,
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
        <MoviesSection />
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