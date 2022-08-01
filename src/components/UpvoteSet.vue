<script setup lang="ts">
import { useStore } from '../store';
import Upvote from './Upvote.vue';
import Add from './Add.vue';
import { colors } from '../colors';

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
});

const { commit } = useStore();

const onClickAdd = () => {
  commit('addUpvote', props.index);
};

const onClickUpvote = () => {
  commit('toggleUpvote', props.index);
};
</script>

<template>
  <div class="upvote-set">
    <ul class="upvote-list">
      <li v-for="num in count" :key="num" class="upvote-item">
        <Upvote :selected="selected" @click="onClickUpvote" />
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
