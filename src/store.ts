import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, type Store } from 'vuex'

export const key: InjectionKey<Store<VuexState>> = Symbol()

export const store = createStore<VuexState>({
  state () {
    return {
      upvoteLists: [{ id: 1, selected: false, count: 1 }, { id: 2, selected: false, count: 1 }, { id: 3, selected: false, count: 1 }],
    }
  },
  mutations: {
    toggleUpvote (state, index: number) {
      state.upvoteLists[index].selected = !state.upvoteLists[index].selected
    },
    addUpvote (state, index: number) {
      state.upvoteLists[index].count += 1
    },
  }
})

export function useStore () {
  return baseUseStore(key)
}
