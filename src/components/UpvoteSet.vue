<script setup lang="ts">
import { useStore } from '../store'
import Upvote from './Upvote.vue'
import Add from './Add.vue'
import { colors } from '../colors';

const { index, count, selected } = defineProps({
  index: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  selected: {
    type: Boolean,
    required: true
  }
})

const { commit } = useStore();

const onClickAdd = () => {
  commit('addUpvote', index)
}

const onClickUpvote = () => {
  commit('toggleUpvote', index)
}
</script>

<template>
  <div class="upvote-set" >
    <ul class="upvote-list">
      <li
        class="upvote-item"
        v-for="num in count"
        :key="num"
      >
        <Upvote @click="onClickUpvote" :selected="selected" />
      </li>
    </ul>
    <Add @click="onClickAdd" />
  </div>
</template>

<style scoped>
.upvote-set {
  display: flex;
  align-items: center;
}

.upvote-list {
  display: flex;
  border: 1px solid v-bind('colors.upvoteList.border.default');
  border-radius: 4px;
  padding: 4px;
  width: 260px;
  margin-right: 1rem;
  overflow: scroll;
}

.upvote-item {
  margin-right: 4px;
}
</style>
