<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'BaseButton',
        props: {
            tag: {
                type: String,
                default: 'a',
            },
            label: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                default: '#'
            },
            colorScheme: {
                type: String,
                default: 'redFill',
            },
            size: {
                type: String,
                required: true,
            },
        },
        emits: ['click'],
    });

</script>

<template>
    <component 
        class="base-button"
        :is="tag"
        :url="url"
        :colorScheme="colorScheme" 
        :size="size"
        @click="$emit('click')"
        >
        {{label}}
    </component>
</template>

<style lang="scss">
    .base-button {
        border: 2px solid transparent;
        border-radius: $button-radius;
        text-align: center;
        font-weight: $fw-500;
        line-height: 100%;
        letter-spacing: 0.015em;
        font-family: $font-roboto-mono;
        &:hover {
            cursor: pointer;
        }
        @include screen-small {
            width: 100%;
        }
    }

    .base-button[colorScheme="redFill"] {
        background-color: $color-cherry-red;
        border-color: $color-cherry-red;
        color: $color-snow-white;
        &:hover {
            background-color: $color-totem-pole-red;
            border-color: $color-bittersweet-red;
            color: $color-snow-white;
        }
    }
    
    .base-button[colorScheme="redTextOnly"] {
        background-color: transparent;
        border-color: transparent;
        color: $color-cherry-red;
        &:hover {
            background-color: $color-wisp-pink;
            border-color: $color-cherry-red;
        }
    }

    .base-button[size="40"] {
        padding: 12px 32px;
        font-size: $fs-16;
        
    }
    
    .base-button[size="56"] {
        padding: 19px 40px;
        font-size: $fs-18;
        
    }
    
    .base-button[is="a"] {
        display: inline-block;
    }

</style>