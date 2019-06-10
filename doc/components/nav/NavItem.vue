<!--
  @doc 分组菜单
  @author Heanes
  @time 2019-06-12 18:44:15 周三
-->
<template>
  <li class="nav-item__li">
    <router-link v-if="path"
      active-class="active"
      exact-active-class="active"
      :to="path"
    >{{name}}
    </router-link>
    <a class="nav-link" v-if="href" :href="href">{{name}}</a>
  </li>
</template>

<script>

export default {
  name: 'NavItem',
  props: {
    // 链接名称
    name: {
      type: String,
      default: 'Nav item'
    },
    // router路径型链接
    path: {
      type: String,
      default: '/'
    },
    // 绝对链接
    href: {
      type: String,
      default: ''
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
