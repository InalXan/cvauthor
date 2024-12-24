import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserData = defineStore('userdatas', {
  state: () => ({
    userdatas: [],
    filter: 'all', // 'filet' düzeltildi
    nextId: 0,
  }),
  getters: {
    finishedUserData: (state) => state.userdatas.filter((userdata) => userdata.isFinished),
    unfinishedUserData: (state) => state.userdatas.filter((userdata) => !userdata.isFinished),
    filteredUserData: (state) => {
      if (state.filter === 'finished') {
        return state.userdatas.filter((userdata) => userdata.isFinished)
      } else if (state.filter === 'unfinished') {
        return state.userdatas.filter((userdata) => !userdata.isFinished)
      }
      return state.userdatas
    },
  },
  actions: {
    addUserData(text) {
      this.userdatas.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
