<template>
  <h1>TODO</h1>

  <div class="todo-list">
    <AddBar />
    <List />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import AddBar from "./components/AddBar";
import List from "./components/List/index.vue"
import Test from "./components/Test"

defineComponent({
  AddBar,
  List,
  Test
});

function handleAdd (v: string) {
  console.log(v)
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
