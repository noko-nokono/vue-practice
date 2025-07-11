import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/page/Home.vue';
import Counter from '@/page/Counter.vue';
import Todo from '@/page/Todo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});