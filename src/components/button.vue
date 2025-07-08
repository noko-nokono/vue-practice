<script setup lang="ts">
defineProps<{
  onClick: () => void
}>();
</script>

<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>