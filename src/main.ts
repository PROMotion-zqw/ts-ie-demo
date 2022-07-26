import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import store from './store'

// 引入 Arco-Design-Vue 相关的组件&样式
import '@arco-design/web-vue/dist/arco.css'
import * as ArcoComponentMap from '@/plugin/ArcoComponents'

const app = createApp(App)

// 按需加载注册全局组件
const ComponentList = Object.values(ArcoComponentMap)
ComponentList.map((v) => {
  v.name.indexOf('Icon') !== -1
    ? app.component(v.name, v)
    : app.component(`A${v.name}`, v)
})

app.use(createPinia()).use(router).mount('#app')
