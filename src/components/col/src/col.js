/**
 * @doc 栅格列
 * @author Heanes
 * @time 2019-05-22 15:03:10 周三
 */
export default {
  name: 'HeCol',

  props: {
    // 自定义元素标签名称
    tag: {
      type: String,
      default: 'div'
    },
    col: {
      type: Number,
      default: 24
    }
  },
  computed: {
    margin () {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'HeRow') {
        parent = parent.$parent;
      }
      return parent ? parent.margin : 0;
    }
  },

  render (h) {
    const classList = [];
    classList.push(`he-col-${this.col}`);

    const style = {};
    if(this.margin > 0){
      style.paddingLeft = `${this.margin / 2}px`;
      style.paddingRight = style.paddingLeft;
    }

    return h(this.tag, {
      class: ['he-col', classList],
      style: style
    }, this.$slots.default);
  }
}
