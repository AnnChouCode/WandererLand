import{f as e}from"./favoriteStore-Z2QY64HZ.js";import{m as s,a as n}from"./pinia-MbC3oHy8.js";import{_ as l}from"./index-u8fAXc12.js";import{aR as c,a5 as p,a6 as o,aG as d}from"./@vue-RtdEgFn9.js";const f={props:["productId"],methods:{...s(e,["getFavoriteList","handleFavorite","getFavoriteProducts"]),toggleFavorite(){this.handleFavorite(this.productId),this.triggerGetFavorites&&this.getFavoriteProducts()}},mounted(){this.getFavoriteList()},computed:{...n(e,["favoriteList"])},inject:{triggerGetFavorites:{type:Boolean,default:!1}}},m=o("i",{class:"bi bi-heart-fill text-info"},null,-1);function u(i,t,a,v,g,r){return c(),p("button",{type:"button",class:"position-relative btn-favorite btn p-0",onClick:t[0]||(t[0]=h=>r.toggleFavorite())},[o("i",{class:d(["position-absolute bi",i.favoriteList.includes(a.productId)?"bi-heart-fill":"bi-heart"])},null,2),m])}const L=l(f,[["render",u]]);export{L as B};