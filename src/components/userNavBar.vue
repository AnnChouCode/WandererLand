<template>
  <div class="fixed-top">
    <nav class="bg-primary">
      <div class="position-relative d-flex align-items-center container justify-content-end justify-content-lg-between">
        <ul class="d-none d-lg-flex align-items-center list-unstyled">
          <li><router-link to="/productlist" class="d-block px-5 py-4 text-default navlink-underline">作品</router-link>
          </li>
          <li><router-link to="/artistlist" class="d-block px-5 py-4 text-default navlink-underline">藝術家</router-link>
          </li>
          <li><router-link to="/news" class="d-block px-5 py-4 text-default navlink-underline">最新消息</router-link></li>
        </ul>
        <h1 class="position-absolute top-50 start-50 translate-middle">
          <a href="/home" class="d-block h5 fs-md-20 fw-bold text-default">WANDERER LAND</a>
        </h1>
        <ul class="d-flex gap-5 align-items-center list-unstyled">
          <li class="position-relative d-none d-lg-block py-4">
            <input type="search" class="pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info"
              placeholder="搜尋作品" style="height:28px;">
            <i class="position-absolute start-0 top-50 ms-5 bi bi-search fs-20 translate-middle"></i>
          </li>
          <li class="py-4">
            <i class="bi bi-heart fs-20"></i>
          </li>
          <li class="py-4">
            <i class="bi bi-handbag fs-20"></i>
          </li>
        </ul>
      </div>
    </nav>

    <userNavProductFilter v-if="pageType === 'productlist'"></userNavProductFilter>
    <userNavArtistFilter v-if="pageType === 'artistlist'"></userNavArtistFilter>
  </div>
</template>

<script>
import userNavProductFilter from '@/components/userNavProductFilter.vue'
import userNavArtistFilter from '@/components/userNavArtistFilter.vue'

export default {
  data () {
    return {
      pageType: ''
    }
  },
  methods: {
    // 判斷是否為產品頁，顯示對應 navbar
    checkProductPage () {
      const url = window.location.href
      const parts = url.split('/')
      this.pageType = parts[parts.length - 1]
      console.log(this.pageType)
    }
  },
  watch: {
    $route () {
      this.checkProductPage()
    }
  },
  components: {
    userNavProductFilter,
    userNavArtistFilter
  },
  mounted () {
    this.checkProductPage()
  }
}
</script>
