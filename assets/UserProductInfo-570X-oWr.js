import{u as m}from"./userProductStore-XVa7IkbS.js";import{c as b}from"./userCartStore-VE6payGs.js";import{_ as P,m as y,b as v,r as w,o as i,c as l,d as t,F as h,k as I,g as u,t as r,e as d,w as _,q as O,f as S}from"./index-1INmv1Cf.js";import{b as k}from"./btnFavorite-LoPxVRwn.js";import"./sweetalert2.all-_I-RpYga.js";var C={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:A,VITE_PATH:T}=C,q={data(){return{currentProductId:null,product:{},qty:1,relatedProducts:[],artistInfo:{},quantityInCart:""}},watch:{cartsList(){this.getAvailableProductNum(this.currentProductId)}},methods:{...y(m,["getAllProducts"]),...y(b,["addToCart","getCartsList"]),changeImage(o){this.product.currentImage=this.product.imagesStock[o]},getCurrentProduct(o){const s=`${A}/api/${T}/product/${o}`;return this.axios.get(s).then(n=>{const c=n.data.product;return this.product={productInfo:c,currentImage:c.imageUrl},c.imagesUrl&&(this.product.imagesStock=[c.imageUrl,...c.imagesUrl]),c.artist}).catch(n=>console.log(n.response.data.message))},getRelatedProducts(o,s){let n=this.sortNewest.newestProduct.filter(c=>c.artist===o&&c.id!==s);n.length||(n=this.sortNewest.newestProduct.filter(c=>c.group===this.product.productInfo.group)),this.relatedProducts=n.slice(0,3)},getArtistInfo(o){this.artistInfo=this.sortNewest.newestArtist.filter(s=>s.title===o)[0]},getAvailableProductNum(o){console.log(o),console.log("this.cartsList.carts",this.cartsList.carts);const s=this.cartsList.carts.filter(n=>(console.log(n.product_id,o,n.product_id===o),n.product_id===o));console.log("stateInCart",s),this.quantityInCart=s.length?s[0].qty:0,console.log("this.quantityInCart",this.quantityInCart)}},async mounted(){try{this.currentProductId=this.$route.params.id;const o=await this.getCurrentProduct(this.currentProductId);await this.getAllProducts(),this.getCartsList(),this.getAvailableProductNum(this.currentProductId),this.getRelatedProducts(o,this.currentProductId),this.getArtistInfo(o)}catch(o){throw console.log("錯誤:",o),o}},computed:{...v(m,["sortNewest"]),...v(b,["cartsList"])},components:{btnFavorite:k}},N={key:0,class:"container user-page-container"},L={class:"row g-1 g-lg-6"},V={class:"col-12 col-md-8"},j={class:"row"},E={class:"position-relative col-12 col-lg-3"},U={class:"bg-tertiary h-100 overflow-hidden"},B={key:0,class:"position-lg-absolute row gap-0 gap-lg-2 px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},D=["onClick"],F=["src"],R={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},z={class:"bg-tertiary ratio-1x1 overflow-hidden"},H=["src","alt"],M={class:"col-12 col-md-4"},W={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},G={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},J={class:"mb-2 h6 text-info fw-bold"},K={class:"h5 fw-bold"},Q={class:"lh-base lh-md-lg fs-info text-info"},X=t("hr",{class:"my-6 text-default"},null,-1),Y={class:"accordion accordion-flush",id:"accordionPanelsProductInfo"},Z={class:"accordion-item bg-transparent border-default"},$=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingOne"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",style:{"box-shadow":"none"}}," 作品規格 ")],-1),tt={id:"panelsStayOpen-collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne"},ot={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},et=t("hr",{class:"my-6 text-default"},null,-1),st={class:"accordion accordion-flush",id:"accordionPanelsProductInfo"},nt={class:"accordion-item bg-transparent border-default"},ct=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingOne"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",style:{"box-shadow":"none"}}," 作品版數 ")],-1),at={id:"panelsStayOpen-collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne"},rt={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},it=t("hr",{class:"my-6 text-default"},null,-1),lt={class:"accordion accordion-flush",id:"accordionPanelsProductInfo"},dt={class:"accordion-item bg-transparent"},ut={class:"accordion-header",id:"panelsStayOpen-headingTwo"},pt={class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseTwo",style:{"box-shadow":"none"}},ht={id:"panelsStayOpen-collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingOne"},_t={class:"accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info"},ft=["disabled"],gt={key:1,class:"container"},mt={class:"py-7 py-md-9"},bt={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},yt=t("h2",{class:"fs-2 fs-md-1"},"相似作品",-1),vt={class:"row g-3 g-md-8"},wt={class:"position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img"},It=["src","alt"],xt=["src"],Pt={class:"py-3 px-0 px-md-4"},Ot={class:"mb-2 fs-info fs-md-5 fw-bold text-default"},St={key:0,class:"d-flex justify-content-between align-items-center"},kt={class:"fs-info fs-md-6 text-info"};function Ct(o,s,n,c,e,x){const f=w("btnFavorite"),p=w("router-link");return i(),l(h,null,[e.product.productInfo?(i(),l("div",N,[t("div",L,[t("div",V,[t("div",j,[t("div",E,[t("div",U,[e.product.imagesStock?(i(),l("div",B,[(i(!0),l(h,null,I(e.product.imagesStock,(a,g)=>(i(),l("a",{href:"#",class:"col-3 col-lg-12 ratio-1x1 overflow-hidden",key:"img"+g,onClick:O(At=>x.changeImage(g),["prevent"])},[t("img",{src:a,alt:"product",class:"object-fit-contain w-100 h-100"},null,8,F)],8,D))),128))])):u("",!0)])]),t("div",R,[t("div",z,[t("img",{src:e.product.currentImage,alt:e.product.productInfo.title,class:"object-fit-contain w-100 h-100"},null,8,H)])])])]),t("div",M,[t("div",W,[t("div",G,[t("div",null,[t("h3",J,r(e.product.productInfo.artist),1),t("h2",K,r(e.product.productInfo.title),1)]),d(f)]),t("p",Q,r(e.product.productInfo.content),1),X,t("div",Y,[t("div",Z,[$,t("div",tt,[t("div",ot,r(e.product.productInfo.size),1)])])]),et,t("div",st,[t("div",nt,[ct,t("div",at,[t("div",rt,[t("p",null,"剩餘版數 "+r(e.product.productInfo.quantity-e.quantityInCart),1),t("p",null,"總版數 "+r(e.product.productInfo.quantity),1)])])])]),it,t("div",lt,[t("div",dt,[t("h2",ut,[t("button",pt," 關於 "+r(e.artistInfo.title),1)]),t("div",ht,[t("div",_t,r(e.artistInfo.content),1)])])])]),t("button",{type:"button",class:"position-relative py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:s[0]||(s[0]=a=>o.addToCart(e.product.productInfo.id,e.qty)),disabled:e.product.productInfo.quantity-e.quantityInCart===0},"加入購物車．NT$ "+r(e.product.productInfo.price.toLocaleString()),9,ft)])])])):u("",!0),e.relatedProducts.length?(i(),l("div",gt,[t("div",mt,[t("div",bt,[yt,d(p,{to:"/productlist",class:"text-default border-bottom border-default fw-bold fs-info fs-md-6"},{default:_(()=>[S("瀏覽更多")]),_:1})]),t("div",vt,[(i(!0),l(h,null,I(e.relatedProducts,a=>(i(),l("div",{class:"col-6 col-md-4",key:a.id},[d(p,{to:`/productinfo/${a.id}`},{default:_(()=>[t("div",wt,[t("img",{src:a.imageUrl,alt:a.title,class:"object-fit-contain w-100 h-100 product-img-up"},null,8,It),t("img",{src:a.imagesUrl[0],alt:"item.title",class:"position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down"},null,8,xt)])]),_:2},1032,["to"]),t("div",Pt,[d(p,{to:`/productinfo/${a.id}`},{default:_(()=>[t("h3",Ot,r(a.title),1)]),_:2},1032,["to"]),o.isArtistBlock?u("",!0):(i(),l("div",St,[t("p",kt,"NT$ "+r(a.price.toLocaleString()),1),d(f)]))])]))),128))])])])):u("",!0)],64)}const jt=P(q,[["render",Ct]]);export{jt as default};
