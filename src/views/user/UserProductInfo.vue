<template>
  <div class="container user-page-container" v-if="product.productInfo">
    <div class="row g-1 g-lg-6">
      <!-- 圖片 -->
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="position-relative col-12 col-lg-3">
            <div class="bg-tertiary h-100 overflow-hidden">
              <div
                class="position-lg-absolute row px-2 py-2 py-lg-0 px-lg-auto flex-nowrap flex-lg-column overflow-auto scrollbar-y-hide w-lg-100 h-lg-100"
                v-if="product.imagesStock">
                <a href="#" class="col-3 col-lg-12 py-0 py-lg-2 overflow-hidden"
                  v-for="(img, idx) in product.imagesStock" :key="'img' + idx" @click.prevent="changeImage(idx)">
                  <img :src="img" alt="product" class="object-fit-contain w-100 h-100"
                    :class="img === product.currentImage ? 'border border-2 border-info' : ''">
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
            <BtnFavorite :productId="product.productInfo.id"></BtnFavorite>
          </div>
          <p class="lh-base lh-md-lg fs-info text-info">{{ product.productInfo.content }}
          </p>
          <hr class="my-6 text-info opacity-100">
          <div class="accordion accordion-flush" id="accordion">
            <div class="accordion-item bg-transparent border-info pb-6">
              <h2 class="accordion-header" id="panelsStayOpen-headingSize">
                <button class="accordion-button text-info fw-bold bg-transparent p-0"
                :class="{collapsed:isAccordionSizeShow}"
                type="button" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseSize" style="box-shadow: none;" @click="toggleAccordion('Size')">
                  作品規格
                </button>
              </h2>
              <div class="accordion-collapse collapse show" ref="accordionSize" aria-labelledby="panelsStayOpen-headingSize"
                data-bs-parent="#accordion">
                <div class="accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info">
                  {{ product.productInfo.size }}
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-info py-6">
              <h2 class="accordion-header" id="panelsStayOpen-headingQty">
                <button class="accordion-button text-info fw-bold bg-transparent p-0" :class="{collapsed:isAccordionQtyShow}" type="button"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseQty" style="box-shadow: none;" @click="toggleAccordion('Qty')">
                  作品版數
                </button>
              </h2>
              <div id="panelsStayOpen-collapseQty" class="accordion-collapse collapse show" ref="accordionQty"
                aria-labelledby="panelsStayOpen-headingQty">
                <div class="accordion-body p-0 pt-4 lh-base lh-md-lg h6 text-info">
                  <p>剩餘版數 {{ product.productInfo.quantity ? product.productInfo.quantity - quantityInCart : '無限' }}</p>
                  <p>總版數 {{ product.productInfo.quantity ? product.productInfo.quantity : '無限' }}</p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent pt-6">
              <h2 class="accordion-header" id="panelsStayOpen-headingAbout">
                <button class="accordion-button text-info fw-bold bg-transparent p-0" :class="{collapsed:isAccordionAboutShow}" type="button"
 aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseAbout" style="box-shadow: none;" @click="toggleAccordion('About')">
                  關於 {{ artistInfo.title }}
                </button>
              </h2>
              <div id="panelsStayOpen-collapseAbout" class="accordion-collapse collapse" ref="accordionAbout"
                aria-labelledby="panelsStayOpen-headingAbout">
                <div class="accordion-body p-0 pt-4 lh-base lh-md-lg fs-info text-info">
                  {{ artistInfo.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="position-relative py-2 py-md-3 btn btn-default rounded-0 fw-bold w-100"
          @click="addToCart(product.productInfo.id, qty)"
          :disabled="product.productInfo.quantity - quantityInCart === 0">
          <span v-if="product.productInfo.quantity - quantityInCart !== 0">加入購物車．NT$ {{
            product.productInfo.price.toLocaleString() }}</span>
          <span v-else>已絕版．NT$ {{
            product.productInfo.price.toLocaleString() }}</span>
        </button>
      </div>
    </div>
  </div>

  <div class="container" v-if="relatedProducts.length">
    <div class="py-7 py-md-9">
      <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
        <h2 class="fs-2 fs-md-1">相似作品</h2>
        <BtnSeeMore v-if="tempRelatedAllProducts"
          :linkTo="tempRelatedAllProducts.length ? `/productlist?artist=${artistInfo.title}` : `/productlist?group=${product.productInfo.group}`">
        </BtnSeeMore>
      </div>

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
import Collapse from 'bootstrap/js/dist/collapse'

import userProductStore from '@/stores/userProductStore.js'
import favoriteStore from '@/stores/favoriteStore'
import cartStore from '@/stores/userCartStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import BtnFavorite from '@/components/button/BtnFavorite.vue'
import ProductCard from '@/components/ProductCard.vue'
import BtnSeeMore from '@/components/button/BtnSeeMore.vue'

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
      // 暫存相似產品
      tempRelatedAllProducts: [],
      // 相似產品
      relatedProducts: [],
      // 藝術家資訊
      artistInfo: {},
      // 當前產品存在購物車的數量
      quantityInCart: '',
      // 產品風琴
      accordion: null,
      isAccordionSizeShow: true,
      isAccordionQtyShow: true,
      isAccordionAboutShow: false
    }
  },
  watch: {
    cartsList () {
      this.getAvailableProductNum(this.currentProductId)
    },

    $route () {
      this.initPageInfo()
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userProductStore, ['getAllProducts']),

    // 加入購物車
    ...mapActions(cartStore, ['addToCart', 'getCartsList']),

    // 儲存最近瀏覽資料
    ...mapActions(favoriteStore, ['recentlyViewed']),

    // 控制產品資訊風琴
    toggleAccordion (type) {
      const refName = `accordion${type}`
      const buttonTarget = `isAccordion${type}Show`
      this[buttonTarget] = !this[buttonTarget]

      this.accordion = new Collapse(this.$refs[refName], { toggle: true })
      this.accordion.toggle()
    },

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

          // 儲存最近瀏覽資料
          this.recentlyViewed(resData)

          return resData.artist
        })
        .catch(err => console.log(err.response.data.message))
    },

    // 獲取 3 件相似作品
    getRelatedProducts (artist, id) {
      // 獲取藝術家的作品，不包含當前作品
      this.tempRelatedAllProducts = this.sortNewest.newestProduct.filter(item => item.artist === artist && item.id !== id)
      // 如果相似作品清單為 0，則改撈取相同題材作品
      if (!this.tempRelatedAllProducts.length) {
        this.tempRelatedAllProducts = this.sortNewest.newestProduct.filter(item => item.group === this.product.productInfo.group)
      }

      this.relatedProducts = this.tempRelatedAllProducts.slice(0, 3)
    },

    // 獲取藝術家資料
    getArtistInfo (artist) {
      this.artistInfo = this.sortNewest.newestArtist.filter(item => item.title === artist)[0]
    },

    // 獲取當前產品存在購物車的數量
    getAvailableProductNum (id) {
      const stateInCart = this.cartsList.carts.filter(item => {
        return item.product_id === id
      })

      this.quantityInCart = stateInCart.length ? stateInCart[0].qty : 0
    },

    // 頁面資料初始化
    async initPageInfo () {
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
    }
  },
  mounted () {
    this.initPageInfo()
  },
  computed: {
    ...mapState(userProductStore, ['sortNewest']),
    ...mapState(cartStore, ['cartsList'])
  },
  components: {
    ProductCard,
    BtnSeeMore,
    BtnFavorite
  }
}
</script>
