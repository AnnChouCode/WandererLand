<template>
  <div class="container user-page-container flex-grow-1" style="padding-bottom:0px;">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">收藏</h2>
    <div v-if="favoriteProducts.length" class="row g-3 g-md-8">
      <div class="col-6 col-md-4" v-for="item in favoriteProducts" :key="item.id">
        <productCard :item="item" :linkTo="`/productInfo/${item.id}`" :showPrice="true" :showFavorite="true">
        </productCard>
      </div>
    </div>
    <p v-else class="text-center fs-4">目前沒有收藏</p>

    <!-- 猜你喜歡 -->
    <swiperProductComponent dataCategory="recently"></swiperProductComponent>
  </div>
</template>

<script>
import favoriteStore from '@/stores/favoriteStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import ProductCard from '@/components/ProductCard.vue'
import SwiperProductComponent from '@/components/swiper/SwiperProductComponent.vue'

export default {
  data () {
    return {
      // favoriteProducts: []
    }
  },
  provide () {
    return {
      triggerGetFavorites: true
    }
  },
  methods: {
    // 取得使用者收藏清單
    ...mapActions(favoriteStore, ['getFavoriteList', 'getFavoriteProducts'])
  },
  components: {
    ProductCard,
    SwiperProductComponent
  },
  mounted () {
    this.getFavoriteList()
    this.getFavoriteProducts()
  },
  computed: {
    ...mapState(favoriteStore, ['favoriteProducts'])
  }
}
</script>
