<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../store'
import UpvoteSet from './UpvoteSet.vue'

const { state } = useStore();
const upvoteLists = computed(() => state.upvoteLists)

</script>

<template>
  <ul class="wireframe">
    <li
      v-for="({ id, count, selected }, index) in upvoteLists"
      :key="`${id}${count}${selected}`"
    >
      <UpvoteSet :index="index" :count="count" :selected="selected" />
    </li>
  </ul>
</template>

<style scoped>
.wireframe li {
  margin-bottom: 1.5rem;
}
</style>
