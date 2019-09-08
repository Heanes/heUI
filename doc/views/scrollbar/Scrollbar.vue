<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">Scrollbar 滚动条</h1>
    </div>
    <div class="page-desc">
      <p>滚动条样式美化，统一滚动条样式，使页面更加美观</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">基础用法</h2>
      </div>
      <div class="demo-group__desc">
        <p>仅改变滚动条样式</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>可以使用组件包裹方式。</p>
          </div>
          <div class="demo-item__content">
            <he-scrollbar>
              <div class="scrollbar-demo" style="height: 100px;overflow: auto">
                <scrollbar-inner-content></scrollbar-inner-content>
              </div>
            </he-scrollbar>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>也可以使用添加 <code>he-scrollbar</code> 样式的形式</p>
          </div>
          <div class="demo-item__content">
            <div class="he-scrollbar" style="height: 100px;overflow: auto">
              <scrollbar-inner-content></scrollbar-inner-content>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">不同滚动条粗细样式</h2>
      </div>
      <div class="demo-group__desc">
        <p>不同场景下可以使用不同的滚动条粗细样式</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>多个粗细级别的滚动条</p>
          </div>
          <div class="demo-item__content">
            <he-scrollbar>
              <div class="scrollbar-demo" style="height: 100px;overflow: auto">
                <scrollbar-inner-content></scrollbar-inner-content>
              </div>
            </he-scrollbar>
          </div>
          <div class="demo-item__content">
            <he-scrollbar size="small">
              <div class="scrollbar-demo" style="height: 100px;overflow: auto">
                <scrollbar-inner-content></scrollbar-inner-content>
              </div>
            </he-scrollbar>
          </div>
          <div class="demo-item__content">
            <he-scrollbar size="mini">
              <div class="scrollbar-demo" style="height: 100px;overflow: auto">
                <scrollbar-inner-content></scrollbar-inner-content>
              </div>
            </he-scrollbar>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">鼠标浮上时才显示</h2>
      </div>
      <div class="demo-group__desc">
        <p>默认不展示滚动条，当鼠标浮上时才展示滚动条。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>鼠标放置到该区域查看效果。</p>
          </div>
          <div class="demo-item__content">
            <he-scrollbar showOnHover>
              <div class="scrollbar-demo" style="height: 100px;overflow: auto">
                <scrollbar-inner-content></scrollbar-inner-content>
              </div>
            </he-scrollbar>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>鼠标浮上时才展示，并结合更细的滚动条效果。</p>
          </div>
          <div class="demo-item__content">
            <he-scrollbar showOnHover size="mini">
              <div class="scrollbar-demo" style="height: 100px;overflow: auto">
                <scrollbar-inner-content></scrollbar-inner-content>
              </div>
            </he-scrollbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollbarInnerContent from './ScrollbarInnerContent.vue';
export default {
  name: 'Scrollbar',
  data() {
    return {
      pageTitle: '滚动条 - heUI'
    }
  },
  components: {
    ScrollbarInnerContent
  },
  methods: {

  },
  created () {
    document.title = this.pageTitle;
  }
}
</script>

<style scoped>

</style>
