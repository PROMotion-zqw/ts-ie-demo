<template>
  <div>
    {{ counter.count }}
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/index'
const counter = useUserStore()
</script>
