import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './page/Home.vue'
import Counter from './page/Counter.vue'
import Todo from './page/Todo.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/counter', component: Counter },
  { path: '/todo', component: Todo },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
