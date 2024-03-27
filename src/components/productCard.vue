<template>
  <router-link :to="linkTo" class="product-content">
    <div class="position-relative d-flex justify-content-center align-items-center mb-3 ratio-1x1 overflow-hidden"
      :class="shape">
      <img :src="item.imageUrl" :alt="item.title" class="object-fit-contain w-100 h-100 product-img-up">
      <img :src="item.imagesUrl[0]" alt="item.title"
        class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
    </div>
    <h3 class="mb-2 px-0 px-md-4 fs-info fs-md-5 fw-bold text-default" v-if="showTitle" :class="titlePosition">{{
    item.title
  }}</h3>
  </router-link>
  <div class="d-flex justify-content-between align-items-center px-0 px-md-4 ">
    <p class="fs-info fs-md-6 text-info" v-if="showPrice">NT$ {{ item.price.toLocaleString() }}</p>
    <BtnFavorite v-if="showFavorite" :productId="item.id"></BtnFavorite>
  </div>
</template>

<script>
// Import Components
import BtnFavorite from '@/components/button/BtnFavorite.vue'

export default {
  props: {
    // 傳入資料
    item: Object,
    // 點擊後連結
    linkTo: String,
    // 是否顯示標題
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否顯示價格
    showPrice: {
      type: Boolean,
      default: true
    },
    // 是否顯示收藏按鈕
    showFavorite: {
      type: Boolean,
      default: true
    },
    // 圖片外框形狀
    shape: {
      type: String,
      default: ''
    },
    // title 位置
    titlePosition: {
      type: String,
      default: ''
    }
  },
  components: {
    BtnFavorite
  },
  inject: ['triggerGetFavorites']
}
</script>

<style lang="scss" scoped>
/* product image hover 效果 */
.product {
  &-img-up {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  &-img-down {
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  &-content:hover {
    .product-img-up {
      opacity: 0;
    }

    .product-img-down {
      transform: scale(1.1);
    }
  }
}
</style>
