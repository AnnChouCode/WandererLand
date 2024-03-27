import{u as d}from"./userProductStore-y6neMYeS.js";import{m as w,a as S,_ as P,r as i,o as a,c as u,b as c,t as y,i as p,h as N,e as r,f as m,F as B,d as D}from"./index-dItq-4U-.js";import{A as k,P as v,N as C,S as A,a as x,B as I}from"./BtnSwiperNavigation-wkZYLAwZ.js";import{P as b}from"./productCard-CHQ42LKH.js";import{B as O}from"./BtnSeeMore-iLi9HvYz.js";const V={props:["dataCategory"],data(){return{maxNumItem:8,DataInfo:{products:{title:"探索新作品",path:"/productlist",infoPath:"productinfo"},artists:{title:"認識新藝術家",path:"/artistlist",infoPath:"artistinfo"},recently:{title:"猜你喜歡",path:"",infoPath:"productinfo"}},currentDatas:[],modules:[k,v,C],isArtistBlock:!0}},methods:{...w(d,["getAllProducts"]),shuffleArray(t){for(let s=t.length-1;s>0;s--){const o=Math.floor(Math.random()*(s+1));[t[s],t[o]]=[t[o],t[s]]}return t},getRandomProducts(t){const s=this.maxNumItem-this.currentDatas.length;return this.shuffleArray(t).slice(0,s)},async getAllDatas(){await this.getAllProducts(),this.dataCategory==="artists"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestArtist)).slice(0,this.maxNumItem)),this.dataCategory==="products"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestProduct)).slice(0,this.maxNumItem)),this.dataCategory==="recently"&&(this.currentDatas=this.currentDatas.concat(this.getRandomProducts(this.sortNewest.newestProduct)))}},mounted(){if(this.isArtistBlock=this.dataCategory==="artists",this.dataCategory==="recently"){const t=JSON.parse(localStorage.getItem("recentlyList"))||[];if(this.currentDatas=t,this.currentDatas.length>=this.maxNumItem)return}this.getAllDatas()},computed:{...S(d,["sortNewest"])},components:{Swiper:A,SwiperSlide:x,BtnSwiperNavigation:I,ProductCard:b,BtnSeeMore:O}},J={class:"py-7 py-md-9"},M={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},j={class:"fs-2 fs-md-1"},F={class:"position-relative"};function L(t,s,o,T,e,E){const h=i("BtnSeeMore"),f=i("ProductCard"),g=i("SwiperSlide"),l=i("BtnSwiperNavigation"),_=i("Swiper");return a(),u("div",J,[c("div",M,[c("h2",j,y(e.DataInfo[o.dataCategory].title),1),e.DataInfo[o.dataCategory].path!==""?(a(),p(h,{key:0,linkTo:e.DataInfo[o.dataCategory].path},null,8,["linkTo"])):N("",!0)]),c("div",F,[r(_,{slidesPerView:2,spaceBetween:12,pagination:{clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:48}},autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:e.modules,class:"product-swiper"},{default:m(()=>[(a(!0),u(B,null,D(e.currentDatas,n=>(a(),p(g,{key:n.id},{default:m(()=>[r(f,{item:n,linkTo:`/${e.DataInfo[o.dataCategory].infoPath}/${n.id}`,showPrice:!e.isArtistBlock,showFavorite:!e.isArtistBlock,shape:e.isArtistBlock?"rounded-circle":"",titlePosition:e.isArtistBlock?"text-center":""},null,8,["item","linkTo","showPrice","showFavorite","shape","titlePosition"])]),_:2},1024))),128)),r(l,{position:"bottom",direction:"next"}),r(l,{position:"bottom",direction:"prev"})]),_:1},8,["navigation","modules"])])])}const G=P(V,[["render",L],["__scopeId","data-v-5cf211a3"]]),H="/WandererLand/assets/present-jzVKie_p.jpg";export{G as S,H as _};
