<template>
  <div>
    <!-- {{ counter.count }} -->
    {{ counter.themeColor }}
  </div>
</template>
<script setup lang="ts">
import { themeStore } from '@/store/index'
const counter = themeStore()
</script>
