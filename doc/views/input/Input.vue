<template>
  <div class="demo-wrap" slot="rightContent">
    <div class="page-title">
      <h1 class="title">Input 输入框</h1>
    </div>
    <div class="page-desc">
      <p>表单输入框</p>
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
            <h3 class="item-title">普通样式</h3>
          </div>
          <div class="demo-item__desc">
            <p>普通样式</p>
          </div>
          <div class="demo-item__content">
            <he-input placeholder="请输入内容"></he-input>
          </div>
          <div class="demo-item__desc">
            <p>密码框</p>
          </div>
          <div class="demo-item__content">
            <he-input placeholder="请输入密码" type="password" value="123456"></he-input>
          </div>
          <div class="demo-item__desc">
            <p>其他原生类型</p>
          </div>
          <div class="demo-item__content">
            <he-input placeholder="请输入内容" type="number" value="123456"></he-input>
            <he-input placeholder="请输入内容" type="date" value="2019-08-02"></he-input>
            <he-input placeholder="请输入内容" type="button" value="按钮"></he-input>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>禁用状态</h3>
          </div>
          <div class="demo-item__content">
            <he-input placeholder="请输入内容" disabled></he-input>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>不同尺寸</h3>
          </div>
          <div class="demo-item__content">
            <he-input placeholder="请输入内容" input-size="large"></he-input>
            <he-input placeholder="请输入内容" input-size="default"></he-input>
            <he-input placeholder="请输入内容" input-size="small"></he-input>
            <he-input placeholder="请输入内容" input-size="mini"></he-input>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>可清除</h3>
          </div>
          <div class="demo-item__content">
            <he-input placeholder="请输入内容" v-model="clearableValue" clearable @clear="afterClear"></he-input>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>密码框，可切换密码显示明文</h3>
          </div>
          <div class="demo-item__content">
            <he-input placeholder="请输入内容" v-model="clearableValue" show-password></he-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      clearableValue: '内容可清除',
      testValue: 'test'
    }
  },
  components: {
  },
  methods: {
    afterClear () {
      console.log('已清除');
    },
    handleInput (event) {
      this.testValue = event.target.value;
    },
    clearTest () {
      // this.testValue = '';
      this.$emit('input', '');
    },
    handleInputInner (event) {
      console.log(event.target);
    }
  }
}
</script>

<style scoped>

</style>
