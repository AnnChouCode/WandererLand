<template>
  <div class="d-flex flex-column dvh-100">
    <UserNavBar />
    <RouterView />
    <UserFooter :isLoggedin="isLoggedin"></UserFooter>
    <ToastComponent class="position-fixed z-3 end-0" style="bottom:45px;"></ToastComponent>
    <BtnBackToTop class="position-fixed z-3 bottom-0 end-0"></BtnBackToTop>
  </div>
</template>

<script>
import cartStore from '@/stores/userCartStore.js'
import { mapActions } from 'pinia'

// import components
import UserNavBar from '@/components/navbar/UserNavBar.vue'
import UserFooter from '@/components/footer/UserFooter.vue'
import ToastComponent from '@/components/toastMsg/ToastComponent.vue'
import BtnBackToTop from '@/components/button/BtnBackToTop.vue'

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
    ToastComponent,
    UserNavBar,
    UserFooter,
    BtnBackToTop
  }
}
</script>
