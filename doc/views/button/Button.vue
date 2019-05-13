<template>
  <hed-layout>
    <div class="button-demo" slot="rightContent">
      <he-button></he-button>
    </div>
  </hed-layout>
</template>

<script>
import Layout from '../layout/Layout.vue';

export default {
  name: 'Button',

  data(){
    return {
    }
  },

  components: {
    'hed-layout': Layout
  },

  created () {
  }
}
</script>

<style scoped>

</style>
