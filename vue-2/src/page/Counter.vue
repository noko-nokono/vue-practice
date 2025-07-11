<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decriment() {
      this.count--;
    }
  }
}
</script>

<template>
  <div>
    <h1>Counter</h1>
    <div class="counter">
      <p>{{ count }}</p>
      <v-btn @click="increment">Increment</v-btn>
      <v-btn @click="decriment">Decriment</v-btn>
    </div>
    <v-btn color="secondary" to="/">Back to Home</v-btn>
  </div>
</template>

<style>
.counter {
  margin-bottom: 30px;
}
</style>