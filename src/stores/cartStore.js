import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLoading } from 'vue-loading-overlay'
const $loading = useLoading()

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    // 購物車清單
    cartsList: [],
    // 顯示 toast
    toastState: true,
    // 動作成功提示
    doAction: null,
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
          this.toastState = !this.toastState
          this.doAction = 'addToCart'
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
      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      axios.get(url)
        .then(res => {
          this.cartsList = res.data.data
          console.log(this.cartsList)
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
          this.toastState = !this.toastState
          this.doAction = 'updateCart'
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
          this.toastState = !this.toastState
          this.doAction = 'deleteCartItem'
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
          this.toastState = !this.toastState
          this.doAction = 'copyCouponCode'
          this.coupon_code = code
        })
    },

    // 確認 coupon
    checkCoupon (couponCode) {
      console.log('checkCoupon')
      const url = `${VITE_API}/api/${VITE_PATH}/coupon`

      if (this.cartsList.total !== this.cartsList.final_total) {
        swal.fire({
          title: '已經套用此優惠券',
          confirmButtonColor: '#333333',
          confirmButtonText: '確認'
        })

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
          this.toastState = !this.toastState
          this.doAction = 'useCoupon'

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
