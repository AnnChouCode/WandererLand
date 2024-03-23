import{u as h}from"./userProductStore-jsLizKaR.js";import{_ as b,m as I,a as y,r as _,o as i,c,b as t,F as l,d as m,h as d,t as g,e as p,l as P,n as k}from"./index-gvCSlrmt.js";import{p as A}from"./productCard-B9zX8e1f.js";import"./sweetalert2.all-8VvGvSJZ.js";import"./btnFavorite-1TK9V_RG.js";import"./favoriteStore-EXsBXQJb.js";import"./statusStore-GCip9ijI.js";var x={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:C,VITE_PATH:S}=x,E={data(){return{artist:{},relatedProducts:[]}},methods:{...I(h,["getAllProducts"]),changeImage(s){this.artist.currentImage=this.artist.imagesStock[s]},getCurrentArtist(s){const o=`${C}/api/${S}/product/${s}`;return this.axios.get(o).then(r=>{const a=r.data.product;return this.artist={artistInfo:a,currentImage:a.imageUrl},a.imagesUrl&&(this.artist.imagesStock=[a.imageUrl,...a.imagesUrl]),a.title}).catch(r=>console.log(r.response.data.message))},getRelatedProducts(s){let o=this.sortNewest.newestProduct.filter(r=>r.artist===s);o.length||(o=this.sortNewest.newestProduct.filter(r=>r.group===this.artist.artistInfo.group)),this.relatedProducts=o}},async mounted(){try{const s=this.$route.params.id,o=await this.getCurrentArtist(s);await this.getAllProducts(),this.getRelatedProducts(o)}catch(s){throw console.log("錯誤:",s),s}},computed:{...y(h,["sortNewest"])},components:{productCard:A}},T={key:0,class:"container user-page-container"},V={class:"row g-1 g-lg-6"},N={class:"col-12 col-md-8"},U={class:"row"},D={class:"position-relative col-12 col-lg-3"},F={class:"bg-tertiary h-100 overflow-hidden"},R={key:0,class:"position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"},B=["onClick"],j=["src"],L={class:"col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content"},H={class:"bg-tertiary ratio-1x1 overflow-hidden"},M=["src","alt"],O={class:"col-12 col-md-4"},z={class:"p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary"},W={class:"d-flex justify-content-between align-items-start mb-5 mb-md-7"},q={class:"h5 fw-bold"},G={class:"lh-base lh-md-lg fs-info text-info"},J={key:1,class:"container"},K={class:"py-7 py-md-9"},Q=t("h2",{class:"mb-7 mb-md-8 fs-2 fs-md-1"},"藝術家作品",-1),X={class:"row g-3 g-md-8"};function Y(s,o,r,a,e,f){const v=_("btnFavorite"),w=_("productCard");return i(),c(l,null,[e.artist.artistInfo?(i(),c("div",T,[t("div",V,[t("div",N,[t("div",U,[t("div",D,[t("div",F,[e.artist.imagesStock?(i(),c("div",R,[(i(!0),c(l,null,m(e.artist.imagesStock,(n,u)=>(i(),c("a",{href:"#",class:"col-3 col-lg-12 py-0 py-lg-2 overflow-hidden",key:"img"+u,onClick:P(Z=>f.changeImage(u),["prevent"])},[t("img",{src:n,alt:"product",class:k(["object-fit-contain w-100 h-100",n===e.artist.currentImage?"border border-2 border-info":""])},null,10,j)],8,B))),128))])):d("",!0)])]),t("div",L,[t("div",H,[t("img",{src:e.artist.currentImage,alt:e.artist.artistInfo.title,class:"object-fit-contain w-100 h-100"},null,8,M)])])])]),t("div",O,[t("div",z,[t("div",W,[t("div",null,[t("h2",q,g(e.artist.artistInfo.title),1)]),p(v)]),t("p",G,g(e.artist.artistInfo.content),1)])])])])):d("",!0),e.relatedProducts.length?(i(),c("div",J,[t("div",K,[Q,t("div",X,[(i(!0),c(l,null,m(e.relatedProducts,n=>(i(),c("div",{class:"col-6 col-md-4",key:n.id},[p(w,{item:n,linkTo:`/productInfo/${n.id}`,showPrice:!0,showFavorite:!0},null,8,["item","linkTo"])]))),128))])])])):d("",!0)],64)}const ct=b(E,[["render",Y]]);export{ct as default};
