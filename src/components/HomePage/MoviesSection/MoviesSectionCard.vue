<script>
import { defineComponent } from 'vue';

import BaseTag from '@/components/global/BaseTag.vue';

export default defineComponent({
    name: 'MoviesSectionCard',
    components: {
        BaseTag,
    },
    props: {
        movieTitle: {
            type: String,
            required: true,
        },
        movieImgUrl: {
            type: String,
            required: true,
        },
        movieLength: {
            type: Number,
            required: true,
        },
        movieGenre: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            bgImage: {backgroundImage: `url(${this.movieImgUrl})`},
        }
    },
    methods: {
        movieDuration(movieLength) {
            const hours = Math.floor(movieLength / 60);
            const minutes = `0${movieLength % 60}`.slice(-2);
            return `${hours}h ${minutes}min`;
            
        }
    }
});
</script>

<template>
    <div class="movies-section-card">
        <h3 class="movies-section-card-title">{{movieTitle}}</h3>
        <span class="movies-section-card-duration">{{movieDuration(movieLength)}}</span>
        <div class="movies-section-card-image" :style="bgImage">
            
        </div>
        <BaseTag :labels="[movieGenre]" colorScheme='red'/>
    </div>
</template>

<style lang="scss" scoped>
.movies-section-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px;
    border-radius: $br-8;
    box-shadow: $movie-card-shadow;

    .movies-section-card-title, .movies-section-card-duration {
        font-family: $font-roboto;
        font-weight: $fw-700;
        margin-bottom: 16px;
    }

    .movies-section-card-title {
        font-size: $fs-36;
        line-height: 117%;
        color: $color-tuna-gray;
    }

    .movies-section-card-duration {
        font-size: $fs-14;
        line-height: 114%;
        color: $color-jumbo-gray;
    }

    .movies-section-card-image {
        width: 100%;
        height: 192px;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 16px;
    }

    @include screen-small {
        padding: 24px;
    }
}
</style>