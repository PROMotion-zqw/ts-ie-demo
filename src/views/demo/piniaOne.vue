<template>
  <div>
    {{ counter.count }}
    {{ counter.name }}
  </div>
</template>
<script setup lang="ts">
import { userStore } from '@/store/index'
const counter = userStore()
</script>
