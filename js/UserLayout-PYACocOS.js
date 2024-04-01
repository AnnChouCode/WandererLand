import{c as y}from"./userCartStore-WPGHv7Su.js";import{m as L,a as v}from"./pinia-D6A4allF.js";import{f as T}from"./favoriteStore-gdu0HLaJ.js";import{u as x}from"./userProductStore--1YIGR4G.js";import{a_ as f,aR as n,a5 as r,bz as S,bq as B,a6 as t,L as g,aY as w,ae as a,bx as c,ad as u,ba as h,a4 as N,aG as P,a3 as k,ac as M,aU as U,aS as A}from"./@vue-zaZYt_0T.js";import{_ as b}from"./index-4m7lMajm.js";import{O as R}from"./bootstrap-Lpi9Oc84.js";import{T as V}from"./ToastComponent-I9TL1G6Q.js";import"./statusStore-ZshnCoww.js";import"./axios-xY6ymfx7.js";import"./sweetalert2-NwvYGOW7.js";import"./@ckeditor-bzq-HQy0.js";import"./vue-zaw7FvyG.js";import"./vue-loading-overlay-nDy6RxjO.js";import"./vue-axios-1bbP-7uc.js";import"./vue-sweetalert2-HUKuUMJw.js";import"./vee-validate-yOM-A2XF.js";import"./@vee-validate-vwB3goxc.js";/* empty css                        */import"./aos-ZvF7bt_9.js";import"./vue-router--ANrfSlZ.js";import"./@popperjs-kvWuk1nc.js";const z={data(){return{isAutoComplete:!1,search:""}},methods:{...L(x,["getAllProducts"])},computed:{...v(x,["allProducts"]),filterProducts(){return this.allProducts.filter(s=>s.title.includes(this.search)).sort((s,p)=>s.title.localeCompare(p.title))}},watch:{$route(){this.search=""}},mounted(){this.getAllProducts()}},D={class:"position-relative"},E=t("i",{class:"position-absolute start-0 top-50 ms-5 bi bi-search translate-middle"},null,-1),W={key:0,class:"position-absolute z-1 start-0 mt-1 list-unstyled overflow-y-scroll bg-white border border-primary w-100 dropdown-scrollbar"},j={key:0,class:"p-3 text-info"};function I(e,s,p,m,_,l){const o=f("router-link");return n(),r("div",D,[S(t("input",{type:"search",class:"pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info",placeholder:"搜尋作品",style:{height:"28px"},"onUpdate:modelValue":s[0]||(s[0]=d=>_.search=d),"aria-label":"Search",onInput:s[1]||(s[1]=(...d)=>e.debouncedSearch&&e.debouncedSearch(...d))},null,544),[[B,_.search,void 0,{trim:!0}]]),E,_.search?(n(),r("ul",W,[l.filterProducts.length?(n(!0),r(g,{key:1},w(l.filterProducts,d=>(n(),r("li",{key:d.id},[a(o,{to:`/productinfo/${d.id}`,class:"d-block p-3 text-default link-hover-bg"},{default:c(()=>[u(h(d.title),1)]),_:2},1032,["to"])]))),128)):(n(),r("li",j," 未搜尋到符合輸入的作品 "))])):N("",!0)])}const F=b(z,[["render",I]]),q={data(){return{mobileNav:null}},methods:{showCartList(){window.innerWidth>=991.98&&this.$refs.cartList.classList.remove("d-none")},hideCartList(){window.innerWidth>=991.98&&this.$refs.cartList.classList.add("d-none")},openMobileNav(){this.mobileNav.show()},closeMobileNav(){this.mobileNav.hide()}},watch:{$route(){this.closeMobileNav()}},mounted(){this.mobileNav=new R(this.$refs.mobileNav)},computed:{...v(y,["cartsList"]),...v(T,["favoriteList"])},components:{ProductSearch:F}},O={class:"fixed-top"},G={class:"bg-primary"},Y={class:"position-relative d-flex align-items-center container justify-content-between"},H=t("i",{class:"bi bi-list fs-5"},null,-1),J=[H],K={class:"d-none d-lg-flex align-items-center list-unstyled"},Q=t("h1",{class:"position-absolute top-50 start-50 translate-middle"},[t("a",{href:"#/home",class:"d-block h-100 h5 fs-md-20 fw-bold text-default link-hover-scale-grow"},"WANDERER LAND")],-1),X={class:"d-flex align-items-center list-unstyled"},Z={class:"d-none d-lg-block"},tt={class:"py-4 px-2"},st=t("i",{class:"bi bi-handbag"},null,-1),et={key:0,class:"position-absolute badge bg-default rounded-circle text-white",style:{top:"8px",right:"-10px","font-size":"8px"}},ot={key:0},it={class:"py-3 text-center border-bottom border-default"},lt={class:"list-unstyled"},at={class:"row g-5"},nt={class:"col-4"},rt=["src","alt"],ct={class:"col-8 d-flex flex-column justify-content-between"},dt={class:"fw-bold single-ellipsis"},ut={class:"fs-info single-ellipsis"},pt={class:"d-flex py-3 justify-content-between mb-6 fw-bold"},ft=t("p",null,"總計",-1),_t={key:1},ht=t("p",{class:"py-3 text-center"},"目前購物車內沒有內容",-1),bt={class:"offcanvas offcanvas-start bg-primary",tabindex:"-1",id:"offcanvasNav","aria-labelledby":"offcanvasNavLabel",ref:"mobileNav"},mt=t("div",{class:"offcanvas-header"},[t("h5",{class:"offcanvas-title",id:"offcanvasNavLabel"},"WANDERER LAND"),t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),vt={class:"offcanvas-body"},gt={class:"d-flex flex-column gap-3 gap-sm-5 list-unstyled"};function xt(e,s,p,m,_,l){const o=f("router-link"),d=f("ProductSearch");return n(),r(g,null,[t("div",O,[t("nav",G,[t("div",Y,[t("button",{class:"d-block d-lg-none px-0 border-0 bg-transparent",type:"button","aria-controls":"offcanvasNav",onClick:s[0]||(s[0]=(...i)=>l.openMobileNav&&l.openMobileNav(...i))},J),t("ul",K,[t("li",null,[a(o,{to:"/productlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:c(()=>[u("作品")]),_:1})]),t("li",null,[a(o,{to:"/artistlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:c(()=>[u("藝術家")]),_:1})]),t("li",null,[a(o,{to:"/articlelist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:c(()=>[u("最新消息")]),_:1})])]),Q,t("ul",X,[t("li",Z,[a(d)]),t("li",tt,[a(o,{to:"/favoritelist",class:"text-default link-hover-text-info"},{default:c(()=>[t("i",{class:P(["bi",e.favoriteList.length?"bi-heart-fill":"bi-heart"])},null,2)]),_:1})]),t("li",{class:"py-4 ps-2",onMouseenter:s[3]||(s[3]=(...i)=>l.showCartList&&l.showCartList(...i)),onMouseleave:s[4]||(s[4]=(...i)=>l.hideCartList&&l.hideCartList(...i)),style:{"padding-right":"8px","margin-right":"-8px"}},[a(o,{to:"/cart",class:"position-relative text-default link-hover-text-info"},{default:c(()=>[st,e.cartsList.final_total?(n(),r("div",et,h(e.cartsList.carts.length),1)):N("",!0)]),_:1}),t("div",{class:"d-none position-absolute end-0 top-100 px-6 pb-7 bg-primary",ref:"cartList",style:{"max-width":"375px"},onMouseenter:s[1]||(s[1]=(...i)=>l.showCartList&&l.showCartList(...i)),onMouseleave:s[2]||(s[2]=(...i)=>l.hideCartList&&l.hideCartList(...i))},[e.cartsList.total?(n(),r("div",ot,[t("p",it,h(e.cartsList.carts.length)+" 個商品",1),t("ul",lt,[(n(!0),r(g,null,w(e.cartsList.carts,i=>(n(),r("li",{key:i.product_id,class:"py-3 border-bottom border-default"},[t("div",at,[t("div",nt,[t("img",{src:i.product.imageUrl,alt:i.product.title,class:"w-100 h-100 object-fit-contain"},null,8,rt)]),t("div",ct,[t("div",null,[t("p",dt,h(i.product.title),1),t("p",ut,h(i.product.artist),1)]),t("p",null,"NT$ "+h(i.product.price.toLocaleString()),1),t("p",null,"數量："+h(i.qty),1)])])]))),128))]),t("div",pt,[ft,t("p",null,"NT$ "+h(e.cartsList.final_total.toLocaleString()),1)]),a(o,{to:"/cart",class:"py-2 btn btn-default text-center rounded-0 w-100 fw-bold"},{default:c(()=>[u("前往購物車")]),_:1})])):(n(),r("div",_t,[ht,a(o,{to:"/productlist",class:"py-2 btn btn-default text-center rounded-0 w-100 fw-bold"},{default:c(()=>[u("瀏覽作品")]),_:1})]))],544)],32)])])])]),t("div",bt,[mt,t("div",vt,[t("ul",gt,[t("li",null,[a(d)]),t("li",null,[a(o,{to:"/productlist",class:"d-block py-4 text-default navlink-underline"},{default:c(()=>[u("作品")]),_:1})]),t("li",null,[a(o,{to:"/artistlist",class:"d-block py-4 text-default navlink-underline"},{default:c(()=>[u("藝術家")]),_:1})]),t("li",null,[a(o,{to:"/articlelist",class:"d-block py-4 text-default navlink-underline"},{default:c(()=>[u("最新消息")]),_:1})])])])],512)],64)}const kt=b(q,[["render",xt]]),yt={props:["isLoggedin"]},Lt={class:"bg-primary w-100"},wt={class:"d-flex justify-content-between align-items-center container py-6 py-md-7"},Nt=M('<div class="col-8"><div class="d-flex gap-3 mb-3"><a href="https://www.linkedin.com/in/annchou/" target="_blank"><i class="bi bi-linkedin fs-4 text-default"></i></a><a href="https://github.com/AnnChouCode/WandererLand" target="_blank"><i class="bi bi-github fs-4 text-default"></i></a></div><p class="fs-info fs-md-6">本網站僅供個人作品使用，<span class="d-block d-sm-inline">不提供商業用途</span></p></div>',1),$t={class:"col-4 text-end"};function Ct(e,s,p,m,_,l){const o=f("RouterLink");return n(),r("footer",Lt,[t("div",wt,[Nt,t("div",$t,[p.isLoggedin?(n(),k(o,{key:1,to:"/admin",class:"text-default fs-info fs-md-6"},{default:c(()=>[u(" 管理者後台 ")]),_:1})):(n(),k(o,{key:0,to:"/userlogin",class:"text-default fs-info fs-md-6"},{default:c(()=>[u(" 登入 ")]),_:1}))])])])}const Tt=b(yt,[["render",Ct]]),St={methods:{backToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},Bt=e=>(U("data-v-740187ff"),e=e(),A(),e),Pt=Bt(()=>t("i",{class:"fs-1 bi bi-arrow-up-circle-fill text-default link-hover-text-info"},null,-1)),Mt=[Pt];function Ut(e,s,p,m,_,l){return n(),r("button",{type:"button",class:"btn",onClick:s[0]||(s[0]=(...o)=>l.backToTop&&l.backToTop(...o))},Mt)}const At=b(St,[["render",Ut],["__scopeId","data-v-740187ff"]]),Rt={data(){return{isLoggedin:"false"}},methods:{...L(y,["getCartsList"])},mounted(){var s;((s=document.cookie.split("; ").find(p=>p.startsWith("user=")))==null?void 0:s.split("=")[1])||(this.isLoggedin=!this.isLoggedin),this.getCartsList()},components:{ToastComponent:V,UserNavBar:kt,UserFooter:Tt,BtnBackToTop:At}},Vt={class:"d-flex flex-column dvh-100"};function zt(e,s,p,m,_,l){const o=f("UserNavBar"),d=f("RouterView"),i=f("UserFooter"),$=f("ToastComponent"),C=f("BtnBackToTop");return n(),r("div",Vt,[a(o),a(d),a(i,{isLoggedin:_.isLoggedin},null,8,["isLoggedin"]),a($,{class:"position-fixed z-3 end-0",style:{bottom:"45px"}}),a(C,{class:"position-fixed z-3 bottom-0 end-0"})])}const as=b(Rt,[["render",zt]]);export{as as default};
