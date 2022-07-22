import { RouteRecordRaw } from 'vue-router'
import * as Pages from '@/views/pages'
const DemoRoutes: Array<RouteRecordRaw> = [
  {
    path: '/demoOne',
    name: 'demoOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pages.PiniaDemo,
  },
  {
    path: '/demoTwo',
    name: 'demoTwo',
    component: Pages.PiniaTwo,
  },
]

export default DemoRoutes
