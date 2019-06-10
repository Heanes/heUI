import TabsPane from '../tabs/src/TabPane.vue';

TabsPane.install = function(Vue) {
  Vue.component(TabsPane.name, TabsPane);
};

export default TabsPane;
