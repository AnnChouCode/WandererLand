<template>
  <div class="mb-8 text-center">
    <i class="mb-4 bi bi-check-circle" style="font-size:48px;"></i>
    <p class="fw-bold h5">訂購成功</p>
  </div>
  <div class="mb-7 py-2 py-md-4 border-top border-bottom border-default">
    <div class="d-flex justify-content-between mb-2 mb-md-4">
      <p>訂單編號</p>
      <p>{{ order.id }}</p>
    </div>
    <div class="d-flex justify-content-between mb-2 mb-md-4">
      <p>訂單時間</p>
      <p>{{ orderDate }}</p>
    </div>
    <div v-if="order.total" class="d-flex justify-content-between mb-2 mb-md-4">
      <p>訂單總額</p>
      <p>NT$ {{ order.total.toLocaleString() }}</p>
    </div>
    <div class="d-flex justify-content-between">
      <p>訂單狀態</p>
      <p v-if="order.is_paid">已付款</p>
      <p v-else class="text-danger">未付款</p>
    </div>
  </div>
  <p class="mb-6 mb-md-8 fs-info text-info">※ 您的訂單將在付款後開始訂製，付款後，從開始製作到寄出商品為 14 個工作天。</p>
  <router-link to="/home" class="py-2 btn btn-default text-center rounded-0 w-100 fw-bold">返回首頁</router-link>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 訂單資料
      order: {}
    }
  },
  methods: {
    // 獲得訂單資料
    getOrderInfo (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/order/${id}`

      this.axios.get(url)
        .then(res => {
          // 提示訊息
          this.order = res.data.order
          const orderDate = new Date(this.order.create_at * 1000)
          this.orderDate = orderDate.toLocaleString()
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
    }
  },
  mounted () {
    // 索取訂單編號
    const orderId = this.$route.params.id
    this.getOrderInfo(orderId)
  }
}
</script>
