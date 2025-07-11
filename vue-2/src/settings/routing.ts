import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/page/Home.vue';
import Counter from '@/page/Counter.vue';

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
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});