import{s as c,i as n,j as u}from"./index-SuvShJ5P.js";import{s as l}from"./sweetalert2.all-6q_o9MV5.js";var p={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=c.useLoading(),{VITE_API:m,VITE_PATH:L}=p,_=n("allProductsStore",{state:()=>({allProducts:[],allArtists:[],productSizeList:[],filter:[]}),actions:{getAllProducts(){const a=d.show(),r=`${m}/api/${L}/products/all`;return u.get(r).then(t=>{const s=t.data.products;return this.allProducts=s.filter(e=>e.category==="products"),this.allArtists=s.filter(e=>e.category==="artists").sort((e,o)=>e.title.localeCompare(o.title)),s}).catch(t=>{l.fire({icon:"error",text:t.response.data.message})}).finally(()=>{a.hide()})},getSizeList(){const r=[...new Set(this.allProducts.map(t=>t.size))].sort((t,s)=>t[0]-s[0]);this.productSizeList=r}},getters:{sortNewest:({allProducts:a,allArtists:r})=>{const t=r.sort((e,o)=>o.create_at-e.create_at),s=a.sort((e,o)=>o.create_at-e.create_at);return{newestArtist:t,newestProduct:s}},groupList:({allProducts:a,allArtists:r})=>{const s=[...new Set(a.map(i=>i.group))],o=[...new Set(r.map(i=>i.group))];return{productGroupList:s,artistGroupList:o}}}});export{_ as u};
