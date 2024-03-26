<template>
    <router-link class="text-default border-bottom border-default fw-bold fs-info fs-md-6" :to="linkTo">瀏覽更多</router-link>
</template>

<script>
export default {
  props: {
    // 點擊後連結
    linkTo: String
  }
}
</script>
