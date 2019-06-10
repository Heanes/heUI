<template>
  <div class="doc-container">
    <hed-header></hed-header>
    <hed-footer></hed-footer>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
import '@/assets/css/_layout/layout.scss';
import '@/assets/css/_layout/sideNav.scss';
import '@/assets/css/demo/demo.scss';

import HedHeader from './Header.vue';
import HedFooter from './Footer.vue';

export default {
  name: 'Layout',
  components: {
    HedHeader,
    HedFooter
  }
}
</script>

<style scoped>

</style>
