<template>
  <div class="arc-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-arc id="arc1" width="680" height="300" :from="[0,100]" :to="[680,100]" angle="45" lineColor='#409eff' lineWidth="3"></pj-arc>
      <template slot="code">
        id是必传的，使用width,height指定svg宽高，from和to接收数组，分别指定贝塞尔曲线的开始端点和结束端点的x,y
        angle表示贝塞尔曲线的弯曲程度,负数可以表示反方向,lineColor指定曲线颜色，lineWidth指定曲线宽度
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
import CodeBlock from '../../../examples/components/code-block';
import Arc from '../../../examples/components/arc';
export default {
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  components: {
    'pj-arc': Arc,
    'pj-code-block': CodeBlock,
  },
  data(){
    return{
      basicCode:`
        <pj-arc id="arc1" width="300" height="300" :from="[0,0]" :to="[500,0]" angle="60" lineColor='red' lineWidth="3"></pj-arc>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>