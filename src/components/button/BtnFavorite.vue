<template>
    <button type="button" class="position-relative btn-favorite btn p-0" @click="toggleFavorite()" aria-label="加入或刪除收藏">
        <i class="position-absolute bi" :class="favoriteList.includes(productId) ? 'bi-heart-fill': 'bi-heart'"></i>
        <i class="bi bi-heart-fill text-info"></i>
    </button>
</template>

<script>
import favoriteStore from '@/stores/favoriteStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  props: ['productId'],
  methods: {
    // 取得使用者收藏清單
    ...mapActions(favoriteStore, ['getFavoriteList', 'handleFavorite', 'getFavoriteProducts']),

    toggleFavorite () {
      this.handleFavorite(this.productId)

      if (this.triggerGetFavorites) {
        this.getFavoriteProducts()
      }
    }
  },
  mounted () {
    this.getFavoriteList()
  },
  computed: {
    ...mapState(favoriteStore, ['favoriteList'])
  },
  inject: {
    triggerGetFavorites: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.btn-favorite {
    >i {
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    i:nth-child(2) {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        >i {
            opacity: 0;
        }

        i:nth-child(2) {
            opacity: 1;
        }
    }
}
</style>
