import{aR as s,a5 as o,a6 as a,aG as r,bC as l,L as g,aY as _,ba as d}from"./@vue-zaZYt_0T.js";import{_ as p}from"./index-tR5GeodB.js";const h={props:["pagination"],methods:{getList(c){this.$emit("getList",c)}}},m={"aria-label":"Page navigation",class:"d-flex justify-content-end"},u={class:"pagination"},f=a("span",{"aria-hidden":"true"},"«",-1),k=[f],v=["onClick"],b=a("span",{"aria-hidden":"true"},"»",-1),C=[b];function L(c,i,e,x,P,n){return s(),o("nav",m,[a("ul",u,[a("li",{class:r(["page-item",{disabled:!e.pagination.has_pre}])},[a("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=l(t=>n.getList(e.pagination.current_page-1),["prevent"]))},k)],2),(s(!0),o(g,null,_(e.pagination.total_pages,t=>(s(),o("li",{class:r(["page-item",{active:t===e.pagination.current_page}]),key:t},[a("a",{href:"#",class:"page-link",onClick:l(y=>n.getList(t),["prevent"])},d(t),9,v)],2))),128)),a("li",{class:r(["page-item",{disabled:!e.pagination.has_next}])},[a("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=l(t=>n.getList(e.pagination.current_page+1),["prevent"]))},C)],2)])])}const j=p(h,[["render",L]]);export{j as P};
