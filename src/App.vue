<template>
    <RouterView />
</template>

<script>
// 引入 AOS 動畫
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted () {
    AOS.init()
  }
}
</script>

<style lang="scss"></style>
