<template>
    <router-link :to="linkTo">
        <div class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img"
            :class="shape">
            <img :src="item.imageUrl" :alt="item.title" class="object-fit-contain w-100 h-100 product-img-up">
            <img :src="item.imagesUrl[0]" alt="item.title"
                class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
        </div>
    </router-link>
    <div class="py-3 px-0 px-md-4">
        <router-link :to="linkTo">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default" v-if="showTitle" :class="titlePosition">{{ item.title
                }}</h3>
        </router-link>
        <div class="d-flex justify-content-between align-items-center">
            <p class="fs-info fs-md-6 text-info" v-if="showPrice">NT$ {{ item.price.toLocaleString() }}</p>
            <btnFavorite v-if="showFavorite" :productId="item.id" @click="getFavoriteProducts"></btnFavorite>
        </div>
    </div>
</template>

<script>
// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

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
    },
    // 收藏按鈕是否觸發重整收藏列表
    triggerGetFavorites: {
      type: Boolean,
      default: false
    }
  },
  components: {
    btnFavorite
  },
  methods: {
    getFavoriteProducts () {
      if (this.triggerGetFavorites) {
        this.$emit('getFavoriteProducts')
      }
    }
  }
}
</script>
