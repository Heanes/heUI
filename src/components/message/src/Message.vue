<template>
  <transition name="he-message-fade" @after-leave="handleAfterLeave">
    <div class="he-message-container" v-show="visible">
      <div
        :class="['he-message',
      type ? 'he-message--' + type : ''
      ]"
      >
        <div class="he-message-content-section">
          <i v-if="iconClass" class="he-message-type-icon" :class="iconClass"></i>
          <i v-else class="he-message-type-icon" :class="typeClass"></i>
          <div class="he-message-content">{{message}}</div>
        </div>
        <!-- close btn -->
        <div class="he-message-handle-section">
          <i v-if="showClose" class="handle-btn-close he-icon-close" @click="handleClose"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

// 从上方进入的动画，从上方飞出的动画

export default {
  name: 'HeMessage',
  inheritAttrs: false,
  data () {
    return {
      type: 'info',
      visible: false,
      message: '',
      duration: 3000,
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    };
  },
  computed: {
    typeClass () {
      switch (this.type) {
        case 'info':
          return 'he-icon-info-circle';
        case 'success':
          return 'he-icon-check-circle-fill';
        case 'warning':
          return 'he-icon-warning-circle-fill';
        case 'error':
          return 'he-icon-close-circle-fill';
        default:
          return 'he-icon-info-circle';
      }
    }
  },
  methods: {
    /**
     * @doc 销毁内容
     */
    handleAfterLeave () {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    /**
     * @doc 关闭
     */
    handleClose () {
      this.visible = false;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    }
  },
  created () {

  },
  mounted () {
    // 如果自动关闭，则倒计时后自动关闭
    if (this.duration > 0) {
      setTimeout(() => {
        this.visible = false;
      }, this.duration);
    }
  }

}
</script>

<style scoped>

</style>
