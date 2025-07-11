<script>
export default {
  data() {
    return {
      title: "",
      todos: [{
        id: 1,
        title: "タスク1",
        completed: false
      }]
    }
  },
  methods: {
    updateTitle(value) {
      this.title = value;
    },
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.title,
        completed: false
      });
      this.title = "";
    },
    completedTodo(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Todo</h1>
    <v-text-field
      :value="title"
      @input="updateTitle"
      label="タスクを入力"
      placeholder="新しいタスクを追加..."
      outlined
      clearable
    ></v-text-field>
    <v-btn @click="addTodo">追加</v-btn>
    <ul class="list">
      <li v-for="todo in todos.filter(todo => !todo.completed)" :key="todo.id" class="list-item">
        <p class="p">{{ todo.title }}</p>
        <input type="checkbox" :checked="todo.completed" @change="() => completedTodo(todo.id)">
      </li>
    </ul>
  </div>
</template>

<style>
.list {
  list-style: none;
  padding-left: 0 !important;
  margin-top: 20px;
}

.list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.p {
  margin-bottom: 0 !important;
}
</style>