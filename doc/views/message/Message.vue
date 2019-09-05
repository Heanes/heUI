<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">标题</h1>
    </div>
    <div class="page-desc">
      <p>描述</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">示例组标题</h2>
      </div>
      <div class="demo-group__desc">
        <p>示例组描述</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__title">
            <h3 class="item-title">示例项标题</h3>
          </div>
          <div class="demo-item__desc">
            <p>示例项描述</p>
          </div>
          <div class="demo-item__content">
            <he-message></he-message>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>示例项标题</h3>
          </div>
          <div class="demo-item__desc">
            <p>示例项描述</p>
          </div>
          <div class="demo-item__content">
            <p>示例内容</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Demo'
}
</script>

<style scoped>

</style>
