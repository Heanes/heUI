<template>
  <button
    class="he-button"
    :class="[
    type ? 'he-button' + '--' + type : '',
    buttonSize ? 'he-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    @click="handleClick"
    :autofocus="autofocus"
    :disabled="buttonDisabled || loading"
    :type="nativeType"
  >
    <i :class="'he-icon-' + icon" v-if="icon && !loading"></i>
    <i class="he-icon-loading" v-if="loading"></i>
    <span>
      <slot>button</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'HeButton',

  props: {
    // 类型
    type: {
      type: String,
      default: 'default'
    },
    // html原生类型
    nativeType: {
      type: String,
      default: 'button'
    },
    // 大小
    size: String,
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 是否正在加载
    loading: Boolean,
    // 是否可用
    disabled: Boolean,
    // 是否朴素(淡背景色)
    plain: Boolean,
    // 自动聚焦
    autofocus: Boolean,
    // 是否为圆角按钮
    round: Boolean,
    // 是否为圆形按钮
    circle: Boolean
  },

  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>

</style>
