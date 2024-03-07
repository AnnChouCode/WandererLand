import{u as x}from"./adminOrderStore-83xgRhyU.js";import{_ as v,Y as O,$ as I,r as f,o as i,c as l,b as s,H as o,K as m,e as h,g as r,I as b,J as w,d as g,w as y,a0 as S}from"./index-pzpS6pyO.js";import{t as k}from"./toastComponent-W9t0gG9T.js";import"./sweetalert2.all-yD-pxYGR.js";import"./cartStore-MpWcKVss.js";var B={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const C=O.useLoading(),T=x(),{VITE_API:A,VITE_PATH:L}=B,P={data(){return{tempOrderInfo:{},doAction:null,toastState:!0,swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{getOrderInfo(e){const n=T.currentOrderList.filter(t=>t.id===e),c={...n[0],hasOwnProperty(){return!1}};Object.prototype.hasOwnProperty.call(c,"is_shipping")?this.tempOrderInfo=n[0]:this.tempOrderInfo={...n[0],is_shipping:!1}},updateOrder(e,n){const c=`${A}/api/${L}/admin/order/${e.id}`,u={updatePaid:"更改為「已付款」",updateShipping:"更改為「已出貨」"};this.swalQuestionWithBootstrapButtons.fire({title:`確定要更改為${u[n]}嗎？`,icon:"question",text:"這個動作無法復原",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認更改"}).then(t=>{if(t.isConfirmed){const a=C.show(),_=Date.now();n==="updatePaid"&&(e.is_paid=!e.is_paid,e.paid_date=Math.floor(_/1e3)),n==="updateShipping"&&(e.is_shipping=!e.is_shipping,e.shipping_date=Math.floor(_/1e3)),this.axios.put(c,{data:e}).then(p=>{this.toastState=!this.toastState,this.doAction=n}).catch(p=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:p.response.data.message,confirmButtonText:"確認"})}).finally(a.hide())}})}},computed:{...I(x)},components:{toastComponent:k},mounted(){const e=this.$route.params.id;this.getOrderInfo(e),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}},D={class:"overflow-y-scroll scrollbar-y-hide vh-100"},E={class:"py-4 py-md-7 fw-bold"},N={class:"d-flex gap-2"},V={key:0,class:"text-info"},W={key:1,class:"text-danger"},q={key:0,class:"text-info"},H={key:1,class:"text-danger"},M={class:"row g-3"},Q={key:0,class:"col-md-7"},R={class:"row flex-column g-3"},j={class:"col"},z={class:"border border-1 rounded"},U={class:"row"},F={class:"col"},J={class:"p-5"},K=s("h3",{class:"mb-2 fs-5 fw-bold"},"訂單總金額",-1),Y={class:"mb-2 fs-2 fw-bold"},G=s("span",{class:"d-block d-sm-inline"},"「已付款」",-1),X={class:"col"},Z={class:"p-5"},$=s("h3",{class:"mb-2 fs-5 fw-bold"},"商品總數",-1),ss={class:"mb-2 fs-2 fw-bold"},ts=s("hr",{class:"m-0"},null,-1),os={class:"p-5"},es={class:"list-unstyled"},ns={class:"row"},is={class:"col-lg-6"},ls={class:"col-lg-6"},ds={class:"row"},rs={class:"col-6"},cs={class:"text-end text-lg-start"},as={class:"col-6"},_s={class:"text-end"},ps={class:"row fw-bold text-end"},hs=s("div",{class:"col-xl-6"},null,-1),us={class:"col-xl-6"},fs={class:"row"},ms=s("div",{class:"col"},[s("p",{class:"text-info"},"小計"),s("p",{class:"text-info"},"coupon 折抵")],-1),bs={class:"col"},gs={class:"text-info"},xs=s("p",{class:"text-danger"},"0",-1),vs=s("hr",null,null,-1),Os={class:"row"},Is=s("div",{class:"col"},[s("p",{class:"fs-5"},"總金額")],-1),ws={class:"col"},ys={class:"fs-5"},Ss=s("hr",{class:"m-0"},null,-1),ks={class:"p-5"},Bs=s("h3",{class:"mb-2 fs-5 fw-bold"},"顧客備註",-1),Cs={class:"col"},Ts={class:"p-5 border border-1 rounded"},As=s("h3",{class:"mb-2 fs-5 fw-bold"},"訂單紀錄",-1),Ls={class:"d-flex flex-column gap-3 ps-3"},Ps={key:0},Ds={class:"mb-1 text-info fs-info"},Es=s("p",{class:"fw-bold"}," 出貨日期 ",-1),Ns={key:1},Vs={class:"mb-1 text-info fs-info"},Ws=s("p",{class:"fw-bold"}," 付款日期 ",-1),qs={class:"mb-1 text-info fs-info"},Hs=s("p",{class:"fw-bold"}," 訂單產生 ",-1),Ms={class:"col-md-5"},Qs={key:0,class:"row flex-column g-3"},Rs={class:"col"},js={class:"border border-1 rounded"},zs=s("h3",{class:"pt-3 px-3 fw-bold fs-5"},[s("span",{class:"me-2"},[s("i",{class:"bi bi-person"})]),h("顧客資訊 ")],-1),Us=s("hr",null,null,-1),Fs={class:"pb-3 px-3"},Js={class:"fs-5"},Ks={class:"text-info list-unstyled"},Ys={class:"col"},Gs={class:"border border-1 rounded"},Xs=s("h3",{class:"pt-3 px-3 fw-bold fs-5"},[s("span",{class:"me-2"},[s("i",{class:"bi bi-box-seam"})]),h("宅配地址 ")],-1),Zs=s("hr",null,null,-1),$s={class:"pb-3 px-3"},st={class:"fs-5"},tt={class:"text-info list-unstyled"};function ot(e,n,c,u,t,a){const _=f("router-link"),p=f("toastComponent");return i(),l(b,null,[s("div",D,[s("h2",E,"訂單編號："+o(t.tempOrderInfo.id),1),s("div",N,[s("span",{class:m(["d-inline-block mb-3 rounded-pill py-1 px-3 border fw-bold",t.tempOrderInfo.is_paid?"border-info":"border-danger"])},[t.tempOrderInfo.is_paid?(i(),l("span",V,"已付款")):(i(),l("span",W,"未付款"))],2),s("span",{class:m(["d-inline-block mb-3 rounded-pill py-1 px-3 border fw-bold",t.tempOrderInfo.is_shipping?"border-info":"border-danger"])},[t.tempOrderInfo.is_shipping?(i(),l("span",q,"已出貨")):(i(),l("span",H,"未出貨"))],2)]),s("div",M,[t.tempOrderInfo.products?(i(),l("div",Q,[s("div",R,[s("div",j,[s("div",z,[s("div",U,[s("div",F,[s("div",J,[K,s("p",Y,"NT$ "+o(t.tempOrderInfo.total),1),t.tempOrderInfo.is_paid?r("",!0):(i(),l("button",{key:0,class:"btn btn-default",onClick:n[0]||(n[0]=d=>a.updateOrder(t.tempOrderInfo,"updatePaid"))},[h("更改為"),G]))])]),s("div",X,[s("div",Z,[$,s("p",ss,o(Object.keys(t.tempOrderInfo.products).length),1),t.tempOrderInfo.is_shipping?r("",!0):(i(),l("button",{key:0,class:"btn btn-default",onClick:n[1]||(n[1]=d=>a.updateOrder(t.tempOrderInfo,"updateShipping"))},"出貨"))])])]),ts,s("div",os,[s("ul",es,[(i(!0),l(b,null,w(t.tempOrderInfo.products,d=>(i(),l("li",{key:d.id,class:"mb-3 pb-3 border-bottom"},[s("div",ns,[s("div",is,[g(_,{to:`/productinfo/${d.product.id}`,target:"_blank",class:"d-flex gap-3 link-hover-decoration fw-bold"},{default:y(()=>[s("div",{style:S([{height:"50px"},{backgroundImage:`url(${d.product.imageUrl})`}]),class:"bg-img-contain bg-img-center bg-img-norepeat ratio-1x1"},null,4),h(" "+o(d.product.title),1)]),_:2},1032,["to"])]),s("div",ls,[s("div",ds,[s("div",rs,[s("p",cs,"NT$ "+o(d.product.price.toLocaleString())+" x "+o(d.qty),1)]),s("div",as,[s("p",_s,"NT$ "+o(d.total.toLocaleString()),1)])])])])]))),128))]),s("div",ps,[hs,s("div",us,[s("div",fs,[ms,s("div",bs,[s("p",gs,"NT$ "+o(t.tempOrderInfo.total.toLocaleString()),1),xs])]),vs,s("div",Os,[Is,s("div",ws,[s("p",ys,"NT$ "+o(t.tempOrderInfo.total.toLocaleString()),1)])])])])]),Ss,s("div",ks,[Bs,s("p",null,o(t.tempOrderInfo.message),1)])])]),s("div",Cs,[s("div",Ts,[As,s("ul",Ls,[t.tempOrderInfo.shipping_date?(i(),l("li",Ps,[s("p",Ds,o(new Date(t.tempOrderInfo.shipping_date*1e3).toLocaleString()),1),Es])):r("",!0),t.tempOrderInfo.paid_date?(i(),l("li",Ns,[s("p",Vs,o(new Date(t.tempOrderInfo.paid_date*1e3).toLocaleString()),1),Ws])):r("",!0),s("li",null,[s("p",qs,o(new Date(t.tempOrderInfo.create_at*1e3).toLocaleString()),1),Hs])])])])])])):r("",!0),s("div",Ms,[t.tempOrderInfo.user?(i(),l("div",Qs,[s("div",Rs,[s("div",js,[zs,Us,s("div",Fs,[s("p",Js,o(t.tempOrderInfo.user.name),1),s("ul",Ks,[s("li",null,o(t.tempOrderInfo.user.email),1),s("li",null,o(t.tempOrderInfo.user.tel),1),s("li",null,o(t.tempOrderInfo.user.address),1)])])])]),s("div",Ys,[s("div",Gs,[Xs,Zs,s("div",$s,[s("p",st,o(t.tempOrderInfo.user.name),1),s("ul",tt,[s("li",null,o(t.tempOrderInfo.user.address),1),s("li",null,o(t.tempOrderInfo.user.tel),1)])])])])])):r("",!0)])])]),g(p,{adminOrderState:t.toastState,adminOrderAction:t.doAction},null,8,["adminOrderState","adminOrderAction"])],64)}const rt=v(P,[["render",ot]]);export{rt as default};
