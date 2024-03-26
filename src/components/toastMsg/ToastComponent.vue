<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1056">
    <div class="toast show mb-1 bg-tertiary" role="alert" aria-live="assertive" aria-atomic="true"
      v-for="(item, idx) in toastMsgList" :key="idx">
      <div class="toast-body d-flex align-items-center justify-content-between">
        <div class="d-flex fw-bold">
          <i class="bi me-2 text-default" :class="item.icon"></i>
          <p class="mb-0">{{ item.msg }}</p>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
          @click="clearMsg(idx)"></button>
      </div>
    </div>
  </div>
</template>

<script>
import statusStore from '@/stores/statusStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  props: ['adminOrderState', 'adminOrderAction'],
  computed: {
    ...mapState(statusStore, ['toastMsgList'])
  },
  methods: {
    ...mapActions(statusStore, ['clearMsg'])
  }
}
</script>
