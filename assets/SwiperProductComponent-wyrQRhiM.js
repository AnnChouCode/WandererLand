import{u as d}from"./userProductStore-thdM8GQl.js";import{m as _,a as S,_ as P,r as i,o as a,c as u,b as c,t as y,i as p,h as N,e as r,f as m,F as B,d as v}from"./index-XGQmqWAH.js";import{A as D,P as k,N as C,S as A,a as x,B as I}from"./BtnSwiperNavigation-Wa9clzcO.js";import{P as b}from"./productCard-yX9fqMH3.js";import{B as O}from"./BtnSeeMore-dAvKh1xi.js";const F={props:["dataCategory"],data(){return{maxNumItem:8,DataInfo:{products:{title:"探索新作品",path:"/productlist",infoPath:"productinfo"},artists:{title:"認識新藝術家",path:"/artistlist",infoPath:"artistinfo"},recently:{title:"猜你喜歡",path:"",infoPath:"productinfo"}},currentDatas:[],modules:[D,k,C],isArtistBlock:!0}},methods:{..._(d,["getAllProducts"]),shuffleArray(t){for(let s=t.length-1;s>0;s--){const o=Math.floor(Math.random()*(s+1));[t[s],t[o]]=[t[o],t[s]]}return t},getRandomProducts(t){const s=this.maxNumItem-this.currentDatas.length;return this.shuffleArray(t).slice(0,s)},async getAllDatas(){await this.getAllProducts(),this.dataCategory==="artists"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestArtist)).slice(0,this.maxNumItem)),this.dataCategory==="products"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestProduct)).slice(0,this.maxNumItem)),this.dataCategory==="recently"&&(this.currentDatas=this.currentDatas.concat(this.getRandomProducts(this.sortNewest.newestProduct)))}},mounted(){if(this.isArtistBlock=this.dataCategory==="artists",this.dataCategory==="recently"){const t=JSON.parse(localStorage.getItem("recentlyList"))||[];if(this.currentDatas=t,this.currentDatas.length>=this.maxNumItem)return}this.getAllDatas()},computed:{...S(d,["sortNewest"])},components:{Swiper:A,SwiperSlide:x,BtnSwiperNavigation:I,ProductCard:b,BtnSeeMore:O},inject:["triggerGetFavorites"]},J={class:"py-7 py-md-9"},M={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},V={class:"fs-2 fs-md-1"},T={class:"position-relative"};function j(t,s,o,E,e,L){const h=i("BtnSeeMore"),f=i("ProductCard"),g=i("SwiperSlide"),l=i("BtnSwiperNavigation"),w=i("Swiper");return a(),u("div",J,[c("div",M,[c("h2",V,y(e.DataInfo[o.dataCategory].title),1),e.DataInfo[o.dataCategory].path!==""?(a(),p(h,{key:0,linkTo:e.DataInfo[o.dataCategory].path},null,8,["linkTo"])):N("",!0)]),c("div",T,[r(w,{slidesPerView:2,spaceBetween:12,pagination:{clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:48}},autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:e.modules,class:"product-swiper"},{default:m(()=>[(a(!0),u(B,null,v(e.currentDatas,n=>(a(),p(g,{key:n.id},{default:m(()=>[r(f,{item:n,linkTo:`/${e.DataInfo[o.dataCategory].infoPath}/${n.id}`,showPrice:!e.isArtistBlock,showFavorite:!e.isArtistBlock,shape:e.isArtistBlock?"rounded-circle":"",titlePosition:e.isArtistBlock?"text-center":""},null,8,["item","linkTo","showPrice","showFavorite","shape","titlePosition"])]),_:2},1024))),128)),r(l,{position:"bottom",direction:"next"}),r(l,{position:"bottom",direction:"prev"})]),_:1},8,["navigation","modules"])])])}const K=P(F,[["render",j],["__scopeId","data-v-e55a4fee"]]);export{K as S};
