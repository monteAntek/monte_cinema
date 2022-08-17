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
        }
    },
});
</script>

<template>
    <div class="navbar__links">
        <div class="navbar__link-wrapper" v-for="url in urls" :key="url.id">
            <a class="navbar__link" :href="url.url">{{url.displayName}}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar__links {
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: $color-snow-white;
    
    @include screen-small {
        flex-direction: column;
        width: 100%;
    }

    .navbar__link-wrapper {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        border-bottom: 5px solid transparent;
        &:hover {
            cursor: pointer;
            border-bottom: 5px solid $color-cherry-red;
        }
        .navbar__link {
            display: block;
            text-decoration: none;
            font-family: $font-roboto;
            font-size: $fs-18;
            color: $color-jumbo-gray;
            padding: 24px;
            
           
            @include screen-small {
                width: 100%;
            }
        }
    }
} 
</style>