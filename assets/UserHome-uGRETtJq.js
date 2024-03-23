import{u as I}from"./userArticleStore-p_w2j1WS.js";import{m as k,a as P,_ as S,r,o as f,c as h,b as t,t as i,i as N,f as a,g as x,h as v,e as s,F as V,d as U,n as w,p as D,k as z,j as M}from"./index-qYUpKk1-.js";import{u as $}from"./userProductStore-Q0Q13Odl.js";import{A as B,P as F,N as L,S as O,a as E,b as J}from"./btnSwiperNavigation-erDeAAlu.js";import{b as q}from"./btnFavorite-gH8asKTl.js";import{c as R}from"./userCartStore-rTD5MnIH.js";import{_ as T}from"./present-lRjK0Ip5.js";import"./sweetalert2.all-qPe0gviD.js";import"./favoriteStore-GRE_Ck9_.js";import"./statusStore-0rk32sr2.js";const H={props:["dataCategory"],data(){return{maxNumItem:8,DataInfo:{products:{title:"探索新作品",path:"/productlist",infoPath:"/productinfo"},artists:{title:"認識新藝術家",path:"/artistlist",infoPath:"/artistinfo"},recently:{title:"猜你喜歡",path:"",infoPath:"/productinfo"}},currentDatas:[],modules:[B,F,L],isArtistBlock:!0}},methods:{...k($,["getAllProducts"]),shuffleArray(e){for(let o=e.length-1;o>0;o--){const d=Math.floor(Math.random()*(o+1));[e[o],e[d]]=[e[d],e[o]]}return e},getRandomProducts(e){const o=this.maxNumItem-this.currentDatas.length;return this.shuffleArray(e).slice(0,o)},async getAllDatas(){await this.getAllProducts(),this.dataCategory==="artists"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestArtist)).slice(0,this.maxNumItem)),this.dataCategory==="products"&&(this.currentDatas=JSON.parse(JSON.stringify(this.sortNewest.newestProduct)).slice(0,this.maxNumItem)),this.dataCategory==="recently"&&(this.currentDatas=this.currentDatas.concat(this.getRandomProducts(this.sortNewest.newestProduct)))}},mounted(){if(this.isArtistBlock=this.dataCategory==="artists",this.dataCategory==="recently"){const e=JSON.parse(localStorage.getItem("recentlyList"))||[];if(this.currentDatas=e,this.currentDatas.length>=this.maxNumItem)return}this.getAllDatas()},computed:{...P($,["sortNewest"])},components:{Swiper:O,SwiperSlide:E,btnFavorite:q,btnSwiperNavigation:J}},W={class:"py-7 py-md-9"},G={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},K={class:"fs-2 fs-md-1"},Q={class:"position-relative"},X=["src","alt"],Y=["src"],Z={class:"py-3 px-0 px-md-4"},tt={key:0,class:"d-flex justify-content-between align-items-center"},et={class:"fs-info fs-md-6 text-info"};function st(e,o,d,j,l,A){const c=r("router-link"),g=r("btnFavorite"),y=r("SwiperSlide"),p=r("btnSwiperNavigation"),_=r("Swiper");return f(),h("div",W,[t("div",G,[t("h2",K,i(l.DataInfo[d.dataCategory].title),1),l.DataInfo[d.dataCategory].path!==""?(f(),N(c,{key:0,to:l.DataInfo[d.dataCategory].path,class:"text-default border-bottom border-default fw-bold fs-info fs-md-6"},{default:a(()=>[x("瀏覽更多")]),_:1},8,["to"])):v("",!0)]),t("div",Q,[s(_,{slidesPerView:2,spaceBetween:12,pagination:{clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:48}},autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:l.modules,class:"product-swiper"},{default:a(()=>[(f(!0),h(V,null,U(l.currentDatas,(m,b)=>(f(),N(y,{key:b},{default:a(()=>[s(c,{to:`${l.DataInfo[d.dataCategory].infoPath}/${m.id}`},{default:a(()=>[t("div",{class:w(["position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img",{"rounded-circle":l.isArtistBlock}])},[t("img",{src:m.imageUrl,alt:m.title,class:"object-fit-contain w-100 h-100 product-img-up"},null,8,X),t("img",{src:m.imagesUrl[0],alt:"item.title",class:"position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down"},null,8,Y)],2)]),_:2},1032,["to"]),t("div",Z,[s(c,{to:`${l.DataInfo[d.dataCategory].infoPath}/${m.id}`},{default:a(()=>[t("h3",{class:w(["mb-2 fs-info fs-md-5 fw-bold text-default",{"text-center":l.isArtistBlock}])},i(m.title),3)]),_:2},1032,["to"]),l.isArtistBlock?v("",!0):(f(),h("div",tt,[t("p",et,"NT$ "+i(m.price.toLocaleString()),1),s(g,{productId:m.id},null,8,["productId"])]))])]),_:2},1024))),128)),s(p,{position:"bottom",direction:"next"}),s(p,{position:"bottom",direction:"prev"})]),_:1},8,["navigation","modules"])])])}const ot=S(H,[["render",st],["__scopeId","data-v-2ff0a450"]]),it={methods:{...k(R,["copyCouponCode"])}},C=e=>(D("data-v-6e70ea0b"),e=e(),z(),e),lt={class:"position-relative d-flex justify-content-center align-items-center w-100 home-coupon overflow-hidden bg-primary"},nt={class:"position-absolute top-50 z-1 translate-middle-y text-center title-shadow"},at=C(()=>t("h2",{class:"mb-2 fs-4 fs-md-1 text-white title-letter-spacing"},"使用優惠券",-1)),ct=C(()=>t("p",{class:"mb-7 fs-info fs-md-6 text-white"},"為你的第一筆訂單，獲取 97 折折扣",-1)),dt=C(()=>t("img",{src:T,alt:"coupon",class:"object-fit-cover w-100 h-100","data-aos":"zoom-out","data-aos-duration":"3000"},null,-1));function rt(e,o,d,j,l,A){return f(),h("div",lt,[t("div",nt,[at,ct,t("button",{type:"button",class:"py-2 py-md-3 px-6 px-md-9 btn btn-light fw-bold rounded-0",onClick:o[0]||(o[0]=c=>e.copyCouponCode("present97"))},"點擊複製優惠碼")]),dt])}const mt=S(it,[["render",rt],["__scopeId","data-v-6e70ea0b"]]),ft={data(){return{tempMessage:{type:"",Name:""},message:{subject:"",body:""}}},watch:{tempMessage:{handler(){const e=this.tempMessage.type!==void 0?this.tempMessage.type:"",o=this.tempMessage.name!==void 0?`_${this.tempMessage.name}`:"";this.message.subject=`【${e}${o}】`},deep:!0}},methods:{...k(I,["getArticlesList"]),sendEmail(){Object.values(this.message).every(o=>o!=="")&&(window.open(`mailto:wandererland@gmail.com?cc=${this.message.email}&subject=${this.message.subject}&body=${this.message.body}`,"_blank"),this.$refs.cooperationForm.resetForm())}},components:{swiperProductComponent:ot,couponComponent:mt},computed:{...P(I,["sortArticles","articlesList"])},mounted(){this.getArticlesList()}},n=e=>(D("data-v-15029593"),e=e(),z(),e),pt={key:0,class:"position-relative banner"},ut=["src","alt"],ht=n(()=>t("div",{class:"position-absolute z-1 top-0 bg-default opacity-50 w-100 h-100"},null,-1)),_t={class:"position-absolute z-2 top-50 start-50 translate-middle text-center banner-title w-80 w-sm-50"},bt={class:"pb-5 pb-md-7 text-white title-shadow fs-2 fs-md-1 title-letter-spacing title-letter-word-wrap"},wt={class:"bg-white"},gt={class:"container"},vt={key:0,class:"py-7 py-md-9"},At={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},yt=n(()=>t("h2",{class:"fs-2 fs-md-1"},"最新消息",-1)),xt={class:"row g-3 g-lg-6 home-article"},kt={class:"col-12 col-lg-6 home-article-img"},St={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},Ct=n(()=>t("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),jt=["src","alt"],It={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Nt={class:"mb-4 fs-info fs-md-5 fw-bold"},$t={class:"fs-info fs-md-6 doubleline-ellipsis"},Pt={class:"d-block d-xl-none py-3"},Vt={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Dt={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},zt={class:"col-6 d-flex flex-column home-article-img"},Ut={class:"position-relative d-flex justify-content-center align-items-center flex-grow-1 overflow-hidden"},Mt=n(()=>t("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),Bt=["src","alt"],Ft={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Lt={class:"mb-4 fs-info fs-md-5 fw-bold"},Ot={class:"fs-info fs-md-6 doubleline-ellipsis"},Et={class:"d-block d-xl-none py-3"},Jt={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},qt={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},Rt={class:"col-6 col-lg-4 home-article-img"},Tt={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},Ht=n(()=>t("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),Wt=["src","alt"],Gt={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Kt={class:"mb-4 fs-info fs-md-5 fw-bold"},Qt={class:"fs-info fs-md-6 doubleline-ellipsis"},Xt={class:"d-block d-xl-none py-3"},Yt={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Zt={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},te={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},ee={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},se=n(()=>t("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),oe=["src"],ie={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},le={class:"mb-4 fs-info fs-md-5 fw-bold"},ne={class:"fs-info fs-md-6 doubleline-ellipsis"},ae={class:"d-block d-xl-none py-3"},ce={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},de={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},re={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},me={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},fe=n(()=>t("div",{class:"position-absolute z-1 w-100 h-100 home-article-mask"},null,-1)),pe=["src","alt"],ue={class:"position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},he={class:"mb-4 fs-info fs-md-5 fw-bold"},_e={class:"fs-info fs-md-6 doubleline-ellipsis"},be={class:"d-block d-xl-none py-3"},we={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},ge={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},ve={class:"bg-white"},Ae={class:"container"},ye={class:"py-7 py-md-9"},xe=n(()=>t("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"與我們聯絡",-1)),ke={class:"row d-flex flex-column flex-md-row g-6 justify-content-between"},Se=M('<div class="col col-md-5" data-v-15029593><div class="mb-4 mb-md-6" data-v-15029593><p class="mb-2 fs-6 fs-md-5 fw-bold" data-v-15029593>合作說明</p><p data-v-15029593>謝謝您對 Wanderdr Land 的認可與提攜，我們歡迎各種合作，期盼與藝術激發更多靈感與火花。誠摯邀請您來信提案，我們將有專門窗口與您聯繫。</p></div><div class="mb-4" data-v-15029593><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-15029593>合作單位</p><p data-v-15029593>請附上您的提案網址及單位官網，並於來信標題寫入單位名稱。</p></div><div class="mb-4" data-v-15029593><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-15029593>空間</p><p data-v-15029593>請附上您的空間官網，並於來信標題寫入空間名稱。</p></div><div data-v-15029593><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-15029593>藝術家</p><p data-v-15029593>請附上您的 CV 或是作品集網址，並於來信標題寫入藝術家名稱。</p></div></div>',1),Ce={class:"col col-md-6"},je={class:"form-floating mb-4 mb-md-7 w-100"},Ie=n(()=>t("option",{selected:""},"請選擇類別",-1)),Ne=n(()=>t("option",{value:"異業合作"},"異業合作",-1)),$e=n(()=>t("option",{value:"空間合作"},"空間合作",-1)),Pe=n(()=>t("option",{value:"藝術家合作"},"藝術家合作",-1)),Ve=n(()=>t("label",{for:"floatingSelect"},"來信類別",-1)),De={class:"form-floating mb-4 mb-md-7 w-100"},ze=n(()=>t("label",{for:"name"},"姓名",-1)),Ue={class:"form-floating mb-4 mb-md-7 w-100"},Me=n(()=>t("label",{for:"subject"},"信件標題",-1)),Be={class:"form-floating mb-4 mb-md-7 w-100"},Fe=n(()=>t("label",{for:"body"},"留言",-1)),Le=n(()=>t("button",{type:"submit",class:"py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto"}," 送出訊息 ",-1));function Oe(e,o,d,j,l,A){const c=r("router-link"),g=r("swiperProductComponent"),y=r("couponComponent"),p=r("v-field"),_=r("error-message"),m=r("v-form");return f(),h(V,null,[e.sortArticles.topArticle[0]?(f(),h("div",pt,[t("img",{src:e.sortArticles.topArticle[0].imageUrl,alt:e.sortArticles.topArticle[0].title,class:"position-fixed z-n1 h-100 w-100 overflow-hidden object-fit-cover","data-aos":"zoom-out","data-aos-duration":"3000"},null,8,ut),ht,t("div",_t,[t("h2",bt,i(e.sortArticles.topArticle[0].title),1),s(c,{to:`/articleinfo/${e.sortArticles.topArticle[0].id}`,class:"py-2 py-md-3 px-6 px-md-9 btn btn-light rounded-0 fw-bold"},{default:a(()=>[x("前往頁面")]),_:1},8,["to"])])])):v("",!0),t("div",wt,[t("div",gt,[s(g,{dataCategory:"products"}),s(g,{dataCategory:"artists"}),e.sortArticles.newestArticles[0]?(f(),h("div",vt,[t("div",At,[yt,s(c,{to:"/artists",class:"text-default border-bottom border-default fw-bold fs-info fs-md-6"},{default:a(()=>[x("瀏覽更多")]),_:1})]),t("div",xt,[t("div",kt,[s(c,{to:`/articleInfo/${e.sortArticles.newestArticles[0].id}`},{default:a(()=>[t("div",St,[Ct,t("img",{src:e.sortArticles.newestArticles[0].imageUrl,alt:e.sortArticles.newestArticles[0].title,class:"object-fit-cover w-100 h-100"},null,8,jt),t("div",It,[t("h3",Nt,i(e.sortArticles.newestArticles[0].title),1),t("p",$t,i(e.sortArticles.newestArticles[0].description),1)])]),t("div",Pt,[t("h3",Vt,i(e.sortArticles.newestArticles[0].title),1),t("p",Dt,i(e.sortArticles.newestArticles[0].description),1)])]),_:1},8,["to"])]),t("div",zt,[s(c,{to:`/articleInfo/${e.sortArticles.newestArticles[1].id}`,class:"d-flex flex-column flex-grow-1"},{default:a(()=>[t("div",Ut,[Mt,t("img",{src:e.sortArticles.newestArticles[1].imageUrl,alt:e.sortArticles.newestArticles[1].title,class:"object-fit-cover w-100 h-100"},null,8,Bt),t("div",Ft,[t("h3",Lt,i(e.sortArticles.newestArticles[1].title),1),t("p",Ot,i(e.sortArticles.newestArticles[1].description),1)])]),t("div",Et,[t("h3",Jt,i(e.sortArticles.newestArticles[1].title),1),t("p",qt,i(e.sortArticles.newestArticles[1].description),1)])]),_:1},8,["to"])]),t("div",Rt,[s(c,{to:`/articleInfo/${e.sortArticles.newestArticles[2].id}`},{default:a(()=>[t("div",Tt,[Ht,t("img",{src:e.sortArticles.newestArticles[2].imageUrl,alt:e.sortArticles.newestArticles[2].title,class:"object-fit-cover w-100 h-100"},null,8,Wt),t("div",Gt,[t("h3",Kt,i(e.sortArticles.newestArticles[2].title),1),t("p",Qt,i(e.sortArticles.newestArticles[2].description),1)])]),t("div",Xt,[t("h3",Yt,i(e.sortArticles.newestArticles[2].title),1),t("p",Zt,i(e.sortArticles.newestArticles[2].description),1)])]),_:1},8,["to"])]),t("div",te,[s(c,{to:`/articleInfo/${e.sortArticles.newestArticles[3].id}`},{default:a(()=>[t("div",ee,[se,t("img",{src:e.sortArticles.newestArticles[3].imageUrl,alt:"art",class:"object-fit-cover w-100 h-100"},null,8,oe),t("div",ie,[t("h3",le,i(e.sortArticles.newestArticles[3].title),1),t("p",ne,i(e.sortArticles.newestArticles[3].description),1)])]),t("div",ae,[t("h3",ce,i(e.sortArticles.newestArticles[3].title),1),t("p",de,i(e.sortArticles.newestArticles[3].description),1)])]),_:1},8,["to"])]),t("div",re,[s(c,{to:`/articleInfo/${e.sortArticles.newestArticles[4].id}`},{default:a(()=>[t("div",me,[fe,t("img",{src:e.sortArticles.newestArticles[4].imageUrl,alt:e.sortArticles.newestArticles[4].title,class:"object-fit-cover w-100 h-100"},null,8,pe),t("div",ue,[t("h3",he,i(e.sortArticles.newestArticles[4].title),1),t("p",_e,i(e.sortArticles.newestArticles[4].description),1)])]),t("div",be,[t("h3",we,i(e.sortArticles.newestArticles[4].title),1),t("p",ge,i(e.sortArticles.newestArticles[4].description),1)])]),_:1},8,["to"])])])])):v("",!0)])]),s(y),t("div",ve,[t("div",Ae,[s(g,{dataCategory:"recently"}),t("div",ye,[xe,t("div",ke,[Se,t("div",Ce,[s(m,{class:"d-flex flex-column align-items-end",onSubmit:A.sendEmail,ref:"cooperationForm"},{default:a(({errors:b})=>[t("div",je,[s(p,{class:w(["form-select border-info rounded-0",{"is-invalid":b.類別}]),id:"floatingSelect","aria-label":"Floating label select",modelValue:l.tempMessage.type,"onUpdate:modelValue":o[0]||(o[0]=u=>l.tempMessage.type=u),as:"select",name:"類別",rules:"required"},{default:a(()=>[Ie,Ne,$e,Pe]),_:2},1032,["class","modelValue"]),s(_,{name:"類別",class:"invalid-feedback"}),Ve]),t("div",De,[s(p,{id:"name",name:"姓名",type:"text",class:w(["form-control border-info rounded-0",{"is-invalid":b.姓名}]),placeholder:"請輸入您的姓名",rules:"required",modelValue:l.tempMessage.name,"onUpdate:modelValue":o[1]||(o[1]=u=>l.tempMessage.name=u)},null,8,["class","modelValue"]),s(_,{name:"姓名",class:"invalid-feedback"}),ze]),t("div",Ue,[s(p,{id:"subject",name:"標題",type:"text",class:w(["form-control border-info rounded-0",{"is-invalid":b.標題}]),placeholder:"請輸入您的信件標題",rules:"required",modelValue:l.message.subject,"onUpdate:modelValue":o[2]||(o[2]=u=>l.message.subject=u)},null,8,["class","modelValue"]),s(_,{name:"標題",class:"invalid-feedback"}),Me]),t("div",Be,[s(p,{id:"body",name:"訊息",class:w(["form-control border-info rounded-0",{"is-invalid":b.訊息}]),as:"textarea",placeholder:"請輸入您的訊息",rules:"required",style:{height:"273px"},modelValue:l.message.body,"onUpdate:modelValue":o[3]||(o[3]=u=>l.message.body=u)},null,8,["class","modelValue"]),s(_,{name:"訊息",class:"invalid-feedback"}),Fe]),Le]),_:1},8,["onSubmit"])])])])])])],64)}const Xe=S(ft,[["render",Oe],["__scopeId","data-v-15029593"]]);export{Xe as default};