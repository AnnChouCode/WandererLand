<template>
  <!-- <userNavProductFilter></userNavProductFilter> -->

  <div class="container user-product-page-container">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">作品</h2>
    <div class="row  g-3 g-md-8">
      <div class="col-6 col-md-4" v-for="item in sortNewest.newestProduct" :key="item.id">
        <router-link :to="`productInfo/${item.id}`">
          <div
            class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img">
            <img :src="item.imageUrl" :alt="item.title" class="object-fit-contain w-100 h-100 product-img-up">
            <img :src="item.imagesUrl[0]" alt="item.title"
              class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
          </div>
        </router-link>
        <div class="py-3 px-0 px-md-4">
          <router-link :to="`productInfo/${item.id}`">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default">{{
        item.title }}</h3>
          </router-link>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fs-info fs-md-6 text-info">NT$ {{ item.price.toLocaleString() }}</p>
            <btnFavorite></btnFavorite>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

// const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品列表
      productsList: [],
      // 頁碼
      pagination: {}
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userProductStore, ['getAllProducts']),

    // 切換產品資訊頁
    showProductInfo (id) {
      this.$router.push(`/productinfo/${id}`)
    }
  },
  mounted () {
    // 取得所有產品資料
    this.getAllProducts()
  },
  computed: {
    ...mapState(userProductStore, ['sortNewest'])
  },
  components: {
    btnFavorite
  }
}
</script>
