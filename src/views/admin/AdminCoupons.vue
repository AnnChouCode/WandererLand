<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <div class="d-flex justify-content-between py-4 py-md-7">
      <h2 class="fw-bold">優惠券管理</h2>
      <button type="button" class="btn btn-dark" @click="showCoupon('create')">建立優惠券</button>
    </div>

    <div>
      <p v-if="!couponList.length" class="py-5 text-center">目前沒有優惠券</p>
      <!-- 優惠券列表 -->
      <table v-else class="table align-middle fs-info fs-md-6">
        <thead>
          <tr>
            <th class="d-none d-md-table-cell">優惠碼</th>
            <th>型式</th>
            <th>到期日</th>
            <th>狀態</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in couponList" :key="coupon.id">
            <td class="d-none d-md-table-cell">{{ coupon.code }}</td>
            <td>
              <p class="fw-bold">{{ coupon.title }}</p>
              <span class="text-default">折扣：{{ coupon.percent }} %</span>
            </td>
            <td>{{ new Date(coupon.due_date * 1000).toLocaleDateString() }}</td>
            <td>
              <span v-if="coupon.is_enabled" class="text-danger">啟用中</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group align-items-center">
                <button type="button" class="btn border-0" @click="showCoupon('edit', coupon)">
                  <i class="bi bi-pencil text-default"></i>
                </button>
                <button type="button" class="btn border-0" @click="deleteCoupon(coupon.id)">
                  <i class="bi bi-trash text-danger"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 頁碼 -->
      <PaginationComponent :pagination="pagination" @get-List="getCouponList"></PaginationComponent>
    </div>
  </div>
  <AdminCouponModal :isNew="isNew" :couponInfo="tempCoupon" ref="adminCouponModal" @updateCoupon="updateCoupon">
  </AdminCouponModal>
</template>

<script>
// import components
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'
import AdminCouponModal from '@/components/modal/AdminCouponModal.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 當頁 coupon 清單
      couponList: [],
      // 頁碼
      pagination: {},
      // 暫存 coupon 資料
      tempCoupon: {},
      // 是否為建立新 coupon
      isNew: false,
      // 客製化 question alert 按鈕
      swalQuestionWithBootstrapButtons: null,
      // 客製化 info check alert 按鈕
      swalInfoCheckWithBootstrapButtons: null
    }
  },
  methods: {
    // 獲取所有優惠券
    getCouponList (page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/coupons?page=${page}`

      this.axios
        .get(url)
        .then((res) => {
          const { coupons, pagination } = res.data
          this.couponList = coupons
          this.pagination = pagination
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            icon: 'error',
            text: err.response.data.message,
            confirmButtonText: '確認'
          })
        })
    },

    // 建立新優惠券
    updateCoupon (couponData) {
      // 開啟 loading
      const loader = this.$loading.show()

      let url = `${VITE_API}/api/${VITE_PATH}/admin/coupon`
      let httpMethod = 'post'

      if (!this.isNew) {
        url += `/${couponData.id}`
        httpMethod = 'put'
      }

      this.axios[httpMethod](url, { data: couponData })
        .then((res) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            title: res.data.message,
            confirmButtonText: '確認'
          })

          this.$refs.adminCouponModal.closeModal()
          this.getCouponList()
        })
        .catch((err) => {
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
    },

    // 觀看優惠券
    showCoupon (action, data) {
      if (action === 'create') {
        this.isNew = true
      }

      if (action === 'edit') {
        this.isNew = false
        this.tempCoupon = { ...data }
      }

      this.$refs.adminCouponModal.openModal()
    },

    // 刪除優惠券
    deleteCoupon (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${id}`
      const alertTitle = `確定要刪除優惠券 <span class="text-danger">${id}</span> 嗎？`

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
                this.getCouponList()
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
  components: {
    PaginationComponent,
    AdminCouponModal
  },
  mounted () {
    // 獲取所有資料
    this.getCouponList()

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
