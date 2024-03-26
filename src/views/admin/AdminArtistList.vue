<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <div class="d-flex justify-content-between py-4 py-md-7 ">
      <h2 class="fw-bold">藝術家管理</h2>
      <!-- btn 建立新藝術家 -->
      <router-link to="/admin/artistinfo/new" class="btn btn-dark d-flex align-items-center">建立新的藝術家</router-link>
    </div>
    <!-- 藝術家列表 -->
    <div>
      <table class="table align-middle fs-info fs-md-6">
        <thead>
          <tr>
            <th>圖片</th>
            <th>名稱</th>
            <th class="d-none d-md-table-cell text-center">分類</th>
            <th>狀態</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artist in artistsList" :key="artist.id">
            <td>
              <div class="bg-img-center bg-img-contain bg-img-norepeat ratio-1x1"  style="min-width:50px;max-width: 100px;"
                :style="{ backgroundImage: `url(${artist.imageUrl})` }"></div>
            </td>
            <td>
              {{ artist.title }}
            </td>
            <td class="d-none d-md-table-cell">
              <div class="py-1 rounded-pill bg-light text-center text-nowrap">
                {{ artist.group }}
              </div>
            </td>
            <td>
              <p v-if="artist.is_enabled" class="text-danger text-nowrap">已上架</p>
              <p v-else class="text-nowrap">未上架</p>
            </td>
            <td>
              <div class="btn-group align-items-center">
                <!-- 編輯藝術家 -->
                <button type="button" class="btn border-0" @click="showArtistPage(artist.id)">
                  <i class="bi bi-pencil text-default"></i>
                </button>
                <!-- 刪除藝術家 -->
                <button type="button" class="btn border-0" @click="deleteArtist(artist.id)">
                  <i class="bi bi-trash text-danger"></i>
                </button>
                <!-- 開藝術家資訊頁 -->
                <router-link class="d-none d-sm-table-cell btn border-0" target="_blank"
                  :to="`/artistinfo/${artist.id}`" :class="{ 'pe-none': !artist.is_enabled }">
                  <i class="bi bi-house" :class="artist.is_enabled ? 'text-default' : 'text-light'"></i>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 頁碼 -->
      <PaginationComponent :pagination="pagination" @get-List="getArtistList"></PaginationComponent>
    </div>
  </div>
</template>

<script>
// import components
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 藝術家列表
      artistsList: [],
      // 頁碼
      pagination: {},
      // 客製化 question alert 按鈕
      swalQuestionWithBootstrapButtons: null,
      // 客製化 info check alert 按鈕
      swalInfoCheckWithBootstrapButtons: null
    }
  },
  methods: {
    // 獲取藝術家列表
    getArtistList (page = 1, category = 'artists') {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/products?page=${page}&category=${category}`

      this.axios
        .get(url)
        .then((res) => {
          const { products, pagination } = res.data
          this.artistsList = products
          this.pagination = pagination
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            text: err.response.data.message,
            confirmButtonText: '確認'
          })
        })
    },

    // 觀看藝術家頁
    showArtistPage (id) {
      this.$router.push(`/admin/Artistinfo/${id}`)
    },

    // 刪除藝術家
    deleteArtist (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/product/${id}`

      // 刪除前詢問
      this.swalQuestionWithBootstrapButtons
        .fire({
          title: '確定要刪除藝術家嗎？',
          text: '這個動作無法復原',
          icon: 'question',
          showCancelButton: true,
          cancelButtonText: '取消',
          confirmButtonText: '確認刪除'
        })
        .then((result) => {
          if (result.isConfirmed) {
            // 開啟 loading
            const loader = this.$loading.show()

            this.axios
              .delete(url)
              .then((res) => {
                // 提示訊息
                this.swalInfoCheckWithBootstrapButtons.fire({
                  title: res.data.message,
                  confirmButtonText: '確認'
                })
                // 重整購物車
                this.getArtistList()
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
          }
        })
    }
  },
  mounted () {
    // 獲取藝術家列表
    this.getArtistList()

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
  components: {
    PaginationComponent
  }
}
</script>
