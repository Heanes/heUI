<!--
  @doc 分组菜单
  @author Heanes
  @time 2019-06-12 18:44:15 周三
-->
<template>
  <div class="nav-group">
    <div class="nav-group__title">{{groupName}}</div>
    <hed-nav-list :nav-list="groupList"></hed-nav-list>
  </div>
</template>

<script>
import HedNavList from '@/components/nav/NavList.vue';

export default {
  name: 'NavGroup',
  components: {
    HedNavList
  },
  props: {
    groupName: {
      type: String,
      default: ''
    },
    groupList: {
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
