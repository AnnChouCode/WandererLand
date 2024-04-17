<template>
    <div :class="containerClass" aria-label="切換資訊">
        <div :class="swiperButton"></div>
        <div class="navigation-bg"></div>
    </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom'
    },
    direction: {
      type: String,
      default: 'next'
    }
  },
  computed: {
    containerClass () {
      return {
        'position-relative': true,
        'position-absolute': true,
        'z-1': true,
        'bottom-50': this.position === 'bottom',
        'top-50': this.position === 'top',
        'end-0': this.direction === 'next',
        'start-0': this.direction === 'prev',
        'rounded-circle': true,
        'overflow-hidden': true,
        'navigation-next': this.direction === 'next',
        'navigation-prev': this.direction === 'prev'
      }
    },
    swiperButton () {
      return {
        'swiper-button-next': this.direction === 'next',
        'swiper-button-prev': this.direction === 'prev'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* 右 */
.navigation-next {
    display: none;
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      display: flex;
    }

    &:hover {
      border: 3px solid #333333;

      .navigation-bg {
        width: 100%;
      }

      .swiper-button-next {
        border: none;
        right: -5px
      }
    }

    .navigation-bg {
      width: 0%;
      height: 100%;
      transition: width 0.3s ease;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }

  .swiper-button-next {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'/%3E%3C/svg%3E") no-repeat center;
    background-size: 40px 40px;
    z-index: 11;
    top: 55%;
    right: 0px;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: 3px solid #333333;
    border-radius: 50px;
    transition: right 0.3s ease, border 0.3s ease;
  }

  /* 左 */
  .navigation-prev {
    display: none;
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      display: flex;
    }

    &:hover {
      border: 3px solid #333333;

      .navigation-bg {
        width: 100%;
      }

      .swiper-button-prev {
        border: none;
        left: -5px
      }
    }

    .navigation-bg {
      width: 0%;
      height: 100%;
      transition: width 0.3s ease;
      background-color: rgba(255, 255, 255, 0.7);
      position: absolute;
      right: 0;
    }
  }

  .swiper-button-prev {
    position: absolute;
    z-index: 1;
    top: 55%;
    left: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5'/%3E%3C/svg%3E") no-repeat center;
    background-size: 40px 40px;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: 3px solid #333333;
    border-radius: 50px;
    transition: right 0.3s ease, border 0.3s ease;
  }
</style>
