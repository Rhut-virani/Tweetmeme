<template>
    <!-- <transition> -->
    <div class="loading" v-if="isLoading">
        <div class="lds-dual-ring loadingText"></div>      
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
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
