import{P as k}from"./PaginationComponent-IF-2Pt0e.js";import{M as x}from"./modal-_w6yIv9i.js";import{_ as v,r as _,o as a,c as d,b as t,t as f,e as u,f as B,n as b,w as y,U as I,F as g,d as M}from"./index-xxmhpSli.js";import"./selector-engine-CulMp733.js";const V={data(){return{modal:null,tempCouponInfo:{},due_date:""}},props:["couponInfo","isNew"],watch:{couponInfo(){this.tempCouponInfo=this.couponInfo;const s=new Date(this.couponInfo.due_date*1e3).toISOString().split("T");this.due_date=s[0]},due_date(){const s=new Date(this.due_date);this.tempCouponInfo.due_date=Math.floor(s/1e3)}},methods:{openModal(){this.modal.show()},closeModal(){this.$refs.modalForm.resetForm(),this.modal.hide()}},mounted(){this.modal=new x(this.$refs.adminCouponModal,{keyboard:!1,backdrop:"static"})}},$={class:"modal",tabindex:"-1",ref:"adminCouponModal"},T={class:"modal-dialog modal-lg modal-dialog-centered"},L={class:"modal-content"},N={class:"modal-header"},W={key:0,class:"modal-title fw-bold"},q={key:1,class:"modal-title fw-bold"},A={class:"modal-body"},P=t("label",{for:"title",class:"form-label fw-bold has-required"},"優惠券標題",-1),S=t("label",{for:"code",class:"form-label fw-bold has-required"},"優惠碼",-1),U=t("span",{class:"ms-2 text-info fs-info"},"建立後無法更改",-1),D=t("label",{for:"discound",class:"form-label fw-bold has-required"},"訂單折扣百分比",-1),E=t("span",{class:"ms-2 text-info fs-info"},"建立後無法更改",-1),F=t("label",{for:"due_date",class:"form-label fw-bold has-required"},"優惠到期日",-1),O={class:"form-check form-switch"},Q={class:"form-check-label",for:"is_enabled"},R={key:0},j={key:1},G={class:"d-flex justify-content-end gap-2 pt-3"};function H(s,e,n,r,o,l){const m=_("v-field"),h=_("error-message"),c=_("v-form");return a(),d("div",$,[t("div",T,[t("div",L,[t("div",N,[n.isNew?(a(),d("h5",W,"建立優惠券")):(a(),d("h5",q,"優惠券："+f(o.tempCouponInfo.code),1)),t("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...p)=>l.closeModal&&l.closeModal(...p))})]),t("div",A,[u(c,{class:"d-flex flex-column gap-5",ref:"modalForm"},{default:B(({errors:p})=>[t("div",null,[P,u(m,{class:b(["form-control",{"is-invalid":p.title}]),type:"text",placeholder:"請輸入標題",modelValue:o.tempCouponInfo.title,"onUpdate:modelValue":e[1]||(e[1]=i=>o.tempCouponInfo.title=i),id:"title",name:"title",rules:"required"},null,8,["modelValue","class"]),u(h,{name:"title",class:"invalid-feedback"})]),t("div",null,[S,U,u(m,{class:b(["form-control",{"is-invalid":p.code}]),placeholder:"請輸入 6-24 個字元內的英數組合優惠碼",modelValue:o.tempCouponInfo.code,"onUpdate:modelValue":e[2]||(e[2]=i=>o.tempCouponInfo.code=i),id:"code",name:"code",rules:"required|alpha_num|max:24|min:6",disabled:!n.isNew},null,8,["modelValue","class","disabled"]),u(h,{name:"code",class:"invalid-feedback"})]),t("div",null,[D,E,u(m,{class:b(["form-control",{"is-invalid":p.code}]),type:"number",placeholder:"請輸入 1-99",modelValue:o.tempCouponInfo.percent,"onUpdate:modelValue":e[3]||(e[3]=i=>o.tempCouponInfo.percent=i),modelModifiers:{number:!0},id:"discount",name:"discount",rules:"required|between:1,99",disabled:!n.isNew},null,8,["modelValue","class","disabled"]),u(h,{name:"discount",class:"invalid-feedback"})]),t("div",null,[F,u(m,{class:b(["form-control",{"is-invalid":p.due_date}]),type:"date",placeholder:"請設定日期",modelValue:o.due_date,"onUpdate:modelValue":e[4]||(e[4]=i=>o.due_date=i),id:"due_date",name:"due_date",rules:"required"},null,8,["modelValue","class"]),u(h,{name:"due_date",class:"invalid-feedback"})]),t("div",O,[y(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_enabled","onUpdate:modelValue":e[5]||(e[5]=i=>o.tempCouponInfo.is_enabled=i),checked:"","true-value":1,"false-value":0},null,512),[[I,o.tempCouponInfo.is_enabled]]),t("label",Q,[o.tempCouponInfo.is_enabled?(a(),d("span",R,"更改為未啟用")):(a(),d("span",j,"更改為已啟用"))])]),t("div",G,[t("button",{type:"button",class:"btn btn-outline-dark",onClick:e[6]||(e[6]=(...i)=>l.closeModal&&l.closeModal(...i))},"取消"),t("button",{type:"button",class:"btn btn-dark text-white",onClick:e[7]||(e[7]=i=>this.$emit("updateCoupon",o.tempCouponInfo))},f(n.isNew?"新增優惠券":"更新優惠券"),1)])]),_:1},512)])])])],512)}const z=v(V,[["render",H]]);var J={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:C,VITE_PATH:w}=J,K={data(){return{couponList:[],pagination:{},tempCoupon:{},isNew:!1,swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{getCouponList(s=1){const e=`${C}/api/${w}/admin/coupons?page=${s}`;this.axios.get(e).then(n=>{const{coupons:r,pagination:o}=n.data;this.couponList=r,this.pagination=o}).catch(n=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:n.response.data.message,confirmButtonText:"確認"})})},updateCoupon(s){const e=this.$loading.show();let n=`${C}/api/${w}/admin/coupon`,r="post";this.isNew||(n+=`/${s.id}`,r="put"),this.axios[r](n,{data:s}).then(o=>{this.swalInfoCheckWithBootstrapButtons.fire({title:o.data.message,confirmButtonText:"確認"}),this.$refs.adminCouponModal.closeModal(),this.getCouponList()}).catch(o=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:o.response.data.message,confirmButtonText:"確認"})}).finally(()=>{e.hide()})},showCoupon(s,e){s==="create"&&(this.isNew=!0),s==="edit"&&(this.isNew=!1,this.tempCoupon={...e}),this.$refs.adminCouponModal.openModal()},deleteCoupon(s){const e=`${C}/api/${w}/admin/coupon/${s}`,n=`確定要刪除優惠券 <span class="text-danger">${s}</span> 嗎？`;this.swalQuestionWithBootstrapButtons.fire({title:n,text:"請再次確認，以免影響顧客權益",icon:"question",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(r=>{if(r.isConfirmed){const o=this.$loading.show();this.axios.delete(e).then(l=>{this.swalInfoCheckWithBootstrapButtons.fire({title:l.data.message,confirmButtonText:"確認"}),this.getCouponList()}).catch(l=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:l.response.data.message,confirmButtonText:"確認"})}).finally(()=>{o.hide()})}})}},components:{PaginationComponent:k,AdminCouponModal:z},mounted(){this.getCouponList(),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}},X={class:"overflow-y-scroll scrollbar-y-hide vh-100"},Y={class:"d-flex justify-content-between py-4 py-md-7"},Z=t("h2",{class:"fw-bold"},"優惠券管理",-1),tt={key:0,class:"py-5 text-center"},et={key:1,class:"table align-middle fs-info fs-md-6"},ot=t("thead",null,[t("tr",null,[t("th",{class:"d-none d-md-table-cell"},"優惠碼"),t("th",null,"型式"),t("th",null,"到期日"),t("th",null,"狀態"),t("th")])],-1),st={class:"d-none d-md-table-cell"},nt={class:"fw-bold"},lt={class:"text-default"},it={key:0,class:"text-danger"},at={key:1},dt={class:"btn-group align-items-center"},ct=["onClick"],ut=t("i",{class:"bi bi-pencil text-default"},null,-1),rt=[ut],pt=["onClick"],mt=t("i",{class:"bi bi-trash text-danger"},null,-1),ht=[mt];function ft(s,e,n,r,o,l){const m=_("PaginationComponent"),h=_("AdminCouponModal");return a(),d(g,null,[t("div",X,[t("div",Y,[Z,t("button",{type:"button",class:"btn btn-dark",onClick:e[0]||(e[0]=c=>l.showCoupon("create"))},"建立優惠券")]),t("div",null,[o.couponList.length?(a(),d("table",et,[ot,t("tbody",null,[(a(!0),d(g,null,M(o.couponList,c=>(a(),d("tr",{key:c.id},[t("td",st,f(c.code),1),t("td",null,[t("p",nt,f(c.title),1),t("span",lt,"折扣："+f(c.percent)+" %",1)]),t("td",null,f(new Date(c.due_date*1e3).toLocaleDateString()),1),t("td",null,[c.is_enabled?(a(),d("span",it,"啟用中")):(a(),d("span",at,"未啟用"))]),t("td",null,[t("div",dt,[t("button",{type:"button",class:"btn border-0",onClick:p=>l.showCoupon("edit",c)},rt,8,ct),t("button",{type:"button",class:"btn border-0",onClick:p=>l.deleteCoupon(c.id)},ht,8,pt)])])]))),128))])])):(a(),d("p",tt,"目前沒有優惠券")),u(m,{pagination:o.pagination,onGetList:l.getCouponList},null,8,["pagination","onGetList"])])]),u(h,{isNew:o.isNew,couponInfo:o.tempCoupon,ref:"adminCouponModal",onUpdateCoupon:l.updateCoupon},null,8,["isNew","couponInfo","onUpdateCoupon"])],64)}const gt=v(K,[["render",ft]]);export{gt as default};
