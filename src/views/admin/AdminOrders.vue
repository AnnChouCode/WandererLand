<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <div class="d-flex justify-content-between py-4 py-md-7 ">
      <h2 class="fw-bold">訂單管理</h2>
      <button type="button" class="btn btn-dark" @click="deleteOrder('all')">清除全部訂單</button>
    </div>
    <div>
      <p v-if="!currentOrderList.length" class="py-5 text-center">目前沒有訂單</p>
      <!-- 訂單列表 -->
      <table v-else class="table align-middle table-sm fs-info fs-md-6">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th class="d-none d-md-table-cell text-center">訂單時間</th>
            <th class="d-none d-lg-table-cell text-center">客戶姓名</th>
            <th class="text-nowrap">訂單<span class="d-block d-sm-inline">狀態</span></th>
            <th class="d-none d-lg-table-cell text-center">總金額</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in currentOrderList" :key="order.id">
            <td>{{ order.id }}</td>
            <td class="d-none d-md-table-cell text-center">{{ new Date(order.create_at * 1000).toLocaleDateString() }}
            </td>
            <td class="d-none d-lg-table-cell text-center">{{ order.user.name }}</td>
            <td>
              <span v-if="!order.is_paid" class="text-warningh ">未付款</span>
              <span v-else-if="order.is_paid && !order.is_shipping" class="text-danger">待出貨</span>
              <span v-else class="text-info">已完成</span>
            </td>
            <td class="d-none d-lg-table-cell text-end">NT$ {{ order.total.toLocaleString() }}</td>
            <td>
              <div class="btn-group align-items-center">
                <button type="button" class="btn border-0" @click="showOrder(order.id)">
                  <i class="bi bi-eye text-default"></i>
                </button>
                <button type="button" class="btn border-0" @click="deleteOrder(order.id)">
                  <i class="bi bi-trash text-danger"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 頁碼 -->
      <PaginationComponent :pagination="pagination" @get-List="getCurrentOrderList"></PaginationComponent>
    </div>
  </div>
</template>

<script>
import { useAdminOrderStore } from '@/stores/adminOrderStore.js'
import { mapStores } from 'pinia'

// import components
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'

const ordersStore = useAdminOrderStore()
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 當頁訂單列表
      currentOrderList: [],
      // 頁碼
      pagination: {},
      // 客製化 question alert 按鈕
      swalQuestionWithBootstrapButtons: null,
      // 客製化 info check alert 按鈕
      swalInfoCheckWithBootstrapButtons: null
    }
  },
  methods: {
    // 獲取所有訂單
    async getCurrentOrderList (page = 1) {
      await ordersStore.getCurrentOrderList(page)

      this.currentOrderList = ordersStore.currentOrderList
      this.pagination = ordersStore.pagination
    },

    // 觀看訂單詳細資料
    showOrder (id) {
      this.$router.push(`/admin/orderinfo/${id}`)
    },

    // 刪除訂單
    deleteOrder (id) {
      let url = `${VITE_API}/api/${VITE_PATH}/admin/orders/all`
      let alertTitle = '確定要刪除<span class="text-danger">全部</span>訂單嗎？'

      if (id !== 'all') {
        url = `${VITE_API}/api/${VITE_PATH}/admin/order/${id}`
        alertTitle = `確定要刪除訂單 <p><span class="text-danger">${id}</span> 嗎？</p>`
      }

      // 刪除前詢問
      this.swalQuestionWithBootstrapButtons
        .fire({
          title: alertTitle,
          text: '請再次確認，以免影響顧客權益',
          icon: 'question',
          showCancelButton: true,
          cancelButtonText: '取消',
          confirmButtonText: '確認刪除'
        })
        .then((result) => {
          if (result.isConfirmed) {
            // 開啟 loading
            const loader = this.$loading.show()

            this.axios.delete(url)
              .then(res => {
                // 提示訊息
                this.swalInfoCheckWithBootstrapButtons.fire({
                  title: res.data.message,
                  confirmButtonText: '確認'
                })

                // 重整訂單列表
                this.getCurrentOrderList()
              })
              .catch(err => {
                this.swalInfoCheckWithBootstrapButtons.fire({
                  icon: 'error',
                  text: err.response.data.message,
                  confirmButtonText: '確認'
                })
              })
              .finally(() => {
                // 關閉 loading
                loader.hide()
              })
          }
        })
    }
  },
  computed: {
    ...mapStores(useAdminOrderStore)
  },
  components: {
    PaginationComponent
  },
  mounted () {
    // 獲取所有資料
    this.getCurrentOrderList()

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
  }
}
</script>

<style></style>
