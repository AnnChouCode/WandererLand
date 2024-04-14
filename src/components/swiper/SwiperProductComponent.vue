<template>
  <div class="py-7 py-md-9">
    <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
      <h2 class="fs-2 fs-md-1">{{ DataInfo[dataCategory].title }}</h2>
      <BtnSeeMore v-if="DataInfo[dataCategory].path !== ''" :linkTo="DataInfo[dataCategory].path"></BtnSeeMore>
    </div>

    <div class="position-relative">
      <Swiper :slidesPerView="2" :spaceBetween="12"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :breakpoints="{
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
        <SwiperSlide v-for="item in currentDatas" :key="item.id">
          <ProductCard :item="item" :linkTo="`/${DataInfo[dataCategory].infoPath}/${item.id}`" :shape="isArtistBlock ? 'rounded-circle' : ''"
            :titlePosition="isArtistBlock ? 'text-center' : ''">
            <template #price v-if="!isArtistBlock">
              <p class="fs-info fs-md-6 text-info">NT$ {{ item.price.toLocaleString() }}</p>
            </template>
            <template #favorite v-if="!isArtistBlock">
              <BtnFavorite :productId="item.id"></BtnFavorite>
            </template>
          </ProductCard>
        </SwiperSlide>
        <!-- 左右 navigation -->
        <BtnSwiperNavigation position="bottom" direction="next"></BtnSwiperNavigation>
        <BtnSwiperNavigation position="bottom" direction="prev"></BtnSwiperNavigation>
      </Swiper>
    </div>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore'
import { mapActions, mapState } from 'pinia'

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
import ProductCard from '@/components/ProductCard.vue'
import BtnSeeMore from '@/components/button/BtnSeeMore.vue'

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
          infoPath: 'productinfo'
        },
        artists: {
          title: '認識新藝術家',
          path: '/artistlist',
          infoPath: 'artistinfo'
        },
        recently: {
          title: '猜你喜歡',
          path: '',
          infoPath: 'productinfo'
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
    BtnSwiperNavigation,
    ProductCard,
    BtnSeeMore,
    BtnFavorite
  },
  inject: ['triggerGetFavorites']
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
}
</style>
