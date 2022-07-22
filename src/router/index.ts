import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import * as Pages from '@/views/pages'
import DemoRoutes from './demo'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Pages.Layout,
  },
  // 测试用例相关路由 [非业务路由]
  ...DemoRoutes,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
