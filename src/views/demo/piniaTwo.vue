<template>
  <div>
    {{ counter.count }}
    <a-button @click="onClick">add</a-button>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/index'
const counter = useUserStore()
const onClick = () => {
  counter.SET_COUNT()
}
</script>
