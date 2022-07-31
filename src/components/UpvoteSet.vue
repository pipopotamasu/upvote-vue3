<script setup lang="ts">
import Upvote from './Upvote.vue'
import { colors } from '../colors';
</script>

<template>
  <div>
    <ul class="upvote-list">
      <li class="upvote-item"><Upvote /></li>
      <li class="upvote-item"><Upvote /></li>
      <li class="upvote-item"><Upvote /></li>
    </ul>
  </div>
</template>

<style scoped>
.upvote-list {
  list-style: none;
  display: flex;
  border: 1px solid v-bind('colors.upvoteList.border.default');
  border-radius: 4px;
  padding: 4px;
  width: 280px;
  margin-right: 1rem;
}

.upvote-item {
  margin-right: 4px;
}
</style>
