<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">Table 表格</h1>
    </div>
    <div class="page-desc">
      <p>用于展示多条结构类似的数据。</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">基础用法</h2>
      </div>
      <div class="demo-group__desc">
        <p>基础的表格展示用法。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__title">
            <h3 class="item-title">示例项标题</h3>
          </div>
          <div class="demo-item__content">
            <he-table></he-table>
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
  name: 'Table',

  data(){
    return {
      common: {}
    }
  },

  components: {
  },

  created () {
  }
}
</script>

<style scoped>

</style>
