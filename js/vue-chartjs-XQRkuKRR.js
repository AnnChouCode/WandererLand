import{C as D,B as I}from"./chart.js--IFHbMZL.js";import{u as O,D as C,j as h,bs as M,r as A,l as K,q as R,w as T,t as P,n as U,ay as w}from"./@vue-zaZYt_0T.js";const L={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},k={ariaLabel:{type:String},ariaDescribedby:{type:String}},$={type:{type:String,required:!0},...L,...k},z=M[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function l(t){return w(t)?P(t):t}function E(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return w(e)?new Proxy(t,{}):t}function F(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function B(t,e){t.labels=e}function S(t,e,s){const o=[];t.datasets=e.map(n=>{const a=t.datasets.find(c=>c[s]===n[s]);return!a||!n.data||o.includes(a)?{...n}:(o.push(a),Object.assign(a,n),a)})}function G(t,e){const s={labels:[],datasets:[]};return B(s,t.labels),S(s,t.datasets,e),s}const H=O({props:$,setup(t,e){let{expose:s,slots:o}=e;const n=A(null),a=C(null);s({chart:a});const c=()=>{if(!n.value)return;const{type:r,data:f,options:y,plugins:p,datasetIdKey:v}=t,b=G(f,v),i=E(b,f);a.value=new D(n.value,{type:r,data:i,options:{...y},plugins:p})},d=()=>{const r=P(a.value);r&&(r.destroy(),a.value=null)},j=r=>{r.update(t.updateMode)};return K(c),R(d),T([()=>t.options,()=>t.data],(r,f)=>{let[y,p]=r,[v,b]=f;const i=P(a.value);if(!i)return;let g=!1;if(y){const u=l(y),x=l(v);u&&u!==x&&(F(i,u),g=!0)}if(p){const u=l(p.labels),x=l(b.labels),m=l(p.datasets),q=l(b.datasets);u!==x&&(B(i.config.data,u),g=!0),m&&m!==q&&(S(i.config.data,m,t.datasetIdKey),g=!0)}g&&U(()=>{j(i)})},{deep:!0}),()=>h("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:n},[h("p",{},[o.default?o.default():""])])}});function J(t,e){return D.register(e),O({props:L,setup(s,o){let{expose:n}=o;const a=C(null),c=d=>{a.value=d==null?void 0:d.chart};return n({chart:a}),()=>h(H,z({ref:c},{type:t,...s}))}})}const V=J("bar",I);export{V as B};
