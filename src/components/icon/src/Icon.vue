<template>
  <i :class="'he-icon-' + name"
     :style="getComputedStyle"
  ></i>
</template>

<script>
// @future 考虑支持svg图标 2019-07-03 14:40:03 周三
export default {
  name: 'HeIcon',
  props: {
    // 图标名称
    name: String,
    // 图标大小
    size: String,
    // 图标颜色
    color: String
  },
  computed: {
    getComputedStyle () {
      const style = {};
      if (this.size) {
        style.fontSize = this.size;
      }
      if (this.color) {
        style.color = this.color;
      }
      return style
    }
  }
}
</script>
