<script setup lang="ts">
type PokeAPI = {
  sprites: {
    front_default: string;
  };
  species: {
    name: string;
  };
};

import { ref, onMounted } from 'vue';

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const data = ref<PokeAPI>();

onMounted(async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    data.value = json;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <h1>Data Fetch</h1>
  <div v-if="data">
    <p>{{ data.species.name }}</p>
    <img :src="data.sprites.front_default" />
  </div>
</template>