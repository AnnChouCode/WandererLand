import { createRouter, createWebHashHistory } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'
const $loading = useLoading()

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('../views/user/UserLayout.vue'),
    meta: { navbarType: 'frontend' },
    children: [
      {
        path: 'home',
        name: 'userhome',
        component: () => import('../views/user/UserHome.vue'),
        meta: {
          title: 'Wanderer Land'
        }
      },
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import('../views/user/UserProductList.vue'),
        meta: {
          title: '作品列表 - Wanderer Land'
        }
      },
      {
        path: 'productinfo/:id',
        component: () => import('../views/user/UserProductInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '作品資訊 - Wanderer Land'
        }
      },
      {
        path: 'artistlist',
        name: 'artistlist',
        component: () => import('../views/user/UserArtistList.vue'),
        meta: {
          title: '藝術家列表 - Wanderer Land'
        }
      },
      {
        path: 'artistinfo/:id',
        component: () => import('../views/user/UserArtistInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '藝術家資訊 - Wanderer Land'
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/user/UserCart.vue'),
        meta: {
          title: '購物車 - Wanderer Land'
        }
      },
      {
        path: 'order',
        component: () => import('../views/user/UserOrder.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '訂單 - Wanderer Land'
        },
        children: [
          {
            path: 'checkform',
            name: 'checkform',
            component: () => import('../views/user/UserCheckOrderForm.vue')
          },
          {
            path: 'payorder/:id',
            component: () => import('../views/user/UserPayOrder.vue'),
            props: (route) => {
              return {
                id: route.params.id
              }
            }
          },
          {
            path: 'orderhistory/:id',
            component: () => import('../views/user/UserOrderHistory.vue'),
            props: (route) => {
              return {
                id: route.params.id
              }
            }
          }
        ]
      },
      {
        path: 'articlelist',
        name: 'articlelist',
        component: () => import('../views/user/UserArticleList.vue'),
        meta: {
          title: '最新消息 - Wanderer Land'
        }
      },
      {
        path: 'articleinfo/:id',
        component: () => import('../views/user/UserArticleInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '最新消息 - Wanderer Land'
        }
      },
      {
        path: 'favoritelist',
        name: 'favoritelist',
        component: () => import('../views/user/UserFavoriteList.vue'),
        meta: {
          title: '收藏 - Wanderer Land'
        }
      },
      {
        path: 'userlogin',
        name: 'userlogin',
        component: () => import('../views/user/UserLogin.vue'),
        meta: {
          title: '登入 - Wanderer Land'
        }
      }
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('../views/admin/AdminLayout.vue'),
    meta: { navbarType: 'backend' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/AdminDashBoard.vue'),
        meta: {
          title: '使用者後台 - Wanderer Land'
        }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/admin/AdminProductList.vue'),
        meta: {
          title: '商品管理 - Wanderer Land'
        }
      },
      {
        path: 'productinfo/new',
        component: () => import('../views/admin/AdminProductInfo.vue'),
        meta: {
          title: '商品管理 - Wanderer Land'
        }
      },
      {
        path: 'productinfo/:id',
        component: () => import('../views/admin/AdminProductInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '商品管理 - Wanderer Land'
        }
      },
      {
        path: 'artists',
        name: 'artists',
        component: () => import('../views/admin/AdminArtistList.vue'),
        meta: {
          title: '藝術家管理 - Wanderer Land'
        }
      },
      {
        path: 'artistinfo/new',
        component: () => import('../views/admin/AdminArtistInfo.vue'),
        meta: {
          title: '藝術家管理 - Wanderer Land'
        }
      },
      {
        path: 'artistinfo/:id',
        component: () => import('../views/admin/AdminArtistInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '藝術家管理 - Wanderer Land'
        }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/admin/AdminOrders.vue'),
        meta: {
          title: '訂單管理 - Wanderer Land'
        }
      },
      {
        path: 'orderinfo/:id',
        component: () => import('../views/admin/AdminOrderInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '訂單管理 - Wanderer Land'
        }
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue'),
        meta: {
          title: '優惠券管理 - Wanderer Land'
        }
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('../views/admin/AdminArticles.vue'),
        meta: {
          title: '文章管理 - Wanderer Land'
        }
      },
      {
        path: 'articleinfo/new',
        component: () => import('../views/admin/AdminArticleInfo.vue'),
        meta: {
          title: '文章管理 - Wanderer Land'
        }
      },
      {
        path: 'articleinfo/:id',
        component: () => import('../views/admin/AdminArticleInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '文章管理 - Wanderer Land'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 Not Found - Wanderer Land'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // 對於所有路由導航，簡單地讓頁面滾動到頂部
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

// router 進入前執行
router.beforeEach((to, from, next) => {
  // 開啟 loading
  const loader = $loading.show()
  // 關閉 loading
  window.setTimeout(() => {
    loader.hide()
  }, 500)

  // linkActive 換樣式
  const linkActive = (() => {
    if (to.meta.navbarType === 'backend') {
      return 'theme-dark-navlink-active'
    } else if (to.meta.navbarType === 'frontend') {
      return 'navlink-underline-active'
    } else {
      return 'active'
    }
  })()

  router.options.linkActiveClass = linkActive

  // 頁面變更名稱
  window.document.title = to.meta.title
  next()
})

export default router
