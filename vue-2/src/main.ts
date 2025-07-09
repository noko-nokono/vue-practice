import Vue from 'vue';
import App from './App.vue';
import vuetify from './settings/vuetify';
import router from './settings/routing';

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
