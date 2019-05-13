<template>
  <div class="container">
    <div class="left-menu">
      <a href="button.html">Button 按钮</a>
    </div>
    <div class="right-content">
      <slot name="rightContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>
