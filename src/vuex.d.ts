import type { Store } from 'vuex'

declare global {
  type VuexState = {
    upvoteLists: { id: number, selected: boolean, count: number }[]
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<VuexState>
  }
}