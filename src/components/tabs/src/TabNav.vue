<template>
  <div class="he-tabs">
    <div class="he-tabs__header">
      <div class="he-tabs__nav-list">
        <div class="he-tabs__nav-item"><slot/></div>
      </div>
    </div>
    <div class="he-tabs__content"></div>
  </div>
</template>

<script>
export default {
  name: 'TabsNav'
}
</script>

<style scoped>

</style>
