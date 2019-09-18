<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">Alert 警告</h1>
    </div>
    <div class="page-desc">
      <p>用于页面中展示重要的提示信息。</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">基本用法</h2>
      </div>
      <div class="demo-group__desc">
        <p>页面中的非浮层元素，不会自动消失。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-alert>
              信息提示的内容
            </he-alert>
            <he-alert type="success">
              成功提示的内容
            </he-alert>
            <he-alert type="warning">
              警告提示的内容
            </he-alert>
            <he-alert type="error">
              错误提示的内容
            </he-alert>
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
