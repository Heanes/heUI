<!--
@doc Navigation导航组件
@author Heanes
@time 2019-03-30 13:01:51 周六
@description: 支持无限子级导航
-->
<template>
  <ul class="nav-list" :class="styleClass">
    <he-navigation-item v-for="(child, index) in navList" :key="index" v-bind="child"></he-navigation-item>
  </ul>
</template>

<script>
export default {
  name: 'HeNavigation',
  props: {
    navList: {
      type: Array
    },
    // 自定义样式名
    styleClass: {
      type: String,
      default: ''
    }
  },
  components: {
    // 主列表组件-明细组件间互相递归调用，必须使用动态导入
    // @see https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E7%BB%84%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8
    'he-navigation-item': () => import('./NavigationItem.vue')
  },
  watch: {}
}
</script>

<style scoped>

</style>
