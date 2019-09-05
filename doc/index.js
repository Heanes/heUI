import Vue from 'vue';
import App from './views/App.vue';
import router from './router/index.js';
import store from './store/index.js';

import '../src/theme/default/index.scss';
import HeUI from '../src/index.js';

Vue.config.productionTip = false;
Vue.use(HeUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
