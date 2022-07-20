import { ref } from 'vue'
export class useHeader {
  // 基础数据部分
  light = ref(true)

  // 方法，事件函数部分
  changeTheme() {
    this.light.value = !this.light.value
    console.log('changeTheme light', this.light.value)
  }
}
