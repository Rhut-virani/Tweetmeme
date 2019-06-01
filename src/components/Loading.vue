<template>
  <!-- <transition> -->
  <div 
    v-if="isLoading"
    class="loading"
  >
    <div class="lds-dual-ring loadingText" />      
  </div>
  <!-- </transition> -->
</template>
<script>
export default {
      name: "Loading",
    props: {
        isLoading: {
            type: Boolean,
            default: true,
        }
    }
}
</script>
<style scoped>

.loading{
    width: 100vw;
    height: 80vh
}
.loadingText{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%)
}

.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-color: #fff transparent #fff transparent;
  -webkit-animation: lds-dual-ring 1.2s linear infinite;
          animation: lds-dual-ring 1.2s linear infinite;
}
@-webkit-keyframes lds-dual-ring {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes lds-dual-ring {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
</style>
