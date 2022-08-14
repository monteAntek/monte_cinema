<script>
import { defineComponent } from 'vue';

import BaseButton from '@/components/global/BaseButton.vue';

export default defineComponent({
    name: 'HeroSection',
    components: {
        BaseButton,
    }
});
</script>

<template>
    <section class="hero-section">
        <div class="hero-text-container">
            <h1 class="hero-section-heading">
                Welcome to the <br/> best cinema in Monterail
            </h1>
            <p class="hero-section-paragraph">
                Best movies, best experiences, best people.
                
                And all of that doesn't exist. Yikes.
            </p>
            <BaseButton class="hero-action-button" is="a" label="Book a ticket" colorScheme="redFill" size="56" />
        </div>
        <div class="hero-image-container">
            <img class="hero-image" src="@/assets/images/hero-section-image.png" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero-section {
    display: flex;
    
    .hero-text-container {
        padding: 80px;
        background-color: $color-wisp-pink;
        text-align: start;
        @include screen-small {
            padding: 40px 32px;
            flex-direction: column;
            text-align: center;
        }
    
        .hero-section-heading {
            font-family: $font-eczar;
            font-size: $fs-80;
            font-weight: $fw-600;
            line-height: 102%;
            letter-spacing: -0.01em;
            margin-bottom: 40px;
            @include screen-small {
                font-size: $fs-48;
                br {
                    display: none;
                }
            }
        }

        .hero-section-paragraph {
            font-family: $font-roboto-mono;
            font-size: $fs-22;
            font-weight: $fw-400;
            color: $color-tuna-gray;
            line-height: 170%;
            margin-bottom: 40px;
        }

        .hero-action-button {
            @include screen-small {
                width: 100%;
            }
        }
    }

    .hero-image-container {
        
        .hero-image {
            height: 100%;
        }
        @include screen-medium {
            display: none;
        }
        @include screen-small {
            display: none;
        }
    }
}
</style>