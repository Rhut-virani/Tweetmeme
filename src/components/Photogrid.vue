<template>
  <div class="container">
    <div class="row">
      <Photos
        v-for="(photo, ivalue) in photos"
        :key="`${ivalue}-${photo.id}`"
        :photo="photo"
        @set-currentItem="$emit('set-currentItem', photo)"
      />
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
    props: {
        photos: {
                type: Array,
                default: function () { return [] },
        },
        isShowing: {
            type: Boolean,
            default: false,
        }
    }

}
</script>

<style scoped>

</style>
