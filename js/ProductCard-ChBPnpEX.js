import{_ as s}from"./index-Ckqhthat.js";import{a_ as l,aR as r,a5 as c,ae as d,bx as m,a6 as e,aG as n,ba as f,aZ as a,L as u}from"./@vue-Cqo5QHyB.js";const _={props:{item:Object,linkTo:String,shape:{type:String,default:""},titlePosition:{type:String,default:""}},inject:["triggerGetFavorites"]},g=["src","alt"],p=["src","alt"],b={class:"d-flex justify-content-between align-items-center px-0 px-md-4"};function h(i,x,t,v,w,j){const o=l("router-link");return r(),c(u,null,[d(o,{to:t.linkTo,class:"product-content"},{default:m(()=>[e("div",{class:n(["position-relative d-flex justify-content-center align-items-center mb-3 ratio-1x1 overflow-hidden",t.shape])},[e("img",{src:t.item.imageUrl,alt:t.item.title,class:"object-fit-contain w-100 h-100 product-img-up"},null,8,g),e("img",{src:t.item.imagesUrl[0],alt:t.item.title,class:"position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down"},null,8,p)],2),e("h3",{class:n(["mb-2 px-0 px-md-4 fs-info fs-md-5 fw-bold text-default",t.titlePosition])},f(t.item.title),3)]),_:1},8,["to"]),e("div",b,[a(i.$slots,"price",{},void 0,!0),a(i.$slots,"favorite",{},void 0,!0)]),a(i.$slots,"addToCart",{},void 0,!0)],64)}const C=s(_,[["render",h],["__scopeId","data-v-bfe8e5ff"]]);export{C as P};