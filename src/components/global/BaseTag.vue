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
            type: [String],
            required: true,
        },
        colorScheme: {
            validator(value) {
                return ['red', 'gray', 'transparent'].includes(value);
            },
            required: true,
        },
    },
});
</script>

<template>
    <div 
        class="base-tag"
        :labels="labels"
        :colorScheme="colorScheme"
    >
        <div class="base-tag-label-container" v-for="label in labels" :key="label">
            <div class="base-tag-label" v-if="labels.length === 1">
                <span class="base-tag-label-text">{{label}}</span>
            </div>
            <div class="base-tag-label" v-else-if="labels.length > 1">
                <span class="base-tag-label-text">{{label}}</span>
                <TagEllipse class="base-tag-label-ellipse"  />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.base-tag {
    flex-shrink: 2;
    padding: 8px 16px;
    border-radius: $br-64;
    .base-tag-label-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .base-tag-label {

        .base-tag-label-text {
            font-family: $font-roboto;
            font-weight: $fw-700;
            font-size: $fs-14;
            line-height: 114%;
        }
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