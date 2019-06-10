<template>
  <div class="demo-wrap demo-layout" slot="rightContent">
    <div class="page-title">
      <h1 class="title">Layout 布局</h1>
    </div>
    <div class="page-desc">
      <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">基础布局</h2>
      </div>
      <div class="demo-group__desc">
        <p>使用单一分栏创建基础的栅格布局。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__title">
            <h3 class="item-title">简单分栏</h3>
          </div>
          <div class="demo-item__desc">
            <p>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p>
          </div>
          <div class="demo-item__content">
            <he-row class="demo-he-row">
              <he-col>
                <div class="demo-col-content bg-purple-dark"></div>
              </he-col>
            </he-row>
            <he-row class="demo-he-row">
              <he-col :col="12">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="12">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
            </he-row>
            <he-row class="demo-he-row">
              <he-col :col="8">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="8">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="8">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
            </he-row>
            <he-row class="demo-he-row">
              <he-col :col="6">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="6">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="6">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="6">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
            </he-row>
            <he-row class="demo-he-row">
              <he-col :col="4">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="4">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="4">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="4">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="4">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="4">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
            </he-row>
            <he-row class="demo-he-row">
              <he-col :col="2">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="2">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
            </he-row>
            <he-row class="demo-he-row">
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple"></div>
              </he-col>
              <he-col :col="1">
                <div class="demo-col-content bg-purple-light"></div>
              </he-col>
            </he-row>
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
import '@/assets/css/layout/layout.scss';
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>
