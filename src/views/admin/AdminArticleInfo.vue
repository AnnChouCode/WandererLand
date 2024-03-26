<template>
  <div class="overflow-y-scroll scrollbar-y-hide vh-100">
    <h2 v-if="isNewArticle" class="py-4 py-md-7 fw-bold">新增文章</h2>
    <h2 v-else class="py-4 py-md-7 fw-bold">編輯文章</h2>

    <div>
      <div class="mb-7">
        <h5 class="mb-3 fw-bold">封面圖片</h5>
        <div class="row g-1 mb-3">
          <!-- 封面圖 -->
          <div class="mb-3 col-6 col-md-2">
            <div class="ratio-1x1">
              <div class="position-relative border border-1 h-100">
                <button type="button"
                  class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                  style="width: 36px; height: 36px" @click="deleteImage('imageUrl', idx)"
                  v-if="tempArticleInfo.imageUrl">
                  <i class="bi bi-trash"></i>
                </button>
                <div class="position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100">
                  封面圖片
                </div>
                <div v-if="tempArticleInfo.imageUrl" :style="`background-image:url(${tempArticleInfo.imageUrl})`"
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
        </div>
        <!-- 其他圖 -->
        <h5 class="mb-2 fw-bold">內文輪播圖片</h5>
        <p class="mb-3 text-info fs-info">
          內文圖片為輪播展示，建議上傳 16:9 橫幅圖片
        </p>
        <div class="row g-1 mb-3">
          <div class="col-6 col-md-2" v-for="(img, idx) in tempArticleInfo.imagesUrl" :key="idx">
            <div class="position-relative border border-1 h-100 ratio-1x1">
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
            <div class="h-100 p-0 border border-1 ratio-1x1">
              <button @click="openImageModal('inNotCover')"
                class="d-flex align-items-center justify-content-center w-100 h-100 text-default btn btn-light rounded-0"
                type="button">
                新增圖片
              </button>
            </div>
          </div>
        </div>
        <!-- 刪除所有圖片 -->
        <button typs="button" class="p-0 btn text-danger" @click="deleteImage">
          <i class="bi bi-trash me-2"></i>
          <span>刪除所有圖片</span>
        </button>
      </div>

      <!-- 文章內容 -->
      <div>
        <h5 class="mb-5 fw-bold">文章內容</h5>
        <v-form v-slot="{ errors }" class="d-flex flex-column gap-3" @submit="updateArticleInfo">
          <div>
            <label for="title" class="form-label fw-bold has-required">文章標題</label>
            <v-field type="text" class="form-control" placeholder="請填入文章標題" v-model.trim="tempArticleInfo.title" id="title"
              name="標題" :class="{ 'is-invalid': errors['標題'] }" rules="required|max:25"></v-field>
            <error-message name="標題" class="invalid-feedback"></error-message>
          </div>
          <div class="row g-5 g-md-1">
            <div class="col-md-6">
              <label for="author" class="form-label fw-bold has-required">作者</label>
              <v-field type="text" class="form-control" placeholder="請填入作者" v-model.trim="tempArticleInfo.author" id="author"
                name="作者" :class="{ 'is-invalid': errors['author'] }" rules="required"
                @blur="updateTag(tempArticleInfo.author)"></v-field>
              <error-message name="作者" class="invalid-feedback"></error-message>
            </div>
            <div class="col-md-6">
              <div>
                <label for="category" class="form-label fw-bold has-required">文章分類</label>
                <v-field type="text" id="category" name="分類" class="form-control mb-1" placeholder="請輸入文章分類"
                  :class="{ 'is-invalid': errors['分類'] }" rules="required"
                  v-model.trim="tempArticleInfo.category"></v-field>
                <error-message name="分類" class="invalid-feedback"></error-message>
              </div>
              <div class="d-flex align-items-center text-nowrap fs-info">
                <span class="text-info">點擊帶入分類：</span>
                <div class="d-flex gap-1 mb-0 flex-wrap">
                  <button type="button" class="btn btn-light rounded-pill py-1 fs-info text-info"
                    v-for="(item, idx) in tempCategoryList" value="item" :key="idx" @click="chooseCategory(item)">
                    {{ item }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label for="tag" class="me-2 form-label fw-bold has-required">文章標籤</label><span
                class="fs-info text-info">可使用「enter」區隔每組標籤</span>
              <div class="form-control d-flex align-items-center py-0 mb-1" style="min-height: 36px">
                <div class="d-flex flex-wrap align-items-center">
                  <div v-for="tag in tempArticleInfo.tag" :key="tag">
                    <button type="button" class="d-flex flex-nowrap py-1 btn btn-light rounded-pill"
                      @click="deleteTag(tag)">
                      <span class="text-nowrap">{{ tag }}</span><i class="bi bi-x ms-1 text-info"></i>
                    </button>
                  </div>
                  <button type="button" class="d-flex flex-nowrap py-1 btn btn-outline-secondary rounded-pill">
                    <input type="text" id="tag" name="tag" class="border-0" style="width: 80px" placeholder="自訂標籤"
                      @keyup.enter="chooseTag(tempTagInvputVaule, 'tagInput')" v-model.trim="tempTagInvputVaule" />
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center text-nowrap fs-info">
              <span class="text-info">點擊帶入標籤：</span>
              <div class="d-flex gap-1 mb-0 flex-wrap">
                <button type="button" class="btn btn-light rounded-pill py-1 fs-info text-info"
                  v-for="(item, idx) in tempTagList" value="item" :key="idx" @click="chooseTag(item)">
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
          <div>
            <label for="description" class="form-label fw-bold has-required">簡述</label>
            <v-field id="description" name="簡述" class="form-control" v-model.trim="tempArticleInfo.description"
              as="textarea" placeholder="請填寫 100 字內簡述" :class="{ 'is-invalid': errors['description'] }"
              rules="required|max:100" style="min-height:100px;"></v-field>
            <error-message name="簡述" class="invalid-feedback"></error-message>
          </div>
          <div class="editor-block mb-5">
            <label for="description" class="form-label fw-bold">文章內容</label>
            <ckeditor :editor="editor" :config="editorConfig" v-model.trim="tempArticleInfo.content"></ckeditor>
          </div>
          <div class="mb-5">
            <h5 class="d-inline-block me-2 mb-5 fw-bold">關聯商品</h5>
            <span class="text-info fs-info">最多請選擇 3 個商品</span>
            <div class="row g-3 g-md-1">
              <div class="col-12 col-md-6">
                <div class="input-group">
                  <label class="input-group-text">類別</label>
                  <select class="form-select" v-model="relatedProduct.currentGroup">
                    <option value="" disabled>選擇商品類別</option>
                    <option v-for="(item, idx) in relatedProduct.groupList" :key="idx" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="input-group">
                  <label class="input-group-text">商品</label>
                  <select class="form-select" v-model="relatedProduct.currentProduct" @change="addRelatedProduct">
                    <option value="">選擇商品名稱</option>
                    <option v-for="item in relatedProduct.productList" :key="item.id" :value="item">
                      {{ item.title }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-12" v-if="tempArticleInfo.relatedProduct">
                <div class="row g-3 g-md-1">
                  <div class="col-6 col-md-3" v-for="product in tempArticleInfo.relatedProduct" :key="product"
                    style="min-height:48px;">
                    <div class="border rounded-2 overflow-hidden h-100">
                      <div class="row g-1 g-md-3">
                        <div class="col-4">
                          <div :style="`background-image:url(${product.imageUrl})`"
                            class="w-100 h-100 bg-img-cover bg-img-center bg-img-norepeat ratio-1x1"
                            style="min-height: 48px;">
                          </div>
                        </div>
                        <div class="col-6 d-flex align-items-center fs-info fs-md-6">
                          <span class="doubleline-ellipsis">{{ product.title }}</span>
                        </div>
                        <div class="col-2 d-flex justify-content-center align-items-center">
                          <button type="button" class="btn-close" aria-label="Close"
                            @click="deleteRelatedProduct(product)"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 class="mb-5 fw-bold">文章發布狀態</h5>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="isPublic"
                v-model="tempArticleInfo.isPublic" />
              <label class="form-check-label" for="isPublic">
                <span v-if="tempArticleInfo.isPublic">更改為未發布</span>
                <span v-else>更改為已發布</span>
              </label>
            </div>
          </div>
          <div class="d-flex justify-content-end gap-2 pt-3 pb-1">
            <router-link to="/admin/articles" class="btn btn-outline-dark">取消</router-link>
            <button type="button" class="btn btn-dark text-white" @click="updateArticleInfo">
              確認
            </button>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// import components
import UploadImageModal from '@/components/modal/UploadImageModal.vue'

const productsStore = useAdminProductsStore()
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 本頁狀態
      isNewArticle: false,
      // 文章資訊
      tempArticleInfo: {},
      // 產品分類列表
      tempCategoryList: ['最新消息', '活動講座', '專欄文章'],
      tempTagList: [],
      // 文章標籤手動輸入格
      tempTagInvputVaule: '',
      // 增加文章封面或圖片
      isCover: false,
      // CKEditor 設定
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'bold', 'italic', '|', 'link']
      },
      // 關連產品
      relatedProduct: {
        groupList: [],
        productList: [],
        currentGroup: '',
        currentProduct: []
      },
      // 客製化 info check alert 按鈕
      swalInfoCheckWithBootstrapButtons: null
    }
  },
  watch: {
    // 關連產品分類 至 名稱
    'relatedProduct.currentGroup': function () {
      const allProductList = Object.values(productsStore.allProducts)
      const tempProductList = allProductList.filter(product => product.category === 'products')

      this.relatedProduct.productList = tempProductList.filter((item) => {
        const isEnabled = item.is_enabled
        const isRelatedProduct = item.group === this.relatedProduct.currentGroup

        return isEnabled && isRelatedProduct
      })
    }
  },
  methods: {
    // 取得該頁文章資料
    getArticleInfo (id) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/article/${id}`

      this.axios
        .get(url)
        .then((res) => {
          this.tempArticleInfo = res.data.article
          this.updateTag(res.data.article.author)
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            icon: 'error',
            text: err.response.data.message,
            confirmButtonText: '確認'
          })
        })
    },

    // 選擇分類帶入
    chooseCategory (item) {
      this.tempArticleInfo.category = item
    },

    // 選擇標籤帶入
    chooseTag (item, source) {
      if (!this.tempArticleInfo.tag) {
        this.tempArticleInfo.tag = []
      }

      // 如果輸入來源是手動輸入，則做字串處理
      if (source === 'tagInput') {
        const tempItem = item.trim()
        item = tempItem.replace(',', '')
        this.tempTagInvputVaule = ''
      }

      if (!this.tempArticleInfo.tag.includes(item)) {
        this.tempArticleInfo.tag.push(item)
      }
    },

    // 刪除標籤
    deleteTag (item) {
      const tagIndex = this.tempArticleInfo.tag.indexOf(item)
      this.tempArticleInfo.tag.splice(tagIndex, 1)
    },

    // 增加標籤選項
    updateTag (item) {
      if (!this.tempTagList.includes(item)) {
        this.tempTagList.push(item)
      }
    },

    // 刪除圖片
    deleteImage (target, idx) {
      if (target === 'imageUrl') {
        this.tempArticleInfo.imageUrl = ''
      } else if (target === 'imagesUrl') {
        this.tempArticleInfo.imagesUrl.splice(idx, 1)
      } else {
        this.tempArticleInfo.imageUrl = ''
        this.tempArticleInfo.imagesUrl = []
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
        this.tempArticleInfo.imageUrl = url
        return
      }
      // 新增圖片庫
      if (this.tempArticleInfo.imagesUrl) {
        this.tempArticleInfo.imagesUrl.push(url)
      } else {
        this.tempArticleInfo.imagesUrl = [url]
      }
    },

    // 刪除相關產品
    deleteRelatedProduct (item) {
      const productIndex = this.tempArticleInfo.relatedProduct.indexOf(item)
      this.tempArticleInfo.relatedProduct.splice(productIndex, 1)
    },

    // 將關連產品加入文章資料
    addRelatedProduct () {
      if (!this.tempArticleInfo.relatedProduct) {
        this.tempArticleInfo.relatedProduct = []
      }

      if (!this.relatedProduct.currentProduct === '') {
        return
      }

      const isInList = this.tempArticleInfo.relatedProduct.filter(item => item.id === this.relatedProduct.currentProduct.id)

      const maxRelatedNum = 3
      const isMaxNum = this.tempArticleInfo.relatedProduct.length === maxRelatedNum

      if (!isInList.length && !isMaxNum) {
        this.tempArticleInfo.relatedProduct.push(this.relatedProduct.currentProduct)
      }
    },

    // 更新文章內容
    updateArticleInfo () {
      let url = `${VITE_API}/api/${VITE_PATH}/admin/article`
      const method = this.isNewArticle ? 'post' : 'put'

      if (!this.tempArticleInfo.imageUrl || !this.tempArticleInfo.imagesUrl || this.tempArticleInfo.imageUrl === '' || !this.tempArticleInfo.imagesUrl.length) {
        this.swalInfoCheckWithBootstrapButtons.fire('圖片欄位為必填')
        return
      }

      if (!this.isNewArticle) {
        url += `/${this.tempArticleInfo.id}`
      }

      if (this.isNewArticle) {
        this.tempArticleInfo.create_at = Math.floor(new Date() / 1000)
        this.tempArticleInfo.isPublic = !!this.tempArticleInfo.isPublic
      }

      this.axios[method](url, { data: this.tempArticleInfo })
        .then((res) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            title: res.data.message,
            confirmButtonText: '確認'
          })
          this.$router.push('/admin/articles')
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            icon: 'error',
            text: err.response.data.message.join('、'),
            confirmButtonText: '確認'
          })
        })
    }
  },
  computed: {
    ...mapStores(useAdminProductsStore)
  },
  components: {
    UploadImageModal
  },
  async mounted () {
    try {
      // 判斷頁面為新增文章或編輯文章
      const id = this.$route.params.id

      if (!id) {
        this.isNewArticle = true
      }

      if (id) {
        // 獲取所有資料
        this.getArticleInfo(id)
      }

      // 獲取產品分類
      await productsStore.getAllProducts()
      // 增加標籤清單
      productsStore.groupList.forEach((item) => this.updateTag(item))
      this.relatedProduct.groupList = productsStore.groupList

      // 客製化 info check alert 按鈕
      this.swalInfoCheckWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: 'm-1 btn btn-default'
        },
        buttonsStyling: false
      })
    } catch (err) {
      console.log('錯誤:', err)
      throw err
    }
  }
}
</script>

<style></style>
