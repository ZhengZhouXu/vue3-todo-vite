<template>
  <a-list item-layout="horizontal" :data-source="list">
    <template #header>代办事项</template>

    <template #renderItem="{ item, index }">
      <a-list-item>
        <div class="item">
          <div class="checkbox-wrap" :class="{ checked: item.checked }">
            <a-checkbox v-model:checked="item.checked">{{ item.text }}</a-checkbox>
          </div>

          <DeleteOutlined class="delete" @click="handleDeleteClick(index)" />
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue';
import { DeleteOutlined } from '@ant-design/icons-vue';

interface ListItem {
  checked: boolean;
  text: string;
}

interface Props {
  list: Array<ListItem>;
}

const emit = defineEmit(['delete'])

const props: Readonly<Props> = defineProps({
  list: Array
});

function handleDeleteClick(index: number) {
  emit('delete', index)
}
</script>

<style scoped>
.item {
  display: flex;
  width: 100%;
}

.item .checkbox-wrap {
  text-align: left;
  flex: 1;
}

:deep(.item .checkbox-wrap.checked span) {
  text-decoration: line-through;
}

.delete {
  color: #f5222d;
  font-size: 18px;
  cursor: pointer;
}
</style>
