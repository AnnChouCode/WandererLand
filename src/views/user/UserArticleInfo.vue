<template>
  <div class="container user-page-container" v-if="article">
    <div class="row">
      <div class="col-12 col-md-8 mx-auto">
        <!-- 圖 -->
        <div class="position-relative mb-5 mb-md-8" v-if="article.imagesUrl">
          <Swiper :slidesPerView="1" :spaceBetween="24"
          :pagination="{
    clickable: true,
  }"
  :loop="true"
  :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }" :modules="modules" class="article-swiper">
            <SwiperSlide v-for="( img, idx ) in article.imagesUrl " :key="idx">
              <div class="position-relative overflow-hidden">
                <img :src="img" alt="news" class="object-fit-contain w-100 h-100">
              </div>
            </SwiperSlide>
            <!-- 左右 navigation -->
            <BtnSwiperNavigation v-if="article.imagesUrl.length > 1" position="top" direction="next"></BtnSwiperNavigation>
            <BtnSwiperNavigation v-if="article.imagesUrl.length > 1" position="top" direction="prev"></BtnSwiperNavigation>
          </Swiper>
        </div>

        <!-- 文字 -->
        <div class="mb-7 mb-md-8 text-center">
          <h2 class="mb-4 h1 lh-sm title-letter-spacing h1">{{ article.title }}</h2>
          <p class="text-info" v-if="article.create_at">
            {{ new Date((article.create_at * 1000)).toLocaleDateString() }}
            <span class="px-2 fw-bold">‧</span>
            {{ article.author }}
          </p>
        </div>
        <div v-html="articleContent" class="mb-7 mb-md-8">
        </div>
        <div class="d-flex gap-1 mb-0 flex-wrap">
          <button type="button" class="btn px-3 py-1 bg-light rounded-pill fs-info text-info"
            v-for="(tag, idx) in article.tag" :key="idx" @click="toRelatedTag(tag)"> {{ tag }} </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 關聯作品 -->
  <div class="container" v-if="article.relatedProduct">
    <div class="py-7 py-md-9">
      <h2 class="mb-7 mb-md-8 fs-2 fs-md-1">關聯作品</h2>

      <div class="row g-3 g-md-8">
        <div class="col-6 col-md-4" v-for="product in article.relatedProduct" :key="product.id">
          <router-link :to="`/productinfo/${product.id}`">
            <div
              class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img">
              <img :src="product.imageUrl" :alt="product.title" class="object-fit-contain w-100 h-100 product-img-up">
              <img :src="product.imagesUrl[0]" alt="item.title"
                class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
            </div>
          </router-link>
          <div class="py-3 px-0 px-md-4">
            <router-link :to="`/productinfo/${product.id}`">
              <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default">{{ product.title }}</h3>
            </router-link>
            <div class="d-flex justify-content-between align-items-center">
              <p class="fs-info fs-md-6 text-info">NT$ {{ product.price.toLocaleString() }}</p>
              <BtnFavorite />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper js
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import Components
import BtnFavorite from '@/components/button/BtnFavorite.vue'
import BtnSwiperNavigation from '@/components/button/BtnSwiperNavigation.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品資訊
      article: {},
      // 產品文章
      articleContent: '',
      // swiper 輪播設定
      modules: [Autoplay, Pagination, Navigation]
    }
  },
  methods: {
    // 獲取當頁文章資料
    getCurrentArticle (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/article/${id}`

      // 獲取當頁文章資料
      return this.axios.get(url)
        .then(res => {
          const resData = res.data.article
          this.article = resData
          this.handleArticleContent()
        })
        .catch(err => console.log(err.response.data.message))
    },

    // 處理文章 UI
    handleArticleContent () {
      const content = this.article.content
      const replacements = [
        ['<h2>', '<h2 class="mt-8 mb-4 fs-3 fs-md-2">'],
        ['<h3>', '<h3 class="mt-5 mb-3 fs-5 fs-md-3">'],
        ['<h4>', '<h4 class="my-3 fs-6 fs-md-5">'],
        ['<p>', '<p class="mb-3 fs-info fs-md-6">']
      ]

      this.articleContent = replacements.reduce((processedContent, [search, replace]) => {
        return processedContent.replaceAll(search, replace)
      }, content)
    },

    // 前往相關 tag 文章
    toRelatedTag (tag) {
      this.$router.push(`/articleList?tag=${tag}`)
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.getCurrentArticle(id)
  },
  components: {
    Swiper,
    SwiperSlide,
    BtnFavorite,
    BtnSwiperNavigation
  }
}
</script>

<style lang="scss" scoped>
:deep(.article-swiper) {
  margin: auto;
  padding: 0;

  @media (min-width: 768px) {
    margin: 0 -20px !important;
    padding: 0 20px !important;
  }

  /* swiper 顯示區域尺寸 */
  .swiper-wrapper {
    margin-bottom: 36px;

    @media (min-width: 768px) {
      margin-bottom: 0rem;
    }
  }

  /*Swiper 頁碼導覽*/
  .swiper-pagination {
    display: inline-block !important;

    @media (min-width: 768px) {
      display: none !important;
    }

    &-bullet {
      background: #787878 !important;
    }

    &-bullet-active {
      background: #333333 !important;
    }
  }
}
</style>
