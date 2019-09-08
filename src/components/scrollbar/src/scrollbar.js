export default {
  name: 'HeScrollbar',
  props: {
    showOnHover: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  render (createElement) {
    this.$slots.default[0].data.staticClass += ' he-scrollbar';
    if(this.showOnHover){
      this.$slots.default[0].data.staticClass += ' he-scrollbar--hover';
    }
    if(this.size !== ''){
      this.$slots.default[0].data.staticClass += ' he-scrollbar--' + this.size;
    }
    return this.$slots.default;
  }
}
