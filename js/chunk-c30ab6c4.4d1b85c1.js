(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c30ab6c4"],{"0131":function(e,t,r){"use strict";r("ce4c")},"0db1":function(e,t,r){},"1c62":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"home-page"},a={class:"home-page__header"},i=Object(n["g"])("h1",{class:"home-page__title"},"Breed List",-1),o=Object(n["i"])(" Alphabet Sort ");function d(e,t,r,d,s,u){var b=Object(n["D"])("Button"),f=Object(n["D"])("BreedsGrid");return Object(n["x"])(),Object(n["f"])("div",c,[Object(n["g"])("div",a,[i,Object(n["j"])(b,{onClick:d.onSortArray,class:"home-page__sort"},{default:Object(n["I"])((function(){return[o]})),_:1},8,["onClick"])]),Object(n["j"])(f,{"breeds-list":d.breedsList,onBreedClick:d.onBreedClick,onLoadMore:d.loadMore},null,8,["breeds-list","onBreedClick","onLoadMore"])])}var s=r("1da1"),u=(r("96cf"),r("f5b6")),b=r("0a1b"),f=r("9e1e"),l=r("d4ae"),O=r("3932"),j=r("6c02"),v=r("2501"),p={name:"Home",components:{Button:O["a"],BreedsGrid:l["a"]},setup:function(){var e=Object(j["d"])(),t=Object(u["a"])(f["a"]),r=t.fetchBreedsList,c=t.fetchBreedsListInfo,a=Object(u["d"])(f["a"]),i=a.SET_OFFSET,o=Object(u["b"])(f["a"]),d=o.getBreedsList,l=o.getOffset,O=Object(n["A"])(!1),p=Object(n["b"])((function(){return O.value?Object(b["a"])(d.value):d.value})),g=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return e.next=4,c();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){i(l.value+20),g()},k=function(){O.value=!O.value},y=function(t){e.push({name:v["a"].BREED,params:{key:t.key}})};return{breedsList:p,loadMore:m,fetchData:g,onSortArray:k,onBreedClick:y}}};r("adf0");p.render=d;t["default"]=p},"2dab":function(e,t,r){e.exports=r.p+"img/favorite.24617505.svg"},4291:function(e,t,r){},"46bb":function(e,t,r){e.exports=r.p+"img/favorite-selected.75705a15.svg"},6404:function(e,t,r){},7706:function(e,t,r){"use strict";r("d405")},"7cd3":function(e,t,r){"use strict";r("6404")},"87f1":function(e,t,r){"use strict";r("4291")},adf0:function(e,t,r){"use strict";r("0db1")},ce4c:function(e,t,r){},d405:function(e,t,r){},d4ae:function(e,t,r){"use strict";var n=r("7a23"),c={class:"breeds-grid"};function a(e,t,r,a,i,o){var d=Object(n["D"])("BreedCard"),s=Object(n["D"])("LoaderCard"),u=Object(n["D"])("NoBreeds"),b=Object(n["D"])("InfinityTrigger");return Object(n["x"])(),Object(n["f"])("div",c,[r.breedsList.length||r.isLoading?(Object(n["x"])(),Object(n["f"])(n["a"],{key:0},[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(r.breedsList,(function(e){return Object(n["x"])(),Object(n["d"])(d,{key:e.key,breed:e,onClick:function(t){return a.onBreedClick(e)}},null,8,["breed","onClick"])})),128)),r.isLoading?(Object(n["x"])(),Object(n["d"])(s,{key:0})):Object(n["e"])("",!0)],64)):(Object(n["x"])(),Object(n["d"])(u,{key:1})),Object(n["j"])(b,{onEnter:a.onInfinityScroll},null,8,["onEnter"])])}var i=r("2dab"),o=r.n(i),d=r("46bb"),s=r.n(d),u={class:"breed-card__wrap"},b={class:"breed-card__info"},f={class:"breed-card__info__title"};function l(e,t,r,c,a,i){return Object(n["x"])(),Object(n["f"])("div",u,[Object(n["g"])("div",{class:"breed-card",style:Object(n["r"])({"--image":"url('"+r.breed.image+"')"})},[Object(n["g"])("div",b,[c.isFavorite?(Object(n["x"])(),Object(n["f"])("img",{key:1,src:s.a,alt:"heart selected",class:"breed-card__info__img-favorite",onClick:t[1]||(t[1]=Object(n["J"])((function(){return c.removeFavorite&&c.removeFavorite.apply(c,arguments)}),["stop"]))})):(Object(n["x"])(),Object(n["f"])("img",{key:0,src:o.a,alt:"heart",class:"breed-card__info__img-favorite",onClick:t[0]||(t[0]=Object(n["J"])((function(){return c.addFavorite&&c.addFavorite.apply(c,arguments)}),["stop"]))})),Object(n["g"])("p",f,Object(n["F"])(r.breed.key),1)])],4)])}r("caad"),r("2532");var O=r("f5b6"),j=r("9e1e"),v={name:"DogCard",props:{breed:{type:Object,required:!0}},setup:function(e){var t=Object(O["b"])(j["a"]),r=t.getFavorites,c=Object(O["d"])(j["a"]),a=c.SET_FAVORITE,i=c.REMOVE_FAVORITE,o=Object(n["b"])((function(){return r.value.includes(e.breed.key)})),d=function(){a(e.breed.key)},s=function(){i(e.breed.key)};return{isFavorite:o,addFavorite:d,removeFavorite:s}}};r("7706");v.render=l;var p=v,g={ref:"target",class:"infinity-trigger"};function m(e,t,r,c,a,i){return Object(n["x"])(),Object(n["f"])("span",g,null,512)}r("159b");var k={name:"InfinityTrigger",emits:["enter"],setup:function(e,t){var r=t.emit,c=Object(n["A"])(),a=Object(n["A"])();Object(n["v"])((function(){a.value=new IntersectionObserver((function(e){e.forEach((function(e){i(e)&&o(e)}))})),a.value.observe(c.value)})),Object(n["t"])((function(){a.value.disconnect()}));var i=function(e){return e.intersectionRatio>0},o=function(e){r("enter",e)};return{target:c}}};r("7cd3");k.render=m;var y=k,_={class:"loader-card"},B=Object(n["g"])("span",{class:"loader-card__icon"},null,-1),h=[B];function x(e,t,r,c,a,i){return Object(n["x"])(),Object(n["f"])("div",_,h)}var C={name:"LoaderCard"};r("87f1");C.render=x;var L=C,E={class:"no-breeds"};function F(e,t,r,c,a,i){return Object(n["x"])(),Object(n["f"])("div",E,Object(n["F"])(r.text),1)}var w={name:"NoBreeds",props:{text:{type:String,default:"NO BREEDS HERE"}}};r("0131");w.render=F;var D=w,I={name:"BreedsGrid",components:{NoBreeds:D,LoaderCard:L,InfinityTrigger:y,BreedCard:p},emits:["breed-click","load-more"],props:{isLoading:{type:Boolean,default:!1},breedsList:{type:Array,require:!0}},setup:function(e,t){var r=t.emit,n=function(e){r("breed-click",e)},c=function(e){r("load-more",e)};return{onBreedClick:n,onInfinityScroll:c}}};r("e328");I.render=a;t["a"]=I},e328:function(e,t,r){"use strict";r("f994")},f994:function(e,t,r){}}]);
//# sourceMappingURL=chunk-c30ab6c4.4d1b85c1.js.map