import{s as i}from"./statusStore-Kr_WM3ql.js";import{a as r,m as c,_ as l,o as t,c as e,F as d,d as m,b as s,n as p,t as _}from"./index-xxmhpSli.js";const u={props:["adminOrderState","adminOrderAction"],computed:{...r(i,["toastMsgList"])},methods:{...c(i,["clearMsg"])}},b={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"1056"}},f={class:"toast-body d-flex align-items-center justify-content-between"},g={class:"d-flex fw-bold"},h={class:"mb-0"},v=["onClick"];function y(a,k,x,C,$,M){return t(),e("div",b,[(t(!0),e(d,null,m(a.toastMsgList,(o,n)=>(t(),e("div",{class:"toast show mb-1 bg-tertiary",role:"alert","aria-live":"assertive","aria-atomic":"true",key:n},[s("div",f,[s("div",g,[s("i",{class:p(["bi me-2 text-default",o.icon])},null,2),s("p",h,_(o.msg),1)]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:S=>a.clearMsg(n)},null,8,v)])]))),128))])}const L=l(u,[["render",y]]);export{L as T};
