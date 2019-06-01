<template>
  <div class="footer">
    <div
      class="prev"
      :class="{'disabled':(next <= 0)}"
      :disabled="true"
      @click="$emit('get-prev')"
    >
      Prev
    </div>
    <div
      class="next" 
      :class="{'disabled':(next >= (dataurl.length-25))}"
      @click="$emit('get-next')"
    >
      Next
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
  props:{
    next: {
      type: Number,
      default: 0,
    },
    dataurl:{
      type: Array,
      defualt: [''],
    }
  }
}
</script>

<style scoped>
.footer{
  width: 50vw;
  height: 10vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2%;
  text-align: center;
}
.prev, .next{
  display: inline-block;
  width: 10vw;
  color: #e24040;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none; 
  font-size: 1.2rem;
  margin-right: 5%;
}

@media (min-width: 1199) {
  .prev, .next {
    position: fixed; 
    top: 50%;
    transform: translateY(-50%);
  }
  .prev{
    left: 0;
  }
  .next{
    right: 0;
  }
}

.disabled{
  opacity: 0.5;
  pointer-events: none;
}

</style>

