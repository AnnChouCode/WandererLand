import{q as e}from"./index-zXlYstGV.js";const a=e("statusStore",{state:()=>({toastMsgList:[],message:{}}),actions:{addMsg(s="bi-info-circle",t=""){this.message={icon:s,msg:t},this.handleMsg()},handleMsg(){this.toastMsgList.unshift(this.message),setTimeout(()=>{this.toastMsgList.pop()},1500)},clearMsg(s){this.toastMsgList.splice(s,1)}}});export{a as s};
