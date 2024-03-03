import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('allProductsStore', {
  state: () => ({
    // 所有產品
    allProducts: [],
    // 產品分類列表
    categoryList: []
  }),
  actions: {
    // 獲取所有產品
    getAllProducts () {
      const url = `${VITE_API}/api/${VITE_PATH}/products/all`

      axios.get(url)
        .then(res => {
          this.allProducts = res.data.products
          this.getCategoryList()
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
    getCategoryList () {
      const categoryList = new Set(this.allProducts.map(item => item.category))
      this.categoryList = [...categoryList]
    }
  }
})
