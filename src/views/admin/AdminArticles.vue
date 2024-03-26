<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <div class="d-flex justify-content-between py-4 py-md-7">
      <h2 class=" fw-bold">文章管理</h2>
      <router-link to="/admin/articleinfo/new" class="btn btn-dark">建立文章</router-link>
    </div>

    <div>
      <p v-if="!currentArticles.length" class="py-5 text-center">目前沒有文章</p>
      <!-- 文章列表 -->
      <table v-else class="table align-middle fs-info fs-md-6">
        <thead>
          <tr>
            <th class="text-nowrap">首頁<span class="d-block d-md-inline">置頂</span></th>
            <th>標題</th>
            <th class="d-none d-md-table-cell">分類</th>
            <th>狀態</th>
            <th class="d-none d-lg-table-cell">作者</th>
            <th class="d-none d-md-table-cell">撰寫日期</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in currentArticles" :key="article.id">
            <td><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="setTopArticle"
                @click="setTopArticle(article.id)" :checked="article.isTop" :ref="'topArticleCheckBox' + article.id">
            </td>
            <td>{{ article.title }}</td>
            <td class="d-none d-md-table-cell">
              <p class="py-1 rounded-pill bg-light text-center text-nowrap">{{ article.category }}</p>
            </td>
            <td>
              <span v-if="article.isPublic" class="text-danger text-nowrap">發佈中</span>
              <span v-else>未發佈</span>
            </td>
            <td class="d-none d-lg-table-cell">
              {{ article.author }}
            </td>
            <td class="d-none d-md-table-cell">{{ new Date(article.create_at * 1000).toLocaleDateString() }}
            </td>
            <td>
              <div class="btn-group align-items-center">
                <!-- 編輯文章 -->
                <button type="button" class="btn border-0" @click="showArticlePage(article.id)">
                  <i class="bi bi-pencil text-default"></i>
                </button>
                <!-- 刪除文章 -->
                <button type="button" class="btn border-0" @click="deleteArticle(article.id)">
                  <i class="bi bi-trash text-danger"></i>
                </button>
                <!-- 開前台文章頁 -->
                <router-link class="d-none d-sm-table-cell btn border-0" target="_blank"
                  :to="`/articleinfo/${article.id}`" :class="{ 'pe-none': !article.isPublic }">
                  <i class="bi bi-house" :class="article.isPublic ? 'text-default' : 'text-light'"></i>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 頁碼 -->
      <PaginationComponent :pagination="pagination" @get-List="getCurrentArticles"></PaginationComponent>
    </div>
  </div>
</template>

<script>
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 當頁文章
      currentArticles: [],
      // 所有文章
      allArticles: [],
      // 頁碼
      pagination: {},
      // 是否為建立新文章
      isNew: false,
      // 客製化 question alert 按鈕
      swalQuestionWithBootstrapButtons: null,
      // 客製化 info check alert 按鈕
      swalInfoCheckWithBootstrapButtons: null
    }
  },
  methods: {
    // 獲取當前頁面文章
    getCurrentArticles (page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/articles?page=${page}`

      this.axios
        .get(url)
        .then((res) => {
          const { articles, pagination } = res.data
          this.currentArticles = articles
          this.pagination = pagination

          // 撈取所有文章，用於確認置頂文章
          this.getAllArticles(this.pagination.total_pages)
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            icon: 'error',
            text: err.response.data.message,
            confirmButtonText: '確認'
          })
        })
    },

    // 獲取所有文章，用於確認置頂文章
    getAllArticles (pages) {
      // 重置最新文章
      this.allArticles = []

      // 生成所有文章列表
      for (let i = 1; i <= pages; i++) {
        const url = `${VITE_API}/api/${VITE_PATH}/admin/articles?page=${i}`
        this.axios
          .get(url)
          .then((res) => {
            const { articles } = res.data
            this.allArticles = this.allArticles.concat(articles)
          })
          .catch((err) => {
            this.swalInfoCheckWithBootstrapButtons.fire({
              icon: 'error',
              text: err.response.data.message,
              confirmButtonText: '確認'
            })
          })
      }
    },

    // 觀看文章
    showArticlePage (id) {
      this.$router.push(`/admin/articleinfo/${id}`)
    },

    // 刪除文章
    deleteArticle (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/article/${id}`

      // 刪除前詢問
      this.swalQuestionWithBootstrapButtons
        .fire({
          title: '確定要刪除文章嗎？',
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

            this.axios.delete(url)
              .then(res => {
                // 提示訊息
                this.swalInfoCheckWithBootstrapButtons.fire({
                  title: res.data.message,
                  confirmButtonText: '確認'
                })
                // 重整文章列表
                this.getCurrentArticles()
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
    },

    // 確認當前置頂文章
    checkTopArticle (id) {
      const topArticle = this.allArticles.filter(article => article.isTop === true)
      return topArticle
    },

    // 文章設為首頁置頂
    async setTopArticle (id) {
      try {
        const currentTop = await this.checkTopArticle(id)

        // 若目前沒有置頂文章
        if (!currentTop.length) {
          // 開啟 loading
          const loader = this.$loading.show()

          // 因 articleList API 獲得資料缺 content，必須額外針對特定 article 求完整資料
          const tempArticleInfo = await this.getArticleInfo(id)
          tempArticleInfo.isTop = true

          // 設定 top 文章
          const url = `${VITE_API}/api/${VITE_PATH}/admin/article/${id}`

          this.axios.put(url, { data: tempArticleInfo })
            .then((res) => {
              this.swalInfoCheckWithBootstrapButtons.fire({
                title: '已設為置頂',
                confirmButtonText: '確認'
              })
              this.getCurrentArticles()
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

          return false
        }

        // 若置頂文章與當前勾選文章相同
        if (currentTop[0].id === id) {
          // 開啟 loading
          const loader = this.$loading.show()

          // 因 articleList API 獲得資料缺 content，必須額外針對特定 article 求完整資料
          const tempArticleInfo = await this.getArticleInfo(id)
          tempArticleInfo.isTop = false

          // 設定 top 文章
          const url = `${VITE_API}/api/${VITE_PATH}/admin/article/${id}`

          this.axios.put(url, { data: tempArticleInfo })
            .then((res) => {
              this.swalInfoCheckWithBootstrapButtons.fire({
                title: '已取消置頂',
                confirmButtonText: '確認'
              })
              this.getCurrentArticles()
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

          return false
        }

        // 若置頂文章和當前勾選文章不同
        if (currentTop[0].id !== id) {
          // 取消當前勾選文章的勾選狀態
          const targetCheckbox = `topArticleCheckBox${id}`
          this.$refs[targetCheckbox][0].checked = false

          // 提示需先取消當前置頂
          this.swalInfoCheckWithBootstrapButtons.fire({
            title: '請先取消當前置頂文章',
            confirmButtonText: '確認'
          })

          return false
        }
      } catch (err) {
        console.log('錯誤:', err)
        throw err
      }
    },

    // 因 articleList API 獲得資料缺 content，必須額外針對特定 article 求完整資料
    getArticleInfo (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/article/${id}`

      return this.axios
        .get(url)
        .then((res) => {
          return res.data.article
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            icon: 'error',
            text: err.response.data.message,
            confirmButtonText: '確認'
          })
        })
    }
  },
  components: {
    PaginationComponent
  },
  mounted () {
    // 獲取當頁資料
    this.getCurrentArticles()

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
