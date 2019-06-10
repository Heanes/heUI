<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">Button 按钮</h1>
    </div>
    <div class="page-desc">
      <p>常用的操作按钮。</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">基础用法</h2>
      </div>
      <div class="demo-group__desc">
        <p>基础的按钮用法。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <!-- type类型 -->
            <div class="demo-line">
              <he-button>默认按钮</he-button>
              <he-button type="primary">主要按钮</he-button>
              <he-button type="info">信息按钮</he-button>
              <he-button type="success">成功按钮</he-button>
              <he-button type="warning">警告按钮</he-button>
              <he-button type="danger">危险按钮</he-button>
            </div>
            <div class="demo-line">
              <he-button plain>默认按钮</he-button>
              <he-button type="primary" plain>主要按钮</he-button>
              <he-button type="info" plain>信息按钮</he-button>
              <he-button type="success" plain>成功按钮</he-button>
              <he-button type="warning" plain>警告按钮</he-button>
              <he-button type="danger" plain>危险按钮</he-button>
            </div>
            <!-- 圆角按钮 -->
            <div class="demo-line">
              <he-button round>默认按钮</he-button>
              <he-button type="primary" round>主要按钮</he-button>
              <he-button type="info" round>信息按钮</he-button>
              <he-button type="success" round>成功按钮</he-button>
              <he-button type="warning" round>警告按钮</he-button>
              <he-button type="danger" round>危险按钮</he-button>
            </div>
            <!-- 圆形按钮 -->
            <div class="demo-line">
              <he-button circle>a</he-button>
              <he-button type="primary" circle>b</he-button>
              <he-button type="info" circle>c</he-button>
              <he-button type="success" circle>d</he-button>
              <he-button type="danger" circle>e</he-button>
              <he-button circle>A</he-button>
              <he-button type="primary" circle>B</he-button>
              <he-button type="info" circle>C</he-button>
              <he-button type="success" circle>D</he-button>
              <he-button type="danger" circle>E</he-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">状态展示。禁用状态的按钮</h2>
      </div>
      <div class="demo-group__desc">
        <p>按钮不可用状态。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <!-- type类型 -->
            <div class="demo-line">
              <he-button disabled>默认按钮</he-button>
              <he-button disabled type="primary">主要按钮</he-button>
              <he-button disabled type="info">信息按钮</he-button>
              <he-button disabled type="success">成功按钮</he-button>
              <he-button disabled type="warning">警告按钮</he-button>
              <he-button disabled type="danger">危险按钮</he-button>
            </div>
            <div class="demo-line">
              <he-button disabled plain>默认按钮</he-button>
              <he-button disabled type="primary" plain>主要按钮</he-button>
              <he-button disabled type="info" plain>信息按钮</he-button>
              <he-button disabled type="success" plain>成功按钮</he-button>
              <he-button disabled type="warning" plain>警告按钮</he-button>
              <he-button disabled type="danger" plain>危险按钮</he-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">状态展示。加载中状态的按钮</h2>
      </div>
      <div class="demo-group__desc">
        <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <!-- type类型 -->
            <div class="demo-line">
              <he-button loading>加载中</he-button>
              <he-button loading type="primary">加载中</he-button>
              <he-button loading type="info">加载中</he-button>
              <he-button loading type="success">加载中</he-button>
              <he-button loading type="warning">加载中</he-button>
              <he-button loading type="danger">加载中</he-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">不同尺寸。</h2>
      </div>
      <div class="demo-group__desc">
        <p>除默认尺寸外，还提供了4种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <!-- type类型 -->
            <div class="demo-line">
              <he-button type="primary" size="ex-large">超大按钮</he-button>
              <he-button type="primary" size="large">大按钮</he-button>
              <he-button type="primary">默认按钮</he-button>
              <he-button type="primary" size="medium">中等按钮</he-button>
              <he-button type="primary" size="small">小按钮</he-button>
              <he-button type="primary" size="mini">超小按钮</he-button>
            </div>
            <div class="demo-line">
              <he-button round type="primary" size="ex-large">超大按钮</he-button>
              <he-button round type="primary" size="large">大按钮</he-button>
              <he-button round type="primary">默认按钮</he-button>
              <he-button round type="primary" size="medium">中等按钮</he-button>
              <he-button round type="primary" size="small">小按钮</he-button>
              <he-button round type="primary" size="mini">超小按钮</he-button>
            </div>
            <div class="demo-line">
              <he-button circle type="primary" size="ex-large">aa</he-button>
              <he-button circle type="primary" size="large">bb</he-button>
              <he-button circle type="primary">cc</he-button>
              <he-button circle type="primary" size="medium">dd</he-button>
              <he-button circle type="primary" size="small">ee</he-button>
              <he-button circle type="primary" size="mini">ff</he-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">图标按钮</h2>
      </div>
      <div class="demo-group__desc">
        <p>按钮添加图标展示，增加辨识度。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <div class="demo-line">
              <he-button type="primary" icon="check-circle">信息</he-button>
              <he-button type="primary" icon="add">增加</he-button>
              <he-button type="primary" icon="edit">修改</he-button>
              <he-button type="danger" icon="edit">删除</he-button>
            </div>
            <div class="demo-line">
              <he-button type="primary" icon="info">
                信息
              </he-button>
              <he-button type="primary" icon="add">增加</he-button>
              <he-button type="primary" icon="edit">修改</he-button>
              <he-button type="danger" icon="edit">删除</he-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">按钮组</h2>
      </div>
      <div class="demo-group__desc">
        <p>以按钮组的方式出现，常用于多项类似操作。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <div class="demo-line">
              <he-button-group>
                <he-button type="primary" icon="info">信息</he-button>
                <he-button type="primary" icon="add">信息</he-button>
              </he-button-group>
              <he-button-group>
                <he-button type="primary" icon="edit">修改</he-button>
                <he-button type="danger" icon="edit">删除</he-button>
              </he-button-group>
              <he-button-group>
                <he-button type="primary" plain icon="edit">导入</he-button>
                <he-button type="primary" plain icon="edit">导出</he-button>
              </he-button-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">文字按钮</h2>
      </div>
      <div class="demo-group__desc">
        <p>纯文字，没有边框和背景色的按钮。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <!-- type类型 -->
            <div class="demo-line">
              <he-button type="text">文字按钮</he-button>
              <he-button type="text" disabled>文字按钮</he-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Button',

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
