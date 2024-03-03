<template>
  <div
    ref="uploadImageModal"
    class="modal fade"
    aria-hidden="true"
    aria-labelledby="uploadImageModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="isCover" class="modal-title text-bold fw-bold">上傳封面</h5>
          <h5 v-else class="modal-title text-bold fw-bold">上傳圖片</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- <ul class="nav nav-tabs px-1">
          <li class="nav-item">
            <a
              class="nav-link text-secondary active"
              aria-current="page"
              href="#"
              >上傳檔案</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#">以圖片連結新增</a>
          </li>
        </ul> -->
        <div class="modal-body container">
          <div class="row g-3">
            <div class="col-12 col-md-4">
              <div class="drop-area ratio-1x1">
                <div v-if="imgUrl" :style="`background-image:url(${imgUrl})`" class="w-100 h-100 bg-img-contain bg-img-center bg-img-norepeat"></div>
                <!-- <img v-if="imgUrl" :src="imgUrl" alt="picture"> -->
                <p v-else>圖片預覽</p>
              </div>
            </div>
            <div class="col-12 col-md-8">
              <p class="mb-1">僅限使用 jpg、jpeg 與 png 格式，檔案大小限制為 3MB 以下</p>
              <input class="form-control mb-1" type="text" placeholder="請填入圖片網址" v-model="imgUrl">
              <input class="form-control" type="file" ref="dropArea"
              :accept="accept"
              @change="handleFile">
          </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" @click="submitImgUrl">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  props: ['isCover'],
  data () {
    return {
      modal: null,
      dropArea: null,
      // 圖檔限制格式
      accept: ['jpg', 'jpeg', 'png'],
      // imgUrl
      imgUrl: ''
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    closeModal () {
      this.modal.hide()
    },

    // 檢查上傳圖檔
    handleFile (e) {
      const file = e.target.files[0]
      console.log(file)

      // 檢查圖檔尺寸
      const fileSizeInMB = file.size / (1024 * 1024)
      const maxSizeInMB = 3
      if (fileSizeInMB > maxSizeInMB) {
        this.$swal.fire({
          icon: 'error',
          text: '請上傳 3MB 以內的圖檔'
        })
        this.resetDropArea()
        return false
      }

      // 檢查圖檔類型
      const fileType = file.type.split('/')[1]
      const isMatchType = this.accept.find((file) => file === fileType)
      if (!isMatchType) {
        this.$swal.fire({
          icon: 'error',
          text: '僅限使用 jpg、jpeg 與 png 格式圖檔'
        })
        this.resetDropArea()
        return false
      }

      this.uploadImage(file)
    },

    // 上傳圖檔
    uploadImage (file) {
      // 開啟 loading
      const loader = this.$loading.show()

      // 產生表單格式
      const formData = new FormData()
      formData.append('file-to-upload', file)

      // 上傳
      this.axios
        .post(`${VITE_API}/api/${VITE_PATH}/admin/upload`, formData)
        .then(res => {
          this.imgUrl = res.data.imageUrl
        })
        .catch((err) => {
          console.log(err)
          this.$swal.fire({
            icon: 'error',
            text: err.response
          })
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    },

    // 清空檔案上傳
    resetDropArea () {
      this.dropArea.value = ''
    },

    // 送出圖片網址
    submitImgUrl () {
      if (this.isCover) {
        this.$emit('submitImgUrl', 'imageUrl', this.imgUrl)
      } else {
        this.$emit('submitImgUrl', 'imagesUrl', this.imgUrl)
      }
      this.imgUrl = ''
      this.closeModal()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.uploadImageModal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.dropArea = this.$refs.dropArea
  }
}
</script>

<style>
.drop-area {
  background-color: white;
  border: 2px dashed gray;
  border-radius: 8px;
  /* height: 200px; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
