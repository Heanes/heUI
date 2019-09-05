<!--
  @doc 左侧菜单组件
  @author Heanes
  @time 2019-06-14 22:48:22 周五
-->
<template>
  <div class="menu-nav-wrap">
    <ul class="menu-nav__ul">
      <li class="nav-item__li" v-for="(item, index) in navGroupLit" :key="index">
        <a class="nav-link" v-if="!item.path && !item.href">{{item.name}}</a>
        <router-link v-if="item.path"
                     class="nav-link link-router"
                     active-class="active"
                     exact-active-class="active"
                     :to="item.path">{{item.name}}
        </router-link>
        <!-- 无分组链接，有子链接 -->
        <ul class="menu-nav__ul--sub" v-if="item.children">
          <li class="nav-item__li" v-for="(navItem, itemKey) in item.children" :key="itemKey">
            <router-link
              class="nav-link"
              active-class="active"
              exact-active-class="active"
              :to="navItem.path"
            >{{navItem.name}}item
            </router-link>
          </li>
        </ul>
        <!-- 有分组链接 -->
        <template v-if="item.groups">
          <hed-nav-group v-for="(groupItem, itemKey) in item.groups" :key="itemKey" v-bind="groupItem"></hed-nav-group>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import HedNavGroup from '@/components/nav/NavGroup.vue';

export default {
  name: 'LeftNav',
  components: {
    HedNavGroup
  },
  props: {
    navGroupLit: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>
