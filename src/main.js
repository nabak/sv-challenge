import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Buttons from './pages/ButtonsPage.vue';
import Index from './pages/Index.vue';
import NotFound from './pages/404.vue';

import './assets/css/challenge.scss';

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Index },
  { path: '/buttons', component: Buttons },
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(VueRouter);

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount('#app');
