<template>
  <button class="pj-button" @click="handleClick"
    :class="[
      `pj-button-${type}`,
      {
        'is-plain': plain,
        'is-round':round,
        'is-circle':circle,
        'is-disabled':disabled
      }
    ]"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>

export default {
  name: 'PjButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  created () {
    // console.log(this.$slots)
  }
}
</script>

<style lang="scss" scoped>
.pj-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  /* can't select text  */
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  /*  plain style */
  &.is-plain {
    &:hover,
    &:focus {
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }
  /* round */
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  /* circle */
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  /* icon style */
  & [class*="cs-icon-"] + span {
    margin-left: 5px;
  }
  /* disable style */
  &.is-disabled {
    cursor: no-drop;
    opacity:.4;
  }
}
/* different type style */
.pj-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
}
.pj-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
  &.is-plain {
    color: #67c23a;
    background: #c2e7b0;
    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
}
.pj-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
  &.is-plain {
    color: #909399;
    background: #d3d4d6;
    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
}
.pj-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
  &.is-plain {
    color: #e6a23c;
    background: #f5dab1;
    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
}
.pj-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
  &.is-plain {
    color: #f56c6c;
    background: #fbc4c4;
    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
}
</style>
