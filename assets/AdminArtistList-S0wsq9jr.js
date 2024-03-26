import{P as B}from"./PaginationComponent-M67KsjYY.js";import{_ as w,r as h,o as a,c as l,b as t,e as d,f as _,F as k,d as y,g as C,T as A,t as p,n as m}from"./index-bOPoBINP.js";var v={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:f,VITE_PATH:g}=v,$={data(){return{artistsList:[],pagination:{},swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{getArtistList(s=1,r="artists"){const c=`${f}/api/${g}/admin/products?page=${s}&category=${r}`;this.axios.get(c).then(o=>{const{products:n,pagination:i}=o.data;this.artistsList=n,this.pagination=i}).catch(o=>{this.swalInfoCheckWithBootstrapButtons.fire({text:o.response.data.message,confirmButtonText:"確認"})})},showArtistPage(s){this.$router.push(`/admin/Artistinfo/${s}`)},deleteArtist(s){const r=`${f}/api/${g}/admin/product/${s}`;this.swalQuestionWithBootstrapButtons.fire({title:"確定要刪除藝術家嗎？",text:"這個動作無法復原",icon:"question",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(c=>{if(c.isConfirmed){const o=this.$loading.show();this.axios.delete(r).then(n=>{this.swalInfoCheckWithBootstrapButtons.fire({title:n.data.message,confirmButtonText:"確認"}),this.getArtistList()}).catch(n=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:n.response.data.message,confirmButtonText:"確認"})}).finally(()=>{o.hide()})}})}},mounted(){this.getArtistList(),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})},components:{PaginationComponent:B}},L={class:"overflow-y-scroll scrollbar-y-hide vh-100"},T={class:"d-flex justify-content-between py-4 py-md-7"},I=t("h2",{class:"fw-bold"},"藝術家管理",-1),P={class:"table align-middle fs-info fs-md-6"},W=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"名稱"),t("th",{class:"d-none d-md-table-cell text-center"},"分類"),t("th",null,"狀態"),t("th")])],-1),E={class:"d-none d-md-table-cell"},V={class:"py-1 rounded-pill bg-light text-center text-nowrap"},S={key:0,class:"text-danger text-nowrap"},D={key:1,class:"text-nowrap"},N={class:"btn-group align-items-center"},Q=["onClick"],R=t("i",{class:"bi bi-pencil text-default"},null,-1),z=[R],F=["onClick"],G=t("i",{class:"bi bi-trash text-danger"},null,-1),H=[G];function O(s,r,c,o,n,i){const u=h("router-link"),b=h("PaginationComponent");return a(),l("div",L,[t("div",T,[I,d(u,{to:"/admin/artistinfo/new",class:"btn btn-dark d-flex align-items-center"},{default:_(()=>[C("建立新的藝術家")]),_:1})]),t("div",null,[t("table",P,[W,t("tbody",null,[(a(!0),l(k,null,y(n.artistsList,e=>(a(),l("tr",{key:e.id},[t("td",null,[t("div",{class:"bg-img-center bg-img-contain bg-img-norepeat ratio-1x1",style:A([{"min-width":"50px","max-width":"100px"},{backgroundImage:`url(${e.imageUrl})`}])},null,4)]),t("td",null,p(e.title),1),t("td",E,[t("div",V,p(e.group),1)]),t("td",null,[e.is_enabled?(a(),l("p",S,"已上架")):(a(),l("p",D,"未上架"))]),t("td",null,[t("div",N,[t("button",{type:"button",class:"btn border-0",onClick:x=>i.showArtistPage(e.id)},z,8,Q),t("button",{type:"button",class:"btn border-0",onClick:x=>i.deleteArtist(e.id)},H,8,F),d(u,{class:m(["d-none d-sm-table-cell btn border-0",{"pe-none":!e.is_enabled}]),target:"_blank",to:`/artistinfo/${e.id}`},{default:_(()=>[t("i",{class:m(["bi bi-house",e.is_enabled?"text-default":"text-light"])},null,2)]),_:2},1032,["to","class"])])])]))),128))])]),d(b,{pagination:n.pagination,onGetList:i.getArtistList},null,8,["pagination","onGetList"])])])}const q=w($,[["render",O]]);export{q as default};
