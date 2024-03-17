import { defineStore } from 'pinia'
import statusStore from '@/stores/statusStore.js'

export default defineStore('favoriteStore', {
  state: () => ({
    favoriteList: [],
    recentlyProducts: []
  }),
  actions: {
    handleFavorite (id) {
      const favoriteIdx = this.favoriteList.indexOf(id)

      if (favoriteIdx === -1) {
        this.favoriteList.push(id)
      } else {
        this.favoriteList.splice(favoriteIdx, 1)
      }

      this.setStorage()

      const { addMsg } = statusStore()
      addMsg('bi-info-circle', '收藏已更新')
    },

    // 儲存收藏
    setStorage () {
      localStorage.setItem('favoriteList', this.favoriteList)
    },

    // 獲得收藏
    getFavoriteList () {
      const favoriteList = localStorage.getItem('favoriteList')
      if (favoriteList) {
        this.favoriteList = favoriteList.split(',')
      }

      return this.favoriteList
    },

    // 最近看過
    recentlyViewed (product) {
      const recentlyIdx = this.recentlyProducts.findIndex(item => item.id === product.id)

      if (recentlyIdx === -1) {
        this.recentlyProducts.unshift(product)

        if (this.recentlyProducts.length >= 8) {
          this.recentlyProducts.pop()
        }
      } else {
        this.recentlyProducts.splice(recentlyIdx, 1)
        this.recentlyProducts.unshift(product)
      }

      localStorage.setItem('recentlyList', JSON.stringify(this.recentlyProducts))
    }
  }
})
