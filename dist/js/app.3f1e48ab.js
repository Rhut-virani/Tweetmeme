(function(t){function e(e){for(var r,o,i=e[0],l=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},4615:function(t,e,n){"use strict";var r=n("7d30"),a=n.n(r);a.a},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav",{on:{getMemes:t.getMemes}}),n("Modal",{attrs:{"current-item":t.currentItem}}),n("transition",{attrs:{name:"fade"}},[t.isShowing?n("Photogrid",{attrs:{photos:t.imgUrl,next:t.next},on:{"set-currentItem":t.setCurrentItem}}):t._e()],1),n("transition",{attrs:{name:"fade"}},[t.isShowing?n("Footer",{attrs:{next:t.next,dataurl:t.dataurl},on:{"get-next":t.getnext,"get-prev":t.getprev}}):t._e()],1)],1)},s=[],o=n("75fc"),i=n("f499"),l=n.n(i),u=n("e814"),c=n.n(u),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"form",on:{submit:t.submitform}},[n("form",{attrs:{id:"searchbox",action:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"Search",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._m(0)])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"submit",attrs:{type:"submit"}},[n("i",{staticClass:"fas fa-search"})])}],m={name:"Nav",props:{},data:function(){return{message:""}},methods:{submitform:function(t){t.preventDefault(),this.$emit("getMemes",this.message)}}},p=m,h=(n("4615"),n("2877")),g=Object(h["a"])(p,d,f,!1,null,"3bf2db22",null),v=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade mymodal",attrs:{id:"modalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"modalCenterTitle","aria-hidden":"true"}},[t._m(0),n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"modalLongTitle"}},[t._v("\n          "+t._s(t.currentItem.text)+"\n        ")])]),n("div",{staticClass:"modal-body"},[n("a",{attrs:{target:"blank",href:t.currentItem.url}},[n("img",{staticClass:"modalimg",attrs:{src:t.currentItem.url,alt:"",srcset:""}})])])])])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{id:"xclose",type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],_={name:"Modal",props:{currentItem:{type:Object,default:function(){return{}}}}},y=_,w=(n("e164"),Object(h["a"])(y,b,x,!1,null,"cc483840",null)),C=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"prev",class:{disabled:t.next<=0},attrs:{disabled:!0},on:{click:function(e){return t.$emit("get-prev")}}},[t._v(" Prev")]),n("div",{staticClass:"next",class:{disabled:t.next>=t.dataurl.length-25},on:{click:function(e){return t.$emit("get-next")}}},[t._v("Next")])])},I=[],j=(n("c5f6"),{name:"Footer",props:{next:{type:Number,default:0},dataurl:{type:Array,defualt:[]}}}),S=j,M=(n("b137"),Object(h["a"])(S,O,I,!1,null,"92030e04",null)),P=M.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.photos,function(e,r){return n("Photos",{key:r+"-"+e.id,attrs:{photo:e},on:{"set-currentItem":function(n){return t.$emit("set-currentItem",e)}}})}),1)])},$=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" col-xl-3 col-lg-4 col-md-6 d-flex flex-fill"},[n("figure",{staticClass:"figure",style:{backgroundImage:"url("+t.photo.url+")"},attrs:{"data-toggle":"modal","data-target":"#modalCenter"},on:{click:function(e){return t.$emit("set-currentItem",t.photo)}}})])},E=[],T={name:"Photos",props:{photo:{type:Object,default:function(){return{}}}}},A=T,U=(n("a176"),Object(h["a"])(A,N,E,!1,null,"47b06660",null)),G=U.exports,J={name:"Photogrid",components:{Photos:G},props:{photos:{type:Array,default:function(){return[]}}}},q=J,F=Object(h["a"])(q,k,$,!1,null,"16fdf938",null),K=F.exports,L=n("8092"),B=n.n(L),D=(n("3022"),n("1c46"),0),Q="news",X="",z={consumer_key:"mRS2Oj1xwemPhQyLPGK1xbkGN",consumer_secret:"bXrlMg1cEKxgG7CQ17wtf4hZtygzKyOpETjevsU7BNmXSCopIX",access_token:"519379540-kMBYnojtUAmOaGUrLiucu8YA5vElBy0kUMfv9TeQ",access_token_secret:"rspNbbMIfvyg7ja1IL9HD0vKOJbz91tw9Pfpddq3rAhAG",timeout_ms:6e4},H=new Date,R=H.getHours(),Y=new B.a(z),Z={name:"App",components:{Nav:v,Modal:C,Photogrid:K,Footer:P},data:function(){return{currentItem:{},imgUrl:[],dataurl:[],isShowing:!0,next:0}},created:function(){localStorage.data&&c()(JSON.parse(localStorage.getItem("time")))===R?(this.dataurl=JSON.parse(localStorage.getItem("data")),this.flatenarr()):this.getMemes(Q)},methods:{flatenarr:function(t){var e=this;if(t)t&&alert("No Results Found");else{var n,r,a=this.dataurl,s=a.map(function(t,e){if(n=!(!t.entities.media.length||t.possibly_sensitive),r=t.extended_entities.media[0].media_url,n)return{id:t.id+Math.floor(Math.random()*e+(e+10)),text:t.full_text,url:r}});this.imgUrl=s.filter(function(t,n){if(n>e.next&&n<e.next+25)return t}),this.isShowing=!0,localStorage.getItem("data")||(localStorage.setItem("time",l()(R)),localStorage.setItem("data",l()(this.dataurl)))}},getnext:function(){this.next=this.next+25,window.scrollTo({top:0,left:0,behavior:"smooth"}),this.flatenarr()},getprev:function(){this.next=this.next-25,window.scrollTo({top:0,left:0,behavior:"smooth"}),this.flatenarr()},resultpromise:function(){var t=this;return function(e){var n;if(0===e.data.statuses.length)throw"error";(n=t.dataurl).push.apply(n,Object(o["a"])(e.data.statuses)),D=e.data.statuses[e.data.statuses.length-1].id}},promise:function(){return function(){if(D)return Y.get("search/tweets",{q:X,count:100,max_id:D,tweet_mode:"extended",result_type:"mixed",lang:"en"})}},getMemes:function(t){var e=this;this.next=0,this.isShowing=!1,this.dataurl=[],X="".concat(t," filter:images -filter:retweets"),Y.get("search/tweets",{q:X,count:100,tweet_mode:"extended",result_type:"recent",lang:"en"}).then(this.resultpromise()).then(this.promise()).then(this.resultpromise()).then(this.promise()).then(this.resultpromise()).then(this.promise()).then(this.resultpromise()).then(function(t){e.flatenarr(t)}).catch(function(t){e.flatenarr(t)})},setCurrentItem:function(t){this.currentItem=t}}},V=Z,W=(n("034f"),Object(h["a"])(V,a,s,!1,null,null,null)),tt=W.exports;n("4989"),n("f9e3");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(tt)}}).$mount("#app")},"64a9":function(t,e,n){},"66af":function(t,e,n){},"7d30":function(t,e,n){},"984c":function(t,e,n){},a176:function(t,e,n){"use strict";var r=n("984c"),a=n.n(r);a.a},b137:function(t,e,n){"use strict";var r=n("d99c"),a=n.n(r);a.a},d99c:function(t,e,n){},e164:function(t,e,n){"use strict";var r=n("66af"),a=n.n(r);a.a}});
//# sourceMappingURL=app.3f1e48ab.js.map