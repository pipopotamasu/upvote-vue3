<script setup lang="ts">
import Upvote from './Upvote.vue'
import Add from './Add.vue'
import { colors } from '../colors';

const onClick = () => {
  console.log(1)
}
</script>

<template>
  <div class="upvote-set" >
    <ul class="upvote-list">
      <li class="upvote-item"><Upvote /></li>
      <li class="upvote-item"><Upvote /></li>
      <li class="upvote-item"><Upvote /></li>
    </ul>
    <Add @click="onClick" />
  </div>
</template>

<style scoped>
.upvote-set {
  display: flex;
  align-items: center;
}

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
