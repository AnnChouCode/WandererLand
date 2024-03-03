<template>
  <div class="modal" tabindex="-1" ref="adminCouponModal">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="isNew" class="modal-title fw-bold">建立優惠券</h5>
          <h5 v-else class="modal-title fw-bold">優惠券：{{ tempCouponInfo.code }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <v-form v-slot="{ errors }" class="d-flex flex-column gap-5" ref="modalForm">
            <div>
              <label for="title" class="form-label fw-bold has-required">優惠券標題</label>
              <v-field class="form-control" type="text" placeholder="請輸入標題" v-model="tempCouponInfo.title" id="title"
                name="title" :class="{ 'is-invalid': errors['title'] }" rules="required"></v-field>
              <error-message name="title" class="invalid-feedback"></error-message>
            </div>
            <div>
              <label for="code" class="form-label fw-bold has-required">優惠碼</label>
              <span class="ms-2 text-info fs-info">建立後無法更改</span>
              <v-field class="form-control" placeholder="請輸入 6-24 個字元內的英數組合優惠碼" v-model="tempCouponInfo.code" id="code"
                name="code" :class="{ 'is-invalid': errors['code'] }" rules="required|alpha_num|max:24|min:6"
                :disabled="!isNew"></v-field>
              <error-message name="code" class="invalid-feedback"></error-message>
            </div>
            <div>
              <label for="discound" class="form-label fw-bold has-required">訂單折扣百分比</label>
              <span class="ms-2 text-info fs-info">建立後無法更改</span>
              <v-field class="form-control" type="number" placeholder="請輸入 1-99" v-model.number="tempCouponInfo.percent"
                id="discount" name="discount" :class="{ 'is-invalid': errors['code'] }" rules="required|between:1,99"
                :disabled="!isNew"></v-field>
              <error-message name="discount" class="invalid-feedback"></error-message>
            </div>
            <div>
              <label for="due_date" class="form-label fw-bold has-required">優惠到期日</label>
              <v-field class="form-control" type="date" placeholder="請設定日期" v-model="due_date" id="due_date"
                name="due_date" :class="{ 'is-invalid': errors['due_date'] }" rules="required"></v-field>
              <error-message name="due_date" class="invalid-feedback"></error-message>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="is_enabled"
                v-model="tempCouponInfo.is_enabled" checked :true-value="1" :false-value="0" />
              <label class="form-check-label" for="is_enabled">
                <span v-if="tempCouponInfo.is_enabled">更改為未啟用</span>
                <span v-else>更改為已啟用</span>
              </label>
            </div>
            <!-- 按鈕 -->
            <div class="d-flex justify-content-end gap-2 pt-3">
              <button type="button" class="btn btn-outline-dark" @click="closeModal">取消</button>
              <button type="button" class="btn btn-dark text-white" @click="this.$emit('updateCoupon', tempCouponInfo)">{{
                isNew ? '新增優惠券' : '更新優惠券' }}</button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: null,
      tempCouponInfo: {},
      due_date: ''
    }
  },
  props: ['couponInfo', 'isNew'],
  watch: {
    // 將父層傳入的 coupon 資料處理
    couponInfo () {
      this.tempCouponInfo = this.couponInfo
      // 將時間格式改為 YYYY-MM-DD
      const date = new Date(this.couponInfo.due_date * 1000).toISOString().split('T')
      this.due_date = date[0]
    },
    // 將輸入格的時間由豪秒轉換為秒，用來存回後端
    due_date () {
      const timestamp = new Date(this.due_date)
      this.tempCouponInfo.due_date = Math.floor(timestamp / 1000)
    }
  },
  methods: {
    // 開啟 modal
    openModal () {
      this.modal.show()
    },

    // 關閉 modal
    closeModal () {
      this.$refs.modalForm.resetForm()
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.adminCouponModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
