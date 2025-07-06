<script setup lang="ts">
import { ref } from 'vue';
import Button from "@/components/button.vue";

const title = ref("")
const todos = ref([
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false },
])

// v-modelを使用する場合は不要になる
const updateTitle = (event: Event) => {
  title.value = (event.target as HTMLInputElement).value
};

const addTodo = () => {
  todos.value.push({
    id: todos.value.length + 1,
    title: title.value,
    completed: false,
  })
  title.value = ""
}

const completedTodo = (id: number) => {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}
</script>

<template>
  <h1>Todo Page</h1>
  <div>
    <input :value="title" :onchange="updateTitle" />
    <Button :onClick="addTodo" label="追加" />
  </div>
  <ul>
    <li
      v-for="item in todos.filter(todo => !todo.completed)"
      :key="item.id"
    >
      <div class="item">
        {{ item.title }}
        <input type="checkbox" :checked="item.completed" @change="() => completedTodo(item.id)" />
      </div>
    </li>
  </ul>
</template>

<style>
.item {
  display: flex;
  gap: 4px;
}
</style>