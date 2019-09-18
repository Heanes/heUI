<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">Message 消息提示</h1>
    </div>
    <div class="page-desc">
      <p>全局展示操作反馈信息。</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">基础用法</h2>
      </div>
      <div class="demo-group__desc">
        <p>从顶部出现，3 秒后自动消失。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-button type="info" size="small" @click="openMessage">info</he-button>
            <he-button type="success" size="small" @click="openMessageSuccess">success</he-button>
            <he-button type="warning" size="small" @click="openMessageWarning">warning</he-button>
            <he-button type="danger" size="small" @click="openMessageError">error</he-button>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">支持静态调用</h2>
      </div>
      <div class="demo-group__desc">
        <p>使用Message(option)方式调用</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-button type="info" size="small" @click="openMessageFromStatic">info</he-button>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">自定义自动关闭时间</h2>
      </div>
      <div class="demo-group__desc">
        <p>通过duration字段，设置自动关闭时间。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-button type="info" size="small" @click="openMessage">info</he-button>
            <he-button type="success" size="small" @click="openMessageSuccess">success</he-button>
            <he-button type="warning" size="small" @click="openMessageWarning">warning</he-button>
            <he-button type="danger" size="small" @click="openMessageError">error</he-button>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">允许关闭</h2>
      </div>
      <div class="demo-group__desc">
        <p>可以点击关闭。</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-button type="info" size="small" @click="messageCanClose">可以关闭的info</he-button>
            <he-button type="success" size="small" @click="messageSuccessCanClose">success</he-button>
            <he-button type="warning" size="small" @click="messageWarnCanClose">warning</he-button>
            <he-button type="danger" size="small" @click="messageErrorCanClose">error</he-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Message} from 'he-ui-vue';

export default {
  name: 'HedMessage',
  methods: {
    openMessage () {
      this.$message('这是一条消息提示');
    },
    openMessageSuccess() {
      this.$message({
        type: 'success',
        message: '这是一条成功提示消息',
        onClose: function (instance) {
          console.log('aaa');
        }
      });
    },
    openMessageWarning(){
      this.$message({
        type: 'warning',
        message: '这是一条成功提示消息'
      });
    },
    openMessageError() {
      this.$message({
        type: 'error',
        message: '这是一条错误提示消息'
      });
    },
    openMessageFromStatic(){
      Message({
        type: 'error',
        message: '这是一条错误提示消息'
      });
    },
    messageCanClose () {
      this.$message({
        message: '这是一条消息提示',
        duration: 0,
        showClose: true
      });
    },
    messageSuccessCanClose() {
      this.$message({
        type: 'success',
        showClose: true,
        message: '这是一条成功提示消息'
      });
    },
    messageWarnCanClose() {
      this.$message({
        type: 'warning',
        showClose: true,
        message: '这是一条警告提示消息'
      });
    },
    messageErrorCanClose() {
      this.$message({
        type: 'error',
        showClose: true,
        duration: 0,
        message: '这是一条错误提示消息hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'
      });
    }
  }
}
</script>

<style scoped>

</style>
