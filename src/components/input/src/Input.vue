<template>
  <div :class="['he-input-container', {
  'is-disabled': disabled,
  'is-focus': autofocus
  }]">
    <!-- 前置内容 -->
    <template v-if="type !== 'textarea'">
      <input
        ref="input"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        v-bind="$attrs"
        :autofocus="autofocus"
        :disabled="disabled"
        :readonly="readonly"
        :class="['he-input',
             inputSize && inputSize !== 'default' ? 'he-input--size-' + inputSize : '',
             {
             'is-disabled': inputDisabled,
              'el-input-group': $slots.prepend || $slots.append,
              'el-input-group--append': $slots.append,
              'el-input-group--prepend': $slots.prepend,
              'el-input--prefix': $slots.prefix || prefixIcon,
              'el-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
             }]"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <!-- 后置内容 -->
      <span class="he-input__suffix" v-if="hasSuffix">
        <i v-if="showClear"
          class="he-input__icon he-icon-close-circle" @click="clearInput"></i>
        <i v-if="showPwdVisible"
          class="he-input__icon he-icon-eye" @click="handlePasswordVisible"></i>
      </span>
    </template>
    <template v-if="type === 'textarea'">
      <textarea
        class="he-textarea__inner"
        @input="handleInput"
        ref="textarea"
        v-bind="$attrs"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autoComplete || autocomplete"
        :style="textareaStyle"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
      </textarea>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HeInput',
  componentName: 'HeInput',
  inheritAttrs: false,

  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    // 自动聚焦
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 大小
    inputSize: {
      type: String,
      default: 'default',
      validator (value) {
        return ['large', 'default', 'medium', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    // 是否允许清除(输入框有内容时才显示)
    clearable: {
      type: Boolean,
      default: false
    },
    // 仅当鼠标放置在输入框时才显示清除按钮
    showClearWhenHover: {
      type: Boolean,
      default: false
    },
    // 是否显示密码
    showPassword: {
      type: Boolean,
      default: false
    },
    suffixIcon: String,
    prefixIcon: String
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  watch: {
    value() {
    },
    nativeInputValue () {
      this.setNativeInputValue();
    }
  },

  computed: {
    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    inputDisabled () {
      return this.disabled;
    },
    /**
     * @doc 是否有后置内容
     */
    hasSuffix () {
      return this.$slots.suffix ||
        this.suffixIcon ||
        this.showClear ||
        this.showPassword ||
        this.isWordLimitVisible ||
        (this.validateState && this.needStatusIcon);
    },
    // 是否显示清除
    showClear () {
      return this.clearable &&
        !this.disabled &&
        !this.readonly;
    },
    // 是否显示密码可见
    showPwdVisible() {
      return this.showPassword &&
        !this.inputDisabled &&
        !this.readonly &&
        (!!this.nativeInputValue || this.focused);
    }
  },
  methods: {
    getInput () {
      return this.$refs.input || this.$refs.textarea;
    },
    setNativeInputValue () {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    handleChange (event) {
      this.$emit('change', event.target.value);
    },
    handleInput (event) {
      this.$emit('input', event.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleFocus (event) {
      ;
    },
    handleBlur (event) {
      ;
    },
    // 清空输入框
    clearInput () {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    }
  },
  mounted () {
    this.setNativeInputValue();
  }
}
</script>

<style scoped>

</style>
