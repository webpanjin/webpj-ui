<template>
    <div class="pj-code-block">
        <div class="pj-demo">
            <slot></slot>
        </div>
        <div class="pj-line" v-if="codeVisible"></div>
        <div class="pj-code-switch-wrapper">
          <transition name="pj-demo-fade">
            <div class="pj-code" v-if="codeVisible">
              <slot name="code"></slot>
            </div>
          </transition>
          <div class="pj-switch" @click="toggle" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
            <pj-icon :name="iconName" class="icon" :class="iconDynamicClass"></pj-icon>
            <transition name="pj-demo-slide">
              <div class="pj-text" v-show="textVisible">
                {{text}}
              </div>
            </transition>   
          </div>
        </div>
    </div>
</template>

<script>
import Icon from './icon.vue'
export default {
    name: 'PjCodeBlock',
    components:{
      'pj-icon':Icon
    },
    props: {},
    data() {
      return {
        codeVisible: false,
        text: '显示代码',
        textVisible: false,
      };
    },
    computed: {
      iconDynamicClass() {
        return this.textVisible ? {'active': true} : '';
      },
      iconName() {
        let name = 'down-solid';
        if(this.codeVisible) {
          name = 'up-solid';
        }
        return name;
      },
    },
    methods: {
      toggle() {
        if(this.codeVisible){
          this.text = '显示代码';
        }else{
          this.text = '隐藏代码';
        }
        this.codeVisible = !this.codeVisible;
      },
      onMouseEnter() {
        this.textVisible = true;
      },
      onMouseLeave() {
        this.textVisible = false;
      },
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/code.scss';
.pj-code-block {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  position: relative;
  z-index: 1;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  > .pj-demo{
    padding: 24px;
  }
  > .pj-line{
    border-top: 1px solid #ebebeb;
  }
  > .pj-code-switch-wrapper{
    position: relative;
    overflow: hidden;
    > .pj-code{
      padding: 24px;
    }
    > .pj-switch{
      @include flex(center, center);
      min-height: 18px;
      padding: 12px 0;
      border-top: 1px solid #ebebeb;
      position: relative;
      cursor:pointer;
      > .pj-text{
        padding-left: 8px;
        @include fontLineColor(14px, 18px, #409eff);
      }
    }
  }
}
.pj-demo-fade-enter-active,
.pj-demo-fade-leave-active {
  transition: all 0.2s linear;
}
.pj-demo-fade-enter,
.pj-demo-fade-leave-to{
  transform: translateY(-100%);
}
.pj-demo-slide-enter-active,
.pj-demo-slide-leave-active {
  transition: all 0.2s linear;
}
.pj-demo-slide-enter,
.pj-demo-slide-leave-to{
  transform: translateX(20px);
  opacity: 0;
}
</style>


