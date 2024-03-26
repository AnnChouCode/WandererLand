<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <h2 v-if="isNewProduct" class="py-4 py-md-7 fw-bold">新增商品</h2>
    <h2 v-else class="py-4 py-md-7 fw-bold">編輯商品</h2>
    <div>
      <div class="mb-7">
        <h5 class="mb-3 fw-bold has-required">商品圖片</h5>
        <div class="row g-1 mb-3">
          <!-- 封面圖 -->
          <div class="col-6 col-md-2">
            <div class="ratio-1x1">
              <div class="position-relative border border-1 h-100">
                <button type="button"
                  class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                  style="width: 36px; height: 36px" @click="deleteImage('imageUrl', idx)"
                  v-if="tempProductInfo.imageUrl">
                  <i class="bi bi-trash"></i>
                </button>
                <div class="position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100">
                  封面圖片
                </div>
                <div v-if="tempProductInfo.imageUrl" :style="`background-image:url(${tempProductInfo.imageUrl})`"
                  class="h-100 bg-img-contain bg-img-center bg-img-norepeat"></div>
                <div v-else class="h-100">
                  <button @click="openImageModal('isCover')"
                    class="d-flex flex-column align-items-center justify-content-center w-100 h-100 text-secondary btn btn-light rounded-0"
                    type="button">
                    <i class="bi bi-image mb-2 text-default"></i>
                    <p class="text-default">目前無封面</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- 其他圖 -->
          <div class="col-6 col-md-2" v-for="(img, idx) in tempProductInfo.imagesUrl" :key="idx">
            <div class="position-relative border border-1 h-100">
              <button type="button"
                class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                style="width: 36px; height: 36px" @click="deleteImage('imagesUrl', idx)">
                <i class="bi bi-trash"></i>
              </button>
              <div :style="`background-image:url(${img})`" class="h-100 bg-img-contain bg-img-center bg-img-norepeat">
              </div>
            </div>
          </div>
          <!-- 新增圖片 -->
          <div class="col-6 col-md-2">
            <button @click="openImageModal('inNotCover')"
              class="d-flex align-items-center justify-content-center w-100 h-100 text-default btn btn-light rounded-0 ratio-1x1 border border-1"
              type="button">
              新增圖片
            </button>
          </div>
        </div>
        <!-- 刪除所有圖片 -->
        <button typs="button" class="p-0 btn text-danger" @click="deleteImage">
          <i class="bi bi-trash me-2"></i>
          <span>刪除所有圖片</span>
        </button>
      </div>

      <!-- 商品基本資訊 -->
      <div>
        <h5 class="mb-5 fw-bold">商品基本資訊</h5>
        <v-form v-slot="{ errors }" class="d-flex flex-column gap-5" @submit="updateProductInfo">
          <div>
            <label for="title" class="form-label fw-bold has-required">商品名稱</label>
            <v-field type="text" class="form-control" placeholder="請輸入商品名稱" v-model.trim="tempProductInfo.title"
              id="title" name="名稱" :class="{ 'is-invalid': errors['名稱'] }" rules="required"></v-field>
            <error-message name="名稱" class="invalid-feedback"></error-message>
          </div>
          <div class="row g-5 g-md-1">
            <div class="col-md-6">
              <label for="artist" class="form-label fw-bold has-required">藝術家</label>
              <v-field id="artist" name="藝術家" type="text" class="form-control" :class="{ 'is-invalid': errors['藝術家'] }"
                placeholder="請輸入藝術家名稱" rules="required" v-model.trim="tempProductInfo.artist"></v-field>
              <error-message name="藝術家" class="invalid-feedback"></error-message>
            </div>
            <div class="col-md-6">
              <label for="size" class="me-2 form-label fw-bold has-required">商品尺寸</label>
              <v-field id="size" name="尺寸" type="text" class="form-control" :class="{ 'is-invalid': errors['size'] }"
                placeholder="請輸入商品尺寸" min="0" v-model="tempProductInfo.size"></v-field>
              <error-message name="尺寸" class="invalid-feedback"></error-message>
            </div>

          </div>
          <div class="row g-5 g-md-1">
            <div class="col-md-6">
              <label for="quantity" class="me-2 form-label fw-bold">作品版數</label><span
                class="fs-info text-info">若未填寫則不限版數</span>
              <v-field id="quantity" name="quantity" type="number" class="form-control"
                :class="{ 'is-invalid': errors['quantity'] }" placeholder="請輸入作品版數" min="0"
                v-model.number.trim="tempProductInfo.quantity"></v-field>
            </div>
            <div class="col-md-6">
              <label for="unit" class="form-label fw-bold has-required">商品單位</label>
              <v-field id="unit" name="單位" type="text" class="form-control" :class="{ 'is-invalid': errors['unit'] }"
                placeholder="請輸入商品單位" rules="required" v-model.trim="tempProductInfo.unit"></v-field>
              <error-message name="單位" class="invalid-feedback"></error-message>
            </div>
          </div>
          <div>
            <div>
              <label for="group" class="form-label fw-bold has-required">商品分類</label>
              <v-field type="text" id="group" name="分類" class="form-control mb-1" placeholder="請輸入商品分類"
                :class="{ 'is-invalid': errors['分類'] }" rules="required" v-model.trim="tempProductInfo.group"></v-field>
              <error-message name="分類" class="invalid-feedback"></error-message>
            </div>
            <div class="d-flex align-items-center text-nowrap fs-info">
              <span class="text-info">點擊帶入分類：</span>
              <div class="d-flex gap-1 mb-0 flex-wrap">
                <button type="button" class="btn btn-light rounded-pill py-1 fs-info text-info"
                  v-for="(item, idx) in tempGroupList" value="item" :key="idx" @click="chooseGroup(item)">
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
          <div class="row g-3 g-md-1">
            <div class="col-md-6">
              <label for="origin_price" class="form-label fw-bold has-required">原價</label>
              <v-field type="number" id="origin_price" name="原價" class="form-control"
                :class="{ 'is-invalid': errors['原價'] }" placeholder="請輸入原價" rules="required" min="0"
                v-model.number.trim="tempProductInfo.origin_price"></v-field>
              <error-message name="原價" class="invalid-feedback"></error-message>
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label fw-bold has-required">售價</label>
              <v-field type="number" id="price" name="售價" class="form-control" :class="{ 'is-invalid': errors['售價'] }"
                placeholder="請輸入商品售價" rules="required" min="0" v-model.number.trim="tempProductInfo.price"></v-field>
              <error-message name="售價" class="invalid-feedback"></error-message>
            </div>
          </div>
          <div>
            <label for="content" class="form-label fw-bold">說明內容</label>
            <textarea type="text" id="content" class="form-control" placeholder="請輸入說明內容"
              v-model.trim="tempProductInfo.content" style="height:200px"></textarea>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="is_enabled"
              v-model="tempProductInfo.is_enabled" />
            <label class="form-check-label" for="is_enabled">
              <span v-if="tempProductInfo.is_enabled">更改為未上架</span>
              <span v-else>更改為已上架</span>
            </label>
          </div>
          <div class="d-flex justify-content-end gap-2 pt-3">
            <router-link to="/admin/products" class="btn btn-outline-dark">取消</router-link>
            <button type="submit" class="btn btn-dark text-white">確認</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>

  <UploadImageModal ref="uploadImageModal" @submitImgUrl="getImgUrl" :is-Cover="isCover"></UploadImageModal>
</template>

<script>
import { useAdminProductsStore } from '@/stores/adminProductStore.js'
import { mapStores } from 'pinia'

// import components
import UploadImageModal from '@/components/modal/UploadImageModal.vue'

const productsStore = useAdminProductsStore()
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 本頁狀態
      isNewProduct: false,
      // 產品資訊
      tempProductInfo: {},
      // 產品分類列表
      tempGroupList: [],
      // 增加封面或圖片
      isCover: false,
      // 客製化 info check alert 按鈕
      swalInfoCheckWithBootstrapButtons: null
    }
  },
  methods: {
    // 取得該頁產品資料
    getProductInfo (datas, id) {
      this.tempProductInfo = datas[id]
    },

    // 選擇分類帶入
    chooseGroup (item) {
      this.tempProductInfo.group = item
    },

    // 刪除圖片
    deleteImage (target, idx) {
      if (target === 'imageUrl') {
        this.tempProductInfo.imageUrl = ''
      } else if (target === 'imagesUrl') {
        this.tempProductInfo.imagesUrl.splice(idx, 1)
      } else {
        this.tempProductInfo.imageUrl = ''
        this.tempProductInfo.imagesUrl = []
      }
    },

    // 開啟圖片處理 modal
    openImageModal (action) {
      if (action === 'isCover') {
        this.isCover = true
      } else {
        this.isCover = false
      }
      this.$refs.uploadImageModal.openModal()
    },

    // 獲取新上傳圖片網址
    getImgUrl (target, url) {
      // 新增封面
      if (target === 'imageUrl') {
        this.tempProductInfo.imageUrl = url
        return
      }
      // 新增圖片庫
      if (this.tempProductInfo.imagesUrl) {
        this.tempProductInfo.imagesUrl.push(url)
      } else {
        this.tempProductInfo.imagesUrl = [url]
      }
    },

    // 更新產品資訊
    updateProductInfo () {
      let url = `${VITE_API}/api/${VITE_PATH}/admin/product`
      const method = this.isNewProduct ? 'post' : 'put'

      if (!this.tempProductInfo.imageUrl || !this.tempProductInfo.imagesUrl || this.tempProductInfo.imageUrl === '' || !this.tempProductInfo.imagesUrl.length) {
        this.swalInfoCheckWithBootstrapButtons.fire('圖片欄位為必填')
        return
      }

      if (!this.isNewProduct) {
        url += `/${this.tempProductInfo.id}`
      }

      if (this.isNewProduct) {
        this.tempProductInfo.category = 'products'
        this.tempProductInfo.create_at = Math.floor(Date.now() / 1000)
      }

      this.tempProductInfo.size = this.tempProductInfo.size.replace('×', 'x')

      this.axios[method](url, { data: this.tempProductInfo })
        .then((res) => {
          this.swalInfoCheckWithBootstrapButtons.fire(res.data.message)
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            icon: 'error',
            text: err.response.data.message,
            confirmButtonText: '確認'
          })
        })
    },

    // 獲取所有資料
    async fetchData (id) {
      try {
        // 獲取所有產品資料
        await productsStore.getAllProducts()

        // 獲取產品分類表
        this.tempGroupList = [...productsStore.groupList]

        // 判斷頁面為新增產品或編輯產品
        if (!id) {
          return
        }

        // 獲取此頁產品資料
        this.getProductInfo(productsStore.allProducts, id)
      } catch (err) {
        console.log(err.response.data.message)
      }
    }
  },
  computed: {
    ...mapStores(useAdminProductsStore)
  },
  components: {
    UploadImageModal
  },
  mounted () {
    // 判斷頁面為新增產品或編輯產品
    const id = this.$route.params.id
    if (!id) {
      this.isNewProduct = true
    }

    // 獲取所有資料
    this.fetchData(id)

    // 客製化 info check alert 按鈕
    this.swalInfoCheckWithBootstrapButtons = this.$swal.mixin({
      customClass: {
        confirmButton: 'm-1 btn btn-default'
      },
      buttonsStyling: false
    })
  }
}
</script>

<style></style>
