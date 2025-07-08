<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/button.vue'

// 状態の宣言
const count = ref(0)

const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
</script>

<template>
  <h1>Counter Page</h1>
  <p>{{ count }}</p>
  <Button :onClick="increment">Increment</Button>
  <Button :onClick="decrement">Decrement</Button>
</template>