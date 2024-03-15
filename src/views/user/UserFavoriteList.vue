<template>
    <div class="container user-page-container flex-grow-1">
        <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">收藏</h2>
        <div class="row  g-3 g-md-8">
            <div class="col-6 col-md-4" v-for="item in favoriteProducts" :key="item.id">
                <router-link :to="`productInfo/${item.id}`">
                    <div
                        class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img">
                        <img :src="item.imageUrl" :alt="item.title"
                            class="object-fit-contain w-100 h-100 product-img-up">
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
                        <btnFavorite :productId="item.id" @click="getFavoriteProducts"></btnFavorite>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import favoriteStore from '@/stores/favoriteStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

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
    btnFavorite
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
