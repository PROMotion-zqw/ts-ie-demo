<template>
  <a-layout class="layout-demo">
    <CustomSider cname="侧边栏" :collapsed="collapsed" />
    <a-layout>
      <CustomHeader
        cname="页头"
        :collapsed="collapsed"
        :onCollapsed="onCollapse"
      />
      <a-layout style="padding: 0 24px">
        <CustomBreadCrumb cname="面包屑" />
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import CustomHeader from './header.vue'
import CustomSider from './sider.vue'
import CustomBreadCrumb from './breadCrumb.vue'
import { ref } from 'vue'
const collapsed = ref(false)
const onCollapse = () => {
  console.log('Oncollapsed')
  collapsed.value = !collapsed.value
}
</script>
<style scoped>
.layout-demo {
  height: 100vh;
  background: var(--color-fill-2);
  /* light --color-fill-2  dark --color-bg-1 */
}
.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
