import{_ as a,o as r,c as n,b as e,t as d,h as l,F as _}from"./index-bOPoBINP.js";var p={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:h,VITE_PATH:f}=p,u={data(){return{order:{}}},methods:{getOrderInfo(t){const c=`${h}/api/${f}/order/${t}`;this.axios.get(c).then(o=>{this.order=o.data.order;const i=new Date(this.order.create_at*1e3);this.orderDate=i.toLocaleString()}).catch(o=>{this.swalInfoCheckWithBootstrapButtons.fire({icon:"error",text:o.response.data.message,confirmButtonText:"確認"})})}},mounted(){const t=this.$route.params.id;this.getOrderInfo(t)}},m=e("div",{class:"mb-8 text-center"},[e("i",{class:"mb-4 bi bi-check-circle",style:{"font-size":"48px"}}),e("p",{class:"fw-bold h5"},"訂購成功")],-1),b={class:"mb-7 py-2 py-md-4 border-top border-bottom border-default"},x={class:"d-flex justify-content-between mb-2 mb-md-4"},y=e("p",null,"訂單編號",-1),v={class:"d-flex justify-content-between mb-2 mb-md-4"},I=e("p",null,"訂單時間",-1),g={key:0,class:"d-flex justify-content-between mb-2 mb-md-4"},w=e("p",null,"訂單總額",-1),D={class:"d-flex justify-content-between"},E=e("p",null,"訂單狀態",-1),T={key:0},k={key:1,class:"text-danger"},B=e("p",{class:"fs-info text-info"},"※ 您的訂單將在付款後開始訂製，付款後，從開始製作到寄出商品為 14 個工作天。",-1);function V(t,c,o,i,s,S){return r(),n(_,null,[m,e("div",b,[e("div",x,[y,e("p",null,d(s.order.id),1)]),e("div",v,[I,e("p",null,d(t.orderDate),1)]),s.order.total?(r(),n("div",g,[w,e("p",null,"NT$ "+d(s.order.total.toLocaleString()),1)])):l("",!0),e("div",D,[E,s.order.is_paid?(r(),n("p",T,"已付款")):(r(),n("p",k,"未付款"))])]),B],64)}const O=a(u,[["render",V]]);export{O as default};
