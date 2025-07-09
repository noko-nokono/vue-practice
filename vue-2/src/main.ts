import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './vuetify';
import Home from './page/Home.vue';
import Counter from './page/Counter.vue';

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

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
