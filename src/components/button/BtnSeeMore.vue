<template>
    <router-link class="text-default fw-bold fs-info fs-md-6 btn-see-more" :to="linkTo" aria-label="瀏覽更多">瀏覽更多</router-link>
</template>

<script>
export default {
  props: {
    // 點擊後連結
    linkTo: String
  }
}
</script>

<style lang="scss" scoped>
.btn-see-more {
  position:relative;
  transition: border 0.3s;
  border-bottom: 1px solid #333333;

  &::after{
    position: absolute;
    top:0;
    left:0;
    content:'';
    width:0%;
    height: 100%;
    border-bottom: 1px solid #333333;
    transition: width 0.5s;
  }

  &:hover{
    border-bottom: 1px solid transparent;

    &::after{
      width: 100%;
    }
  }
}
</style>
