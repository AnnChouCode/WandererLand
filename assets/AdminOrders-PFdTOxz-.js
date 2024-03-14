import{p as g}from"./paginationComponent-30f3v1fW.js";import{u as m}from"./adminOrderStore-G8WBeBEc.js";import{_ as x,M as B,r as w,o as n,c as s,b as t,F as y,k,d as C,e as h,t as r}from"./index-SuvShJ5P.js";import"./sweetalert2.all-6q_o9MV5.js";var O={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=m(),{VITE_API:p,VITE_PATH:_}=O,L={data(){return{currentOrderList:[],pagination:{},swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{async getCurrentOrderList(o=1){await d.getCurrentOrderList(o),this.currentOrderList=d.currentOrderList,this.pagination=d.pagination},showOrder(o){this.$router.push(`/admin/orderinfo/${o}`)},deleteOrder(o){let l=`${p}/api/${_}/admin/orders/all`,c='確定要刪除<span class="text-danger">全部</span>訂單嗎？';o!=="all"&&(l=`${p}/api/${_}/admin/order/${o}`,c=`確定要刪除訂單 <p><span class="text-danger">${o}</span> 嗎？</p>`),this.swalQuestionWithBootstrapButtons.fire({title:c,text:"請再次確認，以免影響顧客權益",icon:"question",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(u=>{if(u.isConfirmed){const i=this.$loading.show();this.axios.delete(l).then(a=>{this.swalInfoCheckWithBootstrapButtons.fire({title:a.data.message,confirmButtonText:"確認"}),this.getCurrentOrderList()}).catch(a=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:a.response.data.message,confirmButtonText:"確認"})}).finally(()=>{i.hide()})}})}},computed:{...B(m)},components:{paginationComponent:g},mounted(){this.getCurrentOrderList(),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}},v={class:"overflow-y-scroll scrollbar-y-hide vh-100"},T={class:"d-flex justify-content-between py-4 py-md-7"},$=t("h2",{class:"fw-bold"},"訂單管理",-1),S={key:0,class:"py-5 text-center"},I={key:1,class:"table align-middle table-sm fs-info fs-md-6"},E=t("thead",null,[t("tr",null,[t("th",null,"訂單編號"),t("th",{class:"d-none d-md-table-cell text-center"},"訂單時間"),t("th",{class:"d-none d-lg-table-cell text-center"},"客戶姓名"),t("th",{class:"text-nowrap"},[h("付款"),t("span",{class:"d-block d-sm-inline"},"狀態")]),t("th",{class:"text-nowrap"},[h("處理"),t("span",{class:"d-block d-sm-inline"},"狀態")]),t("th",{class:"d-none d-lg-table-cell text-center"},"總金額"),t("th")])],-1),V={class:"d-none d-md-table-cell text-center"},W={class:"d-none d-lg-table-cell text-center"},A={key:0,class:"text-danger text-nowrap"},D={key:1,class:"text-nowrap"},P={key:0,class:"text-nowrap"},N={key:1,class:"text-danger text-nowrap"},Q={class:"d-none d-lg-table-cell text-end"},R={class:"btn-group align-items-center"},F=["onClick"],G=t("i",{class:"bi bi-eye text-default"},null,-1),H=[G],M=["onClick"],j=t("i",{class:"bi bi-trash text-danger"},null,-1),q=[j];function U(o,l,c,u,i,a){const f=w("paginationComponent");return n(),s("div",v,[t("div",T,[$,t("button",{type:"button",class:"btn btn-dark",onClick:l[0]||(l[0]=e=>a.deleteOrder("all"))},"清除全部訂單")]),t("div",null,[i.currentOrderList.length?(n(),s("table",I,[E,t("tbody",null,[(n(!0),s(y,null,k(i.currentOrderList,e=>(n(),s("tr",{key:e.id},[t("td",null,r(e.id),1),t("td",V,r(new Date(e.create_at*1e3).toLocaleDateString()),1),t("td",W,r(e.user.name),1),t("td",null,[e.is_paid?(n(),s("span",A,"已付款")):(n(),s("span",D,"未付款"))]),t("td",null,[e.is_shipping?(n(),s("span",P,"已出貨")):(n(),s("span",N,"未出貨"))]),t("td",Q,"NT$ "+r(e.total.toLocaleString()),1),t("td",null,[t("div",R,[t("button",{type:"button",class:"btn border-0",onClick:b=>a.showOrder(e.id)},H,8,F),t("button",{type:"button",class:"btn border-0",onClick:b=>a.deleteOrder(e.id)},q,8,M)])])]))),128))])])):(n(),s("p",S,"目前沒有訂單")),C(f,{pagination:i.pagination,onGetList:a.getCurrentOrderList},null,8,["pagination","onGetList"])])])}const Y=x(L,[["render",U]]);export{Y as default};
