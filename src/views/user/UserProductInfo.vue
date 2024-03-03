<template>
    <div class="container" v-if="product.productInfo">
        <h2 class="py-5 h2 text-center">{{product.productInfo.title}}</h2>
        <div>
               <div class="row">
                 <div class="col-sm-6">
                     <!-- 主圖 -->
                    <img class="d-block img-fluid mx-auto" :src="product.currentImage" :alt="product" style="max-height:500px;">
                    <!-- 圖片庫 -->
                    <div v-if="product.imagesStock">
                        <a href="#" v-for="(img, idx) in product.imagesStock" :key="'img' + idx" @click.prevent="changeImage(idx)">
                        <img :src="img" alt="productImg" class="img-store m-1" :class="img === product.currentImage ? 'border border-3 border-primary' : '' ">
                        </a>
                    </div>
                 </div>
                    <div class="col-sm-6">
                    <span class="mb-4 badge bg-dark rounded-pill">{{ product.productInfo.category }}</span>
                    <p class="mb-2">商品描述：{{ product.productInfo.description }}</p>
                    <p class="mb-4">商品內容：{{ product.productInfo.content }}</p>
                    <div class="mb-4">
                        <div class="h5" v-if="!product.productInfo.price">{{ product.productInfo.origin_price }} 元</div>
                        <del class="h6" v-if="product.productInfo.price">原價 {{ product.productInfo.origin_price }} 元</del>
                        <div class="h5" v-if="product.productInfo.price">現在只要 {{ product.productInfo.price }} 元</div>
                    </div>
                    <div>
                        <div class="input-group">
                        <input type="number" class="form-control"
                        v-model.number="qty" min="1">
                        <button type="button" class="btn btn-dark" @click="addToCart(product.productInfo.id, qty)">加入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品資訊
      product: {},
      // 產品數量
      qty: 1
    }
  },
  methods: {
    // 加入購物車
    ...mapActions(cartStore, ['addToCart']),

    // 切換顯示大圖
    changeImage (idx) {
      this.product.currentImage = this.product.imagesStock[idx]
    }
  },
  mounted () {
    const id = this.$route.params.id

    const url = `${VITE_API}/api/${VITE_PATH}/product/${id}`

    // 獲取當頁產品資料
    this.axios.get(url)
      .then(res => {
        const resData = res.data.product
        this.product = {
          productInfo: resData,
          currentImage: resData.imageUrl
        }

        if (resData.imagesUrl) {
          this.product.imagesStock = [resData.imageUrl, ...resData.imagesUrl]
        }
      })
      .catch(err => console.log(err.response.data.message))
  }
}
</script>
