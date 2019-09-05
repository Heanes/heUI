import Notification from './src/Notification.vue';

Notification.install = function(Vue) {
  Vue.component(Notification.name, Notification);
};

export default Notification;
