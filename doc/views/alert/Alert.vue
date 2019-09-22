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
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">允许手动关闭</h2>
      </div>
      <div class="demo-group__desc">
        <p>点击按钮，关闭提示</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-alert show-close>
              信息提示的内容
            </he-alert>
            <he-alert show-close type="success">
              成功提示的内容
            </he-alert>
            <he-alert show-close type="warning">
              警告提示的内容
            </he-alert>
            <he-alert show-close type="error">
              错误提示的内容
            </he-alert>
            <he-alert show-close>
              信息提示的内容，很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的很长的内容
            </he-alert>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">自动关闭</h2>
      </div>
      <div class="demo-group__desc">
        <p>显示一段时间后自动关闭</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-alert :duration="10000">
              信息提示的内容，10秒后自动关闭
            </he-alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageCommonMixin from '@/mixins/pageCommon';
export default {
  name: 'HedAlert',
  mixins: [pageCommonMixin],
  data() {
    return {
      pageTitle: 'Alert 警告提示'
    }
  },
  methods: {},
  created () {
    this.setPageTitle();
  }
}
</script>

<style scoped>

</style>
