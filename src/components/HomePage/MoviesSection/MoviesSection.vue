<script>
import { defineComponent } from 'vue';

import MoviesSectionCard from '@/components/HomePage/MoviesSection/MoviesSectionCard.vue';

const moviesList = [
{
id: 1,
title: "Harry Potter and the Philosopher's Stone",
genre: { id: 3, name: "Fantasy" },
poster_url:
    "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
length: 159
},
{
id: 2,
title: "Star Wars Episode IV: A New Hope",
genre: { id: 4, name: "Sci-Fi" },
poster_url:
    "https://img01.mgo-images.com/image/thumbnail/v2/content/MMVD85527F13D6BC8CB6518D4B8DF956FAD2.jpeg",
length: 125
},
{
id: 3,
title: "You've got Mail",
genre: { id: 5, name: "Romance" },
poster_url: "https://miro.medium.com/max/520/0*JeA6QiQ6BzuNzKHP.jpg",
length: 120
}
];

export default defineComponent({
    name: 'MoviesSection',
    components: {
        MoviesSectionCard,
    },
    data() {
        return {
            movies: moviesList,
        }
    },
});
</script>

<template>
    <section class="movies-section">
        <div class="movies-section-header">
            <h2 class="movies-section-header-text">soon<span class="movies-section-header-text--toggle"> in the cinema</span></h2>
            <a href="#" class="movies-section-header-link">see all</a>
        </div>
        <div class="movies-section-content">
            <MoviesSectionCard 
                v-for="movie in movies" 
                :key="movie.id" 
                :movieTitle="movie.title" 
                :movieImgUrl="movie.poster_url"
                :movieLength="movie.length" 
                :movieGenre="movie.genre.name"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.movies-section {
    margin-bottom: 64px;

    .movies-section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        .movies-section-header-text, .movies-section-header-link {
            font-family: $font-roboto-mono;
            font-weight: $fw-700;
            font-size: $fs-22;
            line-height: 170%;
            letter-spacing: 0.015em;
            text-transform: uppercase;
        }

        .movies-section-header-text {
            color: $color-tuna-gray;

            .movies-section-header-text--toggle {
                @include screen-small {
                    display: none;
                }
            }
        }
        
        .movies-section-header-link {
            color: $color-cherry-red;
            text-decoration: none;
        }
    }

    .movies-section-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 0px;

        @include screen-medium {
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 40px
        }
        
        @include screen-small {
            grid-template-columns: repeat(1, 1fr);
            grid-row-gap: 40px
        }

    }
    
    @include screen-small {
        padding: 24px;
        margin-bottom: 88px;
    }

    @include screen-medium {
        .movies-section-card {
            &:nth-child(3) {
                display: none;
            }
        }
    }
}
</style>