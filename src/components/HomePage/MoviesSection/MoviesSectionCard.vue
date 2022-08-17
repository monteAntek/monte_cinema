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
            default: 'Movie Title I',
        },
        movieImgUrl: {
            type: String,
            default: 'https://via.placeholder.com/300x150'
        },
        movieLength: {
            type: Number,
            default: 150,
        },
        movieGenre: {
            type: String,
            default: 'Genre',
        },
    },
    methods: {
        movieDuration(movieLength) {
            const hours = Math.floor(movieLength / 60);
            const minutes = `0${movieLength % 60}`.slice(-2);
            return `${hours}h ${minutes}min`;
            
        }
    },
});
</script>

<template>
    <div class="movies-section-card">
        <h3 class="movies-section-card-title">{{movieTitle}}</h3>
        <span class="movies-section-card-duration">{{movieDuration(movieLength)}}</span>
        <img class="movies-section-card-image" :src="movieImgUrl">
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
        max-height: 192px;
        object-fit: cover;
        object-position: top;
        margin-bottom: 16px;
    }

    @include screen-small {
        padding: 24px;
    }
}
</style>