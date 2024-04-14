<template>
  <div class="container user-page-container flex-grow-1" style="padding-bottom:0px;">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">收藏</h2>

    <div v-if="favoriteProducts.length" class="row g-3 g-md-8">
      <div class="col-6 col-md-4" v-for="item in favoriteProducts" :key="item.id">
        <productCard :item="item" :linkTo="`/productInfo/${item.id}`">
          <template #price>
            <p class="fs-info fs-md-6 text-info">NT$ {{ item.price.toLocaleString() }}</p>
          </template>
          <template #addToCart>
            <button type="button" class="position-relative mt-3 py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100"
              @click="addToCart(item.id, 1)" :disabled="!item.availableQty">
              <span v-if="item.availableQty">加入購物車</span>
              <span v-else>已絕版</span>
            </button>
          </template>
          <template #favorite>
            <BtnFavorite :productId="item.id"></BtnFavorite>
          </template>
        </productCard>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="mb-4 fs-4">目前沒有收藏</p>
      <router-link to="/productlist" class="py-2 py-md-3 px-6 px-md-9 btn btn-default rounded-0 fw-bold">瀏覽作品</router-link>
    </div>

    <!-- 猜你喜歡 -->
    <swiperProductComponent dataCategory="recently"></swiperProductComponent>
  </div>
</template>

<script>
import favoriteStore from '@/stores/favoriteStore.js'
import cartStore from '@/stores/userCartStore'
import { mapActions, mapState } from 'pinia'

// Import Components
import BtnFavorite from '@/components/button/BtnFavorite.vue'
import ProductCard from '@/components/ProductCard.vue'
import SwiperProductComponent from '@/components/swiper/SwiperProductComponent.vue'

export default {
  provide () {
    return {
      triggerGetFavorites: true
    }
  },
  methods: {
    // 取得使用者收藏清單
    ...mapActions(favoriteStore, ['getFavoriteList', 'getFavoriteProducts']),
    // 加入購物車
    ...mapActions(cartStore, ['addToCart', 'getCartsList'])
  },
  components: {
    ProductCard,
    SwiperProductComponent,
    BtnFavorite
  },
  async mounted () {
    await this.getCartsList()
    this.getFavoriteList()
    this.getFavoriteProducts()
  },
  computed: {
    ...mapState(favoriteStore, ['favoriteProducts']),
    ...mapState(cartStore, ['cartsList'])
  },
  watch: {
    cartsList () {
      this.getFavoriteProducts()
    }
  }
}
</script>
