(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,c=1;c<r.length;c++){var s=r[c];0!==n[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ubike-practice/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"122c":function(t,e,r){},"3ead":function(t,e,r){t.exports=r.p+"img/bicycle-rider.33ed1a92.png"},a0d8:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var a=r("7a23");function n(t,e,r,n,o,i){const c=Object(a["l"])("Map");return Object(a["g"])(),Object(a["c"])(c)}const o=Object(a["p"])("data-v-41ab3436");Object(a["i"])("data-v-41ab3436");const i={class:"map-wrapper"},c={id:"map",ref:"map"},s={class:"input-wrapper"},l=Object(a["d"])("label",{for:"district"}," 選擇行政區 ",-1);Object(a["h"])();const p=o((t,e,r,n,o,p)=>(Object(a["g"])(),Object(a["c"])("div",i,[Object(a["d"])("div",c,null,512),Object(a["d"])("div",s,[l,Object(a["o"])(Object(a["d"])("select",{id:"district","onUpdate:modelValue":e[1]||(e[1]=e=>t.currentDistrict=e),name:"district",onChange:e[2]||(e[2]=(...e)=>t.onChange&&t.onChange(...e))},[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(t.districtsInfo,t=>(Object(a["g"])(),Object(a["c"])("option",{key:t,value:t},Object(a["m"])(t),9,["value"]))),128))],544),[[a["n"],t.currentDistrict]])])])));var u={coordinate:[25.033,121.5654],zoomLv:15,tileLayerURL:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",containerID:"map"};async function d(){const t="https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json",e=await fetch(t),{retVal:r}=await e.json(),a=Object.keys(r).map(t=>r[t]),n=a.map(t=>({availableBikes:parseInt(t.sbi,10),totalBikes:parseInt(t.tot,10),latLng:[parseFloat(t.lat),parseFloat(t.lng)],regionName:t.sarea,stationName:t.sna}));return n}const b=["中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"],f=new Map([["中正區",[25.0361013,121.5169923]],["大同區",[25.0630815,121.5142474]],["中山區",[25.0685018,121.5280918]],["松山區",[25.056242,121.5573418]],["大安區",[25.0274139,121.5372087]],["萬華區",[25.0275628,121.497341]],["信義區",[25.0327753,121.5715193]],["士林區",[25.0866494,121.5198019]],["北投區",[25.1211862,121.5075251]],["內湖區",[25.0713177,121.5866103]],["南港區",[25.0557703,121.6072372]],["文山區",[24.9982971,121.5544842]]]);var m=r("e11e"),h=r.n(m);class j{constructor(t,e){this.map=t,this.config=e}initialize(){const{map:t,config:e}=this,{coordinate:r,zoomLv:a,tileLayerURL:n}=e;t.setView(r,a),h.a.tileLayer(n).addTo(t)}}var v=j;class y{constructor(t){this.map=t,this.layer=h.a.layerGroup(),this.layer.addTo(t)}addMarker(t){t.marker.addTo(this.layer)}addMarkers(t){t.forEach(t=>{this.addMarker(t)})}clear(){this.layer.clearLayers()}}var O=y;class g{constructor(t){this.marker=h.a.marker(t,{icon:Object(m["icon"])({iconSize:[25,41],iconAnchor:[13,41],iconUrl:r("3ead")})})}static createMarker(t){return new g(t)}bindTooltip(t){const{marker:e}=this;e.bindTooltip(t),e.on("mousetover",()=>{e.openTooltip()}),e.on("mousetout",()=>{e.closeTooltip()})}}var w=g;class k{constructor(t,e,r){if(this.tootipTemplate=r,null===e)throw new Error("map ref is null type");this.map=h.a.map(e),this.mapInitializer=new v(this.map,t),this.mapMarkerLayer=new O(this.map),this.mapInitializer.initialize()}pinStations(t){const e=t.map(t=>{const e=w.createMarker(t.latLng);return e.bindTooltip(this.tootipTemplate(t)),e});this.mapMarkerLayer.addMarkers(e)}flyTo(t){if(null===this.map)throw new Error("Map is not correctly initialized");this.map.flyTo(t)}clearStations(){this.mapMarkerLayer.clear()}}var M=k,T=Object(a["e"])({name:"Map",setup(){const t=Object(a["j"])(b[0]),e=Object(a["j"])(b),r=Object(a["j"])(null);let n;const o=async()=>{const e=await d(),r=e.filter(e=>e.regionName===t.value);n.pinStations(r);const a=f.get(t.value);let o;void 0!==a&&(o=a,n.flyTo(o))};Object(a["f"])(()=>{n=new M(u,r.value,(function(t){const{regionName:e,stationName:r,totalBikes:a,availableBikes:n}=t;return`\n            <p>${e} - ${r}</p>\n            <p>總車輛數： ${a}</p>\n            <p>可使用車輛數： ${n}</p>\n          `})),o()});const i=async()=>{n.clearStations(),o()};return{map:r,currentDistrict:t,districtsInfo:e,onChange:i}}});r("d046");T.render=p,T.__scopeId="data-v-41ab3436";var L=T,S=Object(a["e"])({name:"App",components:{Map:L}});S.render=n;var z=S;r("a0d8"),r("6cc5");Object(a["b"])(z).mount("#app")},d046:function(t,e,r){"use strict";r("122c")}});