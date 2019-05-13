<!--
@doc Navigation导航组件
@author Heanes
@time 2019-03-30 13:01:51 周六
@description: 支持无限子级导航
-->
<template>
  <li class="nav-item">
    <a class="nav-link" :href="link">
      <!-- 链接图标 -->
      <span class="link-icon" v-if="icon != null">
        <!-- 字体图标样式 -->
        <i :class="icon.resource" v-if="icon.type === 'class'" aria-hidden="true"></i>
        <!-- 图片样式 -->
        <img :src="icon.resource" v-if="icon.type === 'file'" aria-hidden="true" alt="icon image" />
      </span>
      <span class="link-text">{{name}}</span></a>
    <he-navigation class="nav-sub" v-if="children" :nav-list="children"></he-navigation>
  </li>
</template>

<script>
import HeNavigation from './Navigation';
export default {
  name: 'HeNavigationItem',
  props: {
    // 名称
    name: {
      type: String
    },
    // 链接
    link: {
      type: String
    },
    // 节点样式
    icon: {
      type: Object
    },
    // 子节点数据
    children: {
      type: Array
    }
  },
  components: {
    'he-navigation': HeNavigation
  },
  watch: {}
}
</script>

<style scoped>

</style>
