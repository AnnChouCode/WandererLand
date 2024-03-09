import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('articleStore', {
  state: () => ({
    // 文章清單
    articlesList: []
  }),
  actions: {
    // 取得文章列表
    getArticlesList () {
      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/articles`
      return axios.get(url)
        .then(res => {
          this.articlesList = res.data.articles
          console.log('this.articlesList', this.articlesList)
          return res
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  },
  getters: {
    sortArticles: ({ articlesList }) => {
      // 深拷貝 articlesList
      const articles = JSON.parse(JSON.stringify(articlesList))

      // 求取置頂文章
      const topArticleIndex = articlesList.findIndex(article => article.isTop === true)

      const topArticle = articles.splice(topArticleIndex, 1)

      // 求取置頂文章外的最新文章
      const articleNum = 5
      const newestArticles = articles.slice(0, articleNum)

      return {
        topArticle,
        newestArticles
      }
    }
  }
})
