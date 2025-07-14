<script>
export default {
  data() {
    return {
      data: null,
      loading: false,
    }
  },
  async mounted() {
    this.loading = true;
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response = await fetch(url).then((res) => {
      this.loading = false;
      return res.json();
    })
    this.data = response;
  }
}
</script>

<template>
  <div>
    <div>DataFetch</div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <img :src="data.sprites.front_default" />
      <div>{{ data.species.name }}</div>
    </div>
</div>
</template>