<template>
  <!-- cartsList 購物車列表 -->
  <div class="container user-page-container flex-grow-1">
    <h2 class="mb-7 mb-md-8 h1 lh-sm title-letter-spacing text-center h1">購物車</h2>

    <div class="row">
      <div class="col-12 col-md-6 mx-auto">
        <ol class="position-relative d-flex justify-content-between mb-6 mb-md-8 mx-auto pay-list">
          <li class="d-flex flex-column align-items-center">
            <p
              class="d-flex justify-content-center align-items-center mb-2 fs-5 border border-default rounded-circle pay-step bg-default text-white">
              1</p>
            <p class="fs-info fw-bold">訂單資料</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <p class="d-flex justify-content-center align-items-center mb-2 fs-5 border border-default rounded-circle pay-step"
              :class="pageType === 'payorder' || pageType === 'orderhistory' ? 'bg-default text-white' : 'bg-white text-default'">
              2</p>
            <p class="fs-info fw-bold">結帳付款</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <p class="d-flex justify-content-center align-items-center mb-2 fs-5 border border-default rounded-circle pay-step"
              :class="pageType === 'orderhistory' ? 'bg-default text-white' : 'bg-white text-default'">
              3</p>
            <p class="fs-info fw-bold">訂購結果</p>
          </li>
        </ol>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageType: ''
    }
  },
  methods: {
    // 判斷頁面，顯示當前訂單步驟
    checkProductPage () {
      const url = window.location.href
      const parts = url.split('/')

      this.pageType = parts.filter(route => route === 'checkform' || route === 'payorder' || route === 'orderhistory').toString()
    }
  },
  watch: {
    $route () {
      this.checkProductPage()
    }
  },
  mounted () {
    this.checkProductPage()
  }
}
</script>

<style lang="scss" scoped>
.pay-list::before {
  width: 90%;
  height: 1px;
  content: "";
  position: absolute;
  z-index: -1;
  background: #333333;
  left: calc((100% - 90%) / 2);
  top: 16px;

  @media (min-width: 768px) {
    top: 24px;
  }
}

.pay-step {
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
}
</style>
