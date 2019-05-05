<template>
  <div id="app">
    <Main />

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
            <img :src= currentItem.url alt="" srcset="" class="modalimg">
          </div>
        </div>
      </div>
    </div>

    <Photogrid :photos = "imgUrl" v-on:set-currentItem="setCurrentItem"/>
    <button type="submit" @click="getMemes"></button>  
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Photogrid from './components/Photogrid.vue'
import axios from 'axios';
import Twit from 'twit';

var   max_id = 0,
      dataurl = [],
      query = 'dhoni filter:images -filter:retweets',
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
    Main,
    Photogrid,
  },
  data(){
    return{
      currentItem: {},
      imgUrl : [
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
                    id: 1,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
                    id: 2,
                  },

                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
                    id: 3,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/5.sm.jpg',
                    id: 4,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/3.sm.jpg',
                    id: 5,
                  },
                  {
                    url:"https://www.gstatic.com/webp/gallery/2.sm.jpg",
                    id: 6,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/watch.png',
                    id: 7,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/watch.png',
                    id: 8,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
                    id: 9,
                  },

                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
                    id: 10,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/5.sm.jpg',
                    id: 11,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/3.sm.jpg',
                    id: 12,
                  },
                                    {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
                    id: 13,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
                    id: 14,
                  },

                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
                    id: 15,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/5.sm.jpg',
                    id: 16,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/3.sm.jpg',
                    id: 17,
                  },
                  {
                    url:"https://www.gstatic.com/webp/gallery/2.sm.jpg",
                    id: 18,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/watch.png',
                    id: 19,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/watch.png',
                    id: 20,
                  },
                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
                    id: 21,
                  },

                  {
                    url:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
                    id: 22,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/5.sm.jpg',
                    id: 23,
                  },
                  {
                    url:'https://www.gstatic.com/webp/gallery/3.sm.jpg',
                    id: 24,
                  },
              ],
          }

  },
  methods:{
    flatenarr() {
      var newarray = dataurl[0].concat(dataurl[1],dataurl[2],dataurl[3]);
      this.imgUrl = newarray.map((e,i,a)=>{
                       return{
                         url: e.extended_entities.media[0].media_url,
                         id: e.id,
                         text: e.full_text,
                        }
                      })
    },

    getMemes() {
      T
      .get(
          'search/tweets', 
          {q: query, count: 100 , tweet_mode:"extended", result_type:"recent"}
      )
      .then((data) => {
          dataurl.push(data.data.statuses);
          max_id = data.data.statuses[data.data.statuses.length - 1].id;
        }
      )
      .then((data)=>{
          return T.get(
          'search/tweets', 
              {q: query, count: 100, max_id: max_id,tweet_mode:"extended", result_type:"recent"}
          )})
      .then((data) => {
          dataurl.push(data.data.statuses);
          max_id = data.data.statuses[data.data.statuses.length - 1].id;
        }
      )
      .then((data)=>{
          return T.get(
          'search/tweets', 
              {q: query, count: 100, max_id: max_id, tweet_mode:"extended", result_type:"recent"}
          )})
      .then((data) => {
          dataurl.push(data.data.statuses);
          max_id = data.data.statuses[data.data.statuses.length - 1].id;
        }
      )
      .then((data)=>{
          return T.get(
          'search/tweets', 
              {q: query, count: 100, max_id: max_id, tweet_mode:"extended", result_type:"recent"}
          )})
      .then((data) => {
          dataurl.push(data.data.statuses);
          max_id = data.data.statuses[data.data.statuses.length - 1].id;
        }
      )
      .then((id)=>{
        this.flatenarr();
      })
    },
    setCurrentItem(photo) {
      this.currentItem = photo;
      console.log(photo);
    }
  }
}
</script>

<style>
.modalimg{
  width: 100%;
  max-height: 90vh;
}
.mymodal{
  color: #fff
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

</style>
