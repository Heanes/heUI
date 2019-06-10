<template>
  <hed-layout>
    <div class="component main-width" slot="main">
      <div class="left-menu">
        <hed-left-nav :nav-group-lit="navConfig['zh-cn']"></hed-left-nav>
      </div>
      <div class="right-content">
        <router-view/>
      </div>
    </div>
  </hed-layout>
</template>

<script>
import HedLayout from '../_layout/Layout.vue';
import HedLeftNav from '@/components/nav/LeftNav.vue';

import {nav as navConfig} from '@/assets/data/nav.config.js';

export default {
  name: 'PageComponent',
  components: {
    HedLayout,
    HedLeftNav
  },
  data () {
    return {
      navConfig: navConfig
    }
  }
}
</script>

<style scoped>

</style>
