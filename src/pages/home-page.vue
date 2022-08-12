<script>
    import { defineComponent } from 'vue';
    import NavBar from '../components/global/nav-bar/nav-bar.vue';
    export default defineComponent({
        components: {
            NavBar,
        },
        name: 'HomePage',
        props: {},
        data() {
            return {}
        },
    });
</script>

<template>
    <div class="homepage">
        <NavBar />
    </div>
</template>

<style lang="scss" scoped>
    .homepage {
        margin: 0 auto;
    }
</style>