import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'

const { VITE_API, VITE_PATH } = import.meta.env

export const useAdminProductsStore = defineStore('adminProducts', {
  state: () => ({
    // 所有產品
    allProducts: [],
    // 產品分類列表
    groupList: []
  }),
  actions: {
    // 獲取所有產品
    getAllProducts () {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/products/all`

      return axios.get(url)
        .then(res => {
          this.allProducts = res.data.products
          this.getGroupList()
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
    },

    // 取得產品分類列表
    getGroupList () {
      const products = Object.values(this.allProducts)
      const groupList = new Set(products.map(item => item.group))
      this.groupList = [...groupList]
    }
  }
})
