<template>
    <div class="overflow-y-scroll scrollbar-y-hide vh-100">
        <h2 class="py-4 py-md-7 fw-bold">總覽</h2>
        <div class="row g-1 p-2 p-md-3 bg-light">
            <div class="col-12 col-md-3">
                <div class="p-3 ">
                    <h3 class="mb-1 fs-5 fw-bold">歡迎回來</h3>
                    <p>這是您的待辦事項</p>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="p-3 border rounded-2 bg-white">
                    <p class="fs-3">{{isNotPaidOrder.length}}</p>
                    <h3 class="fs-6 fw-bold text-info">尚未付款的訂單</h3>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="p-3 border rounded-2 bg-white">
                    <p class="fs-3">{{isNotShippingOrder.length}}</p>
                    <h3 class="fs-6 fw-bold text-info">待出貨的訂單</h3>
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="p-3 border rounded-2 bg-white">
                    <p class="fs-3">{{needReplenishedProduct.length}}</p>
                    <h3 class="fs-6 fw-bold text-info">即將售鑿商品</h3>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { useAdminOrderStore } from '@/stores/adminOrderStore'
import { useAdminProductsStore } from '@/stores/adminProductStore'
import { mapStores } from 'pinia'

const orderStore = useAdminOrderStore()
const productStore = useAdminProductsStore()

export default {
  data () {
    return {
      // 所有商品
      allProductList: [],
      // 所有訂單
      allOrderList: [],
      // 未付款訂單
      isNotPaidOrder: [],
      // 未出貨的已付款訂單
      isNotShippingOrder: [],
      // 需補貨，即將售完商品
      needReplenishedProduct: []
    }
  },
  computed: {
    ...mapStores(useAdminProductsStore),
    ...mapStores(useAdminOrderStore)
  },
  methods: {
    handleOrderData () {
      this.isNotPaidOrder = this.allOrderList.filter(order => !order.is_paid)
      this.isNotShippingOrder = this.allOrderList.filter(order => order.is_paid && !order.is_shipping)
    },

    handleProductData () {
      this.needReplenishedProduct = this.allProductList.filter(product => product.quantity && product.quantity <= 3)
    },

    async getAllOrderList () {
      await orderStore.getCurrentOrderList()
      for (let i = 0; i < orderStore.pagination.total_pages; i++) {
        await orderStore.getAllOrderList(i + 1)
      }
      this.allOrderList = orderStore.allOrderList
      this.handleOrderData()
    },

    async getAllProductList () {
      await productStore.getAllProducts()
      this.allProductList = Object.values(productStore.allProducts)
      console.log(this.allProductList)

      this.handleProductData()
    }
  },
  async mounted () {
    await orderStore.resetAllOrderList()

    this.getAllOrderList()
    this.getAllProductList()
  }
}
</script>
