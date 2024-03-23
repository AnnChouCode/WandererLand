<template>
  <userNavArtistFilter :allArtists="allArtists" :groupList="groupList" @filterShow="filterShow"></userNavArtistFilter>
  <div class="container user-product-page-container flex-grow-1">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">藝術家</h2>
    <div class="row g-3 g-md-8">
      <div class="col-6 col-md-4" v-for="item in artistList" :key="item.id">
        <productCard :item="item" :linkTo="`/artistInfo/${item.id}`" :showPrice="false" :showFavorite="false" :shape="'rounded-circle'" :titlePosition="'text-center'"></productCard>
      </div>
    </div>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore.js'
import { mapActions, mapState } from 'pinia'

// import components
import userNavArtistFilter from '@/components/userNavArtistFilter.vue'
import productCard from '@/components/productCard.vue'

export default {
  data () {
    return {
      // 產品列表
      artistList: []
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
    }
  },
  watch: {
    $route () {
      const filters = {
        sort: this.$route.query.sort,
        title: this.$route.query.title,
        group: this.$route.query.group
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
      group: this.$route.query.group
    }

    this.filterShow(filters)
  },
  computed: {
    ...mapState(userProductStore, ['allArtists', 'sortNewest', 'groupList'])
  },
  components: {
    userNavArtistFilter,
    productCard
  }
}
</script>
