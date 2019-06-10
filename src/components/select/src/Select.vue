<template>
  <div class="he-select-container">
    <ul></ul>
    <select class="he-select" @change="onChange">
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: 'HeSelect',

  props: {
    val: {
      type: Object
    }
  },
  computed: {},
  methods: {
    onChange () {
      this.val = 1;
      alert(1);
    }
  }
}
</script>

<style scoped>

</style>
