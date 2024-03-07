<template>
  <div class="flex-grow-1 pt-11 pt-md-12 pb-7 pb-md-9 container">
    <h2 class="mb-7 mb-md-8 text-center fs-4 fs-md-1">登入使用者後台</h2>

    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <v-form v-slot="{ errors }" class="form-signin" @submit="login">
          <div class="form-floating mb-4 mb-md-7">
            <v-field id="username" name="email" type="email" class="form-control border-default rounded-0"
              :class="{ 'is-invalid': errors['email'] }" placeholder="name@example.com" rules="email|required"
              v-model="user.username"></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
            <label for="username">Email address</label>
          </div>
          <div class="form-floating mb-4 mb-md-7">
            <v-field id="userpassword" name="password" type="password" class="form-control border-default rounded-0"
              :class="{ 'is-invalid': errors['password'] }" placeholder="Password" rules="required"
              v-model="user.password"></v-field>
            <error-message name="password" class="invalid-feedback"></error-message>
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-default w-100 rounded-0" type="submit">
            登入
          </button>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${VITE_API}/admin/signin`

      const { username, password } = this.user

      const user = {
        username,
        password
      }

      this.axios.post(url, user)
        .then(res => {
          // cookie 操作
          const { token, expired } = res.data
          document.cookie = `user = ${token}; expires = ${new Date(expired)}`
          // 通知成功 & 轉換頁面
          this.$swal.fire({
            title: '登入成功',
            confirmButtonColor: '#333333',
            confirmButtonText: '確認'
          })
            .then(() => {
              this.$router.push('/admin')
            })
        })
        .catch((err) => {
          this.swalInfoCheckWithBootstrapButtons.fire({
            icon: 'error',
            text: err.response.data.message,
            confirmButtonText: '確認'
          })
        })
    }
  },
  mounted () {
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
