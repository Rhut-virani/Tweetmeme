<template>
  <div id="app">
    <Nav v-on:getMemes="getMemes"/>
    <!-- Modal -->
    <div class="modal fade mymodal" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
      <button type="button" class="close" id="xclose" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLongTitle">{{currentItem.text}}</h5>
          </div>
          <div class="modal-body">
            <a target="blank" :href= currentItem.url>
              <img :src= currentItem.url alt="" srcset="" class="modalimg">
            </a>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <Photogrid v-if="isShowing" :photos = "imgUrl" v-on:set-currentItem="setCurrentItem"/>
    </transition>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Photogrid from './components/Photogrid.vue'
import axios from 'axios';
import Twit from 'twit';

var   max_id = 0,
      temp = "news",
      type= "mixed",
      query = "",
      lang = "en",
      tobject = { 
          consumer_key:         'mRS2Oj1xwemPhQyLPGK1xbkGN',
          consumer_secret:      'bXrlMg1cEKxgG7CQ17wtf4hZtygzKyOpETjevsU7BNmXSCopIX',
          access_token:         '519379540-kMBYnojtUAmOaGUrLiucu8YA5vElBy0kUMfv9TeQ',
          access_token_secret:  'rspNbbMIfvyg7ja1IL9HD0vKOJbz91tw9Pfpddq3rAhAG',
          timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        },
      T = new Twit(tobject);
    
export default {
  name: 'app',
  components: {
    Nav,
    Photogrid,
  },
  data(){
    return{
      currentItem: {},
      imgUrl : [],
      dataurl: [],
      isShowing: true,
  }
  },
  created (){
    this.getMemes(temp);
  },
  methods:{
    flatenarr() {
        var newarray = this.dataurl.flat();
        this.imgUrl = newarray.map(function (e,i,a){
              if(e.extended_entities.media.length){
                return{
                    id: e.id,
                    text: e.full_text,
                    url: e.extended_entities.media[0].media_url,
                  }
              }
              return;
        }),
      this.isShowing = true;
    },
    resultpromise(){
        return (data) => {
          if(data.data.statuses.length === 0){
            throw "error";
          }
          this.dataurl.push(data.data.statuses);
          max_id = data.data.statuses[data.data.statuses.length - 1].id;
        }
    },
    promise(){
        return (data)=>{
          if(max_id){
              return T.get(
            'search/tweets', 
                {q: query, count: 1000, max_id: max_id, tweet_mode:"extended", result_type:"mixed", lang:"en" }
            )}
            }
    },
    getMemes(text) {
      this.isShowing = false;
      this.dataurl = [];
      query = `${text} filter:images -filter:retweets`;
      T
      .get(
          'search/tweets', 
          {q: query, count: 100 , tweet_mode:"extended", result_type:"mixed", lang:"en" }
      )
      .catch((error)=>{ console.log(error);})
      .then(this.resultpromise())
      .then(this.promise())
      .catch((error)=>{ console.log(error);})
      .then(this.resultpromise())
      // .then(this.promise())
      // .catch((error)=>{ console.log(error);})
      // .then(this.resultpromise())
      // .then(this.promise())
      // .catch((error)=>{ console.log(error);})
      // .then(this.resultpromise())
      // .catch((error)=>{ console.log(error);})
      .then(this.flatenarr);

    },
    setCurrentItem(photo) {
      this.currentItem = photo;
    }
  }
}
</script>

<style>
.modalimg{
  width: 100%;
  max-height: 50vh;
  object-fit: contain;
}
.mymodal{
  color: #fff;
  overflow: hidden;
}
.modal-header{
  text-align: center;
}
#xclose{
  position: absolute;
  top: 10%;
  right: 10%;
  color: #eeeeee;
  opacity: 1;
}
#modalCenter{
  background-color: #000000d4;
}
.mymodal .modal-content{
  background-color: black;
}
.modal-footer , .modal-header{
  border: none !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
