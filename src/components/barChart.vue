<template>
  <div style="height:300px">
    <h3 class="mb-2 fs-6 fw-bold text-info">總銷售額</h3>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
// 引入
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// 註冊
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'barChart',
  components: { Bar },
  props: {
    chartData: Object,
    chartOptions: Object
  }
}
</script>
