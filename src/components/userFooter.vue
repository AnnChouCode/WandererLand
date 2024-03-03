<template>
  <footer class="bg-primary w-100">
    <div class="d-flex justify-content-between align-items-center container py-6 py-md-7">
      <div class="col-8">
        <div class="d-flex gap-3 mb-3">
          <i class="bi bi-instagram fs-4"></i>
          <i class="bi bi-github fs-4"></i>
        </div>
        <p class=" fs-info fs-md-6">本網站僅供個人作品使用，<span class="d-block d-sm-inline">不提供商業用途</span></p>
      </div>
      <div class="col-4 text-end">
        <RouterLink v-if="!isLoggedin" to="/userlogin" class="text-default fs-info fs-md-6">
          登入
        </RouterLink>

        <RouterLink v-else to="/admin" class="text-default fs-info fs-md-6">
          管理者後台
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['isLoggedin']
}
</script>
