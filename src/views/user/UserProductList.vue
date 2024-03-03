<template>
  <div class="container">
    <h2 class="py-5 h2 text-center">看產品</h2>
    <!-- 分類篩選 -->
    <filterCategory @get-Product-List="getProductList"></filterCategory>
    <!-- 產品列表 -->
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productsList" :key="product.id">
          <td style="width: 200px">
            <div style="height: 100px; background-size: cover; background-position: center;"
              :style="{ backgroundImage: `url(${product.imageUrl})` }">
            </div>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
            <div v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-default" @click="showProductInfo(product.id)">
                查看更多
              </button>
              <button type="button" class="btn btn-default" @click="addToCart(product.id, 1)">
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 頁碼 -->
    <paginationComponent :pagination="pagination" @get-List="getProductList"></paginationComponent>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import allProductStore from '@/stores/allProductStore.js'
import { mapActions } from 'pinia'
import paginationComponent from '@/components/paginationComponent.vue'
import filterCategory from '@/components/filterCategory.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品列表
      productsList: [],
      // 頁碼
      pagination: {}
    }
  },
  methods: {
    // 加入購物車
    ...mapActions(cartStore, ['addToCart']),
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(allProductStore, ['getAllProducts']),

    // 取得分頁產品列表
    getProductList (page = 1, category) {
      let url = `${VITE_API}/api/${VITE_PATH}/products?page=${page}`
      if (category) { url += `&category=${category}` }

      this.axios.get(url)
        .then(res => {
          const { products, pagination } = res.data
          this.productsList = products
          this.pagination = pagination
        })
        .catch(err => {
          this.$swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
    },

    // 切換產品資訊頁
    showProductInfo (id) {
      this.$router.push(`/productinfo/${id}`)
    }
  },
  mounted () {
    // 取得分頁產品列表
    this.getProductList()
    // 取得所有產品資料
    this.getAllProducts()
  },
  components: {
    paginationComponent,
    filterCategory
  }
}
</script>
