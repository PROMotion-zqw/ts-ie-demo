import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => ({
    count: 0,
    name: '',
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    SET_COUNT() {
      this.count++
    },
    SET_NAME(name: string) {
      console.log('SET_NAME')

      this.name = name
    },
  },
})
