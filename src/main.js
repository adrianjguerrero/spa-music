import Vue from 'vue';
import VueRouter from 'vue-router';
// al no tener barras se entiende como dependencia de npm
import App from './App.vue';

import routes from './routes';

import EventBus from './plugins/event-bus';

Vue.config.productionTip = false

Vue.use(VueRouter);
// le decimos a vue q use el plugin
Vue.use(EventBus);

const router = VueRouter({routes});
// recordar q esta simplificado por es6 {routes:routes}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
