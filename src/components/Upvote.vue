<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import ArrowTailUp from './Icons/ArrowTailUp.vue'

const store = useStore();
const selected = computed<boolean>(() => store.state.selected)

const toggle = () => {
  store.commit('toggle')
}
</script>

<template>
  <button type="button" :class="['upvote-button', {'selected': selected}]" @click="toggle">
    <ArrowTailUp :color="selected ? '#253CF2' : '#343A40'" />
  </button>
</template>

<style scoped>
.upvote-button {
  cursor: pointer;
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: #F4F6F8;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected {
  background-color: #E5E8FD;
}
</style>
