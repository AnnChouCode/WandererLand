import{u as s}from"./index-dItq-4U-.js";import{s as r}from"./statusStore-LavdIsZJ.js";const c=s("favoriteStore",{state:()=>({favoriteList:[],recentlyProducts:[]}),actions:{handleFavorite(t){const e=this.favoriteList.indexOf(t);e===-1?this.favoriteList.push(t):this.favoriteList.splice(e,1),this.setStorage();const{addMsg:i}=r();i("bi-info-circle","收藏已更新")},setStorage(){localStorage.setItem("favoriteList",this.favoriteList)},getFavoriteList(){const t=localStorage.getItem("favoriteList");t&&(this.favoriteList=t.split(","))},recentlyViewed(t){const e=this.recentlyProducts.findIndex(i=>i.id===t.id);e===-1?(this.recentlyProducts.unshift(t),this.recentlyProducts.length>=8&&this.recentlyProducts.pop()):(this.recentlyProducts.splice(e,1),this.recentlyProducts.unshift(t)),localStorage.setItem("recentlyList",JSON.stringify(this.recentlyProducts))}}});export{c as f};
