<template>
  <!-- 对话框的遮罩 -->
  <transition name="dialog-fade">
    <div class="pj-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="pj-dialog" :style="{width, marginTop: top}">
        <div class="pj-dialog__header">
          <!-- <pj-dialog><template v-slot:title><h3>这是标题</h3></template></pj-dialog> -->
          <slot name="title">
            <span class="pj-dialog__title">{{title}}</span>
          </slot>
          <button class="pj-dialog__headerbtn" @click="handleClose">
            <i class="pj-icon-close"></i>
          </button>
        </div>
        <div class="pj-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="pj-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PjDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
      // 使用时:visible.sync="visible"语法糖 相当于
      // :visible="visible" @update:visible
    }
  }
}
</script>

<style lang='scss' scoped>
// scoped会给当前组件的模板中的所有元素都添加一个随机属性
// scoped会给当前组件中所有样式添加一个对应的属性选择器
// 深度选择器 scss ::v-deep  less /deep/  css >>>
.pj-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .pj-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .pj-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .pj-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /* see the vue-loader doc  */
      ::v-deep .pj-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
