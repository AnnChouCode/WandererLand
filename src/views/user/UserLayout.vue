<template>
    <!-- <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="#/home">
        <h1 class="mb-0 me-5 fs-4 text-white">Dessert Time</h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav justify-content-between w-100">
          <li class="nav-item d-flex flex-column flex-lg-row gap-3 py-2">
            <RouterLink to="/productlist" class="text-secondary">看產品</RouterLink>
            <RouterLink to="/orders" class="text-secondary">查訂單</RouterLink>
          </li>
          <li class="nav-item d-flex flex-column flex-lg-row gap-3 py-2">
            <RouterLink to="/cart" class="position-relative text-secondary">
              <p>購物車</p>
              <div v-if="cartsList.total" class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill px-2 py-1 text-white">{{ cartsList.carts.length }}</div>
            </RouterLink>

            <RouterLink v-if="!isLoggedin" to="/userlogin" class="text-secondary">
              登入
            </RouterLink>

            <RouterLink v-else to="/admin" class="text-secondary">
              後台
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <div class="d-flex flex-column vh-100">
    <userNavBar></userNavBar>
    <RouterView />
    <userFooter :isLoggedin="isLoggedin"></userFooter>
    <toastComponent></toastComponent>
  </div>
</template>

<script>
import userNavBar from '@/components/userNavBar.vue'
import userFooter from '@/components/userFooter.vue'
import toastComponent from '@/components/toastComponent.vue'
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'

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
    userFooter
  },
  computed: { ...mapState(cartStore, ['cartsList']) }
}
</script>
