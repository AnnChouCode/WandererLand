<template>
  <div ref="pickArea">
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      :class="`{dragging ? 'dragging' : ''}`"
    >
      <div ref="uploadBg"></div>
      <uploadFormDropArea
        ref="uploadBtn"
        @fileList="fileList"
      ></uploadFormDropArea>
      <div>點擊上傳按鈕，或拖曳文件到框內上傳</div>
      <p>請選擇小於 5M 的圖檔</p>
    </div>
  </div>
</template>

<script>
import uploadFormDropArea from '@/uploadFormDropArea.vue'

export default {
  components: { uploadFormDropArea },
  props: ['dialogData'],
  data () {
    return {
      dragging: true,
      bindDrop: false
    }
  },
  beforeUnmount () {
    // 組件銷毀前解綁拖曳事件
    try {
      const dropbox = this.$refs.pickArea
      dropbox.removeEventListener('dorp', this.handleDrop)
      dropbox.removeEventListener('dragleave', this.handleDragLeave)
      dropbox.removeEventListener('dragover', this.handleDragOver)
      this.bindDrop = false
    } catch (e) {
      console.log(e, '拖曳異常')
    }
  },
  methods: {
    fileList (data) {
      this.fileInfo = data[0]
      const uploadBg = this.$refs.uploadBg
      uploadBg.style.backgroundImage = `url(${this.fileInfo.url})`
    },

    bindEvents () {
      const dropbox = this.$refs.pickerArea
      // 防止重複綁定
      if (!dropbox || this.bindDrop) {
        return
      }
      // 綁定拖曳，在組件銷毀時解綁
      dropbox.addEventListener('dorp', this.handleDrop, false)
      dropbox.addEventListener('dragleave', this.handleDragLeave)
      dropbox.addEventListener('dragover', this.handleDragOver)
      this.bindDrop = true
    }
    // 拖曳到上傳區域
  }
}
</script>
