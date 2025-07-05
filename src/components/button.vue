<script setup lang="ts">
defineProps<{
  label: string;
  onClick: () => void
}>();
</script>

<template>
  <button class="button" @click="onClick">{{ label }}</button>
</template>