import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes';
// al no tener barras se entiende como dependencia de npm
import App from './App.vue';
import EventBus from './plugins/event-bus';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
})

Vue.use(EventBus);

// le decimos a vue q use el plugin q creamos
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
