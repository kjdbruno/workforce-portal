import { defineStore, acceptHMRUpdate } from 'pinia'

export const useEmployeeStore = defineStore('employeeStore', {
  state: () => ({
    component: null,
    data: null
  }),

  getters: {
    
  },

  
  actions: {
    triggerChildSave() {
      this.saveEventCounter++;
    }
  },
  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEmployeeStore, import.meta.hot))
}
