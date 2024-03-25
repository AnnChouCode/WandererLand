<template>
  <userNavArtistFilter :allArtists="allArtists" :groupList="groupList" @filterShow="filterShow"></userNavArtistFilter>
  <div class="container user-product-page-container flex-grow-1">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">藝術家</h2>
    <div class="row g-3 g-md-8">
      <div class="col-6 col-md-4" v-for="item in tempArtistList" :key="item.id">
        <productCard :item="item" :linkTo="`/artistInfo/${item.id}`" :showPrice="false" :showFavorite="false" :shape="'rounded-circle'" :titlePosition="'text-center'"></productCard>
      </div>
    </div>
    <paginationComponent :pagination="pagination" @getList="getList"></paginationComponent>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore.js'
import { mapActions, mapState } from 'pinia'

// import components
import userNavArtistFilter from '@/components/userNavArtistFilter.vue'
import productCard from '@/components/productCard.vue'
import paginationComponent from '@/components/paginationComponent.vue'

export default {
  data () {
    return {
      // 藝術家列表
      artistList: [],
      // 當下顯示藝術家
      tempArtistList: [],
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
    ...mapActions(userProductStore, ['getAllProducts']),

    filterShow (filters) {
      // 獲取排序篩選條件
      const { sort, ...filterConditions } = filters

      // 初始化暫時產品列表
      let filteredArtists = this.sortNewest.newestArtist

      // 篩選產品
      Object.entries(filterConditions).forEach(([key, value]) => {
        if (value === '' || value === undefined) {
          return
        }

        filteredArtists = filteredArtists.filter(product => {
          return product[key] === value
        })
      })

      // 排序
      if (sort === 'newest') {
        filteredArtists = filteredArtists.sort((a, b) => b.create_at - a.create_at)
      } else if (sort === 'nameAToZ') {
        filteredArtists = filteredArtists.sort((a, b) => a.title.localeCompare(b.title))
      } else if (sort === 'nameZToA') {
        filteredArtists = filteredArtists.sort((a, b) => b.title.localeCompare(a.title))
      }

      // 更新產品列表
      this.artistList = filteredArtists
      // 獲得所有頁碼
      this.getList()
    },

    // 獲得所有頁碼
    getPaginationInfo () {
      this.pagination.total_pages = Math.ceil(this.artistList.length / this.pagination.pageSize)
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

      this.tempArtistList = this.artistList.slice(startIndex, endIndex)

      const tempPath = { ...this.$route.query }
      tempPath.current_page = page
      const path = Object.entries(tempPath).map(childArr => childArr.join('=')).join('&')

      this.$router.push(`artistlist?${path}`)
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
        group: this.$route.query.group,
        title: this.$route.query.title
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
    // 取得所有藝術家資料
    await this.getAllProducts()

    this.initPageContent()
  },
  computed: {
    ...mapState(userProductStore, ['allArtists', 'sortNewest', 'groupList'])
  },
  components: {
    userNavArtistFilter,
    productCard,
    paginationComponent
  }
}
</script>
