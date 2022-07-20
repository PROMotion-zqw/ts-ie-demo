<template>
  <a-layout-header>
    <a-button shape="round" @click="onCollapsed">
      <IconCaretRight v-if="collapsed" />
      <IconCaretLeft v-else />
    </a-button>
    <a-space direction="vertical">
      <a-button @click="CHeader.changeTheme()">
        <icon-sun-fill v-if="light" />
        <icon-moon-fill v-else />
      </a-button>
    </a-space>
  </a-layout-header>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { useHeader } from './useLayout'
defineProps({
  onCollapsed: Function,
  collapsed: Boolean,
})
const CHeader: useHeader = new useHeader()
const { light } = CHeader
</script>
