<template>
  <!-- banner -->
  <div class="position-relative banner" v-if="sortArticles.topArticle[0]">
    <img :src="sortArticles.topArticle[0].imageUrl" :alt="sortArticles.topArticle[0].title"
      class="position-fixed z-n1 h-100 w-100 overflow-hidden object-fit-cover" data-aos="zoom-out"
      data-aos-duration="3000">
    <div class="position-absolute z-1 top-0 bg-default opacity-50 w-100 h-100"></div>
    <div class="position-absolute z-2 top-50 start-50 translate-middle text-center banner-title w-80 w-sm-50">
      <h2 class="pb-5 pb-md-7 text-white title-shadow fs-2 fs-md-1 title-letter-spacing title-letter-word-wrap">{{
        sortArticles.topArticle[0].title }}</h2>
      <router-link :to="`/articleinfo/${sortArticles.topArticle[0].id}`"
        class="py-2 py-md-3 px-6 px-md-9 btn btn-light rounded-0 fw-bold">前往頁面</router-link>
    </div>
  </div>

  <div class="bg-white">
    <div class="container">
      <!-- 探索新作品 -->
      <swiperProductComponent dataCategory="products"></swiperProductComponent>
      <!-- 認識新藝術家 -->
      <swiperProductComponent dataCategory="artists"></swiperProductComponent>
    </div>
  </div>

  <!-- 最新消息 -->
  <div class="bg-white">
    <div class="container">
      <div class="py-7 py-md-9" v-if="sortArticles.newestArticles[0]">
        <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
          <h2 class="fs-2 fs-md-1">最新消息</h2>
          <btnSeeMore linkTo="/articlelist"></btnSeeMore>
        </div>
        <div class="row g-3 g-lg-6 home-article">
          <!-- article 1 -->
          <div class="col-12 col-lg-6 home-article-img">
            <router-link :to="`/articleInfo/${sortArticles.newestArticles[0].id}`">
              <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
                <div class="position-absolute z-1 w-100 h-100 home-article-mask"></div>
                <img :src="sortArticles.newestArticles[0].imageUrl" :alt="sortArticles.newestArticles[0].title"
                  class="object-fit-cover w-100 h-100">
                <div
                  class="position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
                  <h3 class="mb-4 fs-info fs-md-5 fw-bold">{{ sortArticles.newestArticles[0].title }}</h3>
                  <p class="fs-info fs-md-6 doubleline-ellipsis">{{ sortArticles.newestArticles[0].description }}</p>
                </div>
              </div>
              <div class="d-block d-xl-none py-3">
                <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis">{{
                  sortArticles.newestArticles[0].title }}</h3>
                <p class="fs-info fs-md-6 doubleline-ellipsis text-info">{{ sortArticles.newestArticles[0].description
                  }}
                </p>
              </div>
            </router-link>
          </div>
          <!-- article 2 -->
          <div class="col-6 d-flex flex-column home-article-img">
            <router-link :to="`/articleInfo/${sortArticles.newestArticles[1].id}`"
              class="d-flex flex-column flex-grow-1">
              <div
                class="position-relative d-flex justify-content-center align-items-center flex-grow-1 overflow-hidden">
                <div class="position-absolute z-1 w-100 h-100 home-article-mask"></div>
                <img :src="sortArticles.newestArticles[1].imageUrl" :alt="sortArticles.newestArticles[1].title"
                  class="object-fit-cover w-100 h-100">
                <div
                  class="position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
                  <h3 class="mb-4 fs-info fs-md-5 fw-bold">{{ sortArticles.newestArticles[1].title }}</h3>
                  <p class="fs-info fs-md-6 doubleline-ellipsis">{{ sortArticles.newestArticles[1].description }}</p>
                </div>
              </div>
              <div class="d-block d-xl-none py-3">
                <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis">{{
                  sortArticles.newestArticles[1].title }}</h3>
                <p class="fs-info fs-md-6 doubleline-ellipsis text-info">{{ sortArticles.newestArticles[1].description
                  }}
                </p>
              </div>
            </router-link>
          </div>
          <!-- article 3 -->
          <div class="col-6 col-lg-4 home-article-img">
            <router-link :to="`/articleInfo/${sortArticles.newestArticles[2].id}`">
              <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
                <div class="position-absolute z-1 w-100 h-100 home-article-mask"></div>
                <img :src="sortArticles.newestArticles[2].imageUrl" :alt="sortArticles.newestArticles[2].title"
                  class="object-fit-cover w-100 h-100">
                <div
                  class="position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
                  <h3 class="mb-4 fs-info fs-md-5 fw-bold">{{ sortArticles.newestArticles[2].title }}</h3>
                  <p class="fs-info fs-md-6 doubleline-ellipsis">{{ sortArticles.newestArticles[2].description }}</p>
                </div>
              </div>
              <div class="d-block d-xl-none py-3">
                <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis">{{
                  sortArticles.newestArticles[2].title }}</h3>
                <p class="fs-info fs-md-6 doubleline-ellipsis text-info">{{ sortArticles.newestArticles[2].description
                  }}
                </p>
              </div>
            </router-link>
          </div>
          <!-- article 4 -->
          <div class="col-6 col-lg-4 d-none d-lg-block home-article-img">
            <router-link :to="`/articleInfo/${sortArticles.newestArticles[3].id}`">
              <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
                <div class="position-absolute z-1 w-100 h-100 home-article-mask"></div>
                <img :src="sortArticles.newestArticles[3].imageUrl" alt="art" class="object-fit-cover w-100 h-100">
                <div
                  class="position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
                  <h3 class="mb-4 fs-info fs-md-5 fw-bold">{{ sortArticles.newestArticles[3].title }}</h3>
                  <p class="fs-info fs-md-6 doubleline-ellipsis">{{ sortArticles.newestArticles[3].description }}</p>
                </div>
              </div>
              <div class="d-block d-xl-none py-3">
                <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis">{{
                  sortArticles.newestArticles[3].title }}</h3>
                <p class="fs-info fs-md-6 doubleline-ellipsis text-info">{{ sortArticles.newestArticles[3].description
                  }}
                </p>
              </div>
            </router-link>
          </div>
          <!-- article 5 -->
          <div class="col-6 col-lg-4 d-none d-lg-block home-article-img">
            <router-link :to="`/articleInfo/${sortArticles.newestArticles[4].id}`">
              <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
                <div class="position-absolute z-1 w-100 h-100 home-article-mask"></div>
                <img :src="sortArticles.newestArticles[4].imageUrl" :alt="sortArticles.newestArticles[4].title"
                  class="object-fit-cover w-100 h-100">
                <div
                  class="position-absolute z-2 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
                  <h3 class="mb-4 fs-info fs-md-5 fw-bold">{{ sortArticles.newestArticles[4].title }}</h3>
                  <p class="fs-info fs-md-6 doubleline-ellipsis">{{ sortArticles.newestArticles[4].description }}</p>
                </div>
              </div>
              <div class="d-block d-xl-none py-3">
                <h3 class="mb-2 fs-info fs-md-5 fw-bold text-default single-ellipsis">{{
                  sortArticles.newestArticles[4].title }}</h3>
                <p class="fs-info fs-md-6 doubleline-ellipsis text-info">{{ sortArticles.newestArticles[4].description
                  }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 優惠券 -->
  <div
    class="position-relative d-flex justify-content-center align-items-center w-100 home-coupon overflow-hidden bg-primary">
    <div class="position-absolute top-50 z-1 translate-middle-y text-center title-shadow">
      <h2 class="mb-2 fs-4 fs-md-1 text-white title-letter-spacing">使用優惠券</h2>
      <p class="mb-7 fs-info fs-md-6 text-white">為你的第一筆訂單，獲取 97 折折扣</p>
      <button type="button" class="py-2 py-md-3 px-6 px-md-9 btn btn-light fw-bold rounded-0"
        @click="copyCouponCode('present97')">點擊複製優惠碼</button>
    </div>
    <img src="../../../public/images/present.webp" alt="coupon" class="object-fit-cover w-100 h-100" data-aos="zoom-out"
      data-aos-duration="3000">
  </div>

  <div class="bg-white">
    <div class="container">
      <!-- 猜你喜歡 -->
      <swiperProductComponent dataCategory="recently"></swiperProductComponent>

      <!-- 與我們聯絡 -->
      <div class="py-7 py-md-9">
        <h2 class="mb-7 mb-md-8 fs-2 fs-md-1">與我們聯絡</h2>

        <div class="row d-flex flex-column flex-md-row g-6 justify-content-between">
          <div class="col col-md-5">
            <div class="mb-4 mb-md-6">
              <p class="mb-2 fs-6 fs-md-5 fw-bold">合作說明</p>
              <p>謝謝您對 Wanderdr Land 的認可與提攜，我們歡迎各種合作，期盼與藝術激發更多靈感與火花。誠摯邀請您來信提案，我們將有專門窗口與您聯繫。</p>
            </div>
            <div class="mb-4">
              <p class="mb-2 fs-info fs-md-5 fw-bold">合作單位</p>
              <p>請附上您的提案網址及單位官網，並於來信標題寫入單位名稱。</p>
            </div>
            <div class="mb-4">
              <p class="mb-2 fs-info fs-md-5 fw-bold">空間</p>
              <p>請附上您的空間官網，並於來信標題寫入空間名稱。</p>
            </div>
            <div>
              <p class="mb-2 fs-info fs-md-5 fw-bold">藝術家</p>
              <p>請附上您的 CV 或是作品集網址，並於來信標題寫入藝術家名稱。</p>
            </div>
          </div>
          <div class="col col-md-6">
            <v-form v-slot="{ errors }" class="d-flex flex-column align-items-end" @submit="sendEmail"
              ref="cooperationForm">
              <!-- 來信類別 -->
              <div class="form-floating mb-4 mb-md-7 w-100">
                <v-field class="form-select  border-info rounded-0" :class="{ 'is-invalid': errors['類別'] }"
                  id="floatingSelect" aria-label="Floating label select" v-model="tempMessage.type" as="select"
                  name="類別" rules="required">
                  <option selected>請選擇類別</option>
                  <option value="異業合作">異業合作</option>
                  <option value="空間合作">空間合作</option>
                  <option value="藝術家合作">藝術家合作</option>
                </v-field>
                <error-message name="類別" class="invalid-feedback"></error-message>
                <label for="floatingSelect">來信類別</label>
              </div>
              <!-- 姓名 -->
              <div class="form-floating mb-4 mb-md-7 w-100">
                <v-field id="name" name="姓名" type="text" class="form-control border-info rounded-0"
                  :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入您的姓名" rules="required"
                  v-model="tempMessage.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
                <label for="name">姓名</label>
              </div>
              <!-- 標題 -->
              <div class="form-floating mb-4 mb-md-7 w-100">
                <v-field id="subject" name="標題" type="text" class="form-control border-info rounded-0"
                  :class="{ 'is-invalid': errors['標題'] }" placeholder="請輸入您的信件標題" rules="required"
                  v-model="message.subject"></v-field>
                <error-message name="標題" class="invalid-feedback"></error-message>
                <label for="subject">信件標題</label>
              </div>
              <!-- 訊息 -->
              <div class="form-floating mb-4 mb-md-7 w-100">
                <v-field id="body" name="訊息" class="form-control border-info rounded-0" as="textarea"
                  placeholder="請輸入您的訊息" :class="{ 'is-invalid': errors['訊息'] }" rules="required" style="height:273px"
                  v-model="message.body"></v-field>
                <error-message name="訊息" class="invalid-feedback"></error-message>
                <label for="body">留言</label>
              </div>
              <button type="submit" class="py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto"
                :class="{ 'cursor-notallowed': isFormEmpty }">
                送出訊息
              </button>

            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleStore from '@/stores/userArticleStore.js'
import cartStore from '@/stores/userCartStore.js'
import { mapActions, mapState } from 'pinia'

// Import Components
import SwiperProductComponent from '@/components/swiper/SwiperProductComponent.vue'
import BtnSeeMore from '@/components/button/BtnSeeMore.vue'

export default {
  data () {
    return {
      tempMessage: {
        type: '',
        Name: ''
      },
      message: {
        subject: '',
        body: ''
      }
    }
  },
  watch: {
    tempMessage: {
      handler () {
        const typePart = this.tempMessage.type !== undefined ? this.tempMessage.type : ''
        const namePart = this.tempMessage.name !== undefined ? `_${this.tempMessage.name}` : ''
        this.message.subject = `【${typePart}${namePart}】`
      },
      deep: true
    }
  },
  methods: {
    // 獲得購物車資料
    ...mapActions(articleStore, ['getArticlesList']),
    // 複製優惠碼動作
    ...mapActions(cartStore, ['copyCouponCode']),

    sendEmail () {
      window.open(`mailto:wandererland@gmail.com?cc=${this.message.email}&subject=${this.message.subject}&body=${this.message.body}`, '_blank')
      this.$refs.cooperationForm.resetForm()
    }
  },
  components: {
    SwiperProductComponent,
    BtnSeeMore
  },
  computed: {
    ...mapState(articleStore, ['sortArticles', 'articlesList']),
    isFormEmpty () {
      const { subject, body } = this.message
      return !subject || !body || !this.tempMessage.type
    }
  },
  mounted () {
    this.getArticlesList()
  }
}
</script>

<style lang="scss" scoped>
.banner {
  min-height: 289px;

  @media (min-width: 768px) {
    min-height: 100dvh;
  }

  &-title {
    padding-top: 60px;
  }
}

/* 首頁文章 */
.home-article {
  img {
    transition: transform 0.3s;
  }

  // hover 效果
  &-img:hover {
    .home-article-mask:after {
      border: 1px solid white;
    }

    img {
      transform: scale(1.5) translate(-15%, 0%);
    }
  }

  &:has(.home-article-img:hover) .home-article-img:not(:hover) {
    .home-article-mask {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  // RWD
  >.home-article-img:first-child>a>div:first-child {
    height: 208px;

    @media (min-width: 576px) {
      height: 350px;
    }

    @media (min-width: 1200px) {
      height: 822px;
    }
  }

  >.home-article-img:nth-child(n+3)>a>div:first-child {
    aspect-ratio: 3/4;

    @media (min-width: 768px) {
      aspect-ratio: 1/1;
    }
  }

  // 遮罩
  &-mask {
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(94, 94, 94, 0) 63%,
        rgba(0, 0, 0, 0.6) 100%);
    transition: background 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      width: 98%;
      height: 98%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: border 0.3s;
    }
  }
}

/* 優惠券 */
.home-coupon {
  min-height: 302px;

  @media (min-width: 768px) {
    min-height: 311px;
  }
}
</style>
