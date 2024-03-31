import{u as b}from"./adminOrderStore-Nz-3i78Y.js";import{u as O}from"./adminProductStore-ARmIVaj_.js";import{b as f}from"./pinia-D6A4allF.js";import{B as P}from"./vue-chartjs-XQRkuKRR.js";import{C as y,p as C,a as S,b as B,c as M,d as A,L as x}from"./chart.js--IFHbMZL.js";import{_ as v}from"./index-tR5GeodB.js";import{a_ as D,aR as m,a5 as u,ae as w,a6 as t,ba as _,bz as N,bp as R,a4 as Z}from"./@vue-zaZYt_0T.js";import"./axios-xY6ymfx7.js";import"./sweetalert2-NwvYGOW7.js";import"./@ckeditor-bzq-HQy0.js";import"./vue-zaw7FvyG.js";import"./vue-loading-overlay-nDy6RxjO.js";import"./@kurkle-sRCxMDZz.js";import"./vue-axios-1bbP-7uc.js";import"./vue-sweetalert2-HUKuUMJw.js";import"./vee-validate-yOM-A2XF.js";import"./@vee-validate-vwB3goxc.js";import"./bootstrap-Lpi9Oc84.js";import"./@popperjs-kvWuk1nc.js";/* empty css                        */import"./aos-ZvF7bt_9.js";import"./vue-router--ANrfSlZ.js";y.register(C,S,B,M,A,x);const $={name:"barChart",components:{Bar:P},props:{chartData:Object,chartOptions:Object}},j={style:{height:"300px"}},k=t("h3",{class:"mb-2 fs-6 fw-bold text-info"},"總銷售額",-1);function E(s,a,n,h,e,r){const c=D("Bar");return m(),u("div",j,[k,w(c,{id:"my-chart-id",options:n.chartOptions,data:n.chartData},null,8,["options","data"])])}const V=v($,[["render",E]]),i=b(),g=O(),Y={data(){return{allProductList:[],allOrderList:[],isNotPaidOrder:[],isNotShippingOrder:[],needReplenishedProduct:[],chartMonthZone:3,chartData:{},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},computed:{...f(O),...f(b)},watch:{chartMonthZone(){this.handleChartData(this.chartMonthZone)}},methods:{handleChartData(s=3){const a=new Date,n=a.getMonth()+1,h=a.getFullYear(),e=[];for(let o=0;o<s;o++){let d=n-o,l=h;d<=0&&(d+=12,l--),e.unshift(`${l.toString().slice(2,4)} ${d}月`)}const r={};i.allOrderList.forEach(o=>{const l=new Date(o.create_at*1e3).toLocaleString().split("/").splice(0,2),p=`${l[0].slice(2,4)} ${l[1]}月`;r[p]||(r[p]=0),Object.values(o.products).forEach(L=>{r[p]+=L.total})});const c=e.map(o=>r[o]||0);this.chartData={labels:e,datasets:[{label:"總銷售額",backgroundColor:"#333333",data:c}]}},handleOrderData(){this.isNotPaidOrder=this.allOrderList.filter(s=>!s.is_paid),this.isNotShippingOrder=this.allOrderList.filter(s=>s.is_paid&&!s.is_shipping)},handleProductData(){this.needReplenishedProduct=this.allProductList.filter(s=>s.quantity&&s.quantity<=3)},async getAllOrderList(){await i.getCurrentOrderList();for(let s=0;s<i.pagination.total_pages;s++)await i.getAllOrderList(s+1);this.allOrderList=i.allOrderList,this.handleOrderData(),this.handleChartData()},async getAllProductList(){await g.getAllProducts(),this.allProductList=Object.values(g.allProducts),this.handleProductData()}},async mounted(){await i.resetAllOrderList(),this.getAllOrderList(),this.getAllProductList()},components:{BarChart:V}},q={class:"overflow-y-scroll scrollbar-y-hide vh-100"},z=t("h2",{class:"py-4 py-md-7 fw-bold"},"總覽",-1),F={class:"row g-1 p-2 p-md-3 mb-4 bg-light"},U=t("div",{class:"col-12 col-md-3"},[t("div",{class:"p-3"},[t("h3",{class:"mb-1 fs-5 fw-bold"},"歡迎回來"),t("p",null,"這是您的待辦事項")])],-1),G={class:"col-12 col-md-3"},H={class:"p-3 border rounded-2 bg-white"},I={class:"fs-3"},J=t("h3",{class:"fs-6 fw-bold text-info"},"尚未付款的訂單",-1),K={class:"col-12 col-md-3"},Q={class:"p-3 border rounded-2 bg-white"},T={class:"fs-3"},W=t("h3",{class:"fs-6 fw-bold text-info"},"待出貨的訂單",-1),X={class:"col-12 col-md-3"},tt={class:"p-3 border rounded-2 bg-white"},st={class:"fs-3"},et=t("h3",{class:"fs-6 fw-bold text-info"},"即將售鑿商品",-1),ot={class:"p-2 p-md-3 bg-light"},at=t("option",{value:"3",selected:""},"3 個月",-1),rt=t("option",{value:"6"},"6 個月",-1),it=t("option",{value:"12"},"12 個月",-1),nt=[at,rt,it],ct={key:0,class:"w-100 p-3 border rounded-2 bg-white"};function lt(s,a,n,h,e,r){const c=D("BarChart");return m(),u("div",q,[z,t("div",F,[U,t("div",G,[t("div",H,[t("p",I,_(e.isNotPaidOrder.length),1),J])]),t("div",K,[t("div",Q,[t("p",T,_(e.isNotShippingOrder.length),1),W])]),t("div",X,[t("div",tt,[t("p",st,_(e.needReplenishedProduct.length),1),et])])]),t("div",ot,[N(t("select",{class:"mb-5 form-select","aria-label":"selectMonthZone","onUpdate:modelValue":a[0]||(a[0]=o=>e.chartMonthZone=o),style:{width:"150px"}},nt,512),[[R,e.chartMonthZone]]),Object.values(e.chartData).length?(m(),u("div",ct,[w(c,{chartOptions:e.chartOptions,chartData:e.chartData},null,8,["chartOptions","chartData"])])):Z("",!0)])])}const Nt=v(Y,[["render",lt]]);export{Nt as default};
