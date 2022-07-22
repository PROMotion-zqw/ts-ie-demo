import { BaseCommon } from '@/base'
import { ThemeMap } from '@/utils/constants'
import { ref } from 'vue'
export class useHeader extends BaseCommon {
  constructor() {
    super()
    this.setTheme()
  }
  // 基础数据部分
  light = ref(true)

  // --------------------方法，事件函数部分-------------------

  changeTheme() {
    this.ThemeStore.themeColor =
      ThemeMap.light === this.ThemeStore.themeColor
        ? ThemeMap.dark
        : ThemeMap.light
  }

  ThemeStore = this.getStore('themeStore')()

  /**
   * 设置主题
   */
  setTheme() {
    this.watch(
      () => this.ThemeStore.themeColor,
      (curVal: string) => {
        this.light.value = curVal === ThemeMap.light
        document.body.setAttribute('arco-theme', curVal)
      }
    )
  }
}
