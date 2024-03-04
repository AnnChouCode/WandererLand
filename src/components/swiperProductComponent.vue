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
      }" :modules="modules" class="mySwiper">
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
              <button type="button" class="btn p-0">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div class="end-0 z-1 swiper-button-next">
          <i class="bi bi-arrow-right-circle text-warning fs-1"></i>
        </div>
        <div class="start-0 z-1 swiper-button-prev">
          <i class="bi bi-arrow-left-circle text-warning fs-1"></i>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<!-- <template>
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
      }" :navigation="true" :modules="modules" class="mySwiper">
        <SwiperSlide v-for="(item, idx) in currentDatas" :key="idx">
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
              <button type="button" class="btn p-0">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template> -->

<script>
// import Swiper js
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
      modules: [Autoplay, Pagination, Navigation],
      isArtistBlock: true
    }
  },
  methods: {
    goNext () {
      Swiper.slideNext()
    },
    goPrev () {
      Swiper.slidePrev()
    },

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
    SwiperSlide
  }
}
</script>

<style></style>
