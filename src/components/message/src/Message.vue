<template>
  <transition name="he-message-fade" @after-leave="handleAfterLeave">
    <div class="he-message-container" v-show="visible">
      <div
        :class="['he-message',
      type ? 'he-message--' + getLegalType : ''
      ]"
      >
        <div class="he-message-content-section">
          <template v-if="showIcon">
            <i v-if="iconClass" class="he-message-type-icon" :class="iconClass"></i>
            <i v-else class="he-message-type-icon" :class="typeClass"></i>
          </template>
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
      showIcon: true,
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
    getLegalType () {
      if(!typeMap[this.type]){
        return 'info';
      }
      return this.type;
    },
    typeClass () {
      switch (this.type) {
        case 'success':
          return 'he-icon-check-circle-fill';
        case 'warning':
          return 'he-icon-warning-circle-fill';
        case 'error':
          return 'he-icon-close-circle-fill';
        case 'info':
        default:
          return 'he-icon-info-circle-fill';
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
      this.$emit('close');
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
