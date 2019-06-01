<template>
  <div class="main">
    <div
      class="form"
      @submit="submitform"
    >
      <form
        id="searchbox"
        action=""
      >
        <input
          v-model="message"
          type="text"
          placeholder="Search"
          required
        >
        <button
          type="submit"
          class="submit"
        >
          <i class="fas fa-search" />
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
.form{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
    height: 20vh;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
}
#searchbox{
  width: 75vw;
  height: 10vh;
  position: fixed;
  z-index: 100;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
@media screen and (min-width: 899px) {
  #searchbox{
    width: 50vw;
  }
}
#searchbox .focus {
    -webkit-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
            box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
input{
  border-style: none;
  text-align: center;
  font-size: 1.5rem;
  outline: none;
  border-radius: 40px;
  -webkit-box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
}
input::-webkit-input-placeholder{
  color: #e24040;
  font-weight:500;
}
input:-ms-input-placeholder{
  color: #e24040;
  font-weight:500;
}
input::-ms-input-placeholder{
  color: #e24040;
  font-weight:500;
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
