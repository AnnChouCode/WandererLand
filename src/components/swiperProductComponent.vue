<template>
  <div class="py-7 py-md-9">
    <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
      <h2 class="fs-2 fs-md-1">{{ DataInfo[dataCategory].title }}</h2>
      <router-link v-if="DataInfo[dataCategory].path !== ''" :to="DataInfo[dataCategory].path"
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
        <!-- 左右 navigation -->
        <div
          class="position-relative position-absolute bottom-50 end-0 z-1 rounded-circle overflow-hidden navigation-next">
          <div class="swiper-button-next"></div>
          <div class="navigation-bg"></div>
        </div>
        <div
          class="position-relative position-absolute bottom-50 start-0 z-1 rounded-circle overflow-hidden navigation-prev">
          <div class="swiper-button-prev"></div>
          <div class="navigation-bg"></div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore'
import { mapActions, mapState } from 'pinia'

// import Swiper js
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

export default {
  props: ['dataCategory'],
  data () {
    return {
      // 最多顯示數量
      maxNumItem: 8,
      // 傳入分類資料對照
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
        recently: {
          title: '猜你喜歡',
          path: '',
          infoPath: '/productinfo'
        }
      },
      // 顯示資料
      currentDatas: [],
      // swiper 輪播設定
      modules: [Autoplay, Pagination, Navigation],
      // 是否為藝術家區塊
      isArtistBlock: true
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userProductStore, ['getAllProducts']),

    // 獲取隨機產品資料
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },

    // 獲取隨機產品資料
    getRandomProducts (products) {
      const emptyNumData = this.maxNumItem - this.currentDatas.length

      // 先將資料來源打亂順序，再挑選前數個物件
      const shuffledProducts = this.shuffleArray(products)
      return shuffledProducts.slice(0, emptyNumData)
    },

    // 獲取所有將顯示資料
    async getAllDatas () {
      await this.getAllProducts()

      if (this.dataCategory === 'artists') {
        this.currentDatas = JSON.parse(JSON.stringify(this.sortNewest.newestArtist)).slice(0, this.maxNumItem)
      }

      if (this.dataCategory === 'products') {
        this.currentDatas = JSON.parse(JSON.stringify(this.sortNewest.newestProduct)).slice(0, this.maxNumItem)
      }

      if (this.dataCategory === 'recently') {
        this.currentDatas = this.currentDatas.concat(this.getRandomProducts(this.sortNewest.newestProduct))
      }
    }

  },
  mounted () {
    this.isArtistBlock = this.dataCategory === 'artists'

    // 傳入分類是猜你喜歡
    if (this.dataCategory === 'recently') {
      const recentlyList = JSON.parse(localStorage.getItem('recentlyList')) || []
      this.currentDatas = recentlyList

      if (this.currentDatas.length >= this.maxNumItem) {
        return
      }
    }

    // 傳入分類是藝術家或作品 或 用戶瀏覽紀錄不足最大顯示數量，執行獲取產品資料
    this.getAllDatas()
  },
  computed: {
    ...mapState(userProductStore, ['sortNewest'])
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
  .navigation-next {
    display: none;
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      display: flex;
    }

    &:hover {
      border: 3px solid #333333;

      .navigation-bg {
        width: 100%;
      }

      .swiper-button-next {
        border: none;
        right: -5px
      }
    }

    .navigation-bg {
      width: 0%;
      height: 100%;
      transition: width 0.3s ease;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }

  .swiper-button-next {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'/%3E%3C/svg%3E") no-repeat center;
    background-size: 40px 40px;
    z-index: 11;
    top: 55%;
    right: 0px;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: 3px solid #333333;
    border-radius: 50px;
    transition: right 0.3s ease, border 0.3s ease;
  }

  /* 左 */
  .navigation-prev {
    display: none;
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      display: flex;
    }

    &:hover {
      border: 3px solid #333333;

      .navigation-bg {
        width: 100%;
      }

      .swiper-button-prev {
        border: none;
        left: -5px
      }
    }

    .navigation-bg {
      width: 0%;
      height: 100%;
      transition: width 0.3s ease;
      background-color: rgba(255, 255, 255, 0.7);
      position: absolute;
      right: 0;
    }
  }

  .swiper-button-prev {
    position: absolute;
    z-index: 1;
    top: 55%;
    left: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5'/%3E%3C/svg%3E") no-repeat center;
    background-size: 40px 40px;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: 3px solid #333333;
    border-radius: 50px;
    transition: right 0.3s ease, border 0.3s ease;
  }
}
</style>
