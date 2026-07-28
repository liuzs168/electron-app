export const AppRoutes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@views/Theme.vue')
  },
  {
    path: '/about',
    name: '关于',
    component: () => import('@views/About.vue')
  },
  {
    path: '/theme',
    name: '主题',
    component: () => import('@views/Theme.vue')
  }
]
