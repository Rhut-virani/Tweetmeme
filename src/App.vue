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
import Photogrid from './components/Photogrid.vue';
import Twit from 'twit';
import { isArray } from 'util';
import { constants } from 'crypto';

var   max_id = 0,
      temp = "news",
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
      T = new Twit(tobject);
    
export default {
  name: 'App',
  components: {
    Nav,
    Modal,
    Photogrid,
    Footer,
  },
  data(){
    return{
      currentItem: {},
      imgUrl : [],
      dataurl: [],
      isShowing: true,
      next: 0,
  }
  },
  created: function () {
    if(!!localStorage.data && (parseInt(JSON.parse(localStorage.getItem('time'))) === hours)){
      this.dataurl = JSON.parse(localStorage.getItem('data'));
      this.flatenarr();
    }
    else{
      this.getMemes(temp);
    }
  },
  methods:{
    flatenarr: function (error) {
      if(!error){
        const newarray = this.dataurl;
        let ans;
        let x ;
        const copy = newarray.map( (e,index) => {
            ans = (!!e.entities.media.length && !e.possibly_sensitive) ? true : false;
            x = e.extended_entities.media[0].media_url
            if(ans){
              return{
                id: e.id + Math.floor(Math.random() * (index) + (index + 10)),
                text: e.full_text,
                url: x,
              }
            }
        });

        this.imgUrl = copy.filter((ele, i)=>{
           if(i>this.next && i<(this.next+25)){
             return ele;
           }
        });
        this.isShowing = true;
        if(!(localStorage.getItem('data'))){
          localStorage.setItem('time', JSON.stringify(hours));
          localStorage.setItem('data', JSON.stringify(this.dataurl));
        }
      }
      else if(error){
        alert("No Results Found");
      }

    },

    getnext: function(){
      this.next = this.next + 25;
      window.scrollTo({top:0, left:0, behavior: 'smooth'});
      this.flatenarr();
    },

    getprev: function(){
      this.next = this.next - 25;
      window.scrollTo({top:0, left:0, behavior: 'smooth'});
      this.flatenarr();
    },
    
    resultpromise: function(){
        return (data) => {
          if(data.data.statuses.length === 0){
            throw "error";
          }
          this.dataurl.push(...data.data.statuses);
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
      this.next = 0;
      this.isShowing = false;
      this.dataurl = [];
      query = `${text} filter:images -filter:retweets`;
      T
      .get(
          'search/tweets', 
          {q: query, count: 100 , tweet_mode:"extended", result_type:"recent", lang:"en" }
      )
      .then(this.resultpromise())
      .then(this.promise())
      .then(this.resultpromise())
      .then(this.promise())
      .then(this.resultpromise())
      .then(this.promise())
      .then(this.resultpromise())
      .then((error) => {
        this.flatenarr(error)})      
      .catch((error)=>{
        this.flatenarr(error);});
    },
    setCurrentItem: function (photo){
      this.currentItem = photo;
    }
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
