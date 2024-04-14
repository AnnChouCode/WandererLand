<template>
  <v-form ref="form" v-slot="{ errors }" class="d-flex flex-column align-items-end" @submit="checkOrder">
    <div class="mb-4 mb-md-7 form-floating w-100">
      <v-field id="email" name="Email" type="email" class="form-control border-info rounded-0"
        :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入 Email" rules="email|required"
        v-model.trim="form.user.email"></v-field>
      <error-message name="Email" class="invalid-feedback"></error-message>
      <label for="Email" class="form-label has-required">Email</label>
    </div>

    <div class="mb-4 mb-md-7 form-floating w-100">
      <v-field id="name" name="姓名" type="text" class="form-control border-info rounded-0"
        :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"
        v-model.trim="form.user.name"></v-field>
      <error-message name="姓名" class="invalid-feedback"></error-message>
      <label for="name" class="form-label has-required">收件人姓名</label>
    </div>

    <div class="mb-4 mb-md-7 form-floating w-100">
      <v-field id="tel" name="電話" type="tel" class="form-control border-info rounded-0"
        :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入國內電話"
        :rules="{ required: true, regex: /^(09)[0-9]{8}$/ }" v-model.trim="form.user.tel"></v-field>
      <error-message name="電話" class="invalid-feedback"></error-message>
      <label for="tel" class="form-label has-required">收件人電話</label>
    </div>

    <div class="mb-4 mb-md-7 form-floating w-100">
      <v-field id="address" name="地址" type="text" class="form-control border-info rounded-0"
        :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"
        v-model.trim="form.user.address"></v-field>
      <error-message name="地址" class="invalid-feedback"></error-message>
      <label for="address" class="form-label has-required">收件人地址</label>
    </div>

    <div class="mb-4 mb-md-7 form-floating w-100">
      <v-field id="message" name="message" class="form-control border-info rounded-0" cols="30" rows="10"
        v-model.trim="form.message" as="textarea" placeholder="請輸入您的留言" style="height:273px"></v-field>
      <label for="message" class="form-label">留言</label>
    </div>
    <button class="py-2 py-md-3 px-6 px-md-9 btn btn-default fw-bold rounded-0 w-100 w-md-auto"
      :class="{ 'cursor-notallowed': isFormEmpty }" type="submit">
      訂單確認
    </button>
  </v-form>
</template>

<script>
import cartStore from '@/stores/userCartStore.js'
import { mapActions, mapState } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 訂單欄位
      form: {
        user: {
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // 獲得購物車資料
    ...mapActions(cartStore, ['getCartsList']),

    // 確認訂單
    checkOrder () {
      // 開啟 loading
      const loader = this.$loading.show()

      // 資料處理
      const url = `${VITE_API}/api/${VITE_PATH}/order`
      const order = {
        data: this.form
      }

      this.axios.post(url, order)
        .then(res => {
          // 提示訊息
          this.swalInfoCheckWithBootstrapButtons.fire({
            title: `<p> ${res.data.message}</p><p>訂單編號 </p><p>${res.data.orderId}</p>`,
            confirmButtonText: '確認'
          })

          // 清除表單
          this.$refs.form.resetForm()

          // 重整購物車
          this.getCartsList()

          // 頁面跳轉
          this.$router.push(`/order/payorder/${res.data.orderId}`)
        })
        .catch(err => {
          this.swalInfoCheckWithBootstrapButtons.fire(
            {
              icon: 'error',
              text: err.response.data.message,
              confirmButtonText: '確認'
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    }
  },
  mounted () {
    this.getCartsList()

    // 客製化 info check alert 按鈕
    this.swalInfoCheckWithBootstrapButtons = this.$swal.mixin({
      customClass: {
        confirmButton: 'm-1 btn btn-default'
      },
      buttonsStyling: false
    })
  },
  computed: {
    ...mapState(cartStore, ['cartsList']),
    isFormEmpty () {
      const { email, tel, address } = this.form.user
      return !email || !tel || !address
    }
  }
}
</script>
