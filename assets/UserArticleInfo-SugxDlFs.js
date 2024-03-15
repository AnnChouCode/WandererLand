import{A as k,P as A,N as C,S as I,a as T}from"./navigation.min-Uc1AKx6P.js";import{b as E}from"./btnFavorite-7GGhd1Xr.js";import{_ as P,r as d,o as i,c as n,b as t,d as _,w as m,t as c,e as g,f,F as p,i as b,h as V,p as L,j as D}from"./index-WtO-PnXn.js";var N={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:j,VITE_PATH:B}=N,F={data(){return{article:{},articleContent:"",modules:[k,A,C]}},methods:{getCurrentArticle(o){const l=`${j}/api/${B}/article/${o}`;return this.axios.get(l).then(a=>{const r=a.data.article;this.article=r,this.handleArticleContent()}).catch(a=>console.log(a.response.data.message))},handleArticleContent(){const o=this.article.content,l=[["<h2>",'<h2 class="mt-8 mb-4 fs-3 fs-md-2">'],["<h3>",'<h3 class="mt-5 mb-3 fs-5 fs-md-3">'],["<h4>",'<h4 class="my-3 fs-6 fs-md-5">'],["<p>",'<p class="mb-3 fs-info fs-md-6">']];this.articleContent=l.reduce((a,[r,e])=>a.replaceAll(r,e),o)},toRelatedTag(o){this.$router.push(`/articleList?tag=${o}`)}},mounted(){const o=this.$route.params.id;this.getCurrentArticle(o)},components:{Swiper:I,SwiperSlide:T,btnFavorite:E}},h=o=>(L("data-v-e277f247"),o=o(),D(),o),R={key:0,class:"container user-page-container"},U={class:"row"},H={class:"col-12 col-md-8 mx-auto"},z={class:"position-relative mb-5 mb-md-8"},M={class:"position-relative overflow-hidden"},O=["src"],$=h(()=>t("div",{class:"z-1 swiper-button-next translate-middle-y"},[t("i",{class:"bi bi-arrow-right-circle text-warning fs-1"})],-1)),W=h(()=>t("div",{class:"z-1 swiper-button-prev translate-middle-y"},[t("i",{class:"bi bi-arrow-left-circle text-warning fs-1"})],-1)),q={class:"mb-7 mb-md-8 text-center"},G={class:"mb-4 h1 lh-sm title-letter-spacing h1"},J={key:0,class:"text-info"},K=h(()=>t("span",{class:"px-2 fw-bold"},"‧",-1)),Q=["innerHTML"],X={class:"d-flex gap-1 mb-0 flex-wrap"},Y=["onClick"],Z={key:1,class:"container"},tt={class:"py-7 py-md-9"},et=h(()=>t("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"關聯作品",-1)),st={class:"row g-3 g-md-8"},ot={class:"position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img"},it=["src","alt"],nt=["src"],at={class:"py-3 px-0 px-md-4"},ct={class:"mb-2 fs-info fs-md-5 fw-bold text-default"},lt={class:"d-flex justify-content-between align-items-center"},rt={class:"fs-info fs-md-6 text-info"};function dt(o,l,a,r,e,w){const x=d("SwiperSlide"),y=d("Swiper"),v=d("router-link"),S=d("btnFavorite");return i(),n(p,null,[e.article?(i(),n("div",R,[t("div",U,[t("div",H,[t("div",z,[_(y,{slidesPerView:1,spaceBetween:24,pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:e.modules,class:"article-swiper"},{default:m(()=>[(i(!0),n(p,null,b(e.article.imagesUrl,(s,u)=>(i(),V(x,{key:u},{default:m(()=>[t("div",M,[t("img",{src:s,alt:"news",class:"object-fit-contain w-100 h-100"},null,8,O)])]),_:2},1024))),128)),$,W]),_:1},8,["navigation","modules"])]),t("div",q,[t("h2",G,c(e.article.title),1),e.article.create_at?(i(),n("p",J,[g(c(new Date(e.article.create_at*1e3).toLocaleDateString())+" ",1),K,g(" "+c(e.article.author),1)])):f("",!0)]),t("div",{innerHTML:e.articleContent,class:"mb-7 mb-md-8"},null,8,Q),t("div",X,[(i(!0),n(p,null,b(e.article.tag,(s,u)=>(i(),n("button",{type:"button",class:"btn px-3 py-1 bg-light rounded-pill fs-info text-info",key:u,onClick:_t=>w.toRelatedTag(s)},c(s),9,Y))),128))])])])])):f("",!0),e.article.relatedProduct?(i(),n("div",Z,[t("div",tt,[et,t("div",st,[(i(!0),n(p,null,b(e.article.relatedProduct,s=>(i(),n("div",{class:"col-6 col-md-4",key:s.id},[_(v,{to:`/productinfo/${s.id}`},{default:m(()=>[t("div",ot,[t("img",{src:s.imageUrl,alt:s.title,class:"object-fit-contain w-100 h-100 product-img-up"},null,8,it),t("img",{src:s.imagesUrl[0],alt:"item.title",class:"position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down"},null,8,nt)])]),_:2},1032,["to"]),t("div",at,[_(v,{to:`/productinfo/${s.id}`},{default:m(()=>[t("h3",ct,c(s.title),1)]),_:2},1032,["to"]),t("div",lt,[t("p",rt,"NT$ "+c(s.price.toLocaleString()),1),_(S)])])]))),128))])])])):f("",!0)],64)}const ut=P(F,[["render",dt],["__scopeId","data-v-e277f247"]]);export{ut as default};
