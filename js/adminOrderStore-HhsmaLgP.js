import{d as l}from"./pinia-D1tb24LR.js";import{a as i}from"./axios-Di5RpEPX.js";import{s as o}from"./sweetalert2-Bxbxx77j.js";import{d as c}from"./vue-loading-overlay-CtFUBeEI.js";var p={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const m=c.useLoading(),{VITE_API:n,VITE_PATH:d}=p,L=l("adminOrders",{state:()=>({allOrderList:[],currentOrderList:[],pagination:{}}),actions:{resetAllOrderList(){return this.allOrderList=[],this.allOrderList},getAllOrderList(t=1){const s=`${n}/api/${d}/admin/orders?page=${t}`,r=m.show();return i.get(s).then(e=>{const{orders:a}=e.data;this.allOrderList=this.allOrderList.concat(a)}).catch(e=>{o.fire({icon:"error",text:e.response.data.message})}).finally(()=>r.hide())},getCurrentOrderList(t=1){const s=`${n}/api/${d}/admin/orders?page=${t}`;return i.get(s).then(r=>{const{orders:e,pagination:a}=r.data;this.currentOrderList=e,this.pagination=a}).catch(r=>{o.fire({icon:"error",text:r.response.data.message})})}}});export{L as u};
