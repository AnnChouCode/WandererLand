<template>
  <div class="container user-page-container flex-grow-1">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">最新消息</h2>
    <div class="row g-3 g-lg-8">
      <div class="col-lg-3">
        <ul class="d-flex flex-row flex-lg-column justify-content-between gap-0 gap-lg-6 list-unstyled fs-info fs-lg-5">
          <li>
            <a href="#" class="text-default" :class="filterRules.category === undefined ? 'fw-bold' : ''"
              @click.prevent="filterHandle()">全部文章</a>
          </li>
          <li>
            <a href="#" class="text-default" :class="filterRules.category === '最新消息' ? 'fw-bold' : ''"
              @click.prevent="filterHandle(['category', '最新消息'])">最新消息</a>
          </li>
          <li>
            <a href="#" class="text-default" :class="filterRules.category === '活動講座' ? 'fw-bold' : ''"
              @click.prevent="filterHandle(['category', '活動講座'])">活動講座</a>
          </li>
          <li>
            <a href="#" class="text-default" :class="filterRules.category === '專欄文章' ? 'fw-bold' : ''"
              @click.prevent="filterHandle(['category', '專欄文章'])">專欄文章</a>
          </li>
        </ul>
        <hr class="my-3 my-lg-7">
        <div class="accordion accordion-flush" id="accordionCategory">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button fs-info fs-lg-5 bg-transparent p-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="true"
                aria-controls="collapseCategory" style="box-shadow: none;">
                探索主題
              </button>
            </h2>
            <div id="collapseCategory" class="accordion-collapse collapse show" data-bs-parent="#accordionCategory">
              <div class="accordion-body px-0 py-3 py-lg-6">
                <div class="d-flex gap-1 mb-0 flex-wrap">
                  <button type="button" class="btn px-3 py-1 bg-light rounded-pill fs-info text-info"
                    v-for="(tag, idx) in tagList.articleTagList" :key="idx" @click="filterHandle(['tag', tag])">
                    {{ tag }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row g-3 g-lg-8">
          <div class="col-6" v-for="article in articles" :key="article.id">
            <router-link :to="`/articleinfo/${article.id}`" class="text-default">
              <div class="ratio ratio-4x3 overflow-hidden">
                <img :src="article.imageUrl" :alt="article.title" class="object-fit-cover w-100 h-100">
              </div>
              <div class="px-0 px-lg-3 py-4">
                <h3 class="mb-2 fs-info fs-md-5 fw-bold doubleline-ellipsis">{{ article.title }}</h3>
                <div class="d-flex mb-2 mb-lg-4 text-info fs-info" v-if="article.create_at">
                  <span>{{ new Date((article.create_at * 1000)).toLocaleDateString() }}</span>
                  <span class="px-2 fw-bold">‧</span>
                  <span class="single-ellipsis">{{ article.author }}</span>
                </div>
                <p class="fs-info fs-md-6 threeline-ellipsis">
                  {{ article.description }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userArticleStore from '@/stores/userArticleStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  data () {
    return {
      articles: [],
      // 篩選條件
      filterRules: {}
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userArticleStore, ['getArticlesList']),

    // 處理篩選條件
    filterHandle (filters) {
      if (filters) {
        const [key, values] = filters
        this.filterRules[key] = values

        const path = Object.entries(this.filterRules).map(item => item.join('=')).join('&')
        this.$router.push(`/articleList?${path}`)
        return
      }

      this.filterRules = {}
      this.$router.push('/articleList')
    },

    // 篩選文章
    filterShow (filters) {
      // 獲取排序篩選條件
      const { category, tag } = filters

      // 初始化暫時文章列表
      let tempArticles = this.articlesList

      if (category !== undefined && category !== 'all') {
        tempArticles = tempArticles.filter(article => article.category === category)
      }

      if (tag !== undefined) {
        tempArticles = tempArticles.filter(article => article.tag.includes(tag))
      }

      this.articles = tempArticles
    }
  },
  watch: {
    $route () {
      const filters = {
        category: this.$route.query.category,
        tag: this.$route.query.tag
      }

      this.filterShow(filters)
    }
  },
  async mounted () {
    await this.getArticlesList()

    const filters = {
      category: this.$route.query.category,
      tag: this.$route.query.tag
    }

    this.filterShow(filters)
  },
  computed: {
    ...mapState(userArticleStore, ['articlesList', 'tagList'])
  }
}
</script>
