import Vue from 'vue';
import App from './App.vue';
import EventBus from './plugins/event-bus';

Vue.config.productionTip = false

Vue.use(EventBus);
// le decimos a vue q use el plugin

new Vue({
  render: h => h(App)
}).$mount('#app')
