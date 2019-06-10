<!--
  @doc 分组菜单
  @author Heanes
  @time 2019-06-12 18:44:15 周三
-->
<template>
  <ul class="menu-nav__ul">
    <hed-nav-item v-for="(item, index) in navList" :key="index" v-bind="item"></hed-nav-item>
  </ul>
</template>

<script>
import HedNavItem from '@/components/nav/NavItem.vue';

export default {
  name: 'NavList',
  components: {
    HedNavItem
  },
  props: {
    navList: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>
