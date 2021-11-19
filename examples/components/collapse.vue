<template>
  <div class="pj-collapse">
    <slot></slot>
  </div>
</template>

<script>
import PubSub from '../assets/js/pubSubMode'
export default {
  name:'PjCollapse',
  props:{
    accordion:{
      type:Boolean,
      default:false
    },
    value:{
      type:String,
      default:''
    },
  },
  data() {
    return {
      myEventBus: new PubSub(),
    }
  },
  provide() {
    return {
      accordion: this.accordion,
      myEventBus: this.myEventBus,
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/base.scss';
  .pj-collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>