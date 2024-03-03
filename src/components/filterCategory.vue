<template>
    <div>
            <label for="category" class="me-3">產品分類篩選</label>
            <select name="category" id="category" v-model="currentCategory">
            <option value="">全部</option>
            <option :value="item" v-for="item in categoryList" :key="item">{{item}}</option>
            </select>
        </div>
</template>

<script>
import allProductStore from '@/stores/allProductStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  data () {
    return {
      // 當前產品分類
      currentCategory: ''
    }
  },
  watch: {
    currentCategory () {
      this.$emit('getProductList', 1, this.currentCategory)
    }
  },
  methods: {
    ...mapActions(allProductStore, ['getAllProducts'])
  },
  computed: { ...mapState(allProductStore, ['allProducts', 'categoryList']) }
}
</script>
