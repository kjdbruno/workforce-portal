import { defineStore, acceptHMRUpdate } from 'pinia'

export const useRecruitmentStore = defineStore('recruitmentStore', {
  state: () => ({
    component: null
  }),

  getters: {
    
  },

  
  actions: {
    
  },
  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRecruitmentStore, import.meta.hot))
}
