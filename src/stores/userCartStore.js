import { defineStore } from 'pinia'
import statusStore from '@/stores/statusStore.js'

import axios from 'axios'
import swal from 'sweetalert2'
import { useLoading } from 'vue-loading-overlay'
const $loading = useLoading()

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    // 購物車清單
    cartsList: [],
    // 優惠券碼
    coupon_code: ''
  }),
  actions: {
    // 加入購物車
    addToCart (id, qty) {
      // 開啟 loading
      const loader = $loading.show()

      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      const item = {
        data: {
          product_id: id,
          qty
        }
      }

      axios.post(url, item)
        .then(res => {
          // 提示訊息
          const { addMsg } = statusStore()
          addMsg('bi-bag-check', '已更新購物車')
          // 重整購物車
          this.getCartsList()
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message,
              confirmButtonColor: '#333333'
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    },

    // 取得購物車列表
    getCartsList () {
      // 開啟 loading
      const loader = $loading.show()

      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      return axios.get(url)
        .then(res => {
          this.cartsList = res.data.data
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message,
              confirmButtonColor: '#333333'
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    },

    // 更新購物車
    updateCart (data) {
      // 開啟 loading
      const loader = $loading.show()

      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${data.id}`
      const item = {
        data: {
          product_id: data.product_id,
          qty: data.qty
        }
      }

      axios.put(url, item)
        .then(res => {
          // 提示訊息
          const { addMsg } = statusStore()
          addMsg('bi-bag-check', '已更新購物車')
          // 重整購物車
          this.getCartsList()
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message,
              confirmButtonColor: '#333333'
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    },

    // 刪除購物車單一品項
    deleteCartItem (id) {
      // 開啟 loading
      const loader = $loading.show()

      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${id}`
      axios.delete(url)
        .then(res => {
          // 提示訊息
          const { addMsg } = statusStore()
          addMsg('bi-bag-check', '已更新購物車')
          // 重整購物車
          this.getCartsList()
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message,
              confirmButtonColor: '#333333'
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    },

    // 點擊複製優惠券碼
    copyCouponCode (code) {
      navigator.clipboard.writeText(code)
        .then(() => {
          // 提示訊息
          const { addMsg } = statusStore()
          addMsg('bi-info-circle', '已複製優惠碼')
          this.coupon_code = code
        })
    },

    // 確認 coupon
    checkCoupon (couponCode) {
      const url = `${VITE_API}/api/${VITE_PATH}/coupon`

      if (this.cartsList.total !== this.cartsList.final_total) {
        // 提示訊息
        const { addMsg } = statusStore()
        addMsg('bi-info-circle', '已套用優惠碼')

        return
      }

      // 開啟 loading
      const loader = $loading.show()

      // 資料處理
      const coupon = {
        data: {
          code: couponCode
        }
      }

      axios.post(url, coupon)
        .then(res => {
          // 提示訊息
          const { addMsg } = statusStore()
          addMsg('bi-info-circle', '已套用優惠碼')

          // 重整購物車
          this.getCartsList()
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    }
  }
})
