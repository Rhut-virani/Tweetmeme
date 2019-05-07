<template>
  <div class="main">
      <div class="form" v-on:submit="submitform">
        <form action="" id="searchbox">
            <input v-model="message" type="text"  placeholder="Search" required>
            <button type="submit" class="submit">
                <i class="fas fa-search"></i>
            </button>  
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  },
  data(){
    return{
    message: '',
  }
  },
  methods: {
    submitform(e){
      e.preventDefault();
      this.$emit('getMemes', this.message);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main
  {
    width: 100vw;
    height: 20vh;
    color: #5a6674;
}
#searchbox{
  width: 50vw;
  height: 10vh;
  transform: translate(50%, 50%);
}
#searchbox .focus {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
input{
  border-style: none;
  text-align: center;
  font-size: 1.5rem;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
}
input::placeholder{
  color: #e24040;
  font-weight:500;
}
.submit{
  border: none;
  background-color: transparent;
  outline: none;
  text-decoration: none;
  height: inherit;
  position: absolute;
  right: 5%;
  font-size: 1.3rem;
  color: #e24040;
}


</style>
