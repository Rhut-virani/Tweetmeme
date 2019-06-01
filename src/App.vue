<template>
  <div id="app">
  <!-- Search Bar -->
  <Nav @getMemes="getMemes" />

    <!-- Modal -->
    <Modal :current-item="currentItem" />

    <!-- Photogrid -->
    <transition name="fade">
      <Photogrid
        v-if="isShowing"
        :photos="imgUrl"
        :next="next"
        @set-currentItem="setCurrentItem"
      />
    </transition>
    <transition>
      <Loading 
          :isLoading="isLoading"
      />
    </transition>

    <!-- Next -->
    <transition name="fade">
      <Footer 
          v-if="isShowing"
          :next="next"
          :dataurl="dataurl"
          @get-next="getnext"
          @get-prev="getprev"
      />
    </transition>

  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Modal from './components/Modal.vue'
import Footer from './components/Footer.vue'
import Loading from './components/Loading.vue'
import Photogrid from './components/Photogrid.vue';
import Twit from 'twit';
import { isArray } from 'util';
import { constants } from 'crypto';
import axios from 'axios';


let   date = new Date(),
      hours = date.getHours(),
      $axios = axios;
      baseUrl = window.location.hostname.includes('localhost') ? ("http://localhost:5000") : '';

    
export default {
  name: 'App',
  components: {
    Nav,
    Modal,
    Photogrid,
    Footer,
    Loading,
  },
  data(){
    return{
      currentItem: {},
      imgUrl : [],
      dataurl: [],
      isShowing: false,
      isLoading: false,
      next: 0,
  }
  },
  mounted: function () {
    setTimeout(() => {
      this.getMemes();            
    }, 500);
  },
  methods:{
    sortresults: function(){
      if(this.dataurl.length>0){
        const copy = Array.from(this.dataurl);
        this.imgUrl = copy.filter((ele, i)=>{
           if(i>this.next && i<(this.next+25)){
             return ele;
           }
        });
        this.isShowing = true;
        this.isLoading = false;
      }
      else{
        alert("No Results Found");
        this.isShowing = true;
        this.isLoading = false;
      }
    },
    getnext: function(){
      this.next = this.next + 25;
      window.scrollTo({top:0, left:0, behavior: 'smooth'});
      this.sortresults();
    },
    getprev: function(){
      this.next = this.next - 25;
      window.scrollTo({top:0, left:0, behavior: 'smooth'});
      this.sortresults();
    },
    getMemes: function (text){
      this.next = 0;
      this.isShowing = false;
      this.isLoading = true;
      $axios.get(`${baseUrl}/data`, { params:{search:text}})
      .then((result) => {
        this.dataurl = result.data;
      }) 
      .then(() => {
        this.sortresults();
      })      
      .catch((error)=>{
        console.log(error)});
    },
    setCurrentItem: function (photo){
      this.currentItem = photo;
    },
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
