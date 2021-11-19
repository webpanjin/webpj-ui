<template>
  <div class="pj-input" :class="{'pj-input__suffix': showSuffix}">
    <!-- <input type="text" v-model="username"> v-model语法糖，等价于下-->
    <!-- <input type="text" :value="username" @input="username=$event.target.value"> -->
    <input
     class="pj-input__inner"
     :class="{'is-disabled':disabled}"
     :placeholder="placeholder"
     :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
     :name="name"
     :disabled="disabled"
     :value="value"
     @input="handleInput"
    >
    <span class="pj-input__suffix" v-if="showSuffix">
      <i
        class="cs-icon-guanbi"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="cs-icon-yanjing"
        v-if="showPassword"
        @click="handlePasswordVisible"
        :class="{'password-icon-active' : passwordVisible}"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'pjInput',
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss">
// @import '../assets/fonts/font.scss';
.pj-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.pj-input__suffix {
  .pj-input__inner {
    padding-right: 30px;
  }
  .pj-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &.password-icon-active {
        color: rgb(85, 85, 218);
      }
    }
  }
}
</style>
