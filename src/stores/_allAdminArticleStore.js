import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
// import { useLoading } from 'vue-loading-overlay'

// const $loading = useLoading()
const { VITE_API, VITE_PATH } = import.meta.env

export const useAllAdminArticleStore = defineStore('adminArticles', {
  state: () => ({
    // 所有文章
    allArticles: [],
    // 當頁文章
    currentArticles: [],
    // 頁碼
    pagination: {},
    // 分類
    categoryList: []
  }),
  actions: {
    // 獲取所有文章
    getAllArticles () {
      for (let i = 1; i <= this.pagination.total_pages; i++) {
        const url = `${VITE_API}/api/${VITE_PATH}/admin/articles?page=${i}`

        axios.get(url)
          .then(res => {
            const { articles } = res.data
            this.allArticles += articles

            console.log(`ArticleStore 拿到第 ${i} 頁文章了`)
          })
          .catch(err => {
            swal.fire(
              {
                icon: 'error',
                text: err.response.data.message
              }
            )
          })
      }
      console.log('即將執行 category')
      this.getCategoryList()
    },

    // 取得文章分類列表
    getCategoryList () {
      const articles = Object.values(this.allArticles)
      const categoryList = new Set(articles.map(item => item.category))
      this.categoryList = [...categoryList]
      console.log('this.categoryList', this.categoryList)
    },

    // 獲取當頁文章
    getCurrentArticles (page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/articles?page=${page}`

      axios.get(url)
        .then(res => {
          const { articles, pagination } = res.data
          this.currentArticles = articles
          this.pagination = pagination
          console.log('allAdminArticleStore 的 getCurrentArticles 結束')

          this.getAllArticles()
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
    }
  }
})
