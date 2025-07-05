<script setup lang="ts">
import { RouterLink } from 'vue-router'

const list = [
  { name: 'About', path: '/about' },
  { name: 'Counter', path: '/counter' },
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