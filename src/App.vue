<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Hello World</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
