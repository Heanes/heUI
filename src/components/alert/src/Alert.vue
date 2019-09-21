<template>
  <transition name="he-alert-fade">
    <div v-show="innerVisible"
         :class="['he-alert',
    type ? 'he-alert' + '--' + type : '',
    ]">
      <template v-if="showIcon">
        <i v-if="iconClass" class="he-alert-type-icon" :class="iconClass"></i>
        <i v-else class="he-alert-type-icon" :class="typeClass"></i>
      </template>
      <span class="he-alert-custom-content"><slot/></span>
      <i v-if="showClose" class="he-alert-handle-btn-close he-icon-close" @click="handleClose"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HeAlert',
  inheritAttrs: false,
  data () {
    return {
      innerVisible: this.visible
    }
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    visible: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    iconClass: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 0
    },
    onClose: {
      type: Function,
      default: null
    }
  },
  computed: {
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
    handleClose () {
      this.innerVisible = false;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
      this.$emit('close');
    }
  },
  mounted () {
    // 如果自动关闭，则倒计时后自动关闭
    if (this.duration > 0) {
      setTimeout(() => {
        this.innerVisible = false;
      }, this.duration);
    }
  }
}
</script>

<style scoped>

</style>
