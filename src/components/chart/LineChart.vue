<template>
  <div style="height:300px">
    <h3 class="mb-2 fs-6 fw-bold text-info">總銷售額</h3>
    <LineChartComponent id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
// 引入
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// 註冊
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'LineChart',
  components: { LineChartComponent: Line },
  props: {
    chartData: Object
  },
  data () {
    return {
      // 圖表設定
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
