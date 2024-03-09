<template>
  <div class="container user-page-container flex-grow-1">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">購物車</h2>
    <p v-if="!cartsList.final_total" class="text-center">目前購物車內沒有內容</p>
    <div class="position-relative" v-else>
      <button class="position-absolute top-0 start-0 btn btn-primary rounded-0 fs-info text-info" type="button"
        @click="clearCartsList" :disabled="!cartsList.final_total">清空購物車</button>
      <table class="table mb-4 mb-md-5">
        <thead>
          <tr class="fs-info fs-md-6">
            <th scope="col" style="padding-left:0;"></th>
            <th scope="col" class="fw-bold">
              <span class="d-none d-md-block">商品</span>
            </th>
            <th scope="col" class="d-none d-md-table-cell fw-bold">單價</th>
            <th scope="col" class="fw-bold">數量</th>
            <th scope="col" class="fw-bold">總計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartsList.carts" :key="item.id">
            <th scope="row" class="w-auto w-md-15" style="padding-left:0;">
              <button type="button" class="btn px-0" @click="deleteCartItem(item.id)">
                <i class="bi bi-x fs-4"></i>
              </button>
            </th>
            <td>
              <div class="d-flex gap-3 gap-md-5">
                <div style="max-width:107px;" class="ratio-1x1">
                  <img :src="item.product.imageUrl" :alt="item.product.title" class="w-100 h-100 object-fit-contain"
                    style="min-width:20px;">
                </div>
                <div style="max-width: 286px;min-width: 90px;" class="d-flex flex-column">
                  <div class="flex-grow-1">
                    <h3 class="mb-1 fw-bold fs-info fs-md-6">{{ item.product.title }}</h3>
                    <p class="d-none d-md-block fs-info text-info fw-light">{{ item.product.artist }}</p>
                  </div>
                  <p class="fs-info fs-md-6">{{ item.product.size }}</p>
                </div>
              </div>
            </td>
            <td class="d-none d-md-table-cell fs-info fs-md-6">
              NT$ {{ item.product.origin_price.toLocaleString() }}
            </td>
            <td class="fs-info fs-md-6">
              <select class="form-select form-select-sm rounded-0 border-default fs-info fs-md-6"
                aria-label=".form-select-sm example" style="width:65px;" v-model.number="item.qty"
                @change="updateCart(item)">
                <option v-for="num in item.product.quantity" :key="num" :selected="num === item.qty" :value="num">{{ num
                  }}</option>
              </select>
            </td>
            <td class="fs-info fs-md-6">
              NT$ {{ item.final_total.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row g-6 justify-content-between">
        <div class="col-12 col-md-5 col-lg-4">
          <div class="row">
            <div class="col-6">
              <div class="border-bottom border-default h-100">
                <input type="text" placeholder="請輸入優惠碼" class="form-control border-0 text-center h-100"
                  v-model.trim="coupon">
              </div>
            </div>
            <div class="col-6">
              <button class="py-3 btn btn-outline-default rounded-0 w-100" type="button"
                :disabled="!cartsList.final_total" @click="checkCoupon(coupon)">輸入優惠券</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="border-bottom border-default">
            <div class="row mb-4">
              <div class="col fw-bold">總計</div>
              <div class="col text-end fw-bold">NT$ {{ cartsList.total.toLocaleString() }}</div>
            </div>
            <div class="row mb-4 mb-md-6">
              <div class="col fw-bold">折扣</div>
              <div class="col text-end fw-bold">- NT$ {{ (cartsList.total - cartsList.final_total).toLocaleString() }}
              </div>
            </div>
          </div>
          <div class="row py-4 py-md-7">
            <div class="col fw-bold fs-6 fs-md-5">結帳金額</div>
            <div class="col text-end fw-bold fs-6 fs-md-5">NT$ {{ cartsList.final_total
      .toLocaleString() }}</div>
          </div>
          <button type="button" class="py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100" @click="checkOrder"
            :disabled="!cartsList.final_total">送出訂單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/userCartStore.js'
import { mapActions, mapState } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // coupon
      coupon: '',
      // 顯示 toast
      toastState: true,
      // 動作成功提示
      doAction: null
    }
  },
  methods: {
    // 獲得購物車資料
    ...mapActions(cartStore, ['getCartsList', 'updateCart', 'deleteCartItem', 'checkCoupon']),

    // 刪除全部購物車
    clearCartsList () {
      // 刪除前提示詢問
      this.swalQuestionWithBootstrapButtons
        .fire({
          title: '確定要清空購物車嗎？',
          icon: 'question',
          text: '這個動作無法復原',
          showCancelButton: true,
          cancelButtonText: '取消',
          confirmButtonText: '確認更改'
        }).then((result) => {
          // 確認刪除
          if (result.isConfirmed) {
            // 開啟 loading
            const loader = this.$loading.show()

            // 資料處理
            const url = `${VITE_API}/api/${VITE_PATH}/carts`

            this.axios.delete(url)
              .then(res => {
                // 提示訊息
                this.swalInfoCheckWithBootstrapButtons.fire({
                  title: res.data.message,
                  confirmButtonText: '確認'
                })

                // 重整購物車
                this.getCartsList()
              })
              .catch(err =>
                this.swalInfoCheckWithBootstrapButtons.fire({
                  icon: 'error',
                  text: err.response.data.message,
                  confirmButtonText: '確認'
                }))
              .finally(() => {
                // 關閉 loading
                loader.hide()
              })
          }
        })
    },

    // 前往訂單資料頁
    checkOrder () {
      this.$router.push('/order/checkform')
    }
  },
  mounted () {
    this.getCartsList()

    // 客製化 question alert 按鈕
    this.swalQuestionWithBootstrapButtons = this.$swal.mixin({
      customClass: {
        confirmButton: 'm-1 btn btn-outline-default',
        cancelButton: 'm-1 btn btn-default'
      },
      buttonsStyling: false
    })
    // 客製化 info check alert 按鈕
    this.swalInfoCheckWithBootstrapButtons = this.$swal.mixin({
      customClass: {
        confirmButton: 'm-1 btn btn-default'
      },
      buttonsStyling: false
    })
  },
  computed: { ...mapState(cartStore, ['cartsList']) }
}
</script>

<style lang="scss" scoped>
.table thead tr th {
  border: none;
}

.table> :not(caption)>*>* {
  padding-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}
</style>
