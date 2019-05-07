<template>
    <div class="container">
        <div class="row">
            <Photos v-for="photo in photos" :photo="photo" :key="photo.id" v-on:set-currentItem="$emit('set-currentItem', photo)"/>
        </div>
    </div>
</template>

<script>
import Photos from './Photos.vue'
export default {
    name: 'Photogrid',
    components: {
        Photos,
    },
    props: ["photos"]

}
</script>

<style scoped>
/* .container{ */
    /* margin: 0; */
    /* max-width: 100vw; */
    /* opacity: 0.5; */
/* } */
</style>
