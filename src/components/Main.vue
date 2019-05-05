<template>
  <div class="main">
    <input type="search" name="searchbox" id="searchbox" placeholder="Input Your Topic">
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#searchbox{
  width: 50vw;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: slategrey;
  border-radius: 15px;
  border: 2px solid slategray;
  text-decoration-style: none;
  outline: none;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
</style>
