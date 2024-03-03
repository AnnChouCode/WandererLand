<template>
  <!-- banner -->
  <div class="position-relative banner">
    <img src="../../../public/images/Exhibition/anastassiya-redko-5NJi3Kb4Mkc-unsplash.jpg" alt="banner"
      class="vh-100 w-100 overflow-hidden object-fit-cover">
    <div class="position-absolute z-1 top-0 bg-default opacity-50 w-100 vh-100"></div>
    <div class="position-absolute z-2 top-50 start-50 translate-middle text-center">
      <h2 class="pb-5 pb-md-7 text-white title-shadow fs-2 fs-md-1 title-letter-spacing">台北藝術季 Taipei Arts Fest</h2>
      <button type="button" class="py-2 py-md-3 px-6 px-md-9 btn btn-light rounded-0 fw-bold">前往頁面</button>
    </div>
  </div>

  <div class="container">
    <!-- 探索新作品 -->
    <swiperProductComponent dataCategory="products"></swiperProductComponent>

    <!-- 認識新藝術家 -->
    <swiperProductComponent dataCategory="artists"></swiperProductComponent>

    <!-- 最新消息 -->
    <div class="py-7 py-md-9">
      <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
        <h2 class="fs-2 fs-md-1">最新消息</h2>
        <router-link to="/artists"
          class="text-default border-bottom border-default fw-bold fs-info fs-md-6">瀏覽更多</router-link>
      </div>
      <div class="row g-3 g-lg-6 home-article">
        <!-- article 1 -->
        <div class="col-12 col-lg-6 home-article-img">
          <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
            <div class="w-100 h-100 home-article-mask"></div>
            <img src="../../../public/images/Exhibition/markus-spiske-RmvlD0oTsAo-unsplash.jpg" alt="art"
              class="position-absolute z-n1 object-fit-cover w-100 h-100">
            <div class="position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
              <h3 class="mb-4 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
              <p class="fs-info fs-md-6 doubleline-ellipsis">ART TAIPEI is the landmark of Asian Art. It connects the
                forefront of art from around the world to explore the topic of global art trends while focusing</p>
            </div>
          </div>
          <div class="d-block d-xl-none py-3">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
            <p class="fs-info fs-md-6 doubleline-ellipsis text-info">ART TAIPEI is the landmark of Asian Art. It connects
              the forefront of art from around the world to explore the topic of global art trends while focusing</p>
          </div>
        </div>
        <!-- article 2 -->
        <div class="col-6 d-flex flex-column  home-article-img">
          <div class="position-relative d-flex justify-content-center align-items-center flex-grow-1 overflow-hidden">
            <div class="w-100 h-100 home-article-mask"></div>
            <img src="../../../public/images/Exhibition/markus-spiske-RmvlD0oTsAo-unsplash.jpg" alt="art"
              class="position-absolute z-n1 object-fit-cover w-100 h-100">
            <div class="position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
              <h3 class="mb-4 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
              <p class="fs-info fs-md-6 doubleline-ellipsis">ART TAIPEI is the landmark of Asian Art. It connects the
                forefront of art from around the world to explore the topic of global art trends while focusing</p>
            </div>
          </div>
          <div class="d-block d-xl-none py-3">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
            <p class="fs-info fs-md-6 doubleline-ellipsis text-info">ART TAIPEI is the landmark of Asian Art. It connects
              the forefront of art from around the world to explore the topic of global art trends while focusing</p>
          </div>
        </div>
        <!-- article 3 -->
        <div class="col-6 col-lg-4 home-article-img">
          <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
            <div class="w-100 h-100 home-article-mask"></div>
            <img src="../../../public/images/Exhibition/markus-spiske-RmvlD0oTsAo-unsplash.jpg" alt="art"
              class="position-absolute z-n1 object-fit-cover w-100 h-100">
            <div class="position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
              <h3 class="mb-4 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
              <p class="fs-info fs-md-6 doubleline-ellipsis">ART TAIPEI is the landmark of Asian Art. It connects the
                forefront of art from around the world to explore the topic of global art trends while focusing</p>
            </div>
          </div>
          <div class="d-block d-xl-none py-3">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
            <p class="fs-info fs-md-6 doubleline-ellipsis text-info">ART TAIPEI is the landmark of Asian Art. It connects
              the forefront of art from around the world to explore the topic of global art trends while focusing</p>
          </div>
        </div>
        <!-- article 4 -->
        <div class="col-6 col-lg-4 d-none d-lg-block home-article-img">
          <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
            <div class="w-100 h-100 home-article-mask"></div>
            <img src="../../../public/images/Exhibition/markus-spiske-RmvlD0oTsAo-unsplash.jpg" alt="art"
              class="position-absolute z-n1 object-fit-cover w-100 h-100">
            <div class="position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
              <h3 class="mb-4 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
              <p class="fs-info fs-md-6 doubleline-ellipsis">ART TAIPEI is the landmark of Asian Art. It connects the
                forefront of art from around the world to explore the topic of global art trends while focusing</p>
            </div>
          </div>
          <div class="d-block d-xl-none py-3">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
            <p class="fs-info fs-md-6 doubleline-ellipsis text-info">ART TAIPEI is the landmark of Asian Art. It connects
              the forefront of art from around the world to explore the topic of global art trends while focusing</p>
          </div>
        </div>
        <!-- article 5 -->
        <div class="col-6 col-lg-4 d-none d-lg-block home-article-img">
          <div class="position-relative d-flex justify-content-center align-items-center overflow-hidden">
            <div class="w-100 h-100 home-article-mask"></div>
            <img src="../../../public/images/Exhibition/markus-spiske-RmvlD0oTsAo-unsplash.jpg" alt="art"
              class="position-absolute z-n1 object-fit-cover w-100 h-100">
            <div class="position-absolute z-1 start-0 bottom-0 d-none d-xl-block px-7 py-8 text-white w-100 title-shadow">
              <h3 class="mb-4 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
              <p class="fs-info fs-md-6 doubleline-ellipsis">ART TAIPEI is the landmark of Asian Art. It connects the
                forefront of art from around the world to explore the topic of global art trends while focusing</p>
            </div>
          </div>
          <div class="d-block d-xl-none py-3">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">台北藝術季 Taipei Arts Fest</h3>
            <p class="fs-info fs-md-6 doubleline-ellipsis text-info">ART TAIPEI is the landmark of Asian Art. It connects
              the forefront of art from around the world to explore the topic of global art trends while focusing</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 優惠券 -->
  <div class="position-relative d-flex justify-content-center align-items-center w-100 home-coupon overflow-hidden">
    <div class="text-center title-shadow">
      <h2 class="mb-2 fs-4 fs-md-1 text-white title-letter-spacing">使用優惠券</h2>
      <p class="mb-7 fs-info fs-md-6 text-white">為你的第一筆訂單，獲取 97 折折扣</p>
      <button type="button" class="py-2 py-md-3 px-6 px-md-9 btn btn-light fw-bold rounded-0">點擊複製優惠碼</button>
    </div>
    <img src="../../../public/images/present.jpg" alt="coupon"
      class="position-absolute top-0 z-n1 object-fit-cover w-100 h-100">
  </div>

  <div class="container">
    <!-- 猜你喜歡 -->
    <div class="py-7 py-md-9">
      <div class="d-flex justify-content-between align-items-center mb-7 mb-md-8 ">
        <h2 class="fs-2 fs-md-1">猜你喜歡</h2>
        <router-link to="/arts"
          class="text-default border-bottom border-default fw-bold fs-info fs-md-6">瀏覽更多</router-link>
      </div>
      <div class="row g-3 g-md-8">
        <div class="col-6 col-md-4">
          <div
            class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img">
            <img src="../../../public/images/炭筆/Hannahpun-untitled (2)_M4x6.jpg" alt="art"
              class="object-fit-contain w-100 h-100 product-img-up">
            <img src="../../../public/images/炭筆/Hannahpun-untitled (2).jpg" alt="art"
              class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
          </div>
          <div class="py-3 px-0 px-md-4">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">landscape 3</h3>
            <div class="d-flex justify-content-between align-items-center">
              <p class="fs-info fs-md-6 text-info">NT$ 10,000</p>
              <button type="button" class="btn p-0">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div
            class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img">
            <img src="../../../public/images/炭筆/Hannahpun-untitled (2)_M4x6.jpg" alt="art"
              class="object-fit-contain w-100 h-100 product-img-up">
            <img src="../../../public/images/炭筆/Hannahpun-untitled (2).jpg" alt="art"
              class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
          </div>
          <div class="py-3 px-0 px-md-4">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">landscape 3</h3>
            <div class="d-flex justify-content-between align-items-center">
              <p class="fs-info fs-md-6 text-info">NT$ 10,000</p>
              <button type="button" class="btn p-0">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="d-none d-md-block col-4">
          <div
            class="position-relative d-flex justify-content-center align-items-center ratio-1x1 overflow-hidden product-img">
            <img src="../../../public/images/炭筆/Hannahpun-untitled (2)_M4x6.jpg" alt="art"
              class="object-fit-contain w-100 h-100 product-img-up">
            <img src="../../../public/images/炭筆/Hannahpun-untitled (2).jpg" alt="art"
              class="position-absolute z-n1 object-fit-contain w-100 h-100 product-img-down">
          </div>
          <div class="py-3 px-0 px-md-4">
            <h3 class="mb-2 fs-info fs-md-5 fw-bold">landscape 3</h3>
            <div class="d-flex justify-content-between align-items-center">
              <p class="fs-info fs-md-6 text-info">NT$ 10,000</p>
              <button type="button" class="btn p-0">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 與我們聯絡 -->
    <div class="py-7 py-md-9">
      <h2 class="mb-7 mb-md-8 fs-2 fs-md-1">與我們聯絡</h2>

      <div class="row d-flex flex-column flex-md-row g-7 g-md-6 justify-content-between">
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
          <v-form v-slot="{ errors }" @submit="submit" class="d-flex flex-column align-items-end">
            <!-- 來信類別 -->
            <div class="form-floating mb-4 mb-md-7 w-100">
              <select class="form-select  border-info rounded-0" id="floatingSelect" aria-label="Floating label select">
                <option selected>請選擇類別</option>
                <option value="異業合作">異業合作</option>
                <option value="空間合作">空間合作</option>
                <option value="藝術家合作">藝術家合作</option>
              </select>
              <label for="floatingSelect">來信類別</label>
            </div>
            <!-- 標題 -->
            <div class="form-floating mb-4 mb-md-7 w-100">
              <v-field id="title" name="title" type="text" class="form-control border-info rounded-0"
                :class="{ 'is-invalid': errors['title'] }" placeholder="請輸入您的信件標題" rules="required"></v-field>
              <error-message name="title" class="invalid-feedback"></error-message>
              <label for="title">信件標題</label>
            </div>
            <!-- 姓名 -->
            <div class="form-floating mb-4 mb-md-7 w-100">
              <v-field id="name" name="name" type="text" class="form-control border-info rounded-0"
                :class="{ 'is-invalid': errors['name'] }" placeholder="請輸入您的姓名" rules="required"></v-field>
              <error-message name="name" class="invalid-feedback"></error-message>
              <label for="name">姓名</label>
            </div>
            <!-- Email -->
            <div class="form-floating mb-4 mb-md-7 w-100">
              <v-field id="email" name="email" type="email" class="form-control border-info rounded-0"
                :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入您的 Email" rules="email|required"></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
              <label for="email">Email</label>
            </div>
            <div class="form-floating mb-4 mb-md-7 w-100">
              <v-field id="message" name="message" class="form-control border-info rounded-0" as="textarea"
                placeholder="請輸入您的訊息" :class="{ 'is-invalid': errors['message'] }" rules="required"
                style="height:273px"></v-field>
              <error-message name="message" class="invalid-feedback"></error-message>
              <label for="message">留言</label>
            </div>
            <button class="py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto" type="submit">
              送出訊息
            </button>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiperProductComponent from '@/components/swiperProductComponent.vue'

export default {
  components: {
    swiperProductComponent
  }
}

</script>

<style scoped></style>
