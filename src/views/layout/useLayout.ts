import { BaseCommon } from '@/base'
import { ref } from 'vue'
export class useHeader extends BaseCommon {
  // 基础数据部分
  light = ref(true)

  // 方法，事件函数部分
  changeTheme() {
    console.log('themeStore', this.getStore('themeStore'))
  }
}
