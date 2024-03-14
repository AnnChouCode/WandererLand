<template>
  <div class="fixed-top">
    <nav class="bg-primary">
      <div class="position-relative d-flex align-items-center container justify-content-between">
        <!-- mobile btn Nav -->
        <button class="d-block d-lg-none px-0 border-0 bg-transparent" type="button" aria-controls="offcanvasNav"
          @click="openMobileNav">
          <i class="bi bi-list fs-5"></i>
        </button>
        <!-- <button class="d-block d-lg-none px-0 border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNav" aria-controls="offcanvasNav">
          <i class="bi bi-list fs-5"></i>
        </button> -->

        <!-- web Nav -->
        <ul class="d-none d-lg-flex align-items-center list-unstyled">
          <li><router-link to="/productlist" class="d-block px-5 py-4 text-default navlink-underline">作品</router-link>
          </li>
          <li><router-link to="/artistlist" class="d-block px-5 py-4 text-default navlink-underline">藝術家</router-link>
          </li>
          <li><router-link to="/news" class="d-block px-5 py-4 text-default navlink-underline">最新消息</router-link></li>
        </ul>
        <h1 class="position-absolute top-50 start-50 translate-middle">
          <a href="#/home" class="d-block h5 fs-md-20 fw-bold text-default">WANDERER LAND</a>
        </h1>
        <ul class="d-flex gap-4 gap-md-5 align-items-center list-unstyled">
          <li class="position-relative d-none d-lg-block py-4">
            <input type="search" class="pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info"
              placeholder="搜尋作品" style="height:28px;">
            <i class="position-absolute start-0 top-50 ms-5 bi bi-search translate-middle"></i>
          </li>
          <li class="py-4">
            <i class="bi bi-heart"></i>
          </li>
          <li class="py-4">
            <router-link to="/cart" class="position-relative text-default">
              <i class="bi bi-handbag"></i>
              <div v-if="cartsList.total" class="position-absolute badge bg-default rounded-circle text-white"
                style="top: 8px;right: -10px;font-size:8px;">{{ cartsList.carts.length }}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- <userNavProductFilter v-if="pageType === 'productlist'"></userNavProductFilter> -->
    <!-- <userNavArtistFilter v-if="pageType === 'artistlist'"></userNavArtistFilter> -->
  </div>

  <!-- mobile Nav -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel"
    ref="mobileNav">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavLabel">WANDERER LAND</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="d-flex flex-column gap-3 gap-sm-5 list-unstyled">
        <li class="position-relative">
          <input type="search" class="pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info"
            placeholder="搜尋作品" style="height:28px;">
          <i class="position-absolute start-0 top-50 ms-5 bi bi-search translate-middle"></i>
        </li>
        <li>
          <router-link to="/productlist" class="d-block py-4 text-default navlink-underline">作品</router-link>
        </li>
        <li>
          <router-link to="/artistlist" class="d-block py-4 text-default navlink-underline">藝術家</router-link>
        </li>
        <li>
          <router-link to="/news" class="d-block py-4 text-default navlink-underline">最新消息</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/userCartStore.js'
import { mapActions, mapState } from 'pinia'
// import userNavProductFilter from '@/components/userNavProductFilter.vue'
// import userNavArtistFilter from '@/components/userNavArtistFilter.vue'
import { Offcanvas } from 'bootstrap'

export default {
  data () {
    return {
      // 當前頁面類型
      pageType: '',
      // mobile 選單
      mobileNav: null
    }
  },
  methods: {
    // 獲得購物車資料
    ...mapActions(cartStore, ['getCartsList']),

    // 判斷是否為產品頁，顯示對應 navbar
    // checkPageType () {
    //   const url = window.location.href
    //   const parts = url.split('/')
    //   this.pageType = parts[parts.length - 1]
    // },

    // 開啟 mobile nav
    openMobileNav () {
      this.mobileNav.show()
    },

    // 關閉 mobile nav
    closeMobileNav () {
      this.mobileNav.hide()
    }
  },
  watch: {
    $route () {
      // this.checkPageType()
      this.closeMobileNav()
    }
  },
  components: {
    // userNavProductFilter,
    // userNavArtistFilter
  },
  mounted () {
    // this.checkPageType()

    this.mobileNav = new Offcanvas(this.$refs.mobileNav)
  },
  computed: { ...mapState(cartStore, ['cartsList']) }
}
</script>
