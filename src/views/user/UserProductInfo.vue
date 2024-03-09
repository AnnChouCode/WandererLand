<template>
  <div class="container user-page-container" v-if="product.productInfo">
    <div class="row g-1 g-lg-6">
      <!-- 圖片 -->
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="position-relative col-12 col-lg-3">
            <div class="bg-tertiary h-100 overflow-hidden">
              <div
                class="position-lg-absolute row gap-0 gap-lg-2 px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"
                v-if="product.imagesStock">
                <a href="#" class="col-3 col-lg-12 ratio-1x1 overflow-hidden" v-for="(img, idx) in product.imagesStock"
                  :key="'img' + idx" @click.prevent="changeImage(idx)">
                  <img :src="img" alt="product" class="object-fit-contain w-100 h-100">
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-9 order-first order-lg-last flex-shrink-0 content">
            <div class="bg-tertiary ratio-1x1 overflow-hidden">
              <img :src="product.currentImage" :alt="product.productInfo.title" class="object-fit-contain w-100 h-100">
            </div>
          </div>
        </div>
      </div>
      <!-- 介紹 -->
      <div class="col-12 col-md-4">
        <div class="p-3 p-lg-7 mb-3 mb-md-6 bg-tertiary">
          <div class="d-flex justify-content-between align-items-start mb-5 mb-md-7">
            <div>
              <h3 class="mb-2 h6 text-info fw-bold">{{ product.productInfo.artist }}</h3>
              <h2 class="h5 fw-bold">{{ product.productInfo.title }}</h2>
            </div>
            <btnFavorite></btnFavorite>
          </div>
          <p class="lh-base lh-md-lg fs-info text-info">{{ product.productInfo.content }}
          </p>
          <hr class="my-6 text-default">
          <div class="accordion accordion-flush" id="accordionPanelsProductInfo">
            <div class="accordion-item bg-transparent border-default">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button text-info fw-bold bg-transparent p-0" type="button"
                  data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne" style="box-shadow: none;">
                  作品規格
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info">
                  {{ product.productInfo.size }}
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 text-default">
          <div class="accordion accordion-flush" id="accordionPanelsProductInfo">
            <div class="accordion-item bg-transparent border-default">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button text-info fw-bold bg-transparent p-0" type="button"
                  data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne" style="box-shadow: none;">
                  作品版數
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info">
                  <p>剩餘版數 {{ product.productInfo.quantity ? product.productInfo.quantity - quantityInCart : '無限' }}</p>
                  <p>總版數 {{ product.productInfo.quantity ? product.productInfo.quantity : '無限' }}</p>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 text-default">
          <div class="accordion accordion-flush" id="accordionPanelsProductInfo">
            <div class="accordion-item bg-transparent">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button text-info fw-bold bg-transparent p-0" type="button"
                  data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo" style="box-shadow: none;">
                  關於 {{ artistInfo.title }}
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info">
                  {{ artistInfo.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="position-relative py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100"
          @click="addToCart(product.productInfo.id, qty)"
          :disabled="product.productInfo.quantity - quantityInCart === 0">加入購物車．NT$ {{
    product.productInfo.price.toLocaleString() }}
        </button>
      </div>
    </div>
  </div>

  <div class="container" v-if="relatedProducts.length">
    <div class="py-7 py-md-9">
      <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
        <h2 class="fs-2 fs-md-1">相似作品</h2>
        <router-link to="/productlist"
          class="text-default border-bottom border-default fw-bold fs-info fs-md-6">瀏覽更多</router-link>
      </div>

      <div class="row g-3 g-md-8">
        <div class="col-6 col-md-4" v-for="product in relatedProducts" :key="product.id">
          <router-link :to="`/productinfo/${product.id}`">
            <div
              class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img">
              <img :src="product.imageUrl" :alt="product.title" class="object-fit-contain w-100 h-100 product-img-up">
              <img :src="product.imagesUrl[0]" alt="item.title"
                class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
            </div>
          </router-link>
          <div class="py-3 px-0 px-md-4">
            <router-link :to="`/productinfo/${product.id}`">
              <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default">{{ product.title }}</h3>
            </router-link>
            <div v-if="!isArtistBlock" class="d-flex justify-content-between align-items-center">
              <p class="fs-info fs-md-6 text-info">NT$ {{ product.price.toLocaleString() }}</p>
              <btnFavorite></btnFavorite>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore.js'
import cartStore from '@/stores/userCartStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 當前產品 id
      currentProductId: null,
      // 產品資訊
      product: {},
      // 產品數量
      qty: 1,
      // 相似產品
      relatedProducts: [],
      // 藝術家資訊
      artistInfo: {},
      // 當前產品存在購物車的數量
      quantityInCart: ''
    }
  },
  watch: {
    cartsList () {
      this.getAvailableProductNum(this.currentProductId)
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userProductStore, ['getAllProducts']),

    // 加入購物車
    ...mapActions(cartStore, ['addToCart', 'getCartsList']),

    // 切換顯示大圖
    changeImage (idx) {
      this.product.currentImage = this.product.imagesStock[idx]
    },

    // 獲取當頁產品資料
    getCurrentProduct (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/product/${id}`

      // 獲取當頁產品資料
      return this.axios.get(url)
        .then(res => {
          const resData = res.data.product
          this.product = {
            productInfo: resData,
            currentImage: resData.imageUrl
          }

          if (resData.imagesUrl) {
            this.product.imagesStock = [resData.imageUrl, ...resData.imagesUrl]
          }

          return resData.artist
        })
        .catch(err => console.log(err.response.data.message))
    },

    // 獲取 3 件相似作品
    getRelatedProducts (artist, id) {
      // 獲取藝術家的作品，不包含當前作品
      let relatedAllProducts = this.sortNewest.newestProduct.filter(item => item.artist === artist && item.id !== id)
      // 如果相似作品清單為 0，則改撈取相同題材作品
      if (!relatedAllProducts.length) {
        relatedAllProducts = this.sortNewest.newestProduct.filter(item => item.group === this.product.productInfo.group)
      }

      this.relatedProducts = relatedAllProducts.slice(0, 3)
    },

    // 獲取藝術家資料
    getArtistInfo (artist) {
      this.artistInfo = this.sortNewest.newestArtist.filter(item => item.title === artist)[0]
    },

    // 獲取當前產品存在購物車的數量
    getAvailableProductNum (id) {
      console.log(id)
      console.log('this.cartsList.carts', this.cartsList.carts)
      const stateInCart = this.cartsList.carts.filter(item => {
        console.log(item.product_id, id, item.product_id === id)
        return item.product_id === id
      })
      console.log('stateInCart', stateInCart)
      this.quantityInCart = stateInCart.length ? stateInCart[0].qty : 0
      console.log('this.quantityInCart', this.quantityInCart)
      // console.log('product.productInfo.quantity - quantityInCart', this.product.productInfo.quantity - this.quantityInCart)
    }
  },
  async mounted () {
    try {
      this.currentProductId = this.$route.params.id

      const currendProductArtist = await this.getCurrentProduct(this.currentProductId)
      // 獲取所有產品資料
      await this.getAllProducts()

      // 當前產品存在購物車的數量
      this.getCartsList()
      this.getAvailableProductNum(this.currentProductId)

      // 獲取相關產品資料
      this.getRelatedProducts(currendProductArtist, this.currentProductId)

      // 獲取藝術家資料
      this.getArtistInfo(currendProductArtist)
    } catch (err) {
      console.log('錯誤:', err)
      throw err
    }
  },
  computed: {
    ...mapState(userProductStore, ['sortNewest']),
    ...mapState(cartStore, ['cartsList'])
  },
  components: {
    btnFavorite
  }
}
</script>
