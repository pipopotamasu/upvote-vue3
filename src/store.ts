import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      selected: false,
      count: 1,
    }
  },
  mutations: {
    toggle (state) {
      state.selected = !state.selected
    },
    add (state) {
      state.count += 1;
    }
  }
})
