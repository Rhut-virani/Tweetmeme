<template>
    <div class=" col-xl-3 col-lg-4 col-md-6 d-flex flex-fill">
        <figure class="figure" data-toggle="modal" data-target="#modalCenter" @click="$emit('set-currentItem', photo)"  v-bind:style="{backgroundImage: 'url(' + photo.url + ')'}">
            <!-- <img :src= photo.url class="figure-img img-fluid rounded" alt="..."> -->
            <figcaption class="figure-caption"></figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    name: 'Photos',
    props: ["photo"]
}
</script>

<style scoped>

div{
    min-height: 35vh;
}
figure{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: inherit;
}
</style>
