<script>
import { defineComponent } from 'vue';

import TagEllipse from '@/assets/icons/tag-ellipse.svg';

export default defineComponent({
    name: 'BaseTag',
    components: {
        TagEllipse,
    },
    props: {
        labels: {
            type: Array,
            default() {
                return ['label'];
            },
        },
        colorScheme: {
            validator(value) {
                return ['red', 'gray', 'transparent'].includes(value);
            },
            default: 'red',
        },
    },
});
</script>

<template>
    <div 
        class="base-tag"
        :colorScheme="colorScheme"
    >
        <div class="base-tag-label-container" v-for="(label, index) in labels" :key="index">
            <span class="base-tag-label">{{label}}</span>
            <TagEllipse class="base-tag-label-ellipse" v-if="index < labels.length - 1" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.base-tag {
    flex-shrink: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border-radius: $br-64;
    .base-tag-label-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

        .base-tag-label {
            font-family: $font-roboto;
            font-weight: $fw-700;
            font-size: $fs-14;
            line-height: 114%;
        }
    }
}

.base-tag[colorScheme='red'] { 
    background-color: $color-wisp-pink;
    color: $color-bittersweet-red;
}

.base-tag[colorScheme='gray'] { 
    background-color: $color-athens-gray;
    color: $color-jumbo-gray;
}

.base-tag[colorScheme='transparent'] { 
    background-color: transparent;
    color: $color-athens-gray;
}
</style>