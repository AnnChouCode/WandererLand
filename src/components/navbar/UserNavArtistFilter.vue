<template>
    <nav class="fixed-top z-1 bg-tertiary nav-product-filter w-100">
        <div class="container">
            <!-- web -->
            <div class="d-none d-lg-flex align-items-center">
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
                                <li><a class="dropdown-item p-3" :class="filterRules.sort === 'newest' ? 'bg-secondary' : ''" href="#"
                                        @click.prevent="filterShow(['sort', 'newest'])">最新藝術家</a></li>
                                <li><a class="dropdown-item p-3" :class="filterRules.sort === 'nameAToZ' ? 'bg-secondary' : ''" href="#"
                                        @click.prevent="filterShow(['sort', 'nameAToZ'])">姓名：A - Z</a></li>
                                <li><a class="dropdown-item p-3" :class="filterRules.sort === 'nameZToA' ? 'bg-secondary' : ''" href="#"
                                        @click.prevent="filterShow(['sort', 'nameZToA'])">姓名：Z - A</a></li>
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
                            <ul class="dropdown-menu p-0 overflow-y-scroll rounded-0 dropdown-scrollbar" aria-labelledby="btnGroupFilter">
                                <li v-for="item in groupList.artistGroupList" :key="item">
                                    <a class="dropdown-item p-3" :class="filterRules.group === item ? 'bg-secondary' : ''" href="#"
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
                            <ul class="dropdown-menu p-0 overflow-y-scroll rounded-0 dropdown-scrollbar" aria-labelledby="btnArtistFilter">
                                <li v-for="artist in allArtists" :key="artist.id">
                                    <a class="dropdown-item p-3" :class="filterRules.title === artist.title ? 'bg-secondary' : ''" href="#"
                                        @click.prevent="filterShow(['title', artist.title])">{{ artist.title }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <button class="btn btn-outline-default rounded-0 fs-info" type="button"
                    v-if="Object.keys(filterRules).length" @click="filterShow()">清空篩選</button>
            </div>

            <!-- mobile -->
            <div class="d-flex d-lg-none align-items-center justify-content-between">
                <ul class="d-flex align-items-center justify-content-between list-unstyled">
                    <li>
                        <div class="dropdown">
                            <button type="button"
                                class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                                id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="me-3">排序</span>
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort">
                                <li>
                                    <a class="dropdown-item p-3" :class="filterRules.sort === 'newest' ? 'bg-secondary' : ''" href="#"
                                        @click.prevent="filterShow(['sort', 'newest'])">最新藝術家</a>
                                </li>
                                <li>
                                    <a class="dropdown-item p-3" :class="filterRules.sort === 'nameAToZ' ? 'bg-secondary' : ''" href="#"
                                        @click.prevent="filterShow(['sort', 'nameAToZ'])">姓名：A - Z</a>
                                </li>
                                <li>
                                    <a class="dropdown-item p-3" :class="filterRules.sort === 'nameZToA' ? 'bg-secondary' : ''" href="#"
                                        @click.prevent="filterShow(['sort', 'nameZToA'])">姓名：Z - A</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button type="button"
                            class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                            aria-controls="offcanvasFilterNav" @click="openMobileNav">
                            <span class="me-3">篩選</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                    </li>
                </ul>
                <button class="btn btn-outline-default rounded-0 fs-info" type="button"
                    v-if="Object.keys(filterRules).length" @click="filterShow()">清空篩選</button>
            </div>
        </div>
    </nav>

    <!-- mobile Nav -->
    <div class="offcanvas offcanvas-start bg-primary" tabindex="-1" id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel" ref="mobileNav">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavLabel">WANDERER LAND</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="d-flex flex-column gap-3 gap-sm-5 list-unstyled accordion accordion-flush"
                id="accordionFlushFilter">
                <li class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed px-0 text-default bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseGroup" aria-expanded="false" aria-controls="flush-collapseGroup">
                            題材
                        </button>
                    </h2>
                    <div id="flush-collapseGroup" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushGroup">
                        <div class="accordion-body px-0 py-0">
                            <ul class="list-unstyled" aria-labelledby="btnGroupFilter">
                                <li v-for="item in groupList.artistGroupList" :key="item">
                                    <a class="d-block p-3 text-info" :class="filterRules.group === item ? 'fw-bold text-decoration-underline' : ''" href="#"
                                        @click.prevent="filterShow(['group', item])" data-bs-dismiss="offcanvas">{{ item }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed px-0 text-default bg-transparent" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseArtist" aria-expanded="false" aria-controls="flush-collapseArtist">
                            藝術家
                        </button>
                    </h2>
                    <div id="flush-collapseArtist" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushArtist">
                        <div class="accordion-body px-0 py-0">
                            <ul class="list-unstyled" aria-labelledby="btnArtistFilter">
                                <li v-for="artist in allArtists" :key="artist.id">
                                    <a class="d-block p-3 text-info" :class="filterRules.title === artist.title ? 'fw-bold text-decoration-underline' : ''" href="#"
                                        @click.prevent="filterShow(['title', artist.title])" data-bs-dismiss="offcanvas">{{ artist.title }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="position-absolute start-0 bottom-0 bg-primary p-4 w-100">
                <button class="btn btn-outline-default rounded-0 fs-info w-100" type="button"
                    v-if="Object.keys(filterRules).length" @click="filterShow()">清空篩選</button>
            </div>
    </div>
</template>

<script>
import { Offcanvas } from 'bootstrap'

export default {
  data () {
    return {
      // 篩選條件
      filterRules: {},
      // mobile 選單
      mobileNav: null
    }
  },
  props: ['allArtists', 'groupList'],
  methods: {
    // 排序篩選要顯示的資料
    filterShow (filters) {
      if (filters) {
        const [key, values] = filters
        this.filterRules[key] = values

        const path = Object.entries(this.filterRules).map(item => item.join('=')).join('&')
        this.$router.push(`/artistList?${path}`)
        return
      }

      this.filterRules = {}
      this.$router.push('/artistList')
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
  mounted () {
    // 綁定 mobile nav offcanvas
    this.mobileNav = new Offcanvas(this.$refs.mobileNav)

    // 確認頁面屬性
    this.filterRules = JSON.parse(JSON.stringify(this.$route.query))
    // 如果只有頁面資料則刪除，避免清空篩選按鈕出現
    delete this.filterRules.current_page
  }
}
</script>
