(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==c[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-01b223a4":"9f8d4421","chunk-29247a4e":"96a1d7a9","chunk-c30ab6c4":"4d1b85c1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-01b223a4":1,"chunk-29247a4e":1,"chunk-c30ab6c4":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-01b223a4":"84e6fcb2","chunk-29247a4e":"736f8b44","chunk-c30ab6c4":"3b7dbac5"}[e]+".css",c=i.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===n||f===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],f=s.getAttribute("data-href");if(f===n||f===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],b.parentNode.removeChild(b),r(o)},b.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(b)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(b);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dogs-test/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=f;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"01ef":function(e,t,r){},"0a1b":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return c}));var n=r("2909"),a=(r("4e82"),function(e){return e.sort((function(){return Math.random()-.5}))}),c=function(e){return Object(n["a"])(e).sort((function(e,t){return e.key<t.key?-1:e.key>t.key?1:0}))}},2501:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n={HOME:"home-page",BREED:"breed-page",FAVORITES:"favorites-page"},a={HOME:"/",BREED:"/breed/:key",FAVORITES:"/favorites"}},3932:function(e,t,r){"use strict";var n=r("7a23");function a(e,t,r,a,c,o){return Object(n["x"])(),Object(n["f"])("button",Object(n["o"])(e.$attrs,{class:"button"}),[Object(n["C"])(e.$slots,"default")],16)}var c={inheritAttrs:!0,name:"Button"};r("ccf9");c.render=a;t["a"]=c},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"app"},c={class:"app__main"};function o(e,t,r,o,u,i){var s=Object(n["D"])("Header"),f=Object(n["D"])("router-view");return Object(n["x"])(),Object(n["f"])("div",a,[Object(n["j"])(s,{class:"app__header"}),Object(n["g"])("main",c,[Object(n["j"])(f)])])}var u=r("f5b6"),i=r("1da1"),s=r("2909"),f=(r("96cf"),r("99af"),r("c740"),r("a434"),r("d81d"),r("4de4"),r("fb6a"),r("b64b"),r("7db0"),r("d3b7"),r("3ca3"),r("ddb0"),r("159b"),r("caad"),r("2532"),r("d4ec")),d=r("bee2"),b=r("ade3"),l=r("bc3a"),p=r.n(l),h=function(){function e(){Object(f["a"])(this,e),Object(b["a"])(this,"resource","https://dog.ceo/api/")}return Object(d["a"])(e,[{key:"getBreeds",value:function(){return p()("".concat(this.resource,"breeds/list/all"),{method:"get"})}},{key:"getSubBreeds",value:function(e){return p()("".concat(this.resource,"breed/").concat(e,"/list"),{method:"get"})}},{key:"getBreedImage",value:function(e){return p()("".concat(this.resource,"breed/").concat(e,"/images/random"),{method:"get"})}},{key:"getBreedImages",value:function(e,t){return p()("".concat(this.resource,"breed/").concat(e,"/images/random/").concat(t),{method:"get"})}}]),e}(),g=new h,m=function(e,t){console.log(e),t("SET_ERROR",e.response.data)},v=function(e){localStorage.breedFavorites=JSON.stringify(e)},O=r("0a1b"),C={namespaced:!0,state:{offset:0,breedsList:[],favorites:[],currentBreed:{key:"",breedsList:[],images:[]},error:null},mutations:{SET_BREEDS_LIST:function(e,t){e.breedsList=[].concat(Object(s["a"])(e.breedsList),Object(s["a"])(t))},SET_BREED:function(e,t){var r=e.breedsList.findIndex((function(e){return e.key===t.key}));-1===r?e.breedsList.push(t):e.breedsList[r]=t},SET_CURRENT_BREED:function(e,t){e.currentBreed=t},SET_ERROR:function(e,t){e.error=t},SET_FAVORITES:function(e,t){e.favorites=t,v(e.favorites)},SET_FAVORITE:function(e,t){e.favorites.push(t),v(e.favorites)},REMOVE_FAVORITE:function(e,t){var r=e.favorites.findIndex((function(e){return e===t}));-1!==r&&(e.favorites.splice(r,1),v(e.favorites))},SET_OFFSET:function(e,t){e.offset=t}},actions:{fetchBreedsList:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.getters,t.prev=1,a=n.getOffset,c=n.getBreedsList,t.next=6,g.getBreeds();case 6:o=t.sent.data.message,u=Object(O["b"])(Object.keys(o).slice(c.length,a)).filter((function(e){return!c.find((function(t){return t.key===e}))})).map((function(e){return{key:e,breedsList:o[e],image:""}})),r("SET_BREEDS_LIST",u),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),m(t.t0,r);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},fetchFavorites:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.getters,a=n.getFavorites,t.next=4,Promise.all(a.map(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r("fetchBreedInfo",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return t.stop()}}),t)})))()},fetchBreedInfo:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=e.dispatch,c=e.getters,o=c.getBreedByKey(t)||{key:t},r.prev=2,o.breedsList){r.next=7;break}return r.next=6,a("fetchSubBreeds",o.key);case 6:o.breedsList=r.sent;case 7:if(o.image){r.next=11;break}return r.next=10,a("fetchBreedImage",o.key);case 10:o.image=r.sent;case 11:n("SET_BREED",o),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](2),m(r.t0,n);case 17:case"end":return r.stop()}}),r,null,[[2,14]])})))()},fetchBreedsListInfo:function(e){var t=e.dispatch,r=e.getters,n=r.getBreedsList;n.forEach((function(e){t("fetchBreedInfo",e.key)}))},fetchBreedImage:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,c,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(c=e.commit,o=e.getters,null===(a=o.getBreedByKey(t))||void 0===a||!a.image){n.next=3;break}return n.abrupt("return");case 3:return u="",n.prev=4,n.next=7,g.getBreedImage(t);case 7:u=n.sent.data.message,n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](4),m(n.t0,c),u=r("9424");case 14:return n.abrupt("return",u);case 15:case"end":return n.stop()}}),n,null,[[4,10]])})))()},fetchSubBreeds:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.commit,c=e.getters,o=(null===(n=c.getBreedByKey(t))||void 0===n?void 0:n.key)||t,!o.breedsList){r.next=4;break}return r.abrupt("return");case 4:return r.prev=4,r.next=7,g.getSubBreeds(o);case 7:return r.abrupt("return",r.sent.data.message);case 10:throw r.prev=10,r.t0=r["catch"](4),m(r.t0,a),r.t0;case 14:case"end":return r.stop()}}),r,null,[[4,10]])})))()},fetchCurrentBreed:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,a=e.getters,c=e.dispatch,o=a.getBreedByKey(t),u={key:t},r.prev=3,o){r.next=10;break}return r.next=7,c("fetchSubBreeds",u.key);case 7:u.breedsList=r.sent,r.next=11;break;case 10:u.breedsList=o.breedsList;case 11:return r.next=13,g.getBreedImages(u.key,5);case 13:u.images=r.sent.data.message,n("SET_CURRENT_BREED",u),r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](3),m(r.t0,n);case 20:case"end":return r.stop()}}),r,null,[[3,17]])})))()}},getters:{getError:function(e){return e.error},getCurrentBreed:function(e){return e.currentBreed},getFavorites:function(e){return e.favorites},getFavoritesBreedsList:function(e,t){return t.getBreedsList.filter((function(e){return t.getFavorites.includes(e.key)}))},getOffset:function(e){return e.offset},getBreedsList:function(e){return e.breedsList},getBreedByKey:function(e){return function(t){return e.breedsList.find((function(e){return e.key===t}))}}}},k=r("9e1e"),y={class:"header"},j=Object(n["i"])(" Selected Breeds ");function E(e,t,r,a,c,o){var u=Object(n["D"])("DogLogo"),i=Object(n["D"])("Button");return Object(n["x"])(),Object(n["f"])("header",y,[Object(n["j"])(u,{class:"header__logo",onClick:a.goToHome},null,8,["onClick"]),Object(n["j"])(i,{class:"header__selected-breeds",onClick:a.goToFavorites},{default:Object(n["I"])((function(){return[j]})),_:1},8,["onClick"])])}var B={width:"118",height:"27",viewBox:"0 0 118 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w=Object(n["h"])('<path d="M0 5.77742H17.3419V26.6226H13.9338V9.31936H3.40806V26.6226H0V5.77742Z" fill="#e1a63b"></path><path d="M24.0984 5.77742H35.8607V9.31936H27.5064V14.1387H34.9559V17.6806H27.5064V23.0806H35.8607V26.6226H24.0984V5.77742ZM25.3953 3.5129C24.9931 3.12581 24.7921 2.64194 24.7921 2.06129C24.7921 1.48065 24.9931 0.996775 25.3953 0.609678C25.7974 0.203226 26.3001 0 26.9033 0C27.5064 0 28.0091 0.203226 28.4112 0.609678C28.8134 0.996775 29.0144 1.48065 29.0144 2.06129C29.0144 2.64194 28.8134 3.12581 28.4112 3.5129C28.0091 3.9 27.5064 4.09355 26.9033 4.09355C26.3001 4.09355 25.7974 3.9 25.3953 3.5129ZM31.5177 3.5129C31.1156 3.12581 30.9145 2.64194 30.9145 2.06129C30.9145 1.48065 31.1156 0.996775 31.5177 0.609678C31.9198 0.203226 32.4225 0 33.0257 0C33.6289 0 34.1316 0.203226 34.5337 0.609678C34.9559 0.996775 35.167 1.48065 35.167 2.06129C35.167 2.64194 34.9559 3.12581 34.5337 3.5129C34.1316 3.9 33.6289 4.09355 33.0257 4.09355C32.4225 4.09355 31.9198 3.9 31.5177 3.5129Z" fill="#e1a63b"></path><path d="M59.3585 23.1677C58.7151 24.271 57.6796 25.1903 56.252 25.9258C54.8245 26.6419 53.1154 27 51.1249 27C49.6772 27 48.2999 26.7387 46.993 26.2161C45.6861 25.6935 44.5299 24.9581 43.5246 24.0097C42.5394 23.0613 41.7552 21.929 41.1721 20.6129C40.5891 19.2774 40.2975 17.8065 40.2975 16.2C40.2975 14.5742 40.5891 13.1032 41.1721 11.7871C41.7552 10.4516 42.5394 9.31936 43.5246 8.39032C44.5299 7.44194 45.6861 6.70645 46.993 6.18387C48.2999 5.66129 49.6772 5.4 51.1249 5.4C52.09 5.4 52.9948 5.50645 53.8393 5.71936C54.7038 5.9129 55.4779 6.18387 56.1616 6.53226C56.8653 6.88065 57.4685 7.2871 57.9711 7.75161C58.4738 8.19677 58.8759 8.67097 59.1775 9.1742L58.1219 12.1065C57.8002 11.6806 57.4082 11.2742 56.9457 10.8871C56.5034 10.5 55.9907 10.1613 55.4076 9.87097C54.8446 9.58065 54.2213 9.35807 53.5377 9.20323C52.854 9.02903 52.1302 8.94194 51.3661 8.94194C50.2402 8.94194 49.2148 9.11613 48.2899 9.46452C47.365 9.79355 46.5607 10.2677 45.8771 10.8871C45.2136 11.5065 44.6908 12.271 44.3088 13.1806C43.9468 14.071 43.7659 15.0774 43.7659 16.2C43.7659 17.3226 43.9468 18.329 44.3088 19.2194C44.6908 20.1097 45.2136 20.8742 45.8771 21.5129C46.5607 22.1323 47.365 22.6161 48.2899 22.9645C49.2148 23.2936 50.2402 23.4581 51.3661 23.4581C53.0149 23.4581 54.4223 23.1387 55.5885 22.5C56.7748 21.8419 57.6897 21.0774 58.3331 20.2065L59.3585 23.1677Z" fill="#e1a63b"></path><path d="M64.4902 5.77742H76.2525V9.31936H67.8982V14.1387H75.3477V17.6806H67.8982V23.0806H76.2525V26.6226H64.4902V5.77742Z" fill="#e1a63b"></path><path d="M98.1819 5.77742V26.6226H94.804V9.31936H88.4102C88.3297 12.3194 88.1387 14.9129 87.8371 17.1C87.5355 19.2871 87.1032 21.0968 86.5403 22.529C85.9773 23.9613 85.2735 25.0258 84.4291 25.7226C83.6047 26.4 82.6195 26.7387 81.4734 26.7387C81.2522 26.7387 81.0311 26.7194 80.8099 26.6806C80.5887 26.6419 80.4078 26.5935 80.267 26.5355L79.6638 23.5161C80.267 23.4774 80.8199 23.371 81.3226 23.1968C81.8253 23.0032 82.2676 22.6839 82.6496 22.2387C83.0518 21.7742 83.4036 21.1452 83.7052 20.3516C84.0068 19.5387 84.2582 18.4839 84.4592 17.1871C84.6603 15.871 84.8111 14.2839 84.9116 12.4258C85.0323 10.5677 85.1026 8.35161 85.1227 5.77742H98.1819Z" fill="#e1a63b"></path><path d="M111.063 26.6226C112.048 26.6226 112.963 26.4677 113.808 26.1581C114.652 25.8484 115.386 25.4129 116.009 24.8516C116.633 24.2903 117.115 23.6129 117.457 22.8194C117.819 22.0258 118 21.1452 118 20.1774C118 19.2484 117.829 18.3871 117.487 17.5935C117.145 16.8 116.673 16.1226 116.07 15.5613C115.467 15 114.743 14.5645 113.898 14.2548C113.054 13.9258 112.119 13.7613 111.093 13.7613H108.349V5.77742H104.941V26.6226H111.063ZM108.349 23.0806V17.3032H111.606C112.451 17.3032 113.154 17.5742 113.717 18.1161C114.3 18.6387 114.592 19.3355 114.592 20.2065C114.592 21.0194 114.31 21.7065 113.747 22.2677C113.205 22.8097 112.491 23.0806 111.606 23.0806H108.349Z" fill="#e1a63b"></path>',6),R=[w];function x(e,t,r,a,c,o){return Object(n["x"])(),Object(n["f"])("svg",B,R)}var S={name:"DogLogo"};S.render=x;var T=S,_=r("3932"),L=r("6c02"),H=r("2501"),V={name:"Header",components:{Button:_["a"],DogLogo:T},setup:function(){var e=Object(L["d"])(),t=function(){e.push({name:H["a"].FAVORITES})},r=function(){e.push({name:H["a"].HOME})};return{goToHome:r,goToFavorites:t}}};r("c2d4");V.render=E;var I=V,M={name:"App",components:{Header:I},setup:function(){Object(u["c"])(k["a"],C);var e=Object(u["d"])(k["a"]),t=e.SET_FAVORITES,r=function(){var e=JSON.parse(localStorage.getItem("breedFavorites"))||[];t(e)};r()}};r("731d");M.render=o;var F=M,D=r("5502"),A=Object(D["a"])({state:{},mutations:{},actions:{},getters:{},modules:{}}),P=Object(L["a"])({history:Object(L["b"])("dogs-test/"),routes:[{name:H["a"].HOME,path:H["b"].HOME,component:function(){return r.e("chunk-c30ab6c4").then(r.bind(null,"1c62"))}},{name:H["a"].BREED,path:H["b"].BREED,component:function(){return r.e("chunk-29247a4e").then(r.bind(null,"a68c"))}},{name:H["a"].FAVORITES,path:H["b"].FAVORITES,component:function(){return r.e("chunk-01b223a4").then(r.bind(null,"7cf3"))}}]});r("fa6d"),r("fb98");Object(n["c"])(F).use(A).use(P).mount("#app")},"5fc9":function(e,t,r){},"731d":function(e,t,r){"use strict";r("867c")},"867c":function(e,t,r){},9424:function(e,t,r){e.exports=r.p+"img/dog.dd77090f.png"},"9e1e":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="dogs"},c2d4:function(e,t,r){"use strict";r("01ef")},ccf9:function(e,t,r){"use strict";r("5fc9")},f5b6:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return b})),r.d(t,"c",(function(){return l}));var n=r("1da1"),a=(r("96cf"),r("4de4"),r("b64b"),r("2ca0"),r("ac1f"),r("5319"),r("5502")),c=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a["b"])(),r={},c=Object.keys(t._actions).filter((function(t){return t.startsWith(e)})),o=function(a){var o=c[a].replace(e+"/","");r[o]=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch(c[a],r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},u=0;u<c.length;u++)o(u);return r},o=r("7a23"),u=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a["b"])(),r={},n=Object.keys(t.getters).filter((function(t){return t.startsWith(e)})),c=function(a){var c=n[a].replace(e+"/","");r[c]=Object(o["b"])((function(){return t.getters[n[a]]}))},u=0;u<n.length;u++)c(u);return r},i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a["b"])(),r={},n=Object.keys(t._mutations).filter((function(t){return t.startsWith(e)})),c=function(a){var c=n[a].replace(e+"/","");r[c]=function(e){return t.commit(n[a],e)}},o=0;o<n.length;o++)c(o);return r},s=function(e,t){var r=Object(a["b"])();r.hasModule(e)||r.registerModule(e,t),Object(o["t"])((function(){r.hasModule(e)&&r.unregisterModule(e)}))},f=c,d=u,b=i,l=s},fb98:function(e,t,r){}});
//# sourceMappingURL=app.2a6ae938.js.map