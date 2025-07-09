<script>
export default {
  data() {
    const list = [
      { name: 'Counter', path: '/counter' },
    ]
    return {
      list
    }
  }
}
</script>

<template>
  <div>
    <h1>Home</h1>
    <v-btn v-for="item in list" :key="item.name" :to="item.path">{{ item.name }}</v-btn>
  </div>
</template>
