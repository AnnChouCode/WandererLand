import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    toastMsgList: [],
    message: {}
  }),
  actions: {
    // 新增單一訊息
    addMsg (icon = 'bi-info-circle', message = '') {
      this.message = {
        icon,
        msg: message
      }

      this.handleMsg()
    },

    // 新增 & 定時刪除訊息列表
    handleMsg () {
      this.toastMsgList.unshift(this.message)
      setTimeout(() => {
        this.toastMsgList.pop()
      }, 1500)
    },

    // 關閉訊息
    clearMsg (idx) {
      this.toastMsgList.splice(idx, 1)
    }
  }
})
