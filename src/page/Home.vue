<script setup lang="ts">
import { RouterLink } from 'vue-router'

const list = [
  { name: 'Counter', path: '/counter' },
  { name: 'Todo', path: '/todo' },
  { name: 'Data Fetch', path: '/data-fetch' },
]
</script>

<template>
  <h1>Home Page</h1>
  <ul class="list">
    <li v-for="item in list" class="list-item">
      <RouterLink :to="item.path">
        {{ item.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.list {
  padding: 0;
}

.list-item {
  list-style: none;
}
</style>