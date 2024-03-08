import{u as m}from"./userProductStore-M6HAe_vm.js";import{c as I}from"./cartStore-hctQ3KHK.js";import{_ as O,m as b,h as S,r as y,o as i,c as l,b as t,I as h,J as v,g as p,H as a,d,e as w,w as _,L as P}from"./index-yn18Zgvv.js";import{b as k}from"./btnFavorite-8s94LTk2.js";import"./sweetalert2.all-Uq64VffO.js";var T={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:A,VITE_PATH:C}=T,N={data(){return{product:{},qty:1,relatedProducts:[],artistInfo:{}}},methods:{...b(m,["getAllProducts"]),...b(I,["addToCart"]),changeImage(e){this.product.currentImage=this.product.imagesStock[e]},getCurrentProduct(e){const n=`${A}/api/${C}/product/${e}`;return this.axios.get(n).then(r=>{const s=r.data.product;return this.product={productInfo:s,currentImage:s.imageUrl},s.imagesUrl&&(this.product.imagesStock=[s.imageUrl,...s.imagesUrl]),s.artist}).catch(r=>console.log(r.response.data.message))},getRelatedProducts(e,n){let r=this.sortNewest.newestProduct.filter(s=>s.artist===e&&s.id!==n);r.length||(r=this.sortNewest.newestProduct.filter(s=>s.group===this.product.productInfo.group)),this.relatedProducts=r.slice(0,3)},getArtistInfo(e){this.artistInfo=this.sortNewest.newestArtist.filter(n=>n.title===e)[0]}},async mounted(){try{const e=this.$route.params.id,n=await this.getCurrentProduct(e);await this.getAllProducts(),this.getRelatedProducts(n,e),this.getArtistInfo(n)}catch(e){throw console.log("錯誤:",e),e}},computed:{...S(m,["sortNewest"])},components:{btnFavorite:k}},V={key:0,class:"container user-page-container"},j={class:"row g-1 g-lg-6"},E={class:"col-12 col-md-8"},U={class:"row"},L={class:"position-relative col-12 col-lg-3"},B={class:"bg-tertiary h-100 overflow-hidden"},D={key:0,class:"position-lg-absolute row gap-0 gap-lg-2 px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},R=["onClick"],F=["src"],q={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},H={class:"bg-tertiary ratio-1x1 overflow-hidden"},z=["src","alt"],M={class:"col-12 col-md-4"},J={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},W={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},G={class:"mb-2 h6 text-info fw-bold"},K={class:"h5 fw-bold"},Q={class:"lh-base lh-md-lg fs-info text-info"},X=t("hr",{class:"my-6 text-default"},null,-1),Y={class:"accordion accordion-flush",id:"accordionPanelsProductInfo"},Z={class:"accordion-item bg-transparent border-default"},$=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingOne"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",style:{"box-shadow":"none"}}," 作品規格 ")],-1),tt={id:"panelsStayOpen-collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne"},ot={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},et=t("hr",{class:"my-6 text-default"},null,-1),st={class:"accordion accordion-flush",id:"accordionPanelsProductInfo"},nt={class:"accordion-item bg-transparent border-default"},ct=t("h2",{class:"accordion-header",id:"panelsStayOpen-headingOne"},[t("button",{class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",style:{"box-shadow":"none"}}," 作品版數 ")],-1),at={id:"panelsStayOpen-collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne"},it={class:"accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info"},lt=t("p",null,"剩餘版數",-1),rt=t("hr",{class:"my-6 text-default"},null,-1),dt={class:"accordion accordion-flush",id:"accordionPanelsProductInfo"},pt={class:"accordion-item bg-transparent"},ut={class:"accordion-header",id:"panelsStayOpen-headingTwo"},ht={class:"accordion-button text-info fw-bold bg-transparent p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseTwo",style:{"box-shadow":"none"}},_t={id:"panelsStayOpen-collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingOne"},ft={class:"accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info"},gt={key:1,class:"container"},mt={class:"py-7 py-md-9"},bt={class:"d-flex justify-content-between align-items-center mb-7 mb-md-8"},yt=t("h2",{class:"fs-2 fs-md-1"},"相似作品",-1),vt={class:"row g-3 g-md-8"},wt={class:"position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img"},xt=["src","alt"],It=["src"],Ot={class:"py-3 px-0 px-md-4"},St={class:"mb-2 fs-info fs-md-5 fw-bold text-default"},Pt={key:0,class:"d-flex justify-content-between align-items-center"},kt={class:"fs-info fs-md-6 text-info"};function Tt(e,n,r,s,o,x){const f=y("btnFavorite"),u=y("router-link");return i(),l(h,null,[o.product.productInfo?(i(),l("div",V,[t("div",j,[t("div",E,[t("div",U,[t("div",L,[t("div",B,[o.product.imagesStock?(i(),l("div",D,[(i(!0),l(h,null,v(o.product.imagesStock,(c,g)=>(i(),l("a",{href:"#",class:"col-3 col-lg-12 ratio-1x1 overflow-hidden",key:"img"+g,onClick:P(At=>x.changeImage(g),["prevent"])},[t("img",{src:c,alt:"product",class:"object-fit-contain w-100 h-100"},null,8,F)],8,R))),128))])):p("",!0)])]),t("div",q,[t("div",H,[t("img",{src:o.product.currentImage,alt:o.product.productInfo.title,class:"object-fit-contain w-100 h-100"},null,8,z)])])])]),t("div",M,[t("div",J,[t("div",W,[t("div",null,[t("h3",G,a(o.product.productInfo.artist),1),t("h2",K,a(o.product.productInfo.title),1)]),d(f)]),t("p",Q,a(o.product.productInfo.content),1),X,t("div",Y,[t("div",Z,[$,t("div",tt,[t("div",ot,a(o.product.productInfo.size),1)])])]),et,t("div",st,[t("div",nt,[ct,t("div",at,[t("div",it,[lt,t("p",null,"總版數 "+a(o.product.productInfo.quantity),1)])])])]),rt,t("div",dt,[t("div",pt,[t("h2",ut,[t("button",ht," 關於 "+a(o.artistInfo.title),1)]),t("div",_t,[t("div",ft,a(o.artistInfo.content),1)])])])]),t("button",{type:"button",class:"py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:n[0]||(n[0]=c=>e.addToCart(o.product.productInfo.id,o.qty))},"加入購物車．NT$ "+a(o.product.productInfo.price.toLocaleString()),1)])])])):p("",!0),w(" "+a(o.product.productInfo)+" ",1),o.relatedProducts.length?(i(),l("div",gt,[t("div",mt,[t("div",bt,[yt,d(u,{to:"/productlist",class:"text-default border-bottom border-default fw-bold fs-info fs-md-6"},{default:_(()=>[w("瀏覽更多")]),_:1})]),t("div",vt,[(i(!0),l(h,null,v(o.relatedProducts,c=>(i(),l("div",{class:"col-6 col-md-4",key:c.id},[d(u,{to:`/productinfo/${c.id}`},{default:_(()=>[t("div",wt,[t("img",{src:c.imageUrl,alt:c.title,class:"object-fit-contain w-100 h-100 product-img-up"},null,8,xt),t("img",{src:c.imagesUrl[0],alt:"item.title",class:"position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down"},null,8,It)])]),_:2},1032,["to"]),t("div",Ot,[d(u,{to:`/productinfo/${c.id}`},{default:_(()=>[t("h3",St,a(c.title),1)]),_:2},1032,["to"]),e.isArtistBlock?p("",!0):(i(),l("div",Pt,[t("p",kt,"NT$ "+a(c.price.toLocaleString()),1),d(f)]))])]))),128))])])])):p("",!0)],64)}const Ut=O(N,[["render",Tt]]);export{Ut as default};