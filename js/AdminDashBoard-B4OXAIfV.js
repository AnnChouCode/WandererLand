import{u as O}from"./adminOrderStore-HhsmaLgP.js";import{u as D}from"./adminProductStore-XiFNhrHl.js";import{b}from"./pinia-D1tb24LR.js";import{L as x,B as M}from"./vue-chartjs-CdWNJvnm.js";import{C as L,a as w,b as C,P as A,c as B,p as S,d as y,e as P,f as $}from"./chart.js-CYfGDqQG.js";import{_ as g}from"./index-Ckqhthat.js";import{a_ as p,aR as d,a5 as h,ae as _,a6 as t,ba as m,bz as E,bp as j,a4 as v}from"./@vue-Cqo5QHyB.js";import"./axios-Di5RpEPX.js";import"./sweetalert2-Bxbxx77j.js";import"./@ckeditor-RgNY5E4z.js";import"./vue-ZlQZhsMo.js";import"./vue-loading-overlay-CtFUBeEI.js";import"./@kurkle-BZxJdD1U.js";import"./vue-axios-BaogFJPH.js";import"./vue-sweetalert2-BkTfjfvc.js";import"./vee-validate-CasJ09EL.js";import"./@vee-validate-DziBkgPq.js";import"./bootstrap-CKLWTmin.js";import"./@popperjs-WhmJkuoZ.js";/* empty css                        */import"./aos-C_17NL_K.js";import"./vue-router-DOL1scXn.js";L.register(w,C,A,B,S,y,P);const N={name:"LineChart",components:{LineChartComponent:x},props:{chartData:Object},data(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1}}}},Z={style:{height:"300px"}},k=t("h3",{class:"mb-2 fs-6 fw-bold text-info"},"總銷售額",-1);function R(e,s,r,n,o,i){const a=p("LineChartComponent");return d(),h("div",Z,[k,_(a,{id:"my-chart-id",options:o.chartOptions,data:r.chartData},null,8,["options","data"])])}const z=g(N,[["render",R]]);L.register(S,y,P,$,w,C);const H={name:"HorizontalBarChart",components:{Bar:M},props:{chartData:Object},data(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1,indexAxis:"y"}}}},V={style:{height:"300px"}},Y=t("h3",{class:"mb-2 fs-6 fw-bold text-info"},"分類銷售額",-1);function q(e,s,r,n,o,i){const a=p("Bar");return d(),h("div",V,[Y,_(a,{id:"my-chart-id",options:o.chartOptions,data:r.chartData},null,8,["options","data"])])}const G=g(H,[["render",q]]),l=O(),f=D(),T={data(){return{allProductList:[],allOrderList:[],isNotPaidOrder:[],isNotShippingOrder:[],needReplenishedProduct:[],chartMonthZone:3,turnOverData:{},groupSales:{}}},computed:{...b(D),...b(O)},watch:{chartMonthZone(){this.getMonthZone(this.chartMonthZone)}},methods:{getMonthZone(e=3){const s=new Date,r=s.getMonth()+1,n=s.getFullYear(),o=[];for(let i=0;i<e;i++){let a=r-i,c=n;a<=0&&(a+=12,c--),o.unshift(`${c.toString().slice(2,4)} ${a}月`)}this.getTurnOverData(o),this.getGroupSales(o)},getTurnOverData(e){const s={};l.allOrderList.forEach(n=>{const i=new Date(n.create_at*1e3).toLocaleString().split("/").splice(0,2),a=`${i[0].slice(2,4)} ${i[1]}月`;s[a]||(s[a]=0),Object.values(n.products).forEach(c=>{s[a]+=c.total})});const r=e.map(n=>s[n]||0);this.turnOverData={labels:e,datasets:[{label:"總銷售額",backgroundColor:"#333333",data:r}]}},getGroupSales(e){const s={};f.groupList.forEach(r=>{s[r]=0}),l.allOrderList.forEach(r=>{const o=new Date(r.create_at*1e3).toLocaleString().split("/").splice(0,2),i=`${o[0].slice(2,4)} ${o[1]}月`;e.forEach(a=>{a===i&&Object.values(r.products).forEach(c=>{const u=c.product.group;s[u]+=c.total})})}),this.groupSales={labels:Object.keys(s),datasets:[{label:"分類銷售額",backgroundColor:"#333333",data:Object.values(s)}]}},handleOrderData(){this.isNotPaidOrder=this.allOrderList.filter(e=>!e.is_paid),this.isNotShippingOrder=this.allOrderList.filter(e=>e.is_paid&&!e.is_shipping)},handleProductData(){this.needReplenishedProduct=this.allProductList.filter(e=>e.quantity&&e.quantity<=3)},async getAllOrderList(){await l.getCurrentOrderList();for(let e=0;e<l.pagination.total_pages;e++)await l.getAllOrderList(e+1);this.allOrderList=l.allOrderList,this.handleOrderData(),this.getMonthZone()},async getAllProductList(){await f.getAllProducts(),this.allProductList=Object.values(f.allProducts),this.handleProductData()}},async mounted(){await l.resetAllOrderList(),this.getAllOrderList(),this.getAllProductList()},components:{LineChart:z,HorizontalBarChart:G}},F={class:"overflow-y-scroll scrollbar-y-hide vh-100"},U=t("h2",{class:"py-4 py-md-7 fw-bold"},"總覽",-1),I={class:"row g-1 p-2 p-md-3 mb-4 bg-light"},J=t("div",{class:"col-12 col-md-3"},[t("div",{class:"p-3"},[t("h3",{class:"mb-1 fs-5 fw-bold"},"歡迎回來"),t("p",null,"這是您的待辦事項")])],-1),K={class:"col-12 col-md-3"},Q={class:"p-3 border rounded-2 bg-white"},W={class:"fs-3"},X=t("h3",{class:"fs-6 fw-bold text-info"},"尚未付款的訂單",-1),tt={class:"col-12 col-md-3"},et={class:"p-3 border rounded-2 bg-white"},ot={class:"fs-3"},st=t("h3",{class:"fs-6 fw-bold text-info"},"待出貨的訂單",-1),at={class:"col-12 col-md-3"},rt={class:"p-3 border rounded-2 bg-white"},it={class:"fs-3"},nt=t("h3",{class:"fs-6 fw-bold text-info"},"即將售鑿商品",-1),ct={class:"p-2 p-md-3 bg-light"},lt=t("option",{value:"3",selected:""},"3 個月",-1),dt=t("option",{value:"6"},"6 個月",-1),ht=t("option",{value:"12"},"12 個月",-1),pt=[lt,dt,ht],_t={class:"row g-3"},ut={class:"col col-md-6"},mt={key:0,class:"w-100 p-3 pb-7 border rounded-2 bg-white"},ft={class:"col col-md-6"},gt={key:0,class:"w-100 p-3 pb-7 border rounded-2 bg-white"};function bt(e,s,r,n,o,i){const a=p("LineChart"),c=p("HorizontalBarChart");return d(),h("div",F,[U,t("div",I,[J,t("div",K,[t("div",Q,[t("p",W,m(o.isNotPaidOrder.length),1),X])]),t("div",tt,[t("div",et,[t("p",ot,m(o.isNotShippingOrder.length),1),st])]),t("div",at,[t("div",rt,[t("p",it,m(o.needReplenishedProduct.length),1),nt])])]),t("div",ct,[E(t("select",{class:"mb-5 form-select","aria-label":"selectMonthZone","onUpdate:modelValue":s[0]||(s[0]=u=>o.chartMonthZone=u),style:{width:"150px"}},pt,512),[[j,o.chartMonthZone]]),t("div",_t,[t("div",ut,[Object.values(o.turnOverData).length?(d(),h("div",mt,[_(a,{chartData:o.turnOverData},null,8,["chartData"])])):v("",!0)]),t("div",ft,[Object.values(o.groupSales).length?(d(),h("div",gt,[_(c,{chartData:o.groupSales},null,8,["chartData"])])):v("",!0)])])])])}const Vt=g(T,[["render",bt]]);export{Vt as default};