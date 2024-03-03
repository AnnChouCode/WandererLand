import{c as v}from"./cartStore-AdnRZFv4.js";import{_ as k,m as w,g as B,r as p,o as i,c as d,a as e,H as g,I as T,G as u,K as b,b as n,w as y,d as V,O as q,T as E,J as _}from"./index-RWP2R7I8.js";import"./sweetalert2.all-W_WOX3G1.js";var S={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:x,VITE_PATH:C}=S,U={data(){return{form:{user:{email:"",tel:"",address:""},message:""}}},methods:{...w(v,["getCartsList","updateCart","deleteCartItem"]),submitOrder(){if(!this.cartsList.carts.length){this.$swal.fire({title:"購物車內沒有商品",confirmButtonColor:"#333333",confirmButtonText:"確認"});return}const l=this.$loading.show(),s=`${x}/api/${C}/order`,f={data:this.form};this.axios.post(s,f).then(r=>{this.$swal.fire({title:r.data.message,confirmButtonColor:"#333333",confirmButtonText:"確認"}),this.$refs.form.resetForm(),this.getCartsList()}).catch(r=>{this.$swal.fire({icon:"error",text:r.response.data.message})}).finally(()=>{l.hide()})},clearCartsList(){this.$swal.fire({title:"確定要清空購物車嗎？",text:"這個動作無法復原",icon:"question",showCancelButton:!0,confirmButtonColor:"#000000",cancelButtonColor:"gray",confirmButtonText:"OK"}).then(l=>{if(l.isConfirmed){const s=this.$loading.show(),f=`${x}/api/${C}/carts`;this.axios.delete(f).then(r=>{this.$swal.fire({title:r.data.message,confirmButtonColor:"#333333",confirmButtonText:"確認"}),this.getCartsList()}).catch(r=>this.$swal.fire({icon:"error",text:r.response.data.message})).finally(()=>{s.hide()})}})}},mounted(){this.getCartsList()},computed:{...B(v,["cartsList"])}},I={class:"container py-5"},A=e("h2",{class:"mb-5 text-center"},"購物車",-1),O={class:"text-end"},D=["disabled"],P={key:0,class:"text-center"},M={key:1,class:"table align-middle"},N=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價")])],-1),$=["onClick"],H={key:0,class:"text-success"},R={class:"input-group input-group-sm"},F={class:"input-group mb-3"},K=["onUpdate:modelValue","onBlur"],j={class:"input-group-text",id:"basic-addon2"},z={class:"text-end"},G={key:0,class:"text-success"},J=e("td",{colspan:"3",class:"text-end"},"總計",-1),W={class:"text-end"},Q={key:0},X=e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),Y={class:"text-end text-success"},Z={class:"py-4 bg-light"},ee={class:"container"},te={class:"my-5 row justify-content-center"},se=e("h2",{class:"text-center"},"訂購資料",-1),oe={class:"mb-3"},le=e("label",{for:"email",class:"form-label has-required"},"Email",-1),ae={class:"mb-3"},ne=e("label",{for:"name",class:"form-label has-required"},"收件人姓名",-1),re={class:"mb-3"},ie=e("label",{for:"tel",class:"form-label has-required"},"收件人電話",-1),de={class:"mb-3"},ce=e("label",{for:"address",class:"form-label has-required"},"收件人地址",-1),me={class:"mb-3"},ue=e("label",{for:"payment",class:"form-label has-required"},"請選擇付款方式",-1),_e=e("option",{value:""},"請選擇付款方式",-1),fe=e("option",{value:"credit_card"},"信用卡付款",-1),he=e("option",{value:"ATM"},"ATM 付款",-1),pe={class:"mb-3"},be=e("label",{for:"message",class:"form-label"},"留言",-1),ve=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function ge(l,s,f,r,a,h){const c=p("v-field"),m=p("error-message"),L=p("v-form");return i(),d(g,null,[e("div",I,[A,e("div",O,[e("button",{class:"btn btn-outline-danger",type:"button",onClick:s[0]||(s[0]=(...t)=>h.clearCartsList&&h.clearCartsList(...t)),disabled:!l.cartsList.final_total},"清空購物車",8,D)]),l.cartsList.final_total?(i(),d("table",M,[N,e("tbody",null,[(i(!0),d(g,null,T(l.cartsList.carts,t=>(i(),d("tr",{key:t.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>l.deleteCartItem(t.id)}," x ",8,$)]),e("td",null,[V(u(t.product.title)+" ",1),t.coupon?(i(),d("div",H," 已套用優惠券 ")):b("",!0)]),e("td",null,[e("div",R,[e("div",F,[q(e("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":o=>t.qty=o,onBlur:o=>l.updateCart(t)},null,40,K),[[E,t.qty,void 0,{number:!0}]]),e("span",j,u(t.product.unit),1)])])]),e("td",z,[t.total!==t.final_total?(i(),d("small",G,"折扣價：")):b("",!0),V(" "+u(t.final_total),1)])]))),128))]),e("tfoot",null,[e("tr",null,[J,e("td",W,u(l.cartsList.total.toLocaleString()),1)]),l.cartsList.total!==l.cartsList.final_total?(i(),d("tr",Q,[X,e("td",Y,u(l.cartsList.final_total.toLocaleString()),1)])):b("",!0)])])):(i(),d("p",P,"目前購物車內沒有內容"))]),e("div",Z,[e("div",ee,[e("div",te,[se,n(L,{ref:"form",class:"col-md-6",onSubmit:h.submitOrder},{default:y(({errors:t})=>[e("div",oe,[le,n(c,{id:"email",name:"email",type:"email",class:_(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.form.user.email,"onUpdate:modelValue":s[1]||(s[1]=o=>a.form.user.email=o)},null,8,["class","modelValue"]),n(m,{name:"email",class:"invalid-feedback"})]),e("div",ae,[ne,n(c,{id:"name",name:"name",type:"text",class:_(["form-control",{"is-invalid":t.name}]),placeholder:"請輸入姓名",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":s[2]||(s[2]=o=>a.form.user.name=o)},null,8,["class","modelValue"]),n(m,{name:"name",class:"invalid-feedback"})]),e("div",re,[ie,n(c,{id:"tel",name:"tel",type:"tel",class:_(["form-control",{"is-invalid":t.tel}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:a.form.user.tel,"onUpdate:modelValue":s[3]||(s[3]=o=>a.form.user.tel=o)},null,8,["class","modelValue"]),n(m,{name:"tel",class:"invalid-feedback"})]),e("div",de,[ce,n(c,{id:"address",name:"address",type:"text",class:_(["form-control",{"is-invalid":t.address}]),placeholder:"請輸入地址",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":s[4]||(s[4]=o=>a.form.user.address=o)},null,8,["class","modelValue"]),n(m,{name:"address",class:"invalid-feedback"})]),e("div",me,[ue,n(c,{id:"payment",name:"payment",class:_(["form-control",{"is-invalid":t.payment}]),placeholder:"請選擇付款方式",rules:"required",modelValue:a.form.user.payment,"onUpdate:modelValue":s[5]||(s[5]=o=>a.form.user.payment=o),as:"select"},{default:y(()=>[_e,fe,he]),_:2},1032,["class","modelValue"]),n(m,{name:"payment",class:"invalid-feedback"})]),e("div",pe,[be,n(c,{id:"message",name:"message",class:"form-control",cols:"30",rows:"10",modelValue:a.form.message,"onUpdate:modelValue":s[6]||(s[6]=o=>a.form.message=o),as:"textarea"},null,8,["modelValue"])]),ve]),_:1},8,["onSubmit"])])])])],64)}const Ce=k(U,[["render",ge]]);export{Ce as default};
