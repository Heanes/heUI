<template>
  <button
    class="he-button"
    @click="handleClick"
  >
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'HeButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>

</style>
