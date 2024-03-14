<template>
    <nav class="fixed-top z-1 bg-tertiary nav-product-filter w-100">
        <div class="container">
            <!-- web -->
            <div class="d-flex align-items-center">
                <ul class="d-none d-lg-flex align-items-center list-unstyled">
                    <li>
                        <div class="dropdown">
                            <button type="button"
                                class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                                id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="me-3">排序</span>
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu p-0 rounded-0" aria-labelledby="btnProductSort">
                                <li><a class="dropdown-item p-3" href="#"
                                        @click.prevent="filterShow(['sort', 'newest'])">最新作品</a></li>
                                <li><a class="dropdown-item p-3" href="#"
                                        @click.prevent="filterShow(['sort', 'priceHighToLow'])">價格：高至低</a></li>
                                <li><a class="dropdown-item p-3" href="#"
                                        @click.prevent="filterShow(['sort', 'priceLowToHigh'])">價格：低至高</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button type="button"
                                class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                                id="btnSizeFilter" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="me-3">尺寸</span>
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu p-0 overflow-y-scroll rounded-0" aria-labelledby="btnSizeFilter"
                                style="max-height:400px;">
                                <li v-for="item in productSizeList" :key="item">
                                    <a class="dropdown-item p-3" href="#" @click.prevent="filterShow(['size', item])">{{
                                            item
                                        }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button type="button"
                                class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                                id="btnGroupFilter" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="me-3">題材</span>
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu p-0 overflow-y-scroll rounded-0" aria-labelledby="btnGroupFilter"
                                style="max-height:400px;">
                                <li v-for="item in groupList.productGroupList" :key="item">
                                    <a class="dropdown-item p-3" href="#"
                                        @click.prevent="filterShow(['group', item])">{{ item }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button type="button"
                                class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                                id="btnArtistFilter" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="me-3">藝術家</span>
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu p-0 overflow-y-scroll rounded-0" aria-labelledby="btnArtistFilter"
                                style="max-height:400px;">
                                <li v-for="artist in allArtists" :key="artist.id">
                                    <a class="dropdown-item p-3" href="#"
                                        @click.prevent="filterShow(['artist', artist.title])">{{ artist.title }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <button class="btn btn-outline-default rounded-0 fs-info" type="button"
                    v-if="Object.keys(filterRules).length" @click="filterShow()">清空篩選</button>
            </div>

            <!-- mobile -->
            <ul class="d-flex d-lg-none align-items-center justify-content-between list-unstyled">
                <li>
                    <div class="dropdown">
                        <button type="button"
                            class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                            id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="me-3">排序</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort">
                            <li><a class="dropdown-item p-3" href="#">最新作品</a></li>
                            <li><a class="dropdown-item p-3" href="#">價格：高至低</a></li>
                            <li><a class="dropdown-item p-3" href="#">價格：低至高</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0">
                        <span class="me-3">篩選</span>
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      filterRules: {}
    }
  },
  props: ['allArtists', 'groupList', 'productSizeList'],
  methods: {
    filterShow (filters) {
      if (filters) {
        const [key, values] = filters
        this.filterRules[key] = values

        const path = Object.entries(this.filterRules).map(item => item.join('=')).join('&')
        this.$router.push(`/productList?${path}`)
        return
      }

      this.filterRules = {}
      this.$router.push('/productList')
    }
  },
  mounted () {
    const path = window.location.href.split('?')[1]

    if (!path) {
      this.filterRules = {}
      return
    }

    path.split('&').forEach(item => {
      const temp = item.split('=')
      this.filterRules[temp[0]] = temp[1]
    })
  }
}
</script>
