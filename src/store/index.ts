// import { createStore } from 'vuex'

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// })

import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    SET_COUNT() {
      this.count++
    },
  },
})
