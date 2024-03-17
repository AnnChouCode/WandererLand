<template>
  <div class="d-flex flex-column dvh-100">
    <userNavBar></userNavBar>
    <RouterView />
    <userFooter :isLoggedin="isLoggedin"></userFooter>
    <toastComponent class="position-fixed z-3 end-0" style="bottom:45px;"></toastComponent>
    <btnBackToTop  class="position-fixed z-3 bottom-0 end-0"></btnBackToTop>
  </div>
</template>

<script>
import userNavBar from '@/components/userNavBar.vue'
import userFooter from '@/components/userFooter.vue'
import toastComponent from '@/components/toastComponent.vue'
import btnBackToTop from '@/components/btnBackToTop.vue'
import cartStore from '@/stores/userCartStore.js'
import { mapActions } from 'pinia'

export default {
  data () {
    return {
      isLoggedin: 'false'
    }
  },
  methods: {
    // 獲得購物車資料
    ...mapActions(cartStore, ['getCartsList'])
  },
  mounted () {
    // 取得 cookie
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user='))
      ?.split('=')[1]

    // 判斷是否登入
    if (!token) {
      this.isLoggedin = !this.isLoggedin
    }

    this.getCartsList()
  },
  components: {
    toastComponent,
    userNavBar,
    userFooter,
    btnBackToTop
  }
}
</script>
