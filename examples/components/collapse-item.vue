<template>
  <div class="pj-collapse-item">
    <!-- 折叠面板 -->
    <div class="pj-collapse-item-title" @click="toggle" :class="show ?'active':''">
      {{title}}
    </div>
    <transition name="collapse-item-fade">
      <div class="pj-collapse-item-content" v-show="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PjCollapseItem',
  inject:['myEventBus','accordion'],
  data() {
    return {
      show: false,
    }
  },
  props: {
    title:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
      if(this.show){
        this.myEventBus.$emit('collapse-selected',this.name)
      }
    },
  },
  created(){
    this.myEventBus.$on('collapse-selected',name=>{
      if(name!=this.name&&this.accordion){
        this.show = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/base.scss';
  .pj-collapse-item{
    > .pj-collapse-item-title {
      @include fontLineColor(14px, 18px, #303133);
      border: 1px solid $border-color;
      padding: $padding;
      cursor: pointer;
      position: relative;
      &.active {
          z-index: 1;
      }
    }
    &:first-of-type > .pj-collapse-item-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
    &:last-of-type > .pj-collapse-item-title {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      margin-bottom: -1px;
      &.active {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    > .pj-collapse-item-content {
      padding: 8px;
      border: 1px solid $border-color;
    }
  }
  .collapse-item-fade-enter-active {
    animation: fade .2s;
  }
  .collapse-item-fade-leave-active {
    animation: fade .2s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>