<template>
  <!-- cartsList 購物車列表 -->
  <div class="container py-5">
    <h2 class="mb-5 text-center">訂單</h2>

  </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'

// const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 訂單欄位
      form: {
        user: {
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // 獲得購物車資料
    ...mapActions(cartStore, ['getCartsList', 'updateCart', 'deleteCartItem'])
  },
  mounted () {
    this.getCartsList()
  },
  computed: { ...mapState(cartStore, ['cartsList']) }
}
</script>
