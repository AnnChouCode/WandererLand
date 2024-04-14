import{c as p}from"./userCartStore-ldkYgq0X.js";import{m as b,a as _}from"./pinia-D1tb24LR.js";import{_ as g}from"./index-D8gk4WHs.js";import{a_ as u,aR as v,a3 as V,bx as x,a6 as o,ae as t,aG as m}from"./@vue-Cqo5QHyB.js";import"./statusStore-bNOcWQBU.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-Bxbxx77j.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-CKLWTmin.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";var w={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:E,VITE_PATH:y}=w,B={data(){return{form:{user:{email:"",tel:"",address:""},message:""}}},methods:{...b(p,["getCartsList"]),checkOrder(){const i=this.$loading.show(),e=`${E}/api/${y}/order`,d={data:this.form};this.axios.post(e,d).then(l=>{this.swalInfoCheckWithBootstrapButtons.fire({title:`<p> ${l.data.message}</p><p>訂單編號 </p><p>${l.data.orderId}</p>`,confirmButtonText:"確認"}),this.$refs.form.resetForm(),this.getCartsList(),this.$router.push(`/order/payorder/${l.data.orderId}`)}).catch(l=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:l.response.data.message,confirmButtonText:"確認"})}).finally(()=>{i.hide()})}},mounted(){this.getCartsList(),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},computed:{..._(p,["cartsList"]),isFormEmpty(){const{email:i,tel:e,address:d}=this.form.user;return!i||!e||!d}}},k={class:"mb-4 mb-md-7 form-floating w-100"},C=o("label",{for:"Email",class:"form-label has-required"},"Email",-1),I={class:"mb-4 mb-md-7 form-floating w-100"},q=o("label",{for:"name",class:"form-label has-required"},"收件人姓名",-1),S={class:"mb-4 mb-md-7 form-floating w-100"},T=o("label",{for:"tel",class:"form-label has-required"},"收件人電話",-1),U={class:"mb-4 mb-md-7 form-floating w-100"},A=o("label",{for:"address",class:"form-label has-required"},"收件人地址",-1),L={class:"mb-4 mb-md-7 form-floating w-100"},M=o("label",{for:"message",class:"form-label"},"留言",-1);function O(i,e,d,l,s,c){const a=u("v-field"),n=u("error-message"),h=u("v-form");return v(),V(h,{ref:"form",class:"d-flex flex-column align-items-end",onSubmit:c.checkOrder},{default:x(({errors:f})=>[o("div",k,[t(a,{id:"email",name:"Email",type:"email",class:m(["form-control border-info rounded-0",{"is-invalid":f.Email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=r=>s.form.user.email=r),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(n,{name:"Email",class:"invalid-feedback"}),C]),o("div",I,[t(a,{id:"name",name:"姓名",type:"text",class:m(["form-control border-info rounded-0",{"is-invalid":f.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=r=>s.form.user.name=r),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(n,{name:"姓名",class:"invalid-feedback"}),q]),o("div",S,[t(a,{id:"tel",name:"電話",type:"tel",class:m(["form-control border-info rounded-0",{"is-invalid":f.電話}]),placeholder:"請輸入國內電話",rules:{required:!0,regex:/^(09)[0-9]{8}$/},modelValue:s.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=r=>s.form.user.tel=r),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(n,{name:"電話",class:"invalid-feedback"}),T]),o("div",U,[t(a,{id:"address",name:"地址",type:"text",class:m(["form-control border-info rounded-0",{"is-invalid":f.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=r=>s.form.user.address=r),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(n,{name:"地址",class:"invalid-feedback"}),A]),o("div",L,[t(a,{id:"message",name:"message",class:"form-control border-info rounded-0",cols:"30",rows:"10",modelValue:s.form.message,"onUpdate:modelValue":e[4]||(e[4]=r=>s.form.message=r),modelModifiers:{trim:!0},as:"textarea",placeholder:"請輸入您的留言",style:{height:"273px"}},null,8,["modelValue"]),M]),o("button",{class:m(["py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto",{"cursor-notallowed":c.isFormEmpty}]),type:"submit"}," 訂單確認 ",2)]),_:1},8,["onSubmit"])}const se=g(B,[["render",O]]);export{se as default};
