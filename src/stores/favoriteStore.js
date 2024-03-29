import { defineStore } from 'pinia'
import statusStore from '@/stores/statusStore.js'
import cartStore from '@/stores/userCartStore.js'

import axios from 'axios'

import { useLoading } from 'vue-loading-overlay'
const $loading = useLoading()

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
    async getFavoriteProducts () {
      try {
        // 開啟 loading
        const loader = $loading.show()

        // 獲取購物車產品內容
        const { cartsList } = cartStore()

        // 整理收藏清單，計算可購買數量
        const favoriteProducts = await Promise.all(this.favoriteList.map(async item => {
          const url = `${VITE_API}/api/${VITE_PATH}/product/${item}`
          const res = await axios.get(url)
          return res.data.product
        }))

        const tempList = favoriteProducts.map(favoriteItem => {
          const cartItem = cartsList.carts.find(cartItem => cartItem.product_id === favoriteItem.id)

          return {
            ...favoriteItem,
            availableQty: cartItem ? favoriteItem.quantity - cartItem.qty : favoriteItem.quantity
          }
        })

        this.favoriteProducts = tempList
        // 關閉 loading
        loader.hide()
      } catch (error) {
        console.log('Error getFavoriteProducts:', error)
      }
    }
  }
})
