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
        @set-currentItem="setCurrentItem"
      />
    </transition>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Modal from './components/Modal.vue'
import Photogrid from './components/Photogrid.vue';
import Twit from 'twit';
import { isArray } from 'util';

var   max_id = 0,
      temp = "News",
      query = "",
      tobject = { 
          consumer_key:         'mRS2Oj1xwemPhQyLPGK1xbkGN',
          consumer_secret:      'bXrlMg1cEKxgG7CQ17wtf4hZtygzKyOpETjevsU7BNmXSCopIX',
          access_token:         '519379540-kMBYnojtUAmOaGUrLiucu8YA5vElBy0kUMfv9TeQ',
          access_token_secret:  'rspNbbMIfvyg7ja1IL9HD0vKOJbz91tw9Pfpddq3rAhAG',
          timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        },
      date = new Date(),
      hours = date.getHours(),
      dataurl = [],
      T = new Twit(tobject);
    
export default {
  name: 'App',
  components: {
    Nav,
    Modal,
    Photogrid,
  },
  data(){
    return{
      currentItem: {},
      imgUrl : [],
      // dataurl: [],
      isShowing: true,
  }
  },
  mounted: function (){
    if(!!localStorage.data && (parseInt(localStorage.time) === hours)){
      this.imgUrl = localStorage.data;
    }
    else{
      this.getMemes(temp);
    }
  },
  methods:{
    flatenarr: function (){
      const newarray = dataurl.flat();
      let ans = true;
      let copy = [...newarray].map((e,index)=>{
          ans = (!!e.entities.media.length && !e.possibly_sensitive) ? true : false;
          let x = e.extended_entities.media[0].media_url
          if(true){
            return{
              id: e.id + Math.floor(Math.random() * (index) + (index + 10)),
              text: e.full_text,
              url: x,
            }
          }
      });
      this.imgUrl = copy;
      this.isShowing = true;
      if(localStorage.data){
        localStorage.time = hours;
        localStorage.data = this.imgUrl;
      }
    },
    resultpromise: function(){
        return (data) => {
          if(data.data.statuses.length === 0){
            throw "error";
          }
          dataurl.push(...data.data.statuses);
          max_id = data.data.statuses[data.data.statuses.length - 1].id;
        }
    },
    promise: function(){
        return ()=>{
          if(max_id){
              return T.get(
            'search/tweets', 
                {q: query, count: 100, max_id: max_id, tweet_mode:"extended", result_type:"mixed", lang:"en" }
            )}
          }
    },
    getMemes: function (text){
      this.isShowing = false;
      dataurl = [];
      query = `${text} filter:images -filter:retweets`;
      T
      .get(
          'search/tweets', 
          {q: query, count: 100 , tweet_mode:"extended", result_type:"mixed", lang:"en" }
      )
      .catch((error)=>{
        console.log(error);})
      .then(this.resultpromise())
      .catch((error)=>{
        console.log(error);})
      .then(this.promise())
      .catch((error)=>{
        console.log(error);})
      .then(this.resultpromise())
      .then(this.promise())
      .catch((error)=>{
        console.log(error);})
      .then(this.resultpromise())
      .then(this.promise())
      .catch((error)=>{
        console.log(error);})
      .then(this.resultpromise())
      .catch((error)=>{
        console.log(error);})
      .then(this.flatenarr);

    },
    setCurrentItem: function (photo){
      this.currentItem = photo;
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
