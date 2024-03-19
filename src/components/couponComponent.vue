<template>
  <div class="position-relative d-flex justify-content-center align-items-center w-100 home-coupon overflow-hidden bg-primary">
    <div class="position-absolute top-50 z-1 translate-middle-y text-center title-shadow">
      <h2 class="mb-2 fs-4 fs-md-1 text-white title-letter-spacing">使用優惠券</h2>
      <p class="mb-7 fs-info fs-md-6 text-white">為你的第一筆訂單，獲取 97 折折扣</p>
      <button type="button" class="py-2 py-md-3 px-6 px-md-9 btn btn-light fw-bold rounded-0"
        @click="copyCouponCode('present97')">點擊複製優惠碼</button>
    </div>
    <img src="../../public/images/present.jpg" alt="coupon"
      class="object-fit-cover w-100 h-100" data-aos="zoom-out" data-aos-duration="3000">
  </div>
</template>

<script>
import cartStore from '@/stores/userCartStore.js'
import { mapActions } from 'pinia'

export default {
  methods: {
    ...mapActions(cartStore, ['copyCouponCode'])
  }
}
</script>

<style lang="scss" scoped>
/* 優惠券 */
.home-coupon {
  min-height: 302px;

  @media (min-width: 768px) {
    min-height: 311px;
  }
}
</style>
