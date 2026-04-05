import { defineStore, acceptHMRUpdate } from 'pinia'

export const useLeaveStore = defineStore('leaveStore', {
  state: () => ({
    component: null,
    employee: null,
    isMatch: false,
    SubmitLoading: false
  }),
  persist: false,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLeaveStore, import.meta.hot))
}
