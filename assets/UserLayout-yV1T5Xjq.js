import{c as _}from"./userCartStore-6aFE7XdE.js";import{m as v,O as y,a as N,_ as b,r as i,o as l,c as p,b as t,d as e,w as o,e as a,t as L,f as $,F as w,g,h}from"./index-SuvShJ5P.js";import{t as C}from"./toastComponent-oVr-p2sY.js";import"./sweetalert2.all-6q_o9MV5.js";import"./adminOrderStore-G8WBeBEc.js";const R={data(){return{pageType:"",mobileNav:null}},methods:{...v(_,["getCartsList"]),openMobileNav(){this.mobileNav.show()},closeMobileNav(){this.mobileNav.hide()}},watch:{$route(){this.closeMobileNav()}},components:{},mounted(){this.mobileNav=new y(this.$refs.mobileNav)},computed:{...N(_,["cartsList"])}},B={class:"fixed-top"},V={class:"bg-primary"},A={class:"position-relative d-flex align-items-center container justify-content-between"},D=t("i",{class:"bi bi-list fs-5"},null,-1),E=[D],F={class:"d-none d-lg-flex align-items-center list-unstyled"},M=t("h1",{class:"position-absolute top-50 start-50 translate-middle"},[t("a",{href:"#/home",class:"d-block h5 fs-md-20 fw-bold text-default"},"WANDERER LAND")],-1),S={class:"d-flex gap-4 gap-md-5 align-items-center list-unstyled"},W=g('<li class="position-relative d-none d-lg-block py-4"><input type="search" class="pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info" placeholder="搜尋作品" style="height:28px;"><i class="position-absolute start-0 top-50 ms-5 bi bi-search translate-middle"></i></li><li class="py-4"><i class="bi bi-heart"></i></li>',2),j={class:"py-4"},O=t("i",{class:"bi bi-handbag"},null,-1),T={key:0,class:"position-absolute badge bg-default rounded-circle text-white",style:{top:"8px",right:"-10px","font-size":"8px"}},z={class:"offcanvas offcanvas-start bg-primary",tabindex:"-1",id:"offcanvasNav","aria-labelledby":"offcanvasNavLabel",ref:"mobileNav"},U=t("div",{class:"offcanvas-header"},[t("h5",{class:"offcanvas-title",id:"offcanvasNavLabel"},"WANDERER LAND"),t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),q={class:"offcanvas-body"},G={class:"d-flex flex-column gap-3 gap-sm-5 list-unstyled"},H=t("li",{class:"position-relative"},[t("input",{type:"search",class:"pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info",placeholder:"搜尋作品",style:{height:"28px"}}),t("i",{class:"position-absolute start-0 top-50 ms-5 bi bi-search translate-middle"})],-1);function I(c,n,d,m,f,r){const s=i("router-link");return l(),p(w,null,[t("div",B,[t("nav",V,[t("div",A,[t("button",{class:"d-block d-lg-none px-0 border-0 bg-transparent",type:"button","aria-controls":"offcanvasNav",onClick:n[0]||(n[0]=(...u)=>r.openMobileNav&&r.openMobileNav(...u))},E),t("ul",F,[t("li",null,[e(s,{to:"/productlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:o(()=>[a("作品")]),_:1})]),t("li",null,[e(s,{to:"/artistlist",class:"d-block px-5 py-4 text-default navlink-underline"},{default:o(()=>[a("藝術家")]),_:1})]),t("li",null,[e(s,{to:"/news",class:"d-block px-5 py-4 text-default navlink-underline"},{default:o(()=>[a("最新消息")]),_:1})])]),M,t("ul",S,[W,t("li",j,[e(s,{to:"/cart",class:"position-relative text-default"},{default:o(()=>[O,c.cartsList.total?(l(),p("div",T,L(c.cartsList.carts.length),1)):$("",!0)]),_:1})])])])])]),t("div",z,[U,t("div",q,[t("ul",G,[H,t("li",null,[e(s,{to:"/productlist",class:"d-block py-4 text-default navlink-underline"},{default:o(()=>[a("作品")]),_:1})]),t("li",null,[e(s,{to:"/artistlist",class:"d-block py-4 text-default navlink-underline"},{default:o(()=>[a("藝術家")]),_:1})]),t("li",null,[e(s,{to:"/news",class:"d-block py-4 text-default navlink-underline"},{default:o(()=>[a("最新消息")]),_:1})])])])],512)],64)}const J=b(R,[["render",I]]),K={props:["isLoggedin"]},P={class:"bg-primary w-100"},Q={class:"d-flex justify-content-between align-items-center container py-6 py-md-7"},X=g('<div class="col-8"><div class="d-flex gap-3 mb-3"><a href="https://www.linkedin.com/in/annchou/" target="_blank"><i class="bi bi-linkedin fs-4 text-default"></i></a><a href="https://github.com/AnnChouCode/WandererLand" target="_blank"><i class="bi bi-github fs-4 text-default"></i></a></div><p class="fs-info fs-md-6">本網站僅供個人作品使用，<span class="d-block d-sm-inline">不提供商業用途</span></p></div>',1),Y={class:"col-4 text-end"};function Z(c,n,d,m,f,r){const s=i("RouterLink");return l(),p("footer",P,[t("div",Q,[X,t("div",Y,[d.isLoggedin?(l(),h(s,{key:1,to:"/admin",class:"text-default fs-info fs-md-6"},{default:o(()=>[a(" 管理者後台 ")]),_:1})):(l(),h(s,{key:0,to:"/userlogin",class:"text-default fs-info fs-md-6"},{default:o(()=>[a(" 登入 ")]),_:1}))])])])}const tt=b(K,[["render",Z]]),st={data(){return{isLoggedin:"false"}},methods:{...v(_,["getCartsList"])},mounted(){var n;((n=document.cookie.split("; ").find(d=>d.startsWith("user=")))==null?void 0:n.split("=")[1])||(this.isLoggedin=!this.isLoggedin),this.getCartsList()},components:{toastComponent:C,userNavBar:J,userFooter:tt}},et={class:"d-flex flex-column dvh-100"};function ot(c,n,d,m,f,r){const s=i("userNavBar"),u=i("RouterView"),x=i("userFooter"),k=i("toastComponent");return l(),p("div",et,[e(s),e(u),e(x,{isLoggedin:f.isLoggedin},null,8,["isLoggedin"]),e(k)])}const dt=b(st,[["render",ot]]);export{dt as default};
