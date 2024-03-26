<template>
  <div class="position-relative">
    <input type="search" class="pe-3 ps-8 rounded-pill border-default form-control bg-transparent fs-info"
      placeholder="搜尋作品" style="height:28px;" v-model.trim="search" aria-label="Search" @input="debouncedSearch">
    <i class="position-absolute start-0 top-50 ms-5 bi bi-search translate-middle"></i>
    <ul v-if="search"
      class="position-absolute z-1 start-0 mt-1 list-unstyled overflow-y-scroll bg-white border border-primary w-100 dropdown-scrollbar">
      <li v-if="!filterProducts.length" class="p-3 text-info">
        未搜尋到符合輸入的作品
      </li>
      <li v-else v-for="item in filterProducts" :key="item.id">
        <router-link :to="`/productinfo/${item.id}`" class="d-block p-3 text-default link-hover-bg">{{ item.title
          }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import userProductStore from '@/stores/userProductStore'
import { mapActions, mapState } from 'pinia'

export default {
  data () {
    return {
      isAutoComplete: false,
      search: ''
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(userProductStore, ['getAllProducts'])
  },
  computed: {
    ...mapState(userProductStore, ['allProducts']),

    filterProducts () {
      const filterProducts = this.allProducts.filter(item => item.title.includes(this.search)).sort((a, b) => a.title.localeCompare(b.title))
      return filterProducts
    }
  },
  watch: {
    $route () {
      this.search = ''
    }
  },
  mounted () {
    this.getAllProducts()
  }
}
</script>
