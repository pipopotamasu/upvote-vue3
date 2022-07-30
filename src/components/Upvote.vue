<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { colors } from '../colors';
import ArrowTailUp from './Icons/ArrowTailUp.vue'

const store = useStore();
const color = computed(() => {
  return {
    arrow: store.state.selected ? colors.arrow.color.selected : colors.arrow.color.default,
    buttonBg: store.state.selected ? colors.upvoteButton.bg.selected : colors.upvoteButton.bg.default,
  }
})

const toggle = () => {
  store.commit('toggle')
}
</script>

<template>
  <button type="button" class="upvote-button" @click="toggle">
    <ArrowTailUp :color="color.arrow" />
  </button>
</template>

<style scoped>
.upvote-button {
  cursor: pointer;
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: v-bind('color.buttonBg');
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
