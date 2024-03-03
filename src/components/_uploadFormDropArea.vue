<template>
    <div class="drop-area">
            <input
              type="file"
              class=""
              ref="dropArea"
              :accept="accept"
              @change="handleFile"
            />
            <!-- <div
              class="drop-area bg-light" ref="dropArea">
              <p>僅限使用 jpg、jpeg 與 png 格式，檔案大小限制為 3MB 以下</p>
            </div> -->
          </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      dropArea: null,
      // 圖檔限制格式
      accept: ['jpg', 'jpeg', 'png']
    }
  },
  methods: {
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

      // this.uploadImage(file)
    },

    // 上傳圖檔
    uploadImage (file) {
      // 開啟 loading
      const loader = this.$loading.show()

      // 產生表單格式
      const formData = new FormData()
      formData.append('file-to-upload', file)

      // 上傳
      this.axios.post(`${VITE_API}/api/${VITE_PATH}/admin/upload`, formData)
        .then(function (res) {
          console.log(res.data.imageUrl)

          this.$swal.fire({
            icon: 'success',
            text: '上傳成功'
          })
            .then(result => {
              this.closeModal()
            })
        })
        .catch(err => {
          this.$swal.fire({
            icon: 'error',
            text: err.response.data.message
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
    }
  },
  mounted () {
    this.dropArea = this.$refs.dropArea
  }
}
</script>

<style>
.drop-area {
  background-color: white;
  border: 2px dashed gray;
  border-radius: 8px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
