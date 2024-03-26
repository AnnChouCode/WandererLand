<template>
  <p class="mb-7 fs-info text-info">※ 您的訂單將在付款後開始訂製，付款後，從開始製作到寄出商品為 14 個工作天。</p>
  <div class="mb-7 py-2 py-md-4 border-top border-bottom border-default">
    <div class="d-flex justify-content-between mb-2 mb-md-4">
      <p>訂單編號</p>
      <p>{{ order.id }}</p>
    </div>
    <div v-if="order.total" class="d-flex justify-content-between">
      <p>訂單總額</p>
      <p>NT$ {{ order.total.toLocaleString() }}</p>
    </div>
  </div>
  <v-form ref="form" v-slot="{ errors }" class="d-flex flex-column align-items-end" @submit="payOrder">
    <div class="mb-4 mb-md-7 form-floating w-100">
      <v-field id="payment" name="付款方式" class="form-select border-info rounded-0"
        :class="{ 'is-invalid': errors['付款方式'] }" placeholder="請選擇付款方式" rules="required" v-model="payment" as="select">
        <option value="">付款方式</option>
        <option value="credit_card">信用卡付款</option>
        <option value="ATM">ATM 付款</option>
      </v-field>
      <error-message name="付款方式" class="invalid-feedback"></error-message>
      <label for="payment" class="form-label has-required">請選擇付款方式</label>
    </div>
    <button class="py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto" type="submit">
      結帳付款
    </button>
  </v-form>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 訂單資料
      order: {},
      // 付款方式
      payment: ''
    }
  },
  methods: {
    // 獲得訂單資料
    getOrderInfo (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/order/${id}`

      this.axios.get(url)
        .then(res => {
          this.order = res.data.order
        })
        .catch(err => {
          this.swalInfoCheckWithBootstrapButtons.fire(
            {
              icon: 'error',
              text: err.response.data.message,
              confirmButtonText: '確認'
            }
          )
        })
    },

    // 付款
    payOrder () {
      // 開啟 loading
      const loader = this.$loading.show()

      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/pay/${this.order.id}`

      this.axios.post(url)
        .then(res => {
          // 提示訊息
          this.swalInfoCheckWithBootstrapButtons.fire({
            title: res.data.message,
            confirmButtonText: '確認'
          })

          // 清除表單
          this.$refs.form.resetForm()
          // 前往訂購結果頁面
          this.$router.push(`/order/orderhistory/${this.order.id}`)
        })
        .catch(err => {
          this.swalInfoCheckWithBootstrapButtons.fire(
            {
              icon: 'error',
              text: err.response.data.message,
              confirmButtonText: '確認'
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    }
  },
  mounted () {
    // 索取訂單編號
    const orderId = this.$route.params.id
    this.getOrderInfo(orderId)

    // 客製化 info check alert 按鈕
    this.swalInfoCheckWithBootstrapButtons = this.$swal.mixin({
      customClass: {
        confirmButton: 'm-1 btn btn-default'
      },
      buttonsStyling: false
    })
  }
}
</script>
