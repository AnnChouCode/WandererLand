import{c as u}from"./userCartStore-pl0hJA_V.js";import{_ as b,m as _,a as g,r as i,o as v,i as V,f as x,b as o,e as r,n}from"./index-bOPoBINP.js";import"./statusStore-_-BqXVCt.js";import"./sweetalert2.all-4uUzy6sD.js";var w={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:B,VITE_PATH:E}=w,k={data(){return{form:{user:{email:"",tel:"",address:""},message:""}}},methods:{..._(u,["getCartsList"]),checkOrder(){const f=this.$loading.show(),e=`${B}/api/${E}/order`,c={data:this.form};this.axios.post(e,c).then(a=>{this.swalInfoCheckWithBootstrapButtons.fire({title:`<p> ${a.data.message}</p><p>訂單編號 </p><p>${a.data.orderId}</p>`,confirmButtonText:"確認"}),this.$refs.form.resetForm(),this.getCartsList(),this.$router.push(`/order/payorder/${a.data.orderId}`)}).catch(a=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:a.response.data.message,confirmButtonText:"確認"})}).finally(()=>{f.hide()})}},mounted(){this.getCartsList(),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},computed:{...g(u,["cartsList"])}},y={class:"mb-4 mb-md-7 form-floating w-100"},C=o("label",{for:"Email",class:"form-label has-required"},"Email",-1),I={class:"mb-4 mb-md-7 form-floating w-100"},q=o("label",{for:"name",class:"form-label has-required"},"收件人姓名",-1),S={class:"mb-4 mb-md-7 form-floating w-100"},T=o("label",{for:"tel",class:"form-label has-required"},"收件人電話",-1),U={class:"mb-4 mb-md-7 form-floating w-100"},A=o("label",{for:"address",class:"form-label has-required"},"收件人地址",-1),L={class:"mb-4 mb-md-7 form-floating w-100"},O=o("label",{for:"message",class:"form-label"},"留言",-1),P=o("button",{class:"py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto",type:"submit"}," 訂單確認 ",-1);function W(f,e,c,a,s,p){const t=i("v-field"),d=i("error-message"),h=i("v-form");return v(),V(h,{ref:"form",class:"d-flex flex-column align-items-end",onSubmit:p.checkOrder},{default:x(({errors:m})=>[o("div",y,[r(t,{id:"email",name:"Email",type:"email",class:n(["form-control border-info rounded-0",{"is-invalid":m.Email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=l=>s.form.user.email=l)},null,8,["class","modelValue"]),r(d,{name:"Email",class:"invalid-feedback"}),C]),o("div",I,[r(t,{id:"name",name:"姓名",type:"text",class:n(["form-control border-info rounded-0",{"is-invalid":m.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=l=>s.form.user.name=l)},null,8,["class","modelValue"]),r(d,{name:"姓名",class:"invalid-feedback"}),q]),o("div",S,[r(t,{id:"tel",name:"電話",type:"tel",class:n(["form-control border-info rounded-0",{"is-invalid":m.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:s.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=l=>s.form.user.tel=l)},null,8,["class","modelValue"]),r(d,{name:"電話",class:"invalid-feedback"}),T]),o("div",U,[r(t,{id:"address",name:"地址",type:"text",class:n(["form-control border-info rounded-0",{"is-invalid":m.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=l=>s.form.user.address=l)},null,8,["class","modelValue"]),r(d,{name:"地址",class:"invalid-feedback"}),A]),o("div",L,[r(t,{id:"message",name:"message",class:"form-control border-info rounded-0",cols:"30",rows:"10",modelValue:s.form.message,"onUpdate:modelValue":e[4]||(e[4]=l=>s.form.message=l),as:"textarea",placeholder:"請輸入您的留言",style:{height:"273px"}},null,8,["modelValue"]),O]),P]),_:1},8,["onSubmit"])}const N=b(k,[["render",W]]);export{N as default};
