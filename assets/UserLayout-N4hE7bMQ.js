import{_ as p,o as e,c as u,a as b,r as n,b as o,d as i,w as r,e as c,f,g,m as y,h as k}from"./index-WNumrVw8.js";import{t as $}from"./toastComponent-rlxWkrlE.js";import{c as x}from"./cartStore-Duj5mUmN.js";import"./adminOrderStore-dyVY6bac.js";import"./sweetalert2.all-3UPPIVx5.js";const F={},P={class:"bg-tertiary nav-product-filter"},L=b('<div class="container"><ul class="d-none d-lg-flex align-items-center list-unstyled"><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">排序</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort"><li><a class="dropdown-item p-3" href="#">最新作品</a></li><li><a class="dropdown-item p-3" href="#">價格：高至低</a></li><li><a class="dropdown-item p-3" href="#">價格：低至高</a></li></ul></div></li><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnSizeFilter" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">尺寸</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnSizeFilter"><li><a class="dropdown-item p-3" href="#">最新作品</a></li><li><a class="dropdown-item p-3" href="#">價格：高至低</a></li><li><a class="dropdown-item p-3" href="#">價格：低至高</a></li></ul></div></li><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnGroupFilter" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">題材</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnGroupFilter"><li><a class="dropdown-item p-3" href="#">最新作品</a></li><li><a class="dropdown-item p-3" href="#">價格：高至低</a></li><li><a class="dropdown-item p-3" href="#">價格：低至高</a></li></ul></div></li><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnArtistFilter" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">藝術家</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnArtistFilter"><li><a class="dropdown-item p-3" href="#">最新作品</a></li><li><a class="dropdown-item p-3" href="#">價格：高至低</a></li><li><a class="dropdown-item p-3" href="#">價格：低至高</a></li></ul></div></li></ul><ul class="d-flex d-lg-none align-items-center justify-content-between list-unstyled"><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">排序</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort"><li><a class="dropdown-item p-3" href="#">最新作品</a></li><li><a class="dropdown-item p-3" href="#">價格：高至低</a></li><li><a class="dropdown-item p-3" href="#">價格：低至高</a></li></ul></div></li><li><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"><span class="me-3">篩選</span><i class="bi bi-chevron-down"></i></button></li></ul></div>',1),N=[L];function A(l,t){return e(),u("nav",P,N)}const S=p(F,[["render",A]]),C={},B={class:"bg-tertiary nav-product-filter"},V=b('<div class="container"><ul class="d-none d-lg-flex align-items-center list-unstyled"><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">排序</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort"><li><a class="dropdown-item p-3" href="#">最新藝術家</a></li><li><a class="dropdown-item p-3" href="#">姓名：A - Z</a></li><li><a class="dropdown-item p-3" href="#">姓名：Z - A</a></li></ul></div></li><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnGroupFilter" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">題材</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnGroupFilter"><li><a class="dropdown-item p-3" href="#">最新作品</a></li><li><a class="dropdown-item p-3" href="#">價格：高至低</a></li><li><a class="dropdown-item p-3" href="#">價格：低至高</a></li></ul></div></li><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnArtistFilter" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">藝術家</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnArtistFilter"><li><a class="dropdown-item p-3" href="#">最新作品</a></li><li><a class="dropdown-item p-3" href="#">價格：高至低</a></li><li><a class="dropdown-item p-3" href="#">價格：低至高</a></li></ul></div></li></ul><ul class="d-flex d-lg-none align-items-center justify-content-between list-unstyled"><li><div class="dropdown"><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0" id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false"><span class="me-3">排序</span><i class="bi bi-chevron-down"></i></button><ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort"><li><a class="dropdown-item p-3" href="#">最新藝術家</a></li><li><a class="dropdown-item p-3" href="#">姓名：A - Z</a></li><li><a class="dropdown-item p-3" href="#">姓名：Z - A</a></li></ul></div></li><li><button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"><span class="me-3">篩選</span><i class="bi bi-chevron-down"></i></button></li></ul></div>',1),R=[V];function T(l,t){return e(),u("nav",B,R)}const j=p(C,[["render",T]]),G={data(){return{pageType:""}},methods:{checkProductPage(){const t=window.location.href.split("/");this.pageType=t[t.length-1],console.log(this.pageType)}},watch:{$route(){this.checkProductPage()}},components:{userNavProductFilter:S,userNavArtistFilter:j},mounted(){this.checkProductPage()}},Z={class:"fixed-top"},E={class:"bg-primary"},W={class:"position-relative d-flex align-items-center container justify-content-end justify-content-lg-between"},z={class:"d-none d-lg-flex align-items-center list-unstyled"},D=b('<h1 class="position-absolute top-50 start-50 translate-middle"><a href="/home" class="d-block h5 fs-md-20 fw-bold text-default">WANDERER LAND</a></h1><ul class="d-flex gap-5 align-items-center list-unstyled"><li class="position-relative d-none d-lg-block py-4"><input type="search" class="pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info" placeholder="搜尋作品" style="height:28px;"><i class="position-absolute start-0 top-50 ms-5 bi bi-search fs-20 translate-middle"></i></li><li class="py-4"><i class="bi bi-heart fs-20"></i></li><li class="py-4"><i class="bi bi-handbag fs-20"></i></li></ul>',2);function U(l,t,a,w,d,_){const s=n("router-link"),m=n("userNavProductFilter"),h=n("userNavArtistFilter");return e(),u("div",Z,[o("nav",E,[o("div",W,[o("ul",z,[o("li",null,[i(s,{to:"/productlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:r(()=>[c("作品")]),_:1})]),o("li",null,[i(s,{to:"/artistlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:r(()=>[c("藝術家")]),_:1})]),o("li",null,[i(s,{to:"/news",class:"d-block px-5 py-4 text-default navlink-underline"},{default:r(()=>[c("最新消息")]),_:1})])]),D])]),d.pageType==="productlist"?(e(),f(m,{key:0})):g("",!0),d.pageType==="artistlist"?(e(),f(h,{key:1})):g("",!0)])}const q=p(G,[["render",U]]),H={props:["isLoggedin"]},I={class:"bg-primary w-100"},J={class:"d-flex justify-content-between align-items-center container py-6 py-md-7"},K=b('<div class="col-8"><div class="d-flex gap-3 mb-3"><a href="https://www.linkedin.com/in/annchou/" target="_blank"><i class="bi bi-linkedin fs-4 text-default"></i></a><a href="https://github.com/AnnChouCode/WandererLand" target="_blank"><i class="bi bi-github fs-4 text-default"></i></a></div><p class="fs-info fs-md-6">本網站僅供個人作品使用，<span class="d-block d-sm-inline">不提供商業用途</span></p></div>',1),M={class:"col-4 text-end"};function O(l,t,a,w,d,_){const s=n("RouterLink");return e(),u("footer",I,[o("div",J,[K,o("div",M,[a.isLoggedin?(e(),f(s,{key:1,to:"/admin",class:"text-default fs-info fs-md-6"},{default:r(()=>[c(" 管理者後台 ")]),_:1})):(e(),f(s,{key:0,to:"/userlogin",class:"text-default fs-info fs-md-6"},{default:r(()=>[c(" 登入 ")]),_:1}))])])])}const Q=p(H,[["render",O]]),X={data(){return{isLoggedin:"false"}},methods:{...y(x,["getCartsList"])},mounted(){var t;((t=document.cookie.split("; ").find(a=>a.startsWith("user=")))==null?void 0:t.split("=")[1])||(this.isLoggedin=!this.isLoggedin),this.getCartsList()},components:{toastComponent:$,userNavBar:q,userFooter:Q},computed:{...k(x,["cartsList"])}},Y={class:"d-flex flex-column vh-100"};function tt(l,t,a,w,d,_){const s=n("userNavBar"),m=n("RouterView"),h=n("userFooter"),v=n("toastComponent");return e(),u("div",Y,[i(s),i(m),i(h,{isLoggedin:d.isLoggedin},null,8,["isLoggedin"]),i(v)])}const lt=p(X,[["render",tt]]);export{lt as default};
