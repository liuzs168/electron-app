import { createRouter, createWebHashHistory } from 'vue-router'
import { AppRoutes } from './routes'
import { beforeEach, afterEach } from './guards'

const router = createRouter({
  history: createWebHashHistory(), // 哈希模式
  routes: AppRoutes
})

// 全局前置守卫
router.beforeEach(beforeEach)

// 全局后置守卫
router.afterEach(afterEach)

export default router
