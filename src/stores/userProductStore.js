import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLoading } from 'vue-loading-overlay'
const $loading = useLoading()

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('allProductsStore', {
  state: () => ({
    // 所有產品
    allProducts: [],
    // 所有藝術家
    allArtists: [],
    // 產品尺寸表
    productSizeList: [],
    // filter
    filter: []
  }),
  actions: {
    // 獲取所有產品
    getAllProducts () {
      // 開啟 loading
      const loader = $loading.show()

      const url = `${VITE_API}/api/${VITE_PATH}/products/all`

      return axios.get(url)
        .then(res => {
          const allDatas = res.data.products
          this.allProducts = allDatas.filter(item => item.category === 'products')
          this.allArtists = allDatas.filter(item => item.category === 'artists').sort((a, b) => a.title.localeCompare(b.title))
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
        .finally(() => {
          // 關閉 loading
          loader.hide()
        })
    },

    // 取得產品尺寸表
    getSizeList () {
      const tempSizeList = new Set(this.allProducts.map(item => item.size))
      const sortSize = [...tempSizeList].sort((a, b) => a[0] - b[0])

      this.productSizeList = sortSize
    }
  },
  getters: {
    // 排序最新產品、藝術家
    sortNewest: ({ allProducts, allArtists }) => {
      const artists = JSON.parse(JSON.stringify(allArtists))
      const products = JSON.parse(JSON.stringify(allProducts))

      const newestArtist = artists.sort((a, b) => b.create_at - a.create_at)
      const newestProduct = products.sort((a, b) => b.create_at - a.create_at)

      return {
        newestArtist,
        newestProduct
      }
    },
    groupList: ({ allProducts, allArtists }) => {
      const tempProductGroupList = new Set(allProducts.map(item => item.group))
      const productGroupList = [...tempProductGroupList]
      const tempArtistGroupList = new Set(allArtists.map(item => item.group))
      const artistGroupList = [...tempArtistGroupList]

      return {
        productGroupList,
        artistGroupList
      }
    }
  }
})
