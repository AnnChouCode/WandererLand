import{_ as l,r as i,o as d,c as p,a as e,n as a,b as f,p as h,j as _}from"./index-zXlYstGV.js";const u={data(){return{pageType:""}},methods:{checkProductPage(){const r=window.location.href.split("/");this.pageType=r.filter(s=>s==="checkform"||s==="payorder"||s==="orderhistory").toString()}},watch:{$route(){this.checkProductPage()}},mounted(){this.checkProductPage()}},o=t=>(h("data-v-301c1787"),t=t(),_(),t),m={class:"container user-page-container flex-grow-1"},b=o(()=>e("h2",{class:"mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1"},"購物車",-1)),g={class:"row"},x={class:"col-12 col-md-6 mx-auto"},y={class:"position-relative d-flex justify-content-between mb-6 mb-md-8 mx-auto pay-list"},w=o(()=>e("li",{class:"d-flex flex-column align-items-center"},[e("p",{class:"d-flex justify-content-center align-items-center mb-2 fs-5 border border-default rounded-circle pay-step bg-default text-white"}," 1"),e("p",{class:"fs-info fw-bold"},"訂單資料")],-1)),v={class:"d-flex flex-column align-items-center"},k=o(()=>e("p",{class:"fs-info fw-bold"},"結帳付款",-1)),P={class:"d-flex flex-column align-items-center"},j=o(()=>e("p",{class:"fs-info fw-bold"},"訂購結果",-1));function T(t,r,s,I,c,S){const n=i("router-view");return d(),p("div",m,[b,e("div",g,[e("div",x,[e("ol",y,[w,e("li",v,[e("p",{class:a(["d-flex justify-content-center align-items-center mb-2 fs-5 border border-default rounded-circle pay-step",c.pageType==="payorder"||c.pageType==="orderhistory"?"bg-default text-white":"bg-white text-default"])}," 2",2),k]),e("li",P,[e("p",{class:a(["d-flex justify-content-center align-items-center mb-2 fs-5 border border-default rounded-circle pay-step",c.pageType==="orderhistory"?"bg-default text-white":"bg-white text-default"])}," 3",2),j])]),f(n)])])])}const C=l(u,[["render",T],["__scopeId","data-v-301c1787"]]);export{C as default};
