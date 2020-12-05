<template>
  <h1>TODO</h1>

  <div class="todo-list">
    <AddBar @add="handleAdd" />
    <List :list="list" @delete="handleDelete" />
  </div>
</template>

<script setup lang="ts">
import AddBar from "./components/AddBar/index.vue";
import List from "./components/List/index.vue"

ref: list = []

function handleAdd(v: string) {
  if (v) {
    list.push({
      checked: false,
      text: v
    })
  }
}

function handleDelete(index: number) {
  if (index >= 0) {
    list.splice(index, 1)
  }
}
</script>

<style scoped>
h1 {
  color: #666;
}

.todo-list {
  width: 500px;
  margin: 0 auto;
}
</style>
