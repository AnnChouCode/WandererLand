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
            <btnFavorite v-if="showFavorite" :productId="item.id"></btnFavorite>
        </div>
    </div>
</template>

<script>
// Import Components
import btnFavorite from '@/components/btnFavorite.vue'

export default {
  props: {
    item: Object,
    linkTo: String,
    showTitle: {
      type: Boolean,
      default: true
    },
    showPrice: {
      type: Boolean,
      default: true
    },
    showFavorite: {
      type: Boolean,
      default: true
    },
    shape: {
      type: String,
      default: ''
    },
    titlePosition: {
      type: String,
      default: ''
    }
  },
  components: {
    btnFavorite
  }
}
</script>
