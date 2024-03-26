<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <h2 v-if="isNewArtist" class="py-4 py-md-7 fw-bold">新增藝術家</h2>
    <h2 v-else class="py-4 py-md-7 fw-bold">編輯藝術家</h2>
    <div>
      <div class="mb-7">
        <h5 class="mb-3 fw-bold">藝術家圖片</h5>
        <div class="row g-1 mb-3">
          <!-- 封面圖 -->
          <div class="col-6 col-md-2">
            <div class="ratio-1x1">
              <div class="position-relative border border-1 h-100">
                <button type="button"
                  class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                  style="width: 36px; height: 36px" @click="deleteImage('imageUrl', idx)"
                  v-if="tempArtistInfo.imageUrl">
                  <i class="bi bi-trash"></i>
                </button>
                <div class="position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100">
                  封面圖片
                </div>
                <div v-if="tempArtistInfo.imageUrl" :style="`background-image:url(${tempArtistInfo.imageUrl})`"
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
          <div class="col-6 col-md-2" v-for="(img, idx) in tempArtistInfo.imagesUrl" :key="idx">
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

      <!-- 藝術家基本資訊 -->
      <div>
        <h5 class="mb-5 fw-bold">藝術家基本資訊</h5>
        <v-form v-slot="{ errors }" class="d-flex flex-column gap-5" @submit="updateArtistInfo">
          <div>
            <label for="title" class="form-label fw-bold has-required">藝術家名稱</label>
            <v-field type="text" class="form-control" placeholder="請輸入藝術家名稱" v-model.trim="tempArtistInfo.title" id="title"
              name="名稱" :class="{ 'is-invalid': errors['名稱'] }" rules="required"></v-field>
            <error-message name="名稱" class="invalid-feedback"></error-message>
          </div>
          <div>
            <div>
              <label for="group" class="form-label fw-bold has-required">藝術家分類</label>
              <v-field type="text" id="group" name="分類" class="form-control mb-1" placeholder="請輸入藝術家分類"
                :class="{ 'is-invalid': errors['分類'] }" rules="required" v-model.trim="tempArtistInfo.group"></v-field>
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
          <div>
            <label for="content" class="form-label fw-bold">藝術家介紹</label>
            <textarea type="text" id="content" class="form-control" placeholder="請輸入藝術家介紹"
              v-model.trim="tempArtistInfo.content" style="height:200px"></textarea>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="is_enabled"
              v-model="tempArtistInfo.is_enabled" />
            <label class="form-check-label" for="is_enabled">
              <span v-if="tempArtistInfo.is_enabled">更改為未上架</span>
              <span v-else>更改為已上架</span>
            </label>
          </div>
          <div class="d-flex justify-content-end gap-2 pt-3">
            <router-link to="/admin/artists" class="btn btn-outline-dark">取消</router-link>
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
      isNewArtist: false,
      // 藝術家資訊
      tempArtistInfo: {},
      // 藝術家分類列表
      tempGroupList: [],
      // 增加封面或圖片
      isCover: false,
      // 客製化 info check alert 按鈕
      swalInfoCheckWithBootstrapButtons: null
    }
  },
  methods: {
    // 取得該頁藝術家資料
    getArtistInfo (datas, id) {
      this.tempArtistInfo = datas[id]
    },

    // 選擇分類帶入
    chooseGroup (item) {
      this.tempArtistInfo.group = item
    },

    // 刪除圖片
    deleteImage (target, idx) {
      if (target === 'imageUrl') {
        this.tempArtistInfo.imageUrl = ''
      } else if (target === 'imagesUrl') {
        this.tempArtistInfo.imagesUrl.splice(idx, 1)
      } else {
        this.tempArtistInfo.imageUrl = ''
        this.tempArtistInfo.imagesUrl = []
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
        this.tempArtistInfo.imageUrl = url
        return
      }
      // 新增圖片庫
      if (this.tempArtistInfo.imagesUrl) {
        this.tempArtistInfo.imagesUrl.push(url)
      } else {
        this.tempArtistInfo.imagesUrl = [url]
      }
    },

    // 更新藝術家資訊
    updateArtistInfo () {
      let url = `${VITE_API}/api/${VITE_PATH}/admin/product`
      const method = this.isNewArtist ? 'post' : 'put'

      if (!this.tempArtistInfo.imageUrl || !this.tempArtistInfo.imagesUrl || this.tempArtistInfo.imageUrl === '' || !this.tempArtistInfo.imagesUrl.length) {
        this.swalInfoCheckWithBootstrapButtons.fire('圖片欄位為必填')
        return
      }

      if (!this.isNewArtist) {
        url += `/${this.tempArtistInfo.id}`
      }

      if (this.isNewArtist) {
        this.tempArtistInfo.category = 'artists'
        this.tempArtistInfo.unit = '人'
        this.tempArtistInfo.origin_price = 0
        this.tempArtistInfo.price = 0
        this.tempArtistInfo.create_at = Math.floor(Date.now() / 1000)
      }

      this.axios[method](url, { data: this.tempArtistInfo })
        .then((res) => {
          const message = res.data.message.replace('產品', '藝術家')
          this.swalInfoCheckWithBootstrapButtons.fire(message)
          this.$router.push('/admin/artists')
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
        // 獲取所有藝術家資料
        await productsStore.getAllProducts()

        // 獲取藝術家分類表
        this.tempGroupList = [...productsStore.groupList]

        // 判斷頁面為新增藝術家或編輯Artist
        if (!id) {
          return
        }

        // 獲取此頁藝術家資料
        this.getArtistInfo(productsStore.allProducts, id)
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
    // 判斷頁面為新增藝術家或編輯藝術家
    const id = this.$route.params.id
    if (!id) {
      this.isNewArtist = true
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
