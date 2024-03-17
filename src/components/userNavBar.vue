<template>
  <div class="fixed-top">
    <nav class="bg-primary">
      <div class="position-relative d-flex align-items-center container justify-content-between">
        <!-- mobile btn Nav -->
        <button class="d-block d-lg-none px-0 border-0 bg-transparent" type="button" aria-controls="offcanvasNav"
          @click="openMobileNav">
          <i class="bi bi-list fs-5"></i>
        </button>

        <!-- web Nav -->
        <ul class="d-none d-lg-flex align-items-center list-unstyled">
          <li><router-link to="/productlist" class="d-block px-5 py-4 text-default navlink-underline">作品</router-link>
          </li>
          <li><router-link to="/artistlist" class="d-block px-5 py-4 text-default navlink-underline">藝術家</router-link>
          </li>
          <li><router-link to="/articlelist" class="d-block px-5 py-4 text-default navlink-underline">最新消息</router-link>
          </li>
        </ul>
        <h1 class="position-absolute top-50 start-50 translate-middle">
          <a href="#/home" class="d-block h5 fs-md-20 fw-bold text-default">WANDERER LAND</a>
        </h1>
        <ul class="d-flex gap-4 gap-md-5 align-items-center list-unstyled">
          <li class="d-none d-lg-block py-4">
            <productSearch></productSearch>
          </li>
          <li class="py-4">
            <router-link to="/favoritelist" class="position-relative text-default">
              <i class="bi" :class="favoriteList.length ? 'bi-heart-fill' : 'bi-heart'"></i>
            </router-link>
          </li>
          <li class="py-4"  @mouseover="showCartList"
              @mouseout="hideCartList">
            <router-link to="/cart" class="position-relative text-default">
              <i class="bi bi-handbag"></i>
              <div v-if="cartsList.final_total" class="position-absolute badge bg-default rounded-circle text-white"
                style="top: 8px;right: -10px;font-size:8px;">{{ cartsList.carts.length }}</div>
            </router-link>

            <!-- 購物車選單 -->
            <div class="d-none position-absolute end-0 top-100 px-6 pb-7 bg-primary" ref="cartList"
              style="max-width:375px;" @mouseover="showCartList" @mouseout="hideCartList">
              <div v-if="cartsList.total">
                <p class="py-3 text-center border-bottom border-default">{{ cartsList.carts.length }} 個商品</p>
                <ul class="list-unstyled">
                  <li v-for="item in cartsList.carts" :key="item.product_id" class="py-3 border-bottom border-default">
                    <div class="row g-5">
                      <div class="col-4">
                        <img :src="item.product.imageUrl" :alt="item.product.title"
                          class="w-100 h-100 object-fit-contain">
                      </div>
                      <div class="col-8 d-flex flex-column justify-content-between">
                        <div>
                          <p class="fw-bold single-ellipsis">{{ item.product.title }}</p>
                          <p class="fs-info single-ellipsis">{{ item.product.artist }}</p>
                        </div>
                        <p>NT$ {{ (item.product.price).toLocaleString() }}</p>
                        <p>數量：{{ item.qty }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="d-flex py-3 justify-content-between mb-6 fw-bold">
                  <p>總計</p>
                  <p>NT$ {{ cartsList.final_total.toLocaleString() }}</p>
                </div>
                <router-link to="/cart"
                  class="py-2 btn btn-default text-center rounded-0 w-100 fw-bold">前往購物車</router-link>
              </div>
              <div v-else>
                <p lass="py-3 text-center">目前購物車內沒有內容</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <!-- mobile Nav -->
  <div class="offcanvas offcanvas-start bg-primary" tabindex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel"
    ref="mobileNav">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavLabel">WANDERER LAND</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="d-flex flex-column gap-3 gap-sm-5 list-unstyled">
        <li>
          <productSearch></productSearch>
        </li>
        <li>
          <router-link to="/productlist" class="d-block py-4 text-default navlink-underline">作品</router-link>
        </li>
        <li>
          <router-link to="/artistlist" class="d-block py-4 text-default navlink-underline">藝術家</router-link>
        </li>
        <li>
          <router-link to="/articlelist" class="d-block py-4 text-default navlink-underline">最新消息</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/userCartStore.js'
import favoriteStore from '@/stores/favoriteStore.js'
import { mapState } from 'pinia'

// Import Components
import productSearch from '@/components/productSearch.vue'

import { Offcanvas } from 'bootstrap'

export default {
  data () {
    return {
      // mobile 選單
      mobileNav: null
    }
  },
  methods: {
    // 滑鼠移過購物車
    showCartList () {
      this.$refs.cartList.classList.remove('d-none')
    },
    hideCartList () {
      this.$refs.cartList.classList.add('d-none')
    },

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
      this.closeMobileNav()
    }
  },
  mounted () {
    this.mobileNav = new Offcanvas(this.$refs.mobileNav)
  },
  computed: {
    ...mapState(cartStore, ['cartsList']),
    ...mapState(favoriteStore, ['favoriteList'])
  },
  components: {
    productSearch
  }
}
</script>
