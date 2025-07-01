<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <h1 class="red">Hello World</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.main {
  padding: 0 16px;
}
</style>
