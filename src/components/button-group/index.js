import ButtonGroup from '../button/src/ButtonGroup.vue';

ButtonGroup.install = function(Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
