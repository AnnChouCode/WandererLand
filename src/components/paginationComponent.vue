<template>
    <nav aria-label="Page navigation" class="d-flex justify-content-end">
        <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="getList(pagination.current_page-1)">
            <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active': page === pagination.current_page}">
            <a href="#" class="page-link" @click.prevent="getList(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pagination.has_next}">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="getList(pagination.current_page+1)">
            <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    // 切換頁面
    getList (page) {
      this.$emit('getList', page)
    }
  }
}
</script>
