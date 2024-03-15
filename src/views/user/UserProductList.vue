<template>
  <userNavProductFilter :allArtists="allArtists" :groupList="groupList" :productSizeList="productSizeList"
    @filterShow="filterShow"></userNavProductFilter>
  <div class="container user-product-page-container flex-grow-1">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">作品</h2>
    <div class="row  g-3 g-md-8">
      <div class="col-6 col-md-4" v-for="item in productsList" :key="item.id">
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
import userNavProductFilter from '@/components/userNavProductFilter.vue'

// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

export default {
  data () {
    return {
      // 產品列表
      productsList: []
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userProductStore, ['getAllProducts', 'getSizeList']),

    filterShow (filters) {
      // 獲取排序篩選條件
      const { sort, ...filterConditions } = filters

      // 初始化暫時產品列表
      let filteredProducts = this.sortNewest.newestProduct

      // 篩選產品
      Object.entries(filterConditions).forEach(([key, value]) => {
        if (value === undefined) {
          return
        }

        filteredProducts = filteredProducts.filter(product => {
          return product[key] === value
        })
      })

      // 排序
      if (sort === 'newest') {
        filteredProducts = filteredProducts.sort((a, b) => b.create_at - a.create_at)
      } else if (sort === 'priceHighToLow') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
      } else if (sort === 'priceLowToHigh') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price)
      }

      // 更新產品列表
      this.productsList = filteredProducts
    }
  },
  watch: {
    $route () {
      const filters = {
        sort: this.$route.query.sort,
        artist: this.$route.query.artist,
        group: this.$route.query.group,
        size: this.$route.query.size
      }

      this.filterShow(filters)
    }
  },
  async mounted () {
    // 取得所有產品資料
    await this.getAllProducts()

    const filters = {
      sort: this.$route.query.sort,
      artist: this.$route.query.artist,
      group: this.$route.query.group,
      size: this.$route.query.size
    }

    this.filterShow(filters)

    this.getSizeList()
  },
  computed: {
    ...mapState(userProductStore, ['allArtists', 'sortNewest', 'groupList', 'productSizeList'])
  },
  components: {
    btnFavorite,
    userNavProductFilter
  }
}
</script>
