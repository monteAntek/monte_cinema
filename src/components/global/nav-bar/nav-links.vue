<script>
import { defineComponent } from 'vue';

export default defineComponent({
   name: 'NavLinks',
   data() {
    return {
        urls: [
            {id: 1, displayName: 'Movies', url: '#'},
            {id: 2, displayName: 'Screenings', url: '#'},
            {id: 3, displayName: 'Contact us', url: '#'},
        ],
    };
   },
});
</script>
<template>
    <div class="navbar__links">
        <a class="navbar__link" v-for="url in urls" :key="url.id" :href="url.url">{{url.displayName}}</a>
    </div>
</template>
<style lang="scss">
    .navbar__links {
        display: flex;
        gap: 10px;
        @include screen-small {
            flex-direction: column;
            width: 100%;
        }

        .navbar__link {
            text-decoration: none;
            font-family: $font-roboto;
            font-size: $fs-18;
            color: $color-jumbo-gray;
            padding: 24px;
            border-bottom: 5px solid transparent;
            &:hover {
                cursor: pointer;
                border-bottom: 5px solid $color-cherry-red;
            }
            @include screen-small {
                width: 100%;
            }
        }
    }
    
</style>