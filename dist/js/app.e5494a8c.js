(function(t){function e(e){for(var a,s,i=e[0],l=e[1],u=e[2],d=0,f=[];d<i.length;d++)s=i[d],r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},4615:function(t,e,n){"use strict";var a=n("7d30"),r=n.n(a);r.a},5:function(t,e){},"53d7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav",{on:{getMemes:t.getMemes}}),n("Modal",{attrs:{"current-item":t.currentItem}}),n("transition",{attrs:{name:"fade"}},[t.isShowing?n("Photogrid",{attrs:{photos:t.imgUrl,next:t.next},on:{"set-currentItem":t.setCurrentItem}}):t._e()],1),n("transition",[n("Loading",{attrs:{"is-loading":t.isLoading}})],1),n("transition",{attrs:{name:"fade"}},[t.isShowing?n("Footer",{attrs:{next:t.next,dataurl:t.dataurl},on:{"get-next":t.getnext,"get-prev":t.getprev}}):t._e()],1)],1)},o=[],s=n("774e"),i=n.n(s),l=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"form",on:{submit:t.submitform}},[n("form",{attrs:{id:"searchbox",action:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"Search",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._m(0)])])])}),u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"submit",attrs:{type:"submit"}},[n("i",{staticClass:"fas fa-search"})])}],c={name:"Nav",props:{},data:function(){return{message:""}},methods:{submitform:function(t){t.preventDefault(),this.$emit("getMemes",this.message)}}},d=c,f=(n("4615"),n("2877")),m=Object(f["a"])(d,l,u,!1,null,"3bf2db22",null),p=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade mymodal",attrs:{id:"modalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"modalCenterTitle","aria-hidden":"true"}},[t._m(0),n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"modalLongTitle"}},[t._v("\n          "+t._s(t.currentItem.text)+"\n        ")])]),n("div",{staticClass:"modal-body"},[n("a",{attrs:{target:"blank",href:t.currentItem.url}},[n("img",{staticClass:"modalimg",attrs:{src:t.currentItem.url,alt:"",srcset:""}})])])])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{id:"xclose",type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],v={name:"Modal",props:{currentItem:{type:Object,default:function(){return{}}}}},b=v,x=(n("e164"),Object(f["a"])(b,h,g,!1,null,"cc483840",null)),_=x.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"prev",class:{disabled:t.next<=0},attrs:{disabled:!0},on:{click:function(e){return t.$emit("get-prev")}}},[t._v("\n    Prev\n  ")]),n("div",{staticClass:"next",class:{disabled:t.next>=t.dataurl.length-25},on:{click:function(e){return t.$emit("get-next")}}},[t._v("\n    Next\n  ")])])},C=[],w=(n("c5f6"),{name:"Footer",props:{next:{type:Number,default:0},dataurl:{type:Array,defualt:[""]}}}),O=w,j=(n("a469"),Object(f["a"])(O,y,C,!1,null,"140f905c",null)),$=j.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("div",{staticClass:"loading"},[n("div",{staticClass:"lds-dual-ring loadingText"})]):t._e()},P=[],S={name:"Loading",props:{isLoading:{type:Boolean,default:!0}}},M=S,L=(n("d23f"),Object(f["a"])(M,I,P,!1,null,"f46030ba",null)),k=L.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.photos,function(e,a){return n("Photos",{key:a+"-"+e.id,attrs:{photo:e},on:{"set-currentItem":function(n){return t.$emit("set-currentItem",e)}}})}),1)])},T=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" col-xl-3 col-lg-4 col-md-6 d-flex flex-fill"},[n("figure",{staticClass:"figure",style:{backgroundImage:"url("+t.photo.url+")"},attrs:{"data-toggle":"modal","data-target":"#modalCenter"},on:{click:function(e){return t.$emit("set-currentItem",t.photo)}}})])},F=[],A={name:"Photos",props:{photo:{type:Object,default:function(){return{}}}}},U=A,B=(n("a176"),Object(f["a"])(U,N,F,!1,null,"47b06660",null)),D=B.exports,J={name:"Photogrid",components:{Photos:D},props:{photos:{type:Array,default:function(){return[]}},isShowing:{type:Boolean,default:!1}}},q=J,H=Object(f["a"])(q,E,T,!1,null,"593c3c82",null),R=H.exports,z=(n("8092"),n("3022"),n("1c46"),n("bc3a")),G=n.n(z),K=new Date,Q=(K.getHours(),G.a),V=window.location.hostname.includes("localhost")?"http://localhost:5000":"",W={name:"App",components:{Nav:p,Modal:_,Photogrid:R,Footer:$,Loading:k},data:function(){return{currentItem:{},imgUrl:[],dataurl:[],isShowing:!1,isLoading:!1,next:0}},mounted:function(){var t=this;setTimeout(function(){t.getMemes()},500)},methods:{sortresults:function(){var t=this;if(this.dataurl.length>0){var e=i()(this.dataurl);this.imgUrl=e.filter(function(e,n){if(n>t.next&&n<t.next+25)return e}),this.isShowing=!0,this.isLoading=!1}else alert("No Results Found"),this.isShowing=!0,this.isLoading=!1},getnext:function(){this.next=this.next+25,window.scrollTo({top:0,left:0,behavior:"smooth"}),this.sortresults()},getprev:function(){this.next=this.next-25,window.scrollTo({top:0,left:0,behavior:"smooth"}),this.sortresults()},getMemes:function(t){var e=this;this.next=0,this.isShowing=!1,this.isLoading=!0,Q.get("".concat(V,"/data"),{params:{search:t}}).then(function(t){e.dataurl=t.data}).then(function(){e.sortresults()}).catch(function(t){console.log(t)})},setCurrentItem:function(t){this.currentItem=t}}},X=W,Y=(n("034f"),Object(f["a"])(X,r,o,!1,null,null,null)),Z=Y.exports;n("4989"),n("f9e3");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Z)}}).$mount("#app")},"5d63":function(t,e,n){},"64a9":function(t,e,n){},"66af":function(t,e,n){},"7d30":function(t,e,n){},"984c":function(t,e,n){},a176:function(t,e,n){"use strict";var a=n("984c"),r=n.n(a);r.a},a469:function(t,e,n){"use strict";var a=n("53d7"),r=n.n(a);r.a},d23f:function(t,e,n){"use strict";var a=n("5d63"),r=n.n(a);r.a},e164:function(t,e,n){"use strict";var a=n("66af"),r=n.n(a);r.a}});
//# sourceMappingURL=app.e5494a8c.js.map