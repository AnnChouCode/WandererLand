<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <h2 class="py-4 py-md-7 fw-bold">總覽</h2>
    <div class="row g-1 p-2 p-md-3 mb-4 bg-light">
      <div class="col-12 col-md-3">
        <div class="p-3 ">
          <h3 class="mb-1 fs-5 fw-bold">歡迎回來</h3>
          <p>這是您的待辦事項</p>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="p-3 border rounded-2 bg-white">
          <p class="fs-3">{{ isNotPaidOrder.length }}</p>
          <h3 class="fs-6 fw-bold text-info">尚未付款的訂單</h3>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="p-3 border rounded-2 bg-white">
          <p class="fs-3">{{ isNotShippingOrder.length }}</p>
          <h3 class="fs-6 fw-bold text-info">待出貨的訂單</h3>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="p-3 border rounded-2 bg-white">
          <p class="fs-3">{{ needReplenishedProduct.length }}</p>
          <h3 class="fs-6 fw-bold text-info">即將售鑿商品</h3>
        </div>
      </div>
    </div>
    <div class="p-2 p-md-3 bg-light">
      <select class="mb-5 form-select" aria-label="selectMonthZone" v-model="chartMonthZone" style="width:150px;">
        <option value="3" selected>3 個月</option>
        <option value="6">6 個月</option>
        <option value="12">12 個月</option>
      </select>
      <div class="row g-3">
        <div class="col col-md-6">
          <div class="w-100 p-3 pb-7 border rounded-2 bg-white" v-if="Object.values(turnOverData).length">
            <LineChart :chartData="turnOverData"></LineChart>
          </div>
        </div>
        <div class="col col-md-6">
          <div class="w-100 p-3 pb-7 border rounded-2 bg-white" v-if="Object.values(groupSales).length">
            <HorizontalBarChart :chartData="groupSales"></HorizontalBarChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAdminOrderStore } from '@/stores/adminOrderStore'
import { useAdminProductsStore } from '@/stores/adminProductStore'
import { mapStores } from 'pinia'

// import components
import LineChart from '@/components/chart/LineChart.vue'
import HorizontalBarChart from '@/components/chart/HorizontalBarChart.vue'

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
      needReplenishedProduct: [],
      // 圖表月份長度
      chartMonthZone: 3,
      // 營業額圖表數據
      turnOverData: {},
      // 分類銷售額圖表數據
      groupSales: {}
    }
  },
  computed: {
    ...mapStores(useAdminProductsStore),
    ...mapStores(useAdminOrderStore)
  },
  watch: {
    chartMonthZone () {
      this.getMonthZone(this.chartMonthZone)
    }
  },
  methods: {
    // 計算時間區間
    getMonthZone (monthZone = 3) {
      // 獲取月份表
      const currentDate = new Date() // 現在的日期
      const currentMonth = currentDate.getMonth() + 1 // 獲取當前月份
      const currentYear = currentDate.getFullYear() // 獲取當前年份

      // 前 n 個月的月份
      const previousMonths = []
      for (let i = 0; i < monthZone; i++) {
        let previousMonth = currentMonth - i
        let previousYear = currentYear

        if (previousMonth <= 0) {
          previousMonth += 12
          previousYear--
        }

        previousMonths.unshift(`${previousYear.toString().slice(2, 4)} ${previousMonth}月`)
      }

      this.getTurnOverData(previousMonths)
      this.getGroupSales(previousMonths)
    },

    // 營業額圖表數據
    getTurnOverData (previousMonths) {
      const turnoverMap = {}

      orderStore.allOrderList.forEach(order => {
        const formatDate = new Date(order.create_at * 1000).toLocaleString()
        const date = formatDate.split('/').splice(0, 2)
        const matchDate = `${date[0].slice(2, 4)} ${date[1]}月`

        if (!turnoverMap[matchDate]) {
          turnoverMap[matchDate] = 0
        }

        Object.values(order.products).forEach(product => {
          turnoverMap[matchDate] += product.total
        })
      })

      const turnoverResult = previousMonths.map(month => {
        return turnoverMap[month] || 0
      })

      this.turnOverData = {
        labels: previousMonths,
        datasets: [
          {
            label: '總銷售額',
            backgroundColor: '#333333',
            data: turnoverResult
          }
        ]
      }
    },

    // 分類銷售額圖表數據
    getGroupSales (previousMonths) {
      const salesMap = {}
      productStore.groupList.forEach(group => {
        salesMap[group] = 0
      })

      orderStore.allOrderList.forEach(order => {
        const formatDate = new Date(order.create_at * 1000).toLocaleString()
        const date = formatDate.split('/').splice(0, 2)
        const matchDate = `${date[0].slice(2, 4)} ${date[1]}月`

        previousMonths.forEach(month => {
          if (month === matchDate) {
            Object.values(order.products).forEach(product => {
              const group = product.product.group
              salesMap[group] += product.total
            })
          }
        })
      })

      this.groupSales = {
        labels: Object.keys(salesMap),
        datasets: [
          {
            label: '分類銷售額',
            backgroundColor: '#333333',
            data: Object.values(salesMap)
          }
        ]
      }
    },

    // 訂單數據
    handleOrderData () {
      this.isNotPaidOrder = this.allOrderList.filter(order => !order.is_paid)
      this.isNotShippingOrder = this.allOrderList.filter(order => order.is_paid && !order.is_shipping)
    },

    // 產品數據
    handleProductData () {
      this.needReplenishedProduct = this.allProductList.filter(product => product.quantity && product.quantity <= 3)
    },

    // 獲得所有訂單
    async getAllOrderList () {
      await orderStore.getCurrentOrderList()
      for (let i = 0; i < orderStore.pagination.total_pages; i++) {
        await orderStore.getAllOrderList(i + 1)
      }
      this.allOrderList = orderStore.allOrderList

      this.handleOrderData()
      this.getMonthZone()
    },

    // 獲得所有產品
    async getAllProductList () {
      await productStore.getAllProducts()
      this.allProductList = Object.values(productStore.allProducts)

      this.handleProductData()
    }
  },
  async mounted () {
    await orderStore.resetAllOrderList()

    this.getAllOrderList()
    this.getAllProductList()
  },
  components: {
    LineChart,
    HorizontalBarChart
  }
}
</script>
