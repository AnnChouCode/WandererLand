<template>
  <!-- 導覽列 mobile -->
  <nav class="d-flex d-lg-none flex-column sticky-top bg-dark px-6 py-2">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="fs-4 text-white">Wanderer Land</h1>

      <button
        type="button"
        class="btn border border-white"
        @click="toggleNavCollapse"
      >
        <i class="bi bi-list text-white"></i>
      </button>
    </div>
    <!-- 選單 -->
    <div class="collapse" id="collapseAdminMenu" ref="navCollapse">
      <ul class="navbar-nav text-center pt-3">
        <li>
          <router-link
            to="/admin/dashboard"
            class="d-block py-3 theme-dark-navlink text-white"
            >Home</router-link
          >
        </li>
        <li>
            <router-link
              to="/admin/products"
              class="d-block py-3 theme-dark-navlink text-white"
              >產品管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/artists"
              class="d-block py-3 theme-dark-navlink text-white"
              >藝術家管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/orders"
              class="d-block py-3 theme-dark-navlink text-white"
              >訂單管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/coupons"
              class="d-block py-3 theme-dark-navlink text-white"
              >優惠券管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/articles"
              class="d-block py-3 theme-dark-navlink text-white"
              >文章管理</router-link
            >
          </li>
      </ul>
      <hr style="border: 1px solid white" />
      <div class="navbar-nav text-center pb-3">
        <router-link to="/home" class="d-block py-3 text-white theme-dark-navlink"
          >回前台</router-link
        >
        <a
          href="#"
          @click.prevent="logout"
          class="d-block py-3 text-white theme-dark-navlink"
          >登出</a
        >
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <!-- 導覽列-web -->
      <div
        class="position-sticky top-0 d-none d-lg-flex flex-column col-lg-2 py-5 px-0 text-white bg-dark vh-100"
      >
        <h2 class="px-5 mb-3 mb-md-0 me-md-auto fs-4">Wanderer Land</h2>

        <hr />
        <ul class="nav flex-column mb-auto">
          <li>
            <router-link
              to="/admin/dashboard"
              class="d-block px-5 py-3 theme-dark-navlink text-white"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/products"
              class="d-block px-5 py-3 theme-dark-navlink text-white"
              >產品管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/artists"
              class="d-block px-5 py-3 theme-dark-navlink text-white"
              >藝術家管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/orders"
              class="d-block px-5 py-3 theme-dark-navlink text-white"
              >訂單管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/coupons"
              class="d-block px-5 py-3 theme-dark-navlink text-white"
              >優惠券管理</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/articles"
              class="d-block px-5 py-3 theme-dark-navlink text-white"
              >文章管理</router-link
            >
          </li>
        </ul>
        <hr />
        <div class="d-flex flex-column">
          <router-link to="/home" class="d-block px-5 py-3 theme-dark-navlink text-white"
            >回前台</router-link
          >
          <a
            href="#"
            @click.prevent="logout"
            class="d-block px-5 py-3 theme-dark-navlink text-white"
            >登出</a
          >
        </div>
      </div>

      <!-- 顯示區 -->
      <div class="col col-lg-10 p-6 p-md-7">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'

import { useAdminLoginStore } from '@/stores/adminLoginStore.js'
import { mapStores } from 'pinia'
const adminLoginStore = useAdminLoginStore()

export default {
  data () {
    return {
      navCollapse: null
    }
  },
  methods: {
    logout () {
      document.cookie = 'user=;expires=;'
      this.$router.push('/home')
    },
    toggleNavCollapse () {
      this.navCollapse.toggle()
    }
  },
  computed: {
    ...mapStores(useAdminLoginStore)
  },
  watch: {
    $route () {
      this.navCollapse.hide()
    }
  },
  mounted () {
    this.navCollapse = new Collapse(this.$refs.navCollapse, { toggle: false })
  },
  created () {
    adminLoginStore.checkLogin()
  }
}
</script>
