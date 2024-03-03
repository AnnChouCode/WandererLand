<template>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div class="toast show mb-1" role="alert" aria-live="assertive" aria-atomic="true" v-for="(item, idx) in toastMsgList" :key="idx">
        <div class="toast-body d-flex align-items-center justify-content-between">
            <div class="d-flex">
              <i class="bi me-2 text-success" :class="item.icon"></i>
               <p class="mb-0">{{item.msg}}</p>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
          @click="clearToast(idx)"></button>
        </div>
      </div>
    </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { useAllAdminOrderStore } from '@/stores/allAdminOrderStore.js'
import { mapState, mapStores } from 'pinia'

// const ordersStore = useAllAdminOrderStore()

export default {
  data () {
    return {
      toastList: null,
      toastMsgList: [],
      toastInnerMsg: {
        addToCart: {
          icon: 'bi-cart-plus',
          msg: '已加入購物車'
        },
        updateCart: {
          icon: 'bi-info-circle',
          msg: '購物車已更新'
        },
        deleteCartItem: {
          icon: 'bi-cart-dash',
          msg: '商品已刪除'
        },
        updatePaid: {
          icon: 'bi-info-circle',
          msg: '付款狀態已更新'
        },
        updateShipping: {
          icon: 'bi-info-circle',
          msg: '出貨狀態已更新'
        }
      }
    }
  },
  props: ['adminOrderState', 'adminOrderAction'],
  computed: {
    ...mapState(cartStore, ['doAction', 'toastState']),
    ...mapStores(useAllAdminOrderStore)
  },
  watch: {
    toastState () {
      this.addToastMsg(this.doAction)
    },
    adminOrderState () {
      this.addToastMsg(this.adminOrderAction)
    }
  },
  methods: {
    addToastMsg (action) {
      this.toastMsgList.unshift(this.toastInnerMsg[action])
      setTimeout(() => {
        this.toastMsgList.pop()
      }, 1500)
    },
    clearToast (idx) {
      this.toastMsgList.splice(idx, 1)
    }
  },
  mounted () {
    // // 監聽訂單 ordersStore toastState
    // this.$watch(() => ordersStore.toastState, (newVal, oldVal) => {
    //   this.addToastMsg(ordersStore.doAction)
    // })
  }
}
</script>
