import Vue from 'vue';
import VueRouter from 'vue-router';
// al no tener barras se entiende como dependencia de npm
import Routes from '@/routes';
import App from '@/App.vue';

import store from '@/store';

import EventBus from '@/plugins/event-bus';

import msToMm from '@/filters/ms-to-mm';

import blur from '@/directives/blur';

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(EventBus);

Vue.use(msToMm);

Vue.use(blur);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
// con history le decimos a vue q use el hisotry nativo

// le decimos a vue q use el plugin q creamos
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
