<template>
  <div class="pj-switch" :class="{'is-checked':value}" @click="handleClick">
    <input
      type="checkbox"
      class="pj-switch__input"
      :name="name"
      ref="input"
    >
    <span class="pj-switch__core" ref="core">
      <span class="pj-switch__button"></span>
    </span>
  </div>
</template>

<script>
// 在使用switch组件时，实质上是当成表单元素来使用的，因此可能会用到组件的name属性
// 需要在switch组件添加一个checkbox，每当值改变时也需要设置checkbox的value值
export default {
  name: 'PjSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 等待value发生了改变，再调用changeColor
      await this.$nextTick()
      this.changeColor()
      this.$refs.input.checked = this.value
    },
    changeColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改开关的颜色
    this.changeColor()
    // 控制checkbox的值
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
.pj-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .pj-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  // checked style
  &.is-checked {
    .pj-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .pj-switch__button {
        transform: translateX(20px);
      }
    }
  }
}

// hide input
.pj-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
