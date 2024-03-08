import{u as P}from"./adminProductStore-ZuhaimR9.js";import{_ as V,$ as U,r as p,o as r,c as d,b as e,g as C,a0 as g,I as h,J as v,d as i,w as I,K as u,H as q,Q as y,R as M,a1 as B,e as S}from"./index-yn18Zgvv.js";import{u as N}from"./uploadImageModal-rp9fAD_N.js";import"./sweetalert2.all-Uq64VffO.js";import"./modal-K3r4iDz0.js";import"./selector-engine-W6ik1Fwf.js";var z={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const b=P(),{VITE_API:T,VITE_PATH:A}=z,E={data(){return{isNewProduct:!1,tempProductInfo:{},tempGroupList:[],isCover:!1,swalInfoCheckWithBootstrapButtons:null}},methods:{getProductInfo(l,t){this.tempProductInfo=l[t]},chooseGroup(l){this.tempProductInfo.group=l},deleteImage(l,t){l==="imageUrl"?this.tempProductInfo.imageUrl="":l==="imagesUrl"?this.tempProductInfo.imagesUrl.splice(t,1):(this.tempProductInfo.imageUrl="",this.tempProductInfo.imagesUrl=[])},openImageModal(l){l==="isCover"?this.isCover=!0:this.isCover=!1,this.$refs.uploadImageModal.openModal()},getImgUrl(l,t){if(l==="imageUrl"){this.tempProductInfo.imageUrl=t;return}this.tempProductInfo.imagesUrl?this.tempProductInfo.imagesUrl.push(t):this.tempProductInfo.imagesUrl=[t]},updateProductInfo(){let l=`${T}/api/${A}/admin/product`;const t=this.isNewProduct?"post":"put";this.isNewProduct||(l+=`/${this.tempProductInfo.id}`),this.tempProductInfo.category="products",this.axios[t](l,{data:this.tempProductInfo}).then(f=>{this.swalInfoCheckWithBootstrapButtons.fire(f.data.message),this.$router.push("/admin/products")}).catch(f=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:f.response.data.message,confirmButtonText:"確認"})})},async fetchData(l){try{if(await b.getAllProducts(),this.tempGroupList=[...b.groupList],!l)return;this.getProductInfo(b.allProducts,l)}catch(t){console.log(t.response.data.message)}}},computed:{...U(P)},components:{uploadImageModal:N},mounted(){const l=this.$route.params.id;l||(this.isNewProduct=!0),this.fetchData(l),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}},D={class:"overflow-y-scroll scrollbar-y-hide vh-100"},L={key:0,class:"py-4 py-md-7 fw-bold"},j={key:1,class:"py-4 py-md-7 fw-bold"},G={class:"mb-7"},W=e("h5",{class:"mb-3 fw-bold"},"商品圖片",-1),R={class:"row g-1 mb-3"},H={class:"col-6 col-md-2"},O={class:"ratio-1x1"},F={class:"position-relative border border-1 h-100"},J=e("i",{class:"bi bi-trash"},null,-1),K=[J],Q=e("div",{class:"position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100"}," 封面圖片 ",-1),X={key:2,class:"h-100"},Y=e("i",{class:"bi bi-image mb-2 text-default"},null,-1),Z=e("p",{class:"text-default"},"目前無封面",-1),$=[Y,Z],ee={class:"position-relative border border-1 h-100"},te=["onClick"],oe=e("i",{class:"bi bi-trash"},null,-1),se=[oe],le={class:"col-6 col-md-2 p-0 border border-1"},ie=e("i",{class:"bi bi-trash me-2"},null,-1),ne=e("span",null,"刪除所有圖片",-1),re=[ie,ne],de=e("h5",{class:"mb-5 fw-bold"},"商品基本資訊",-1),ae=e("label",{for:"title",class:"form-label fw-bold has-required"},"商品名稱",-1),ce={class:"row g-5 g-md-1"},ue={class:"col-md-6"},me=e("label",{for:"artist",class:"form-label fw-bold has-required"},"藝術家",-1),pe={class:"col-md-6"},fe=e("label",{for:"size",class:"me-2 form-label fw-bold has-required"},"商品尺寸",-1),he={class:"row g-5 g-md-1"},be={class:"col-md-6"},_e=e("label",{for:"quantity",class:"me-2 form-label fw-bold"},"作品版數",-1),ge=e("span",{class:"fs-info text-info"},"若未填寫則不限版數",-1),ve={class:"col-md-6"},Ie=e("label",{for:"unit",class:"form-label fw-bold has-required"},"商品單位",-1),ye=e("label",{for:"group",class:"form-label fw-bold has-required"},"商品分類",-1),Pe={class:"d-flex align-items-center text-nowrap fs-info"},xe=e("span",{class:"text-info"},"點擊帶入分類：",-1),we={class:"d-flex gap-1 mb-0 flex-wrap"},ke=["onClick"],Ve={class:"row g-3 g-md-1"},Ue={class:"col-md-6"},Ce=e("label",{for:"origin_price",class:"form-label fw-bold has-required"},"原價",-1),qe={class:"col-md-6"},Me=e("label",{for:"price",class:"form-label fw-bold has-required"},"售價",-1),Be=e("label",{for:"content",class:"form-label fw-bold"},"說明內容",-1),Se={class:"form-check form-switch"},Ne={class:"form-check-label",for:"is_enabled"},ze={key:0},Te={key:1},Ae={class:"d-flex justify-content-end gap-2 pt-3"},Ee=e("button",{type:"submit",class:"btn btn-dark text-white"},"確認",-1);function De(l,t,f,Le,o,a){const c=p("v-field"),m=p("error-message"),x=p("router-link"),w=p("v-form"),k=p("uploadImageModal");return r(),d(h,null,[e("div",D,[o.isNewProduct?(r(),d("h2",L,"新增商品")):(r(),d("h2",j,"編輯商品")),e("div",null,[e("div",G,[W,e("div",R,[e("div",H,[e("div",O,[e("div",F,[o.tempProductInfo.imageUrl?(r(),d("button",{key:0,type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:t[0]||(t[0]=n=>a.deleteImage("imageUrl",l.idx))},K)):C("",!0),Q,o.tempProductInfo.imageUrl?(r(),d("div",{key:1,style:g(`background-image:url(${o.tempProductInfo.imageUrl})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)):(r(),d("div",X,[e("button",{onClick:t[1]||(t[1]=n=>a.openImageModal("isCover")),class:"d-flex flex-column align-items-center justify-content-center w-100 h-100 text-secondary btn btn-light rounded-0",type:"button"},$)]))])])]),(r(!0),d(h,null,v(o.tempProductInfo.imagesUrl,(n,s)=>(r(),d("div",{class:"col-6 col-md-2",key:s},[e("div",ee,[e("button",{type:"button",class:"position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light",style:{width:"36px",height:"36px"},onClick:_=>a.deleteImage("imagesUrl",s)},se,8,te),e("div",{style:g(`background-image:url(${n})`),class:"h-100 bg-img-contain bg-img-center bg-img-norepeat"},null,4)])]))),128)),e("div",le,[e("button",{onClick:t[2]||(t[2]=n=>a.openImageModal("inNotCover")),class:"d-flex align-items-center justify-content-center w-100 h-100 text-default btn btn-light rounded-0 ratio-1x1",type:"button"}," 新增圖片 ")])]),e("button",{typs:"button",class:"p-0 btn text-danger",onClick:t[3]||(t[3]=(...n)=>a.deleteImage&&a.deleteImage(...n))},re)]),e("div",null,[de,i(w,{class:"d-flex flex-column gap-5",onSubmit:a.updateProductInfo},{default:I(({errors:n})=>[e("div",null,[ae,i(c,{type:"text",class:u(["form-control",{"is-invalid":n.title}]),placeholder:"請輸入商品名稱",modelValue:o.tempProductInfo.title,"onUpdate:modelValue":t[4]||(t[4]=s=>o.tempProductInfo.title=s),id:"title",name:"title",rules:"required"},null,8,["modelValue","class"]),i(m,{name:"title",class:"invalid-feedback"})]),e("div",ce,[e("div",ue,[me,i(c,{id:"artist",name:"artist",type:"text",class:u(["form-control",{"is-invalid":n.artist}]),placeholder:"請輸入藝術家名稱",rules:"required",modelValue:o.tempProductInfo.artist,"onUpdate:modelValue":t[5]||(t[5]=s=>o.tempProductInfo.artist=s)},null,8,["class","modelValue"]),i(m,{name:"artist",class:"invalid-feedback"})]),e("div",pe,[fe,i(c,{id:"size",name:"size",type:"text",class:u(["form-control",{"is-invalid":n.size}]),placeholder:"請輸入商品尺寸",min:"0",modelValue:o.tempProductInfo.size,"onUpdate:modelValue":t[6]||(t[6]=s=>o.tempProductInfo.size=s)},null,8,["class","modelValue"]),i(m,{name:"size",class:"invalid-feedback"})])]),e("div",he,[e("div",be,[_e,ge,i(c,{id:"quantity",name:"quantity",type:"number",class:u(["form-control",{"is-invalid":n.quantity}]),placeholder:"請輸入作品版數",min:"0",modelValue:o.tempProductInfo.quantity,"onUpdate:modelValue":t[7]||(t[7]=s=>o.tempProductInfo.quantity=s),modelModifiers:{number:!0}},null,8,["class","modelValue"])]),e("div",ve,[Ie,i(c,{id:"unit",name:"unit",type:"text",class:u(["form-control",{"is-invalid":n.unit}]),placeholder:"請輸入商品單位",rules:"required",modelValue:o.tempProductInfo.unit,"onUpdate:modelValue":t[8]||(t[8]=s=>o.tempProductInfo.unit=s)},null,8,["class","modelValue"]),i(m,{name:"unit",class:"invalid-feedback"})])]),e("div",null,[e("div",null,[ye,i(c,{type:"text",id:"group",name:"group",class:u(["form-control mb-1",{"is-invalid":n.group}]),placeholder:"請輸入商品分類",rules:"required",modelValue:o.tempProductInfo.group,"onUpdate:modelValue":t[9]||(t[9]=s=>o.tempProductInfo.group=s)},null,8,["class","modelValue"]),i(m,{name:"group",class:"invalid-feedback"})]),e("div",Pe,[xe,e("div",we,[(r(!0),d(h,null,v(o.tempGroupList,(s,_)=>(r(),d("button",{type:"button",class:"btn btn-light rounded-pill py-1 fs-info text-info",value:"item",key:_,onClick:je=>a.chooseGroup(s)},q(s),9,ke))),128))])])]),e("div",Ve,[e("div",Ue,[Ce,i(c,{type:"number",id:"origin_price",name:"origin_price",class:u(["form-control",{"is-invalid":n.origin_price}]),placeholder:"請輸入原價",rules:"required",min:"0",modelValue:o.tempProductInfo.origin_price,"onUpdate:modelValue":t[10]||(t[10]=s=>o.tempProductInfo.origin_price=s),modelModifiers:{number:!0}},null,8,["class","modelValue"]),i(m,{name:"origin_price",class:"invalid-feedback"})]),e("div",qe,[Me,i(c,{type:"number",id:"price",name:"price",class:u(["form-control",{"is-invalid":n.price}]),placeholder:"請輸入商品售價",rules:"required",min:"0",modelValue:o.tempProductInfo.price,"onUpdate:modelValue":t[11]||(t[11]=s=>o.tempProductInfo.price=s),modelModifiers:{number:!0}},null,8,["class","modelValue"]),i(m,{name:"price",class:"invalid-feedback"})])]),e("div",null,[Be,y(e("textarea",{type:"text",id:"content",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[12]||(t[12]=s=>o.tempProductInfo.content=s),style:{height:"200px"}},null,512),[[M,o.tempProductInfo.content]])]),e("div",Se,[y(e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_enabled","onUpdate:modelValue":t[13]||(t[13]=s=>o.tempProductInfo.is_enabled=s)},null,512),[[B,o.tempProductInfo.is_enabled]]),e("label",Ne,[o.tempProductInfo.is_enabled?(r(),d("span",ze,"更改為未上架")):(r(),d("span",Te,"更改為已上架"))])]),e("div",Ae,[i(x,{to:"/admin/products",class:"btn btn-outline-dark"},{default:I(()=>[S("取消")]),_:1}),Ee])]),_:1},8,["onSubmit"])])])]),i(k,{ref:"uploadImageModal",onSubmitImgUrl:a.getImgUrl,"is-Cover":o.isCover},null,8,["onSubmitImgUrl","is-Cover"])],64)}const Je=V(E,[["render",De]]);export{Je as default};