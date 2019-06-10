/**
 * @doc 布局行
 * @author Heanes
 * @time 2019-05-22 14:42:18 周三
 */
export default {
  name: 'HeRow',

  componentName: 'HeRow',

  props: {
    // 自定义元素标签名称
    tag: {
      type: String,
      default: 'div'
    },
    // 间距，写到style，不能写到class
    margin: {
      type: Number,
      default: 0
    }
  },

  computed: {
    style () {
      let ret = {};

      if (this.margin > 0) {
        ret.marginLeft = `-${this.margin / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },

  render (h) {
    let classList = [];
    classList.push('he-row');

    return h(this.tag, {
      class: [classList],
      style: this.style
    }, this.$slots.default);
  }

}
