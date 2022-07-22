import { ThemeMap } from '@/utils/constants'
import { defineStore } from 'pinia'
export default defineStore('theme', {
  state: () => ({
    themeColor: ThemeMap.light,
  }),
  getters: {
    getTheme: (state) => state.themeColor,
  },
  actions: {
    SET_THEME(themeName: ThemeMap) {
      this.themeColor = themeName
    },
  },
})
