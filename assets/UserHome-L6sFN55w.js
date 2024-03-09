import{i as T,j as z,_ as $,A as V,P as L,N,r,o as p,c as m,d as t,t as o,e,w as n,f as g,F as C,k as B,h as U,n as h,g as x,p as j,l as k,m as D,b as W,a as E}from"./index-6NoiBjOJ.js";import{S as H,a as O}from"./navigation-rMk40OKl.js";import{b as F}from"./btnFavorite-AjNwzyBg.js";import{c as M}from"./userCartStore-GGULvs7x.js";import"./sweetalert2.all-Ljqu16ZI.js";var R={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:J,VITE_PATH:q}=R,S=T("articleStore",{state:()=>({articlesList:[]}),actions:{getArticlesList(){const s=`${J}/api/${q}/articles`;z.get(s).then(i=>{this.articlesList=i.data.articles}).catch(i=>{console.log(i.response.data.message)})}},getters:{sortArticles:({articlesList:s})=>{const i=JSON.parse(JSON.stringify(s)),f=s.findIndex(l=>l.isTop===!0),u=i.splice(f,1),b=i.slice(0,5);return{topArticle:u,newestArticles:b}}}});var G={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:Y,VITE_PATH:Z}=G,K={props:["dataCategory"],data(){return{allDatas:[],DataInfo:{products:{title:"探索新作品",path:"/productlist",infoPath:"/productinfo"},artists:{title:"認識新藝術家",path:"/artistlist",infoPath:"/artistinfo"},favorite:{title:"猜你喜歡",path:"favorites",infoPath:"/productinfo"}},currentDatas:[],modules:[V,L,N],isArtistBlock:!0}},methods:{getCurrentDatas(){const s=[...this.allDatas];this.currentDatas=s.filter(i=>i.category===this.dataCategory).reverse()},getAllDatas(){const s=`${Y}/api/${Z}/products/all`;this.axios.get(s).then(i=>{this.allDatas=i.data.products,this.getCurrentDatas()}).catch(i=>{this.$swal.fire({icon:"error",text:i.response.data.message})})}},mounted(){this.dataCategory!=="favorites"&&this.getAllDatas(),this.isArtistBlock=this.dataCategory==="artists"},components:{Swiper:H,SwiperSlide:O,btnFavorite:F}},P=s=>(j("data-v-d90e0b7f"),s=s(),k(),s),Q={class:"py-7 py-md-9"},X={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},tt={class:"fs-2 fs-md-1"},st={class:"position-relative"},et=["src","alt"],ot=["src"],it={class:"py-3 px-0 px-md-4"},lt={key:0,class:"d-flex justify-content-between align-items-center"},at={class:"fs-info fs-md-6 text-info"},nt=P(()=>t("div",{class:"z-1 swiper-button-next translate-middle-y"},[t("i",{class:"bi bi-arrow-right-circle text-warning fs-1"})],-1)),dt=P(()=>t("div",{class:"z-1 swiper-button-prev translate-middle-y"},[t("i",{class:"bi bi-arrow-left-circle text-warning fs-1"})],-1));function ct(s,i,f,u,d,b){const l=r("router-link"),v=r("btnFavorite"),A=r("SwiperSlide"),_=r("Swiper");return p(),m("div",Q,[t("div",X,[t("h2",tt,o(d.DataInfo[f.dataCategory].title),1),e(l,{to:d.DataInfo[f.dataCategory].path,class:"text-default border-bottom border-default fw-bold fs-info fs-md-6"},{default:n(()=>[g("瀏覽更多")]),_:1},8,["to"])]),t("div",st,[e(_,{slidesPerView:2,spaceBetween:12,pagination:{clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:48}},autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:d.modules,class:"product-swiper"},{default:n(()=>[(p(!0),m(C,null,B(d.currentDatas,(c,y)=>(p(),U(A,{key:y},{default:n(()=>[e(l,{to:`${d.DataInfo[f.dataCategory].infoPath}/${c.id}`},{default:n(()=>[t("div",{class:h(["position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img",{"rounded-circle":d.isArtistBlock}])},[t("img",{src:c.imageUrl,alt:c.title,class:"object-fit-contain w-100 h-100 product-img-up"},null,8,et),t("img",{src:c.imagesUrl[0],alt:"item.title",class:"position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down"},null,8,ot)],2)]),_:2},1032,["to"]),t("div",it,[e(l,{to:`${d.DataInfo[f.dataCategory].infoPath}/${c.id}`},{default:n(()=>[t("h3",{class:h(["mb-2 fs-info fs-md-5 fw-bold text-default",{"text-center":d.isArtistBlock}])},o(c.title),3)]),_:2},1032,["to"]),d.isArtistBlock?x("",!0):(p(),m("div",lt,[t("p",at,"NT$ "+o(c.price.toLocaleString()),1),e(v)]))])]),_:2},1024))),128)),nt,dt]),_:1},8,["navigation","modules"])])])}const rt=$(K,[["render",ct],["__scopeId","data-v-d90e0b7f"]]),ft="/WandererLand/assets/present-jzVKie_p.jpg",pt={methods:{...D(M,["copyCouponCode"])}},I=s=>(j("data-v-451458b7"),s=s(),k(),s),mt={class:"position-relative d-flex justify-content-center align-items-center w-100 home-coupon overflow-hidden"},_t={class:"text-center title-shadow"},ht=I(()=>t("h2",{class:"mb-2 fs-4 fs-md-1 text-white title-letter-spacing"},"使用優惠券",-1)),ut=I(()=>t("p",{class:"mb-7 fs-info fs-md-6 text-white"},"為你的第一筆訂單，獲取 97 折折扣",-1)),bt=I(()=>t("img",{src:ft,alt:"coupon",class:"position-absolute top-0 z-n1 object-fit-cover w-100 h-100"},null,-1));function vt(s,i,f,u,d,b){return p(),m("div",mt,[t("div",_t,[ht,ut,t("button",{type:"button",class:"py-2 py-md-3 px-6 px-md-9 btn btn-light fw-bold rounded-0",onClick:i[0]||(i[0]=l=>s.copyCouponCode("present97"))},"點擊複製優惠碼")]),bt])}const wt=$(pt,[["render",vt],["__scopeId","data-v-451458b7"]]),gt="/WandererLand/assets/Ian-Dooley-lips (1) _M1x1-onLK5OWH.jpg",At="/WandererLand/assets/Ian-Dooley-lips (1)--U0wYY9i.jpg",yt="/WandererLand/assets/Hannahpun-untitled (2)_M4x6-3b5JZMfD.jpg",xt="/WandererLand/assets/Hannahpun-untitled (2)-SJE7j-lY.jpg",$t="/WandererLand/assets/Caspar-David-Golden_M4x6-4JhprZZT.jpg",jt="/WandererLand/assets/Caspar-David-Golden-UtmNeba0.jpg",kt={methods:{...D(S,["getArticlesList"])},components:{swiperProductComponent:rt,couponComponent:wt},computed:{...W(S,["sortArticles","articlesList"])},mounted(){this.getArticlesList()}},a=s=>(j("data-v-0572dcaf"),s=s(),k(),s),It={key:0,class:"position-relative banner"},St=["src","alt"],Ct=a(()=>t("div",{class:"position-absolute z-1 top-0 bg-default opacity-50 w-100 h-100"},null,-1)),Dt={class:"position-absolute z-2 top-50 start-50 translate-middle text-center banner-title w-80 w-sm-50"},Et={class:"pb-5 pb-md-7 text-white title-shadow fs-2 fs-md-1 title-letter-spacing title-letter-word-wrap"},Pt={class:"container"},Tt={key:0,class:"py-7 py-md-9"},zt={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},Vt=a(()=>t("h2",{class:"fs-2 fs-md-1"},"最新消息",-1)),Lt={class:"row g-3 g-lg-6 home-article"},Nt={class:"col-12 col-lg-6 home-article-img"},Bt={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},Ut=a(()=>t("div",{class:"w-100 h-100 home-article-mask"},null,-1)),Wt=["src","alt"],Ht={class:"position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Ot={class:"mb-4 fs-info fs-md-5 fw-bold"},Ft={class:"fs-info fs-md-6 doubleline-ellipsis"},Mt={class:"d-block d-xl-none py-3"},Rt={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Jt={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},qt={class:"col-6 d-flex flex-column home-article-img"},Gt={class:"position-relative d-flex justify-content-center align-items-center flex-grow-1 overflow-hidden"},Yt=a(()=>t("div",{class:"w-100 h-100 home-article-mask"},null,-1)),Zt=["src","alt"],Kt={class:"position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Qt={class:"mb-4 fs-info fs-md-5 fw-bold"},Xt={class:"fs-info fs-md-6 doubleline-ellipsis"},ts={class:"d-block d-xl-none py-3"},ss={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},es={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},os={class:"col-6 col-lg-4 home-article-img"},is={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},ls=a(()=>t("div",{class:"w-100 h-100 home-article-mask"},null,-1)),as=["src","alt"],ns={class:"position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},ds={class:"mb-4 fs-info fs-md-5 fw-bold"},cs={class:"fs-info fs-md-6 doubleline-ellipsis"},rs={class:"d-block d-xl-none py-3"},fs={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},ps={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},ms={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},_s={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},hs=a(()=>t("div",{class:"w-100 h-100 home-article-mask"},null,-1)),us=["src"],bs={class:"position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},vs={class:"mb-4 fs-info fs-md-5 fw-bold"},ws={class:"fs-info fs-md-6 doubleline-ellipsis"},gs={class:"d-block d-xl-none py-3"},As={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},ys={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},xs={class:"col-6 col-lg-4 d-none d-lg-block home-article-img"},$s={class:"position-relative d-flex justify-content-center align-items-center overflow-hidden"},js=a(()=>t("div",{class:"w-100 h-100 home-article-mask"},null,-1)),ks=["src","alt"],Is={class:"position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow"},Ss={class:"mb-4 fs-info fs-md-5 fw-bold"},Cs={class:"fs-info fs-md-6 doubleline-ellipsis"},Ds={class:"d-block d-xl-none py-3"},Es={class:"mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis"},Ps={class:"fs-info fs-md-6 doubleline-ellipsis text-info"},Ts={class:"container"},zs={class:"py-7 py-md-9"},Vs={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},Ls=a(()=>t("h2",{class:"fs-2 fs-md-1"},"猜你喜歡",-1)),Ns=E('<div class="row g-3 g-md-8" data-v-0572dcaf><div class="col-6 col-md-4" data-v-0572dcaf><div class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img" data-v-0572dcaf><img src="'+gt+'" alt="art" class="object-fit-contain w-100 h-100 product-img-up" data-v-0572dcaf><img src="'+At+'" alt="art" class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down" data-v-0572dcaf></div><div class="py-3 px-0 px-md-4" data-v-0572dcaf><h3 class="mb-2 fs-info fs-md-5 fw-bold" data-v-0572dcaf>lips</h3><div class="d-flex justify-content-between align-items-center" data-v-0572dcaf><p class="fs-info fs-md-6 text-info" data-v-0572dcaf>NT$ 10,000</p><button type="button" class="btn p-0" data-v-0572dcaf><i class="bi bi-heart" data-v-0572dcaf></i></button></div></div></div><div class="col-6 col-md-4" data-v-0572dcaf><div class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img" data-v-0572dcaf><img src="'+yt+'" alt="art" class="object-fit-contain w-100 h-100 product-img-up" data-v-0572dcaf><img src="'+xt+'" alt="art" class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down" data-v-0572dcaf></div><div class="py-3 px-0 px-md-4" data-v-0572dcaf><h3 class="mb-2 fs-info fs-md-5 fw-bold" data-v-0572dcaf>untitled</h3><div class="d-flex justify-content-between align-items-center" data-v-0572dcaf><p class="fs-info fs-md-6 text-info" data-v-0572dcaf>NT$ 5,000</p><button type="button" class="btn p-0" data-v-0572dcaf><i class="bi bi-heart" data-v-0572dcaf></i></button></div></div></div><div class="d-none d-md-block col-4" data-v-0572dcaf><div class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img" data-v-0572dcaf><img src="'+$t+'" alt="art" class="object-fit-contain w-100 h-100 product-img-up" data-v-0572dcaf><img src="'+jt+'" alt="art" class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down" data-v-0572dcaf></div><div class="py-3 px-0 px-md-4" data-v-0572dcaf><h3 class="mb-2 fs-info fs-md-5 fw-bold" data-v-0572dcaf>Golden</h3><div class="d-flex justify-content-between align-items-center" data-v-0572dcaf><p class="fs-info fs-md-6 text-info" data-v-0572dcaf>NT$ 6,500</p><button type="button" class="btn p-0" data-v-0572dcaf><i class="bi bi-heart" data-v-0572dcaf></i></button></div></div></div></div>',1),Bs={class:"py-7 py-md-9"},Us=a(()=>t("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"與我們聯絡",-1)),Ws={class:"row d-flex flex-column flex-md-row g-6 justify-content-between"},Hs=E('<div class="col col-md-5" data-v-0572dcaf><div class="mb-4 mb-md-6" data-v-0572dcaf><p class="mb-2 fs-6 fs-md-5 fw-bold" data-v-0572dcaf>合作說明</p><p data-v-0572dcaf>謝謝您對 Wanderdr Land 的認可與提攜，我們歡迎各種合作，期盼與藝術激發更多靈感與火花。誠摯邀請您來信提案，我們將有專門窗口與您聯繫。</p></div><div class="mb-4" data-v-0572dcaf><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-0572dcaf>合作單位</p><p data-v-0572dcaf>請附上您的提案網址及單位官網，並於來信標題寫入單位名稱。</p></div><div class="mb-4" data-v-0572dcaf><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-0572dcaf>空間</p><p data-v-0572dcaf>請附上您的空間官網，並於來信標題寫入空間名稱。</p></div><div data-v-0572dcaf><p class="mb-2 fs-info fs-md-5 fw-bold" data-v-0572dcaf>藝術家</p><p data-v-0572dcaf>請附上您的 CV 或是作品集網址，並於來信標題寫入藝術家名稱。</p></div></div>',1),Os={class:"col col-md-6"},Fs=a(()=>t("div",{class:"form-floating mb-4 mb-md-7 w-100"},[t("select",{class:"form-select border-info rounded-0",id:"floatingSelect","aria-label":"Floating label select"},[t("option",{selected:""},"請選擇類別"),t("option",{value:"異業合作"},"異業合作"),t("option",{value:"空間合作"},"空間合作"),t("option",{value:"藝術家合作"},"藝術家合作")]),t("label",{for:"floatingSelect"},"來信類別")],-1)),Ms={class:"form-floating mb-4 mb-md-7 w-100"},Rs=a(()=>t("label",{for:"title"},"信件標題",-1)),Js={class:"form-floating mb-4 mb-md-7 w-100"},qs=a(()=>t("label",{for:"name"},"姓名",-1)),Gs={class:"form-floating mb-4 mb-md-7 w-100"},Ys=a(()=>t("label",{for:"email"},"Email",-1)),Zs={class:"form-floating mb-4 mb-md-7 w-100"},Ks=a(()=>t("label",{for:"message"},"留言",-1)),Qs=a(()=>t("button",{class:"py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto",type:"submit"}," 送出訊息 ",-1));function Xs(s,i,f,u,d,b){const l=r("router-link"),v=r("swiperProductComponent"),A=r("couponComponent"),_=r("v-field"),c=r("error-message"),y=r("v-form");return p(),m(C,null,[s.sortArticles.topArticle[0]?(p(),m("div",It,[t("img",{src:s.sortArticles.topArticle[0].imageUrl,alt:s.sortArticles.topArticle[0].title,class:"h-100 w-100 overflow-hidden object-fit-cover"},null,8,St),Ct,t("div",Dt,[t("h2",Et,o(s.sortArticles.topArticle[0].title),1),e(l,{to:`/articleinfo/${s.sortArticles.topArticle[0].id}`,class:"py-2 py-md-3 px-6 px-md-9 btn btn-light rounded-0 fw-bold"},{default:n(()=>[g("前往頁面")]),_:1},8,["to"])])])):x("",!0),t("div",Pt,[e(v,{dataCategory:"products"}),e(v,{dataCategory:"artists"}),s.sortArticles.newestArticles[0]?(p(),m("div",Tt,[t("div",zt,[Vt,e(l,{to:"/artists",class:"text-default border-bottom border-default fw-bold fs-info fs-md-6"},{default:n(()=>[g("瀏覽更多")]),_:1})]),t("div",Lt,[t("div",Nt,[e(l,{to:`/articleInfo/${s.sortArticles.newestArticles[0].id}`},{default:n(()=>[t("div",Bt,[Ut,t("img",{src:s.sortArticles.newestArticles[0].imageUrl,alt:s.sortArticles.newestArticles[0].title,class:"position-absolute z-n1 object-fit-cover w-100 h-100"},null,8,Wt),t("div",Ht,[t("h3",Ot,o(s.sortArticles.newestArticles[0].title),1),t("p",Ft,o(s.sortArticles.newestArticles[0].description),1)])]),t("div",Mt,[t("h3",Rt,o(s.sortArticles.newestArticles[0].title),1),t("p",Jt,o(s.sortArticles.newestArticles[0].description),1)])]),_:1},8,["to"])]),t("div",qt,[e(l,{to:`/articleInfo/${s.sortArticles.newestArticles[1].id}`,class:"d-flex flex-column flex-grow-1"},{default:n(()=>[t("div",Gt,[Yt,t("img",{src:s.sortArticles.newestArticles[1].imageUrl,alt:s.sortArticles.newestArticles[1].title,class:"position-absolute z-n1 object-fit-cover w-100 h-100"},null,8,Zt),t("div",Kt,[t("h3",Qt,o(s.sortArticles.newestArticles[1].title),1),t("p",Xt,o(s.sortArticles.newestArticles[1].description),1)])]),t("div",ts,[t("h3",ss,o(s.sortArticles.newestArticles[1].title),1),t("p",es,o(s.sortArticles.newestArticles[1].description),1)])]),_:1},8,["to"])]),t("div",os,[e(l,{to:`/articleInfo/${s.sortArticles.newestArticles[2].id}`},{default:n(()=>[t("div",is,[ls,t("img",{src:s.sortArticles.newestArticles[2].imageUrl,alt:s.sortArticles.newestArticles[2].title,class:"position-absolute z-n1 object-fit-cover w-100 h-100"},null,8,as),t("div",ns,[t("h3",ds,o(s.sortArticles.newestArticles[2].title),1),t("p",cs,o(s.sortArticles.newestArticles[2].description),1)])]),t("div",rs,[t("h3",fs,o(s.sortArticles.newestArticles[2].title),1),t("p",ps,o(s.sortArticles.newestArticles[2].description),1)])]),_:1},8,["to"])]),t("div",ms,[e(l,{to:`/articleInfo/${s.sortArticles.newestArticles[3].id}`},{default:n(()=>[t("div",_s,[hs,t("img",{src:s.sortArticles.newestArticles[3].imageUrl,alt:"art",class:"position-absolute z-n1 object-fit-cover w-100 h-100"},null,8,us),t("div",bs,[t("h3",vs,o(s.sortArticles.newestArticles[3].title),1),t("p",ws,o(s.sortArticles.newestArticles[3].description),1)])]),t("div",gs,[t("h3",As,o(s.sortArticles.newestArticles[3].title),1),t("p",ys,o(s.sortArticles.newestArticles[3].description),1)])]),_:1},8,["to"])]),t("div",xs,[e(l,{to:`/articleInfo/${s.sortArticles.newestArticles[4].id}`},{default:n(()=>[t("div",$s,[js,t("img",{src:s.sortArticles.newestArticles[4].imageUrl,alt:s.sortArticles.newestArticles[4].title,class:"position-absolute z-n1 object-fit-cover w-100 h-100"},null,8,ks),t("div",Is,[t("h3",Ss,o(s.sortArticles.newestArticles[4].title),1),t("p",Cs,o(s.sortArticles.newestArticles[4].description),1)])]),t("div",Ds,[t("h3",Es,o(s.sortArticles.newestArticles[4].title),1),t("p",Ps,o(s.sortArticles.newestArticles[4].description),1)])]),_:1},8,["to"])])])])):x("",!0)]),e(A),t("div",Ts,[t("div",zs,[t("div",Vs,[Ls,e(l,{to:"/arts",class:"text-default border-bottom border-default fw-bold fs-info fs-md-6"},{default:n(()=>[g("瀏覽更多")]),_:1})]),Ns]),t("div",Bs,[Us,t("div",Ws,[Hs,t("div",Os,[e(y,{class:"d-flex flex-column align-items-end"},{default:n(({errors:w})=>[Fs,t("div",Ms,[e(_,{id:"title",name:"標題",type:"text",class:h(["form-control border-info rounded-0",{"is-invalid":w.標題}]),placeholder:"請輸入您的信件標題",rules:"required"},null,8,["class"]),e(c,{name:"標題",class:"invalid-feedback"}),Rs]),t("div",Js,[e(_,{id:"name",name:"姓名",type:"text",class:h(["form-control border-info rounded-0",{"is-invalid":w.姓名}]),placeholder:"請輸入您的姓名",rules:"required"},null,8,["class"]),e(c,{name:"姓名",class:"invalid-feedback"}),qs]),t("div",Gs,[e(_,{id:"email",name:"Email",type:"email",class:h(["form-control border-info rounded-0",{"is-invalid":w.Email}]),placeholder:"請輸入您的 Email",rules:"email|required"},null,8,["class"]),e(c,{name:"Email",class:"invalid-feedback"}),Ys]),t("div",Zs,[e(_,{id:"message",name:"訊息",class:h(["form-control border-info rounded-0",{"is-invalid":w.訊息}]),as:"textarea",placeholder:"請輸入您的訊息",rules:"required",style:{height:"273px"}},null,8,["class"]),e(c,{name:"訊息",class:"invalid-feedback"}),Ks]),Qs]),_:1})])])])])],64)}const le=$(kt,[["render",Xs],["__scopeId","data-v-0572dcaf"]]);export{le as default};
