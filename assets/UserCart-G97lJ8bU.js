import{c as m}from"./userCartStore-lRPWsDKf.js";import{_ as v,m as g,a as x,o as i,c as n,b as t,F as p,d as f,w as b,v as y,t as a,x as k,p as C,k as B,g as h}from"./index-xxmhpSli.js";import{M as L}from"./modal-_w6yIv9i.js";import{_ as S}from"./present-jHi2XJyR.js";import"./statusStore-Kr_WM3ql.js";import"./sweetalert2.all-AGo5aliO.js";import"./selector-engine-CulMp733.js";const T="/assets/firework01-5jNM4xXO.svg",w="/assets/firework03-YTEP-b5S.svg",I="/assets/firework02-ydPBb7uF.svg";var M={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:$,VITE_PATH:V}=M,E={data(){return{coupon:"",toastState:!0,doAction:null,modal:null}},methods:{...g(m,["getCartsList","updateCart","deleteCartItem","checkCoupon","copyCouponCode"]),clearCartsList(){this.swalQuestionWithBootstrapButtons.fire({title:"確定要清空購物車嗎？",icon:"question",text:"這個動作無法復原",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認更改"}).then(o=>{if(o.isConfirmed){const e=this.$loading.show(),_=`${$}/api/${V}/carts`;this.axios.delete(_).then(r=>{this.swalInfoCheckWithBootstrapButtons.fire({title:r.data.message,confirmButtonText:"確認"}),this.getCartsList()}).catch(r=>this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:r.response.data.message,confirmButtonText:"確認"})).finally(()=>{e.hide()})}})},checkOrder(){this.$router.push("/order/checkform")},hideCouponModal(){sessionStorage.setItem("shownCouponModal",!0),this.modal.hide()}},mounted(){this.getCartsList(),sessionStorage.getItem("shownCouponModal")||(this.modal=new L(this.$refs.couponModal,{keyboard:!1,backdrop:"static"}),this.modal.show()),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},computed:{...x(m,["cartsList"])}},d=o=>(C("data-v-88451a50"),o=o(),B(),o),N={class:"container user-page-container flex-grow-1"},q=d(()=>t("h2",{class:"mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1"},"購物車",-1)),A={key:0,class:"text-center"},P={key:1,class:"position-relative"},O=["disabled"],U={class:"table mb-4 mb-md-5"},D=d(()=>t("thead",null,[t("tr",{class:"fs-info fs-md-6"},[t("th",{scope:"col",style:{"padding-left":"0"}}),t("th",{scope:"col",class:"fw-bold"},[t("span",{class:"d-none d-md-block"},"商品")]),t("th",{scope:"col",class:"d-none d-md-table-cell fw-bold"},"單價"),t("th",{scope:"col",class:"fw-bold"},"數量"),t("th",{scope:"col",class:"fw-bold"},"總計")])],-1)),W={scope:"row",class:"w-auto w-md-15",style:{"padding-left":"0"}},j=["onClick"],F=d(()=>t("i",{class:"bi bi-x fs-4"},null,-1)),R=[F],H={class:"d-flex gap-3 gap-md-5"},Q={style:{"max-width":"107px"},class:"ratio-1x1"},z=["src","alt"],X={style:{"max-width":"286px","min-width":"90px"},class:"d-flex flex-column"},Y={class:"flex-grow-1"},G={class:"mb-1 fw-bold fs-info fs-md-6"},J={class:"d-none d-md-block fs-info text-info fw-light"},K={class:"fs-info fs-md-6"},Z={class:"d-none d-md-table-cell fs-info fs-md-6"},tt={class:"fs-info fs-md-6"},st=["onUpdate:modelValue","onChange"],ot=["selected","value"],et=["selected","value"],lt={class:"fs-info fs-md-6"},dt={class:"row g-6 justify-content-between"},at={class:"col-12 col-md-5 col-lg-4"},it={class:"row"},nt={class:"col-6"},ct={class:"border-bottom border-default h-100"},rt={class:"col-6"},pt=["disabled"],ut={class:"col-12 col-md-5"},ft={class:"border-bottom border-default"},ht={class:"row mb-4"},_t=d(()=>t("div",{class:"col fw-bold"},"總計",-1)),mt={class:"col text-end fw-bold"},bt={class:"row mb-4 mb-md-6"},wt=d(()=>t("div",{class:"col fw-bold"},"折扣",-1)),vt={class:"col text-end fw-bold"},gt={class:"row py-4 py-md-7"},xt=d(()=>t("div",{class:"col fw-bold fs-6 fs-md-5"},"結帳金額",-1)),yt={class:"col text-end fw-bold fs-6 fs-md-5"},kt=["disabled"],Ct={class:"modal show",tabindex:"-1",ref:"couponModal"},Bt={class:"modal-dialog modal-dialog-centered modal-lg"},Lt={class:"position-relative container modal-content rounded-0"},St={class:"row flex-column flex-md-row"},Tt=d(()=>t("div",{class:"d-none d-md-block col col-md-6 px-0"},[t("img",{src:S,alt:"coupon",class:"object-fit-cover w-100 h-100"})],-1)),It={class:"col col-md-6 d-flex flex-column p-4"},Mt={class:"mx-auto mt-4 mb-5 mt-md-8 mb-md-9","data-aos":"fade-up","data-aos-duration":"3000"},$t=d(()=>t("h3",{class:"mb-5 mb-md-8 fs-5 fs-md-3 title-letter-spacing lh-base"},[h("為你的第一筆訂單，"),t("span",{class:"d-block"},[h("獲取 "),t("span",{class:"fw-bold"},"97"),h(" 折折扣")])],-1)),Vt=d(()=>t("img",{src:T,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"170px",right:"-121px",top:"77px"}},null,-1)),Et=d(()=>t("img",{src:w,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"100px",right:"-14px",top:"169px"}},null,-1)),Nt=d(()=>t("img",{src:I,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"67px",left:"-2px",top:"75px"}},null,-1)),qt=d(()=>t("img",{src:w,alt:"firework",class:"position-absolute firework translate-middle",style:{width:"167px",left:"-32px",top:"167px"}},null,-1));function At(o,e,_,r,u,c){return i(),n(p,null,[t("div",N,[q,o.cartsList.final_total?(i(),n("div",P,[t("button",{class:"position-absolute top-0 start-0 btn btn-primary rounded-0 fs-info text-info",type:"button",onClick:e[0]||(e[0]=(...s)=>c.clearCartsList&&c.clearCartsList(...s)),disabled:!o.cartsList.final_total},"清空購物車",8,O),t("table",U,[D,t("tbody",null,[(i(!0),n(p,null,f(o.cartsList.carts,s=>(i(),n("tr",{key:s.id},[t("th",W,[t("button",{type:"button",class:"btn px-0",onClick:l=>o.deleteCartItem(s.id)},R,8,j)]),t("td",null,[t("div",H,[t("div",Q,[t("img",{src:s.product.imageUrl,alt:s.product.title,class:"w-100 h-100 object-fit-contain",style:{"min-width":"20px"}},null,8,z)]),t("div",X,[t("div",Y,[t("h3",G,a(s.product.title),1),t("p",J,a(s.product.artist),1)]),t("p",K,a(s.product.size),1)])])]),t("td",Z," NT$ "+a(s.product.origin_price.toLocaleString()),1),t("td",tt,[b(t("select",{class:"form-select form-select-sm rounded-0 border-default fs-info fs-md-6","aria-label":".form-select-sm example",style:{width:"65px"},"onUpdate:modelValue":l=>s.qty=l,onChange:l=>o.updateCart(s)},[s.product.quantity?(i(!0),n(p,{key:0},f(s.product.quantity,l=>(i(),n("option",{key:l,selected:l===s.qty,value:l},a(l),9,ot))),128)):(i(),n(p,{key:1},f(99,l=>t("option",{key:l,selected:l===s.qty,value:l},a(l),9,et)),64))],40,st),[[k,s.qty,void 0,{number:!0}]])]),t("td",lt," NT$ "+a(s.final_total.toLocaleString()),1)]))),128))])]),t("div",dt,[t("div",at,[t("div",it,[t("div",nt,[t("div",ct,[b(t("input",{type:"text",placeholder:"請輸入優惠碼",class:"form-control border-0 text-center h-100","onUpdate:modelValue":e[1]||(e[1]=s=>u.coupon=s)},null,512),[[y,u.coupon,void 0,{trim:!0}]])])]),t("div",rt,[t("button",{class:"py-3 btn btn-outline-default rounded-0 w-100",type:"button",disabled:!o.cartsList.final_total,onClick:e[2]||(e[2]=s=>o.checkCoupon(u.coupon))},"輸入優惠券",8,pt)])])]),t("div",ut,[t("div",ft,[t("div",ht,[_t,t("div",mt,"NT$ "+a(o.cartsList.total.toLocaleString()),1)]),t("div",bt,[wt,t("div",vt,"- NT$ "+a((o.cartsList.total-o.cartsList.final_total).toLocaleString()),1)])]),t("div",gt,[xt,t("div",yt,"NT$ "+a(o.cartsList.final_total.toLocaleString()),1)]),t("button",{type:"button",class:"py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100",onClick:e[3]||(e[3]=(...s)=>c.checkOrder&&c.checkOrder(...s)),disabled:!o.cartsList.final_total},"送出訂單",8,kt)])])])):(i(),n("p",A,"目前購物車內沒有內容"))]),t("div",Ct,[t("div",Bt,[t("div",Lt,[t("div",St,[Tt,t("div",It,[t("button",{type:"button",class:"align-self-end btn-close","aria-label":"Close",onClick:e[4]||(e[4]=(...s)=>c.hideCouponModal&&c.hideCouponModal(...s))}),t("div",Mt,[$t,t("button",{type:"button",class:"py-2 py-md-3 px-6 px-lg-9 btn btn-default fw-bold rounded-0 w-100 text-nowrap",onClick:e[5]||(e[5]=s=>o.copyCouponCode("present97"))},"點擊複製優惠碼")])])]),Vt,Et,Nt,qt])])],512)],64)}const Rt=v(E,[["render",At],["__scopeId","data-v-88451a50"]]);export{Rt as default};
