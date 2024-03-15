<template>
  <div class="py-7 py-md-9">
    <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
      <h2 class="fs-2 fs-md-1">{{ DataInfo[dataCategory].title }}</h2>
      <router-link :to="DataInfo[dataCategory].path"
        class="text-default border-bottom border-default fw-bold fs-info fs-md-6">瀏覽更多</router-link>
    </div>

    <div class="position-relative">
      <Swiper :slidesPerView="2" :spaceBetween="12" :pagination="{
        clickable: true,
      }" :breakpoints="{
        768: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
      }" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }" :modules="modules" class="product-swiper">
        <SwiperSlide v-for="( item, idx ) in  currentDatas " :key="idx">
          <router-link :to="`${DataInfo[dataCategory].infoPath}/${item.id}`">
            <div
              class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img"
              :class="{ 'rounded-circle': isArtistBlock }">
              <img :src="item.imageUrl" :alt="item.title" class="object-fit-contain w-100 h-100 product-img-up">
              <img :src="item.imagesUrl[0]" alt="item.title"
                class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
            </div>
          </router-link>
          <div class="py-3 px-0 px-md-4">
            <router-link :to="`${DataInfo[dataCategory].infoPath}/${item.id}`">
              <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default" :class="{ 'text-center': isArtistBlock }">{{
        item.title }}</h3>
            </router-link>
            <div v-if="!isArtistBlock" class="d-flex justify-content-between align-items-center">
              <p class="fs-info fs-md-6 text-info">NT$ {{ item.price.toLocaleString() }}</p>
              <btnFavorite :productId="item.id"></btnFavorite>
            </div>
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
  </div>
</template>

<script>
// import Swiper js
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  props: ['dataCategory'],
  data () {
    return {
      allDatas: [],
      DataInfo: {
        products: {
          title: '探索新作品',
          path: '/productlist',
          infoPath: '/productinfo'
        },
        artists: {
          title: '認識新藝術家',
          path: '/artistlist',
          infoPath: '/artistinfo'
        },
        favorite: {
          title: '猜你喜歡',
          path: 'favorites',
          infoPath: '/productinfo'
        }
      },
      currentDatas: [],
      // swiper 輪播設定
      modules: [Autoplay, Pagination, Navigation],
      isArtistBlock: true
    }
  },
  methods: {
    // 取得產品分類列表
    getCurrentDatas () {
      const allData = [...this.allDatas]
      this.currentDatas = allData.filter(data => data.category === this.dataCategory).reverse()
    },

    // 獲取所有產品
    getAllDatas () {
      const url = `${VITE_API}/api/${VITE_PATH}/products/all`

      this.axios.get(url)
        .then(res => {
          this.allDatas = res.data.products
          this.getCurrentDatas()
        })
        .catch(err => {
          this.$swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
    }
  },
  mounted () {
    // 傳入分類是藝術家或作品，執行獲取產品資料
    if (this.dataCategory !== 'favorites') {
      this.getAllDatas()
    }

    this.isArtistBlock = this.dataCategory === 'artists'
  },
  components: {
    Swiper,
    SwiperSlide,
    btnFavorite
  }
}
</script>

<style lang="scss" scoped>
:deep(.product-swiper) {
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
    display: inline-block;

    @media (min-width: 768px) {
      display: none;
    }

    &-bullet {
      background: #787878;
    }

    &-bullet-active {
      background: #333333;
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
