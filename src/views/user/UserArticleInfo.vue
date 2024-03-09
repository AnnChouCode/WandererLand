<template>
  <div class="container user-page-container" v-if="article">
    <div class="row">
      <div class="col-12 col-md-8 mx-auto">
        <!-- 圖 -->
        <div class="position-relative mb-5 mb-md-8">
          <Swiper :slidesPerView="1" :spaceBetween="24" :pagination="{
    clickable: true,
  }" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }" :modules="modules" class="article-swiper">
            <SwiperSlide v-for="( img, idx ) in  article.imagesUrl " :key="idx">
              <div class="position-relative overflow-hidden">
                <img :src="img" alt="news" class="object-fit-contain w-100 h-100">
              </div>
            </SwiperSlide>
            <div class="z-1 swiper-button-next translate-middle-y">
              <i class="bi bi-arrow-right-circle text-warning fs-1"></i>
            </div>
            <div class="z-1 swiper-button-prev translate-middle-y">
              <i class="bi bi-arrow-left-circle text-warning fs-1"></i>
            </div>
          </Swiper>
        </div>

        <!-- 文字 -->
        <div class="mb-7 mb-md-8 text-center">
          <h2 class="mb-4 h1 lh-sm title-letter-spacing h1">{{ article.title }}</h2>
          <p class="text-info">
            {{ new Date((article.create_at * 1000)).toLocaleDateString() }}
            <span class="px-2 fw-bold">‧</span>
            {{ article.author }}
          </p>
        </div>
        <div v-html="articleContent" class="mb-7 mb-md-8">
        </div>
        <div class="d-flex gap-1 mb-0 flex-wrap">
          <div class="px-3 py-1 bg-light rounded-pill fs-info text-info" v-for="(tag, idx) in article.tag" value="item"
            :key="idx">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 關聯作品 -->
  <div class="container" v-if="article.relatedProduct">
    <div class="py-7 py-md-9">
      <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
        <h2 class="fs-2 fs-md-1">關聯作品</h2>
        <router-link to="/productlist"
          class="text-default border-bottom border-default fw-bold fs-info fs-md-6">瀏覽更多</router-link>
      </div>

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
              <btnFavorite></btnFavorite>
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
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

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
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.getCurrentArticle(id)
  },
  components: {
    Swiper,
    SwiperSlide,
    btnFavorite
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

  /*Swiper 左右箭頭*/
  /* 右 */
  .swiper-button-next {
    display: none;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-right-circle' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'/%3E%3C/svg%3E") no-repeat center;
    background-size: 40px 40px;
    z-index: 11;
    right: 0;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  /* 左 */
  .swiper-button-prev {
    position: absolute;
    z-index: 1;
    left: 0;
    display: none;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-left-circle' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z'/%3E%3C/svg%3E") no-repeat center;
    background-size: 40px 40px;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      display: flex;
    }
  }
}
</style>
