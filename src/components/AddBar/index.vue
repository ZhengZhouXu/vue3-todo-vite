<template>
  <div class="add-bar">
    <a-input v-model:value="value" placeholder="请输入添加内容" />
    <a-button class="button" @click="handleAddClick">添加</a-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmit } from "vue";

const emit = defineEmit(["add"]);

ref: value = "";

function handleAddClick() {
  emit('add', value)
  value = ""
}
</script>

<style scoped>
.add-bar {
  display: flex;
}

.button {
  margin-left: 20px;
}
</style>