<template>
  <div class="header">
    <div class="header-content main-width">
      <div class="site-logo"></div>
      <div class="top-nav">
        <ul class="top-nav__ul">
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/guide"
            >指南</router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/component"
            >组件</router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/about"
            >关于</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/_layout/header.scss';

export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
