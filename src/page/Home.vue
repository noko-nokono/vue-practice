<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/button.vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <h1>Home Page</h1>
  <p>{{ count }}</p>
  <Button :increment="increment" />
</template>