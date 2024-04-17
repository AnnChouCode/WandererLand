<template>
    <button type="button" class="btn" @click="backToTop" aria-label="回到頂端">
        <i class="fs-1 bi bi-arrow-up-circle-fill text-default link-hover-text-info"></i>
    </button>
</template>

<script>
export default {
  methods: {
    backToTop () {
      // For Safari
      document.body.scrollTop = 0
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
button:active {
    border: none;
}
</style>
