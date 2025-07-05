import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './page/Home.vue'
import Counter from './page/Counter.vue'
import About from './page/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/counter', component: Counter },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
