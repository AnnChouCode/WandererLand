import{a_ as L,aR as v,a3 as P,a2 as O}from"./@vue-RtdEgFn9.js";import{c as R}from"./pinia-MbC3oHy8.js";import{a as A}from"./axios-xY6ymfx7.js";import{p as T}from"./vue-axios-1bbP-7uc.js";import{d as h}from"./vue-loading-overlay-6MyPOO4d.js";import{C as V}from"./@ckeditor-15bwuaMj.js";import{V as I}from"./vue-sweetalert2-HUKuUMJw.js";import"./sweetalert2-ZSPr1-be.js";import{d as W,c as D,F as g,b as y,E as b}from"./vee-validate-O19HqbHO.js";import{A as u,l as w,s as k,z as $}from"./@vee-validate-Akla6Y1w.js";import"./bootstrap-HkqsEQF2.js";/* empty css                        */import{A as C}from"./aos-n3b4jLc5.js";import{c as F,a as S}from"./vue-router-RDvB-lrw.js";import"./vue-ogx55dXw.js";import"./@popperjs-kvWuk1nc.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const B=(e,i)=>{const a=e.__vccOpts||e;for(const[d,r]of i)a[d]=r;return a},x={mounted(){C.init()}};function z(e,i,a,d,r,n){const o=L("RouterView");return v(),P(o)}const M=B(x,[["render",z]]),N="modulepreload",q=function(e){return"/WandererLand/"+e},f={},t=function(i,a,d){let r=Promise.resolve();if(a&&a.length>0){const n=document.getElementsByTagName("link");r=Promise.all(a.map(o=>{if(o=q(o),o in f)return;f[o]=!0;const m=o.endsWith(".css"),E=m?'[rel="stylesheet"]':"";if(!!d)for(let c=n.length-1;c>=0;c--){const _=n[c];if(_.href===o&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${E}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":N,m||(p.as="script",p.crossOrigin=""),p.href=o,document.head.appendChild(p),m)return new Promise((c,_)=>{p.addEventListener("load",c),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>i()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})},H=h.useLoading(),K=[{path:"/",redirect:"home",component:()=>t(()=>import("./UserLayout-cOYZBdeg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])),meta:{navbarType:"frontend"},children:[{path:"home",name:"userhome",component:()=>t(()=>import("./UserHome-GDIeWMCA.js"),__vite__mapDeps([26,27,2,3,5,1,4,6,7,8,9,10,11,28,13,29,30,31,12,32,33,34,35,36,37,38,39,40,17,18,19,20,14,15,21,22,23,41,25])),meta:{title:"Wanderer Land"}},{path:"productlist",name:"productlist",component:()=>t(()=>import("./UserProductList-eyrnnYFv.js"),__vite__mapDeps([42,13,2,3,5,6,7,8,9,10,11,31,12,4,1,32,14,15,35,36,43,17,18,19,20,21,22,23,25])),meta:{title:"作品列表 - Wanderer Land"}},{path:"productinfo/:id",component:()=>t(()=>import("./UserProductInfo-2b2T7opM.js"),__vite__mapDeps([44,13,2,3,5,6,7,8,9,10,11,12,4,1,31,32,35,36,37,38,17,18,19,20,14,15,21,22,23,25])),props:e=>({id:e.params.id}),meta:{title:"作品資訊 - Wanderer Land"}},{path:"artistlist",name:"artistlist",component:()=>t(()=>import("./UserArtistList-5TixUbuI.js"),__vite__mapDeps([45,13,2,3,5,6,7,8,9,10,11,14,15,35,36,43,17,18,19,20,21,22,23,25])),meta:{title:"藝術家列表 - Wanderer Land"}},{path:"artistinfo/:id",component:()=>t(()=>import("./UserArtistInfo-WbaIivzI.js"),__vite__mapDeps([46,13,2,3,5,6,7,8,9,10,11,31,12,4,1,32,35,36,17,18,19,20,14,15,21,22,23,25])),props:e=>({id:e.params.id}),meta:{title:"藝術家資訊 - Wanderer Land"}},{path:"cart",name:"cart",component:()=>t(()=>import("./UserCart-E5bLIUYZ.js"),__vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,28,13,29,30,31,12,32,33,34,35,36,37,38,39,14,15,40,17,18,19,20,21,22,23,48,25])),meta:{title:"購物車 - Wanderer Land"}},{path:"order",component:()=>t(()=>import("./UserOrder-lhTqfiHv.js"),__vite__mapDeps([49,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,50,25])),props:e=>({id:e.params.id}),meta:{title:"訂單 - Wanderer Land"},children:[{path:"checkform",name:"checkform",component:()=>t(()=>import("./UserCheckOrderForm-rzGA2yK4.js"),__vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,11,17,18,19,20,14,15,21,22,23,25]))},{path:"payorder/:id",component:()=>t(()=>import("./UserPayOrder-KnEGDtcT.js"),__vite__mapDeps([52,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),props:e=>({id:e.params.id})},{path:"orderhistory/:id",component:()=>t(()=>import("./UserOrderHistory--B3R0yxi.js"),__vite__mapDeps([53,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),props:e=>({id:e.params.id})}]},{path:"articlelist",name:"articlelist",component:()=>t(()=>import("./UserArticleList-dEMHDHbM.js"),__vite__mapDeps([54,27,2,3,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),meta:{title:"最新消息 - Wanderer Land"}},{path:"articleinfo/:id",component:()=>t(()=>import("./UserArticleInfo-pREM3Fg9.js"),__vite__mapDeps([55,29,3,30,31,12,2,4,1,5,6,7,8,9,10,11,32,33,34,17,18,19,20,14,15,21,22,23,56,25])),props:e=>({id:e.params.id}),meta:{title:"最新消息 - Wanderer Land"}},{path:"favoritelist",name:"favoritelist",component:()=>t(()=>import("./UserFavoriteList-SLkbw748.js"),__vite__mapDeps([57,12,2,3,4,1,5,6,7,8,9,10,11,31,32,35,36,28,13,29,30,33,34,37,38,39,17,18,19,20,14,15,21,22,23,25])),meta:{title:"收藏 - Wanderer Land"}},{path:"userlogin",name:"userlogin",component:()=>t(()=>import("./UserLogin-PMdGR1OS.js"),__vite__mapDeps([58,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),meta:{title:"登入 - Wanderer Land"}}]},{path:"/admin",redirect:"/admin/dashboard",component:()=>t(()=>import("./AdminLayout-PJOEqmQi.js"),__vite__mapDeps([59,14,15,7,8,3,2,5,6,9,10,11,17,18,19,20,21,22,23,25])),meta:{navbarType:"backend"},children:[{path:"dashboard",name:"dashboard",component:()=>t(()=>import("./AdminDashBoard-5ra1a-_Y.js"),__vite__mapDeps([60,61,2,3,5,6,7,8,9,10,11,62,63,64,65,17,18,19,20,14,15,21,22,23,25])),meta:{title:"使用者後台 - Wanderer Land"}},{path:"products",name:"products",component:()=>t(()=>import("./AdminProductList-5fr41p0K.js"),__vite__mapDeps([66,43,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),meta:{title:"商品管理 - Wanderer Land"}},{path:"productinfo/new",component:()=>t(()=>import("./AdminProductInfo-PHwqDpLd.js"),__vite__mapDeps([67,62,2,3,5,6,7,8,9,68,14,15,69,17,10,11,18,19,20,21,22,23,25])),meta:{title:"商品管理 - Wanderer Land"}},{path:"productinfo/:id",component:()=>t(()=>import("./AdminProductInfo-PHwqDpLd.js"),__vite__mapDeps([67,62,2,3,5,6,7,8,9,68,14,15,69,17,10,11,18,19,20,21,22,23,25])),props:e=>({id:e.params.id}),meta:{title:"商品管理 - Wanderer Land"}},{path:"artists",name:"artists",component:()=>t(()=>import("./AdminArtistList-0xvBR3DA.js"),__vite__mapDeps([70,43,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),meta:{title:"藝術家管理 - Wanderer Land"}},{path:"artistinfo/new",component:()=>t(()=>import("./AdminArtistInfo-nkBH5LWf.js"),__vite__mapDeps([71,62,2,3,5,6,7,8,9,68,14,15,69,17,10,11,18,19,20,21,22,23,25])),meta:{title:"藝術家管理 - Wanderer Land"}},{path:"artistinfo/:id",component:()=>t(()=>import("./AdminArtistInfo-nkBH5LWf.js"),__vite__mapDeps([71,62,2,3,5,6,7,8,9,68,14,15,69,17,10,11,18,19,20,21,22,23,25])),props:e=>({id:e.params.id}),meta:{title:"藝術家管理 - Wanderer Land"}},{path:"orders",name:"orders",component:()=>t(()=>import("./AdminOrders-YYqpKS12.js"),__vite__mapDeps([72,61,2,3,5,6,7,8,9,10,11,43,17,18,19,20,14,15,21,22,23,25])),meta:{title:"訂單管理 - Wanderer Land"}},{path:"orderinfo/:id",component:()=>t(()=>import("./AdminOrderInfo-zilFLYHd.js"),__vite__mapDeps([73,4,2,3,61,5,6,7,8,9,10,11,16,17,18,19,20,14,15,21,22,23,25])),props:e=>({id:e.params.id}),meta:{title:"訂單管理 - Wanderer Land"}},{path:"coupons",name:"coupons",component:()=>t(()=>import("./AdminCoupons-pn3VBVEJ.js"),__vite__mapDeps([74,43,3,14,15,7,8,2,5,17,10,11,18,6,9,19,20,21,22,23,25])),meta:{title:"優惠券管理 - Wanderer Land"}},{path:"articles",name:"articles",component:()=>t(()=>import("./AdminArticles-oNBDokH7.js"),__vite__mapDeps([75,43,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),meta:{title:"文章管理 - Wanderer Land"}},{path:"articleinfo/new",component:()=>t(()=>import("./AdminArticleInfo-IKR_hAaP.js"),__vite__mapDeps([76,62,2,3,5,6,7,8,9,68,14,15,69,17,10,11,18,19,20,21,22,23,25])),meta:{title:"文章管理 - Wanderer Land"}},{path:"articleinfo/:id",component:()=>t(()=>import("./AdminArticleInfo-IKR_hAaP.js"),__vite__mapDeps([76,62,2,3,5,6,7,8,9,68,14,15,69,17,10,11,18,19,20,21,22,23,25])),props:e=>({id:e.params.id}),meta:{title:"文章管理 - Wanderer Land"}}]},{path:"/:pathMatch(.*)*",component:()=>t(()=>import("./NotFound-sd6V4Rni.js"),__vite__mapDeps([77,3,2,5,17,10,7,8,11,18,6,9,19,20,14,15,21,22,23,25])),meta:{title:"404 Not Found - Wanderer Land"}}],l=F({history:S("/WandererLand/"),routes:K,scrollBehavior(e,i,a){return{top:0,behavior:"smooth"}}});l.beforeEach((e,i,a)=>{const d=H.show();window.setTimeout(()=>{d.hide()},500);const r=e.meta.navbarType==="backend"?"theme-dark-navlink-active":e.meta.navbarType==="frontend"?"navlink-underline-active":"active";l.options.linkActiveClass=r,window.document.title=e.meta.title,a()});Object.keys(u).forEach(e=>{W(e,u[e])});D({generateMessage:w({zh_TW:$}),validateOnInput:!0});k("zh_TW");const s=O(M);s.component("VField",g);s.component("VForm",y);s.component("ErrorMessage",b);s.use(h.LoadingPlugin);s.use(I);s.use(R());s.use(l);s.use(T,A);s.use(V);s.mount("#app");export{B as _,l as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/UserLayout-cOYZBdeg.js","js/userCartStore-aEWKtqex.js","js/pinia-MbC3oHy8.js","js/@vue-RtdEgFn9.js","js/statusStore-6mt2sTJ7.js","js/axios-xY6ymfx7.js","js/sweetalert2-ZSPr1-be.js","js/@ckeditor-15bwuaMj.js","js/vue-ogx55dXw.js","css/sweetalert2-HcmSzNJH.css","js/vue-loading-overlay-6MyPOO4d.js","css/vue-loading-overlay-Jz-XT2I8.css","js/favoriteStore-Z2QY64HZ.js","js/userProductStore--mDp9O8d.js","js/bootstrap-HkqsEQF2.js","js/@popperjs-kvWuk1nc.js","js/ToastComponent-VT-ZwWxw.js","js/vue-axios-1bbP-7uc.js","js/vue-sweetalert2-HUKuUMJw.js","js/vee-validate-O19HqbHO.js","js/@vee-validate-Akla6Y1w.js","js/aos-n3b4jLc5.js","css/aos-dGvTjJ5y.css","js/vue-router-RDvB-lrw.js","css/UserLayout-RJu6hwwI.css","css/bootstrap-icons-vzEYM2XF.css","js/UserHome-GDIeWMCA.js","js/userArticleStore-krJDokus.js","js/SwiperProductComponent-tf1UBvY2.js","js/swiper-1n6CH-5D.js","css/swiper-X6JVtDKv.css","js/BtnFavorite-cyeL69pM.js","css/BtnFavorite-e1GBeLow.css","js/BtnSwiperNavigation-JeRt2tNp.js","css/BtnSwiperNavigation-DP2vLcA6.css","js/ProductCard-SELlnKqX.js","css/ProductCard-mcj-eTmQ.css","js/BtnSeeMore--18JWND4.js","css/BtnSeeMore-9Y7-6qIc.css","css/SwiperProductComponent-4rJV-v_V.css","js/present-c_8y0YNH.js","css/UserHome-mz-KSqt1.css","js/UserProductList-eyrnnYFv.js","js/PaginationComponent-IGa7Fr1q.js","js/UserProductInfo-2b2T7opM.js","js/UserArtistList-5TixUbuI.js","js/UserArtistInfo-WbaIivzI.js","js/UserCart-E5bLIUYZ.js","css/UserCart-DR-VfwZA.css","js/UserOrder-lhTqfiHv.js","css/UserOrder-AvPCUqd1.css","js/UserCheckOrderForm-rzGA2yK4.js","js/UserPayOrder-KnEGDtcT.js","js/UserOrderHistory--B3R0yxi.js","js/UserArticleList-dEMHDHbM.js","js/UserArticleInfo-pREM3Fg9.js","css/UserArticleInfo-BFccWfoE.css","js/UserFavoriteList-SLkbw748.js","js/UserLogin-PMdGR1OS.js","js/AdminLayout-PJOEqmQi.js","js/AdminDashBoard-5ra1a-_Y.js","js/adminOrderStore-CnhCIokM.js","js/adminProductStore-xZAgPN0O.js","js/vue-chartjs-0hiJHHW1.js","js/chart.js-xCqgB7A1.js","js/@kurkle-sRCxMDZz.js","js/AdminProductList-5fr41p0K.js","js/AdminProductInfo-PHwqDpLd.js","js/UploadImageModal-Vyfbr6ev.js","css/UploadImageModal-PBDjke_Y.css","js/AdminArtistList-0xvBR3DA.js","js/AdminArtistInfo-nkBH5LWf.js","js/AdminOrders-YYqpKS12.js","js/AdminOrderInfo-zilFLYHd.js","js/AdminCoupons-pn3VBVEJ.js","js/AdminArticles-oNBDokH7.js","js/AdminArticleInfo-IKR_hAaP.js","js/NotFound-sd6V4Rni.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}