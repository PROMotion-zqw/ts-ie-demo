<template>
  <div>
    {{ counter.count }}
    <a-button @click="onClick">add</a-button>
  </div>
</template>
<script setup lang="ts">
import { userStore, themeStore } from '@/store/index'
import { ThemeMap } from '@/utils/constants'
const counter = userStore()
const themeS = themeStore()
console.log(ThemeMap['light'], themeS.themeColor)

const onClick = () => {
  counter.SET_COUNT()
  counter.SET_NAME('quanwei')
}
</script>
