import{d as f}from"./pinia-D1tb24LR.js";import{s as i}from"./statusStore-bNOcWQBU.js";import{a as c}from"./axios-Di5RpEPX.js";import{s as n}from"./sweetalert2-Bxbxx77j.js";import{d as u}from"./vue-loading-overlay-CtFUBeEI.js";var m={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wandererland",BASE_URL:"/WandererLand/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=u.useLoading(),{VITE_API:l,VITE_PATH:h}=m,b=f("cartStore",{state:()=>({cartsList:[],coupon_code:""}),actions:{addToCart(t,o){const e=d.show(),r=`${l}/api/${h}/cart`,s={data:{product_id:t,qty:o}};c.post(r,s).then(a=>{const{addMsg:p}=i();p("bi-bag-check","已更新購物車"),this.getCartsList()}).catch(a=>{n.fire({icon:"error",text:a.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{e.hide()})},getCartsList(){const t=d.show(),o=`${l}/api/${h}/cart`;return c.get(o).then(e=>{this.cartsList=e.data.data}).catch(e=>{n.fire({icon:"error",text:e.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{t.hide()})},updateCart(t){const o=d.show(),e=`${l}/api/${h}/cart/${t.id}`,r={data:{product_id:t.product_id,qty:t.qty}};c.put(e,r).then(s=>{const{addMsg:a}=i();a("bi-bag-check","已更新購物車"),this.getCartsList()}).catch(s=>{n.fire({icon:"error",text:s.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{o.hide()})},deleteCartItem(t){const o=d.show(),e=`${l}/api/${h}/cart/${t}`;c.delete(e).then(r=>{const{addMsg:s}=i();s("bi-bag-check","已更新購物車"),this.getCartsList()}).catch(r=>{n.fire({icon:"error",text:r.response.data.message,confirmButtonColor:"#333333"})}).finally(()=>{o.hide()})},copyCouponCode(t){navigator.clipboard.writeText(t).then(()=>{const{addMsg:o}=i();o("bi-info-circle","已複製優惠碼"),this.coupon_code=t})},checkCoupon(t){const o=`${l}/api/${h}/coupon`;if(this.cartsList.total!==this.cartsList.final_total){const{addMsg:s}=i();s("bi-info-circle","已套用優惠碼");return}const e=d.show(),r={data:{code:t}};c.post(o,r).then(s=>{const{addMsg:a}=i();a("bi-info-circle","已套用優惠碼"),this.getCartsList()}).catch(s=>{n.fire({icon:"error",text:s.response.data.message})}).finally(()=>{e.hide()})}}});export{b as c};
