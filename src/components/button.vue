<script setup lang="ts">
defineProps<{increment: () => void}>();
</script>

<template>
  <button class="button" @click="increment">ボタン</button>
</template>