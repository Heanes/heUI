<template>
  <hed-layout>
    <div class="index" slot="rightContent">
      <h2 class="title">Welcome! This is index page.</h2>
      <p>{{baseCommon}}</p>
      <router-link to="/button.html">button</router-link>
    </div>
  </hed-layout>
</template>

<script>
import common from '../static/js/common.js';
import '../static/css/common/common.scss';

import Layout from '../layout/Layout.vue';

export default {
  name: 'Index',

  components: {
    'hed-layout': Layout
  },

  data () {
    return {
      baseCommon: {}
    }
  },

  created () {
    common.common();
  },
}
</script>

<style scoped>

</style>
