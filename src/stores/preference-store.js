import { defineStore, acceptHMRUpdate } from 'pinia'

export const usePreferenceStore = defineStore('preferenceStore', {
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
  import.meta.hot.accept(acceptHMRUpdate(usePreferenceStore, import.meta.hot))
}
