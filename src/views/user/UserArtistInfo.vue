<template>
  <div class="container user-page-container" v-if="artist.artistInfo">
    <div class="row g-1 g-lg-6">
      <!-- 圖片 -->
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="position-relative col-12 col-lg-3">
            <div class="bg-tertiary h-100 overflow-hidden">
              <div
                class="position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"
                v-if="artist.imagesStock">
                <a href="#" class="col-3 col-lg-12 py-0 py-lg-2 overflow-hidden"
                  v-for="(img, idx) in artist.imagesStock" :key="'img' + idx" @click.prevent="changeImage(idx)">
                  <img :src="img" alt="product" class="object-fit-contain w-100 h-100"
                    :class="img === artist.currentImage ? 'border border-2 border-info' : ''">
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content">
            <div class="bg-tertiary ratio-1x1 overflow-hidden">
              <img :src="artist.currentImage" :alt="artist.artistInfo.title" class="object-fit-contain w-100 h-100">
            </div>
          </div>
        </div>
      </div>
      <!-- 介紹 -->
      <div class="col-12 col-md-4">
        <div class="p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary">
          <div class="d-flex justify-content-between align-items-start mb-5 mb-md-7">
            <div>
              <h2 class="h5 fw-bold">{{ artist.artistInfo.title }}</h2>
            </div>
          </div>
          <p class="lh-base lh-md-lg fs-info text-info">{{ artist.artistInfo.content }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-if="relatedProducts.length">
    <div class="py-7 py-md-9">
      <h2 class="mb-7 mb-md-8 fs-2 fs-md-1">藝術家作品</h2>

      <div class="row g-3 g-md-8">
        <div class="col-6 col-md-4" v-for="item in relatedProducts" :key="item.id">
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
    </div>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import BtnFavorite from '@/components/button/BtnFavorite.vue'
import ProductCard from '@/components/ProductCard.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 藝術家資訊
      artist: {},
      // 相似產品
      relatedProducts: []
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userProductStore, ['getAllProducts']),

    // 切換顯示大圖
    changeImage (idx) {
      this.artist.currentImage = this.artist.imagesStock[idx]
    },

    // 獲取當頁藝術家資料
    getCurrentArtist (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/product/${id}`

      // 獲取當頁藝術家資料
      return this.axios.get(url)
        .then(res => {
          const resData = res.data.product
          this.artist = {
            artistInfo: resData,
            currentImage: resData.imageUrl
          }

          if (resData.imagesUrl) {
            this.artist.imagesStock = [resData.imageUrl, ...resData.imagesUrl]
          }

          return resData.title
        })
        .catch(err => console.log(err.response.data.message))
    },

    // 獲取所有藝術家作品
    getRelatedProducts (artist) {
      // 獲取藝術家的作品
      let relatedAllProducts = this.sortNewest.newestProduct.filter(item => item.artist === artist)

      // 如果相似作品清單為 0，則改撈取相同題材作品
      if (!relatedAllProducts.length) {
        relatedAllProducts = this.sortNewest.newestProduct.filter(item => item.group === this.artist.artistInfo.group)
      }

      this.relatedProducts = relatedAllProducts
    }
  },
  async mounted () {
    try {
      const id = this.$route.params.id

      const currentArtist = await this.getCurrentArtist(id)
      await this.getAllProducts()

      this.getRelatedProducts(currentArtist)
    } catch (err) {
      console.log('錯誤:', err)
      throw err
    }
  },
  computed: {
    ...mapState(userProductStore, ['sortNewest'])
  },
  components: {
    ProductCard,
    BtnFavorite
  }
}
</script>
