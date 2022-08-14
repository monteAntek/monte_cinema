<script>
    import { defineComponent } from 'vue';

    import BaseButton from '@/components/global/base-button.vue';

    export default defineComponent({
        name: 'NavButtonContainer',
        components: {
            BaseButton,
        },
    });
</script>

<template>
    <div class="nav-button-container">
        <BaseButton class="nav-register-button" :is="'a'" label="Register" colorScheme="redTextOnly" size="40" />
        <BaseButton class="nav-register-link" :is="'a'" label="Login" colorScheme="redFill" size="40" />
    </div>
</template>

<style lang="scss">
    .nav-button-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        background-color: $color-snow-white;
        @include screen-small {
            flex-direction: column;
            width: 100%;
        }
    }
</style>