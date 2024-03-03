import{V as G,W as K,X as Y,L as U,M as L,Y as j,_ as Q,Z,r as y,o as J,c as X,a as t,b as o,w as a,U as T,H as tt,d as r}from"./index-RWP2R7I8.js";import{r as et,a as st,b as nt,c as lt}from"./selector-engine-NRfUx6FL.js";import{s as it}from"./sweetalert2.all-W_WOX3G1.js";var S={exports:{}};/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(v,_){(function(k,h){v.exports=h(et(),st(),nt(),lt())})(G,function(k,h,c,i){const n="collapse",d=".bs.collapse",D=".data-api",I=`show${d}`,$=`shown${d}`,O=`hide${d}`,V=`hidden${d}`,M=`click${d}${D}`,C="show",p="collapse",x="collapsing",P="collapsed",H=`:scope .${p} .${p}`,F="collapse-horizontal",R="width",W="height",z=".collapse.show, .collapse.collapsing",w='[data-bs-toggle="collapse"]',B={parent:null,toggle:!0},q={parent:"(null|element)",toggle:"boolean"};class g extends k{constructor(e,l){super(e,l),this._isTransitioning=!1,this._triggerArray=[];const s=c.find(w);for(const u of s){const f=c.getSelectorFromElement(u),E=c.find(f).filter(m=>m===this._element);f!==null&&E.length&&this._triggerArray.push(u)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return B}static get DefaultType(){return q}static get NAME(){return n}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(z).filter(m=>m!==this._element).map(m=>g.getOrCreateInstance(m,{toggle:!1}))),e.length&&e[0]._isTransitioning||h.trigger(this._element,I).defaultPrevented)return;for(const m of e)m.hide();const s=this._getDimension();this._element.classList.remove(p),this._element.classList.add(x),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const u=()=>{this._isTransitioning=!1,this._element.classList.remove(x),this._element.classList.add(p,C),this._element.style[s]="",h.trigger(this._element,$)},E=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(u,this._element,!0),this._element.style[s]=`${this._element[E]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,O).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,i.reflow(this._element),this._element.classList.add(x),this._element.classList.remove(p,C);for(const u of this._triggerArray){const f=c.getElementFromSelector(u);f&&!this._isShown(f)&&this._addAriaAndCollapsedClass([u],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(x),this._element.classList.add(p),h.trigger(this._element,V)};this._element.style[l]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(C)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=i.getElement(e.parent),e}_getDimension(){return this._element.classList.contains(F)?R:W}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(w);for(const l of e){const s=c.getElementFromSelector(l);s&&this._addAriaAndCollapsedClass([l],this._isShown(s))}}_getFirstLevelChildren(e){const l=c.find(H,this._config.parent);return c.find(e,this._config.parent).filter(s=>!l.includes(s))}_addAriaAndCollapsedClass(e,l){if(e.length)for(const s of e)s.classList.toggle(P,!l),s.setAttribute("aria-expanded",l)}static jQueryInterface(e){const l={};return typeof e=="string"&&/show|hide/.test(e)&&(l.toggle=!1),this.each(function(){const s=g.getOrCreateInstance(this,l);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}return h.on(document,M,w,function(A){(A.target.tagName==="A"||A.delegateTarget&&A.delegateTarget.tagName==="A")&&A.preventDefault();for(const e of c.getMultipleElementsFromSelector(this))g.getOrCreateInstance(e,{toggle:!1}).toggle()}),i.defineJQueryPlugin(g),g})})(S);var ot=S.exports;const at=K(ot);var rt={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ct=Y.useLoading(),N=U("adminLogin",{actions:{checkLogin(){var c;const v=ct.show(),{VITE_API:_}=rt,k=`${_}/api/user/check`,h=(c=document.cookie.split("; ").find(i=>i.startsWith("user=")))==null?void 0:c.split("=")[1];L.defaults.headers.common.Authorization=h,L.post(k).then(function(i){console.log("已驗證登入")}).catch(i=>{it.fire({icon:"error",text:i.response.data.message}).then(n=>{j.push("/userlogin")})}).finally(()=>{v.hide()})}}}),dt=N(),ht={data(){return{navCollapse:null}},methods:{logout(){document.cookie="user=;expires=;",this.$router.push("/home")},toggleNavCollapse(){this.navCollapse.toggle()}},computed:{...Z(N)},watch:{$route(){this.navCollapse.hide()}},mounted(){this.navCollapse=new at(this.$refs.navCollapse,{toggle:!1})},created(){dt.checkLogin()}},_t={class:"d-flex d-lg-none flex-column sticky-top bg-dark px-6 py-2"},ut={class:"d-flex justify-content-between align-items-center"},mt=t("h1",{class:"fs-4 text-white"},"Wanderer Land",-1),pt=t("i",{class:"bi bi-list text-white"},null,-1),gt=[pt],ft={class:"collapse",id:"collapseAdminMenu",ref:"navCollapse"},kt={class:"navbar-nav text-center pt-3"},vt=t("hr",{style:{border:"1px solid white"}},null,-1),xt={class:"navbar-nav text-center pb-3"},At={class:"container-fluid"},Ct={class:"row"},wt={class:"position-sticky top-0 d-none d-lg-flex flex-column col-lg-2 py-5 px-0 text-white bg-dark vh-100"},Et=t("h2",{class:"px-5 mb-3 mb-md-0 me-md-auto fs-4"},"Wanderer Land",-1),bt=t("hr",null,null,-1),Lt={class:"nav flex-column mb-auto"},yt=t("hr",null,null,-1),Tt={class:"d-flex flex-column"},St={class:"col col-lg-10 p-6 p-md-7"};function Nt(v,_,k,h,c,i){const n=y("router-link"),b=y("router-view");return J(),X(tt,null,[t("nav",_t,[t("div",ut,[mt,t("button",{type:"button",class:"btn border border-white",onClick:_[0]||(_[0]=(...d)=>i.toggleNavCollapse&&i.toggleNavCollapse(...d))},gt)]),t("div",ft,[t("ul",kt,[t("li",null,[o(n,{to:"/admin/dashboard",class:"d-block py-3 theme-dark-navlink text-white"},{default:a(()=>[r("Home")]),_:1})]),t("li",null,[o(n,{to:"/admin/products",class:"d-block py-3 theme-dark-navlink text-white"},{default:a(()=>[r("產品管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/artists",class:"d-block py-3 theme-dark-navlink text-white"},{default:a(()=>[r("藝術家管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/orders",class:"d-block py-3 theme-dark-navlink text-white"},{default:a(()=>[r("訂單管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/coupons",class:"d-block py-3 theme-dark-navlink text-white"},{default:a(()=>[r("優惠券管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/articles",class:"d-block py-3 theme-dark-navlink text-white"},{default:a(()=>[r("文章管理")]),_:1})])]),vt,t("div",xt,[o(n,{to:"/home",class:"d-block py-3 text-white theme-dark-navlink"},{default:a(()=>[r("回前台")]),_:1}),t("a",{href:"#",onClick:_[1]||(_[1]=T((...d)=>i.logout&&i.logout(...d),["prevent"])),class:"d-block py-3 text-white theme-dark-navlink"},"登出")])],512)]),t("div",At,[t("div",Ct,[t("div",wt,[Et,bt,t("ul",Lt,[t("li",null,[o(n,{to:"/admin/dashboard",class:"d-block px-5 py-3 theme-dark-navlink text-white"},{default:a(()=>[r("Home")]),_:1})]),t("li",null,[o(n,{to:"/admin/products",class:"d-block px-5 py-3 theme-dark-navlink text-white"},{default:a(()=>[r("產品管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/artists",class:"d-block px-5 py-3 theme-dark-navlink text-white"},{default:a(()=>[r("藝術家管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/orders",class:"d-block px-5 py-3 theme-dark-navlink text-white"},{default:a(()=>[r("訂單管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/coupons",class:"d-block px-5 py-3 theme-dark-navlink text-white"},{default:a(()=>[r("優惠券管理")]),_:1})]),t("li",null,[o(n,{to:"/admin/articles",class:"d-block px-5 py-3 theme-dark-navlink text-white"},{default:a(()=>[r("文章管理")]),_:1})])]),yt,t("div",Tt,[o(n,{to:"/home",class:"d-block px-5 py-3 theme-dark-navlink text-white"},{default:a(()=>[r("回前台")]),_:1}),t("a",{href:"#",onClick:_[2]||(_[2]=T((...d)=>i.logout&&i.logout(...d),["prevent"])),class:"d-block px-5 py-3 theme-dark-navlink text-white"},"登出")])]),t("div",St,[o(b)])])])],64)}const Ot=Q(ht,[["render",Nt]]);export{Ot as default};
