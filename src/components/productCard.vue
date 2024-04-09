<template>
  <router-link :to="linkTo" class="product-content">
    <div class="position-relative d-flex justify-content-center align-items-center mb-3 ratio-1x1 overflow-hidden"
      :class="shape">
      <img :src="item.imageUrl" :alt="item.title" class="object-fit-contain w-100 h-100 product-img-up">
      <img :src="item.imagesUrl[0]" :alt="item.title"
        class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
    </div>
    <h3 class="mb-2 px-0 px-md-4 fs-info fs-md-5 fw-bold text-default" :class="titlePosition">{{
    item.title
  }}</h3>
  </router-link>
  <div class="d-flex justify-content-between align-items-center px-0 px-md-4">
    <slot name="price"></slot>
    <slot name="favorite"></slot>
  </div>
  <slot name="addToCart"></slot>
</template>

<script>
export default {
  props: {
    // 傳入資料
    item: Object,
    // 點擊後連結
    linkTo: String,
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
