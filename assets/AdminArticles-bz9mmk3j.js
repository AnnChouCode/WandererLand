import{P as A}from"./PaginationComponent-IF-2Pt0e.js";import{_ as k,r as _,o as r,c,b as t,e as p,f as g,F as w,d as C,g as B,t as u,n as b}from"./index-xxmhpSli.js";var T={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:h,VITE_PATH:d}=T,$={data(){return{currentArticles:[],allArticles:[],pagination:{},isNew:!1,swalQuestionWithBootstrapButtons:null,swalInfoCheckWithBootstrapButtons:null}},methods:{getCurrentArticles(e=1){const o=`${h}/api/${d}/admin/articles?page=${e}`;this.axios.get(o).then(s=>{const{articles:i,pagination:n}=s.data;this.currentArticles=i,this.pagination=n,this.getAllArticles(this.pagination.total_pages)}).catch(s=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:s.response.data.message,confirmButtonText:"確認"})})},getAllArticles(e){this.allArticles=[];for(let o=1;o<=e;o++){const s=`${h}/api/${d}/admin/articles?page=${o}`;this.axios.get(s).then(i=>{const{articles:n}=i.data;this.allArticles=this.allArticles.concat(n)}).catch(i=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:i.response.data.message,confirmButtonText:"確認"})})}},showArticlePage(e){this.$router.push(`/admin/articleinfo/${e}`)},deleteArticle(e){const o=`${h}/api/${d}/admin/article/${e}`;this.swalQuestionWithBootstrapButtons.fire({title:"確定要刪除文章嗎？",text:"這個動作無法復原",icon:"question",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(s=>{if(s.isConfirmed){const i=this.$loading.show();this.axios.delete(o).then(n=>{this.swalInfoCheckWithBootstrapButtons.fire({title:n.data.message,confirmButtonText:"確認"}),this.getCurrentArticles()}).catch(n=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:n.response.data.message,confirmButtonText:"確認"})}).finally(()=>{i.hide()})}})},checkTopArticle(e){return this.allArticles.filter(s=>s.isTop===!0)},async setTopArticle(e){try{const o=await this.checkTopArticle(e);if(!o.length){const s=this.$loading.show(),i=await this.getArticleInfo(e);i.isTop=!0;const n=`${h}/api/${d}/admin/article/${e}`;return this.axios.put(n,{data:i}).then(a=>{this.swalInfoCheckWithBootstrapButtons.fire({title:"已設為置頂",confirmButtonText:"確認"}),this.getCurrentArticles()}).catch(a=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:a.response.data.message,confirmButtonText:"確認"})}).finally(()=>{s.hide()}),!1}if(o[0].id===e){const s=this.$loading.show(),i=await this.getArticleInfo(e);i.isTop=!1;const n=`${h}/api/${d}/admin/article/${e}`;return this.axios.put(n,{data:i}).then(a=>{this.swalInfoCheckWithBootstrapButtons.fire({title:"已取消置頂",confirmButtonText:"確認"}),this.getCurrentArticles()}).catch(a=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:a.response.data.message,confirmButtonText:"確認"})}).finally(()=>{s.hide()}),!1}if(o[0].id!==e){const s=`topArticleCheckBox${e}`;return this.$refs[s][0].checked=!1,this.swalInfoCheckWithBootstrapButtons.fire({title:"請先取消當前置頂文章",confirmButtonText:"確認"}),!1}}catch(o){throw console.log("錯誤:",o),o}},getArticleInfo(e){const o=`${h}/api/${d}/admin/article/${e}`;return this.axios.get(o).then(s=>s.data.article).catch(s=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:s.response.data.message,confirmButtonText:"確認"})})}},components:{PaginationComponent:A},mounted(){this.getCurrentArticles(),this.swalQuestionWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-outline-default",cancelButton:"m-1 btn btn-default"},buttonsStyling:!1}),this.swalInfoCheckWithBootstrapButtons=this.$swal.mixin({customClass:{confirmButton:"m-1 btn btn-default"},buttonsStyling:!1})}},y={class:"overflow-y-scroll scrollbar-y-hide vh-100"},I={class:"d-flex justify-content-between py-4 py-md-7"},v=t("h2",{class:"fw-bold"},"文章管理",-1),W={key:0,class:"py-5 text-center"},P={key:1,class:"table align-middle fs-info fs-md-6"},E=t("thead",null,[t("tr",null,[t("th",{class:"text-nowrap"},[B("首頁"),t("span",{class:"d-block d-md-inline"},"置頂")]),t("th",null,"標題"),t("th",{class:"d-none d-md-table-cell"},"分類"),t("th",null,"狀態"),t("th",{class:"d-none d-lg-table-cell"},"作者"),t("th",{class:"d-none d-md-table-cell"},"撰寫日期"),t("th")])],-1),V=["onClick","checked"],S={class:"d-none d-md-table-cell"},D={class:"py-1 rounded-pill bg-light text-center text-nowrap"},L={key:0,class:"text-danger text-nowrap"},N={key:1},Q={class:"d-none d-lg-table-cell"},R={class:"d-none d-md-table-cell"},F={class:"btn-group align-items-center"},G=["onClick"],H=t("i",{class:"bi bi-pencil text-default"},null,-1),O=[H],j=["onClick"],q=t("i",{class:"bi bi-trash text-danger"},null,-1),z=[q];function M(e,o,s,i,n,a){const f=_("router-link"),x=_("PaginationComponent");return r(),c("div",y,[t("div",I,[v,p(f,{to:"/admin/articleinfo/new",class:"btn btn-dark"},{default:g(()=>[B("建立文章")]),_:1})]),t("div",null,[n.currentArticles.length?(r(),c("table",P,[E,t("tbody",null,[(r(!0),c(w,null,C(n.currentArticles,l=>(r(),c("tr",{key:l.id},[t("td",null,[t("input",{class:"form-check-input",type:"checkbox",id:"checkboxNoLabel",value:"","aria-label":"setTopArticle",onClick:m=>a.setTopArticle(l.id),checked:l.isTop,ref_for:!0,ref:"topArticleCheckBox"+l.id},null,8,V)]),t("td",null,u(l.title),1),t("td",S,[t("p",D,u(l.category),1)]),t("td",null,[l.isPublic?(r(),c("span",L,"發佈中")):(r(),c("span",N,"未發佈"))]),t("td",Q,u(l.author),1),t("td",R,u(new Date(l.create_at*1e3).toLocaleDateString()),1),t("td",null,[t("div",F,[t("button",{type:"button",class:"btn border-0",onClick:m=>a.showArticlePage(l.id)},O,8,G),t("button",{type:"button",class:"btn border-0",onClick:m=>a.deleteArticle(l.id)},z,8,j),p(f,{class:b(["d-none d-sm-table-cell btn border-0",{"pe-none":!l.isPublic}]),target:"_blank",to:`/articleinfo/${l.id}`},{default:g(()=>[t("i",{class:b(["bi bi-house",l.isPublic?"text-default":"text-light"])},null,2)]),_:2},1032,["to","class"])])])]))),128))])])):(r(),c("p",W,"目前沒有文章")),p(x,{pagination:n.pagination,onGetList:a.getCurrentArticles},null,8,["pagination","onGetList"])])])}const K=k($,[["render",M]]);export{K as default};
