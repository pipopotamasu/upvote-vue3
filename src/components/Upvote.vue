<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const selected = computed<boolean>(() => store.state.selected)

const toggle = () => {
  store.commit('toggle')
}
</script>

<template>
  <button type="button" class="upvote-button" @click="toggle">
    <img src="../assets/arrow-tailup.svg" alt="Arrow Tailup Icon " />
  </button>
  <p>selected: {{ selected }}</p>
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
</style>
