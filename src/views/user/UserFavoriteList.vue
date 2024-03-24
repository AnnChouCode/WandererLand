<template>
    <div class="container user-page-container flex-grow-1">
        <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">收藏</h2>
        <div v-if="favoriteProducts.length" class="row g-3 g-md-8">
            <div class="col-6 col-md-4" v-for="item in favoriteProducts" :key="item.id">
              <productCard :item="item" :linkTo="`/productInfo/${item.id}`" :showPrice="true" :showFavorite="true" :triggerGetFavorites="true" @getFavoriteProducts="getFavoriteProducts"></productCard>
            </div>
        </div>
        <p v-else class="text-center fs-4">目前沒有收藏</p>
    </div>
</template>

<script>
import favoriteStore from '@/stores/favoriteStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import productCard from '@/components/productCard.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      favoriteProducts: []
    }
  },
  methods: {
    // 取得使用者收藏清單
    ...mapActions(favoriteStore, ['getFavoriteList']),

    getFavoriteProducts () {
      this.favoriteProducts = []

      this.favoriteList.forEach(item => {
        const url = `${VITE_API}/api/${VITE_PATH}/product/${item}`

        this.axios
          .get(url)
          .then(res => this.favoriteProducts.push(res.data.product))
          .catch(err => console.log(err.response.data.message))
      })
    }
  },
  components: {
    productCard
  },
  async mounted () {
    await this.getFavoriteList()
    this.getFavoriteProducts()
  },
  computed: {
    ...mapState(favoriteStore, ['favoriteList'])
  }
}
</script>
