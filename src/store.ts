import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      selected: false
    }
  },
  mutations: {
    toggle (state) {
      state.selected = !state.selected
    }
  }
})
