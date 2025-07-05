<script setup lang="ts">
import { ref, reactive } from 'vue';
import Button from "@/components/button.vue";

const title = ref("")
const todos = reactive([
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false },
])

const updateTitle = (event: Event) => {
  title.value = (event.target as HTMLInputElement).value
};

const addTodo = () => {
  todos.push({
    id: todos.length + 1,
    title: title.value,
    completed: false,
  })
  title.value = ""
}

const completedTodo = (id: number) => {
  const todo = todos.find(todo => todo.id === id)
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
  <ul v-for="item in todos" :key="item.id">
    <div v-if="!item.completed" class="item">
      <li>{{ item.title }}</li>
      <input 
        type="checkbox" 
        :checked="item.completed"
        v-on:change="completedTodo(item.id)"
      >
    </div>
  </ul>
</template>

<style>
.item {
  display: flex;
  gap: 4px;
}
</style>