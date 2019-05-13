<template>
  <div class=" col-xl-3 col-lg-4 col-md-6 d-flex flex-fill">
    <figure
      class="figure"
      data-toggle="modal"
      data-target="#modalCenter"
      :style="{backgroundImage: 'url(' + photo.url + ')'}"
      @click="$emit('set-currentItem', photo)"
    />
  </div>
</template>

<script>
export default {
    name: 'Photos',
    props: {
        photo: {
                type: Object,
                default: function () { return {} },
        },
      }
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
    width: inherit;
    margin: 1rem 0;
}
</style>
