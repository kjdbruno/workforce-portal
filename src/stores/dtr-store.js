import { defineStore, acceptHMRUpdate } from 'pinia'

export const useDTRStore = defineStore('dtrStore', {
  state: () => ({
    component: null,
    employee: null,
    isMatch: false,
    SubmitLoading: false,
    //
    data: null
  }),
  persist: false,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDTRStore, import.meta.hot))
}
