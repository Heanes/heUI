// import Scrollbar from './src/Scrollbar.vue';
import Scrollbar from './src/scrollbar.js';

Scrollbar.install = function(Vue) {
  Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;
