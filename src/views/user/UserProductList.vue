<template>
  <UserNavProductFilter :allArtists="allArtists" :groupList="groupList" :productSizeList="productSizeList"
    @filterShow="filterShow"></UserNavProductFilter>
  <div class="container user-product-page-container flex-grow-1">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">作品</h2>
    <p v-if="!tempProductsList.length" class="text-center fs-4">沒有對應的作品，<span class="d-block d-md-inline">請「清空篩選」重新選取</span></p>
    <div class="row g-3 g-md-8 mb-5" v-else>
      <div class="col-6 col-md-4" v-for="item in tempProductsList" :key="item.id">
        <ProductCard :item="item" :linkTo="`/productInfo/${item.id}`">
          <template #price>
            <p class="fs-info fs-md-6 text-info">NT$ {{ item.price.toLocaleString() }}</p>
          </template>
          <template #favorite>
              <BtnFavorite :productId="item.id"></BtnFavorite>
            </template>
        </ProductCard>
      </div>
    </div>
    <PaginationComponent v-if="tempProductsList.length" :pagination="pagination" @getList="getList"></PaginationComponent>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import BtnFavorite from '@/components/button/BtnFavorite.vue'
import UserNavProductFilter from '@/components/navbar/UserNavProductFilter.vue'
import ProductCard from '@/components/ProductCard.vue'
import PaginationComponent from '@/components/pagination/PaginationComponent.vue'

export default {
  data () {
    return {
      // 產品列表
      productsList: [],
      // 當下顯示產品
      tempProductsList: [],
      // 頁碼
      pagination: {
        // 每頁筆數
        pageSize: 12,
        // 頁碼總數
        total_pages: 1,
        // 當前頁碼
        current_page: 1
      },
      // 目前螢幕寬度
      screenWidth: null
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
      // 獲得所有頁碼
      this.getList()
    },

    // 獲得所有頁碼
    getPaginationInfo () {
      this.pagination.total_pages = Math.ceil(this.productsList.length / this.pagination.pageSize)
      this.pagination.has_pre = this.pagination.current_page !== 1
      this.pagination.has_next = this.pagination.total_pages > this.pagination.current_page
    },

    // 獲得當前頁碼資料
    getList (page = this.pagination.current_page) {
      this.pagination.current_page = page

      // 獲得所有頁碼
      this.getPaginationInfo()

      const startIndex = (page - 1) * this.pagination.pageSize
      const endIndex = startIndex + this.pagination.pageSize

      this.tempProductsList = this.productsList.slice(startIndex, endIndex)

      const tempPath = { ...this.$route.query }
      tempPath.current_page = page
      const path = Object.entries(tempPath).map(childArr => childArr.join('=')).join('&')

      this.$router.push(`productlist?${path}`)
      this.backToTop()
    },

    // 滾動到頁面上方
    backToTop () {
      // For Safari
      document.body.scrollTop = 0
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTop = 0
    },

    initPageContent () {
      this.pagination.current_page = +this.$route.query.current_page || 1

      const filters = {
        sort: this.$route.query.sort,
        artist: this.$route.query.artist,
        group: this.$route.query.group,
        size: this.$route.query.size
      }

      this.filterShow(filters)
    }
  },
  watch: {
    $route () {
      this.initPageContent()
    }
  },
  async mounted () {
    // 取得所有產品資料
    await this.getAllProducts()

    this.initPageContent()
    this.getSizeList()
  },
  computed: {
    ...mapState(userProductStore, ['allArtists', 'sortNewest', 'groupList', 'productSizeList'])
  },
  components: {
    UserNavProductFilter,
    ProductCard,
    PaginationComponent,
    BtnFavorite
  }
}
</script>
