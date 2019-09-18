<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">Icon 图标</h1>
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
            <h3>自定义图标大小和颜色属性</h3>
          </div>
          <div class="demo-item__desc">
            <p><code>name</code>定义图标名称，决定其形状，<code>size</code>可以定义大小，<code>color</code>定义颜色。</p>
          </div>
          <div class="demo-item__content">
            <he-icon name="check-circle" size="36px" color="#3f46ee"></he-icon>
            <he-icon name="CI" size="36px" color="#ee7e14"></he-icon>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3 class="item-title">所有图标列表</h3>
          </div>
          <div class="demo-item__content">
            <ul class="icon-list">
              <li class="icon-list-item">
                <he-icon name="check-circle"></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name="CI"></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name="Dollar"></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name="close"></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
              <li class="icon-list-item">
                <he-icon name=""></he-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/icon.scss';

export default {
  name: 'Demo',
  data () {
    return {
      iconNameList: []
    }
  }
}
</script>

<style scoped>

</style>
