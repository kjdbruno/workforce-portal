import { defineStore, acceptHMRUpdate } from 'pinia'

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    component: null,
    subcomponent: null,
    data: null
  }),

  getters: {
    
  },

  
  actions: {
    
  },
  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot))
}
