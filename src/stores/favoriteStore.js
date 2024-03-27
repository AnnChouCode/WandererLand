import { defineStore } from 'pinia'
import statusStore from '@/stores/statusStore.js'

import axios from 'axios'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('favoriteStore', {
  state: () => ({
    // 收藏 id
    favoriteList: [],
    // 最近看過
    recentlyProducts: [],
    // 完整收藏資料
    favoriteProducts: []
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
    },

    // 取得完整收藏列表
    getFavoriteProducts () {
      this.favoriteProducts = []

      this.favoriteList.forEach(item => {
        const url = `${VITE_API}/api/${VITE_PATH}/product/${item}`

        axios
          .get(url)
          .then(res => this.favoriteProducts.push(res.data.product))
          .catch(err => console.log(err.response.data.message))
      })
    }
  }
})
