import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
import router from '@/router'
import { useLoading } from 'vue-loading-overlay'

const $loading = useLoading()

export const useAdminLoginStore = defineStore('adminLogin', {
  actions: {
    // 確認登入
    checkLogin () {
      // 開啟 loading
      const loader = $loading.show()

      const { VITE_API } = import.meta.env
      const url = `${VITE_API}/api/user/check`

      // 取得 cookie
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('user='))
        ?.split('=')[1]

      axios.defaults.headers.common.Authorization = token

      axios
        .post(url)
        .then(function (res) {
          console.log('已驗證登入')
        })
        .catch((err) => {
          swal
            .fire({
              icon: 'error',
              text: err.response.data.message
            })
            .then((result) => {
              router.push('/userlogin')
            })
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    }
  }
})
