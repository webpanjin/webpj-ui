<template>
  <div class="track-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-track id="track1" width="400" height="300" style="margin-left:170px;">
        <path d="m183.207758,118.065134c61.431988,-141.165435 302.124531,0 0,181.498416c-302.124531,-181.498416 -61.431988,-322.663852 0,-181.498416z" fill-opacity="null" stroke-opacity="null" stroke-width="4" stroke="pink" fill="#fff"/>
        <img style="width:30px;height:30px;" src="../public/img/heart.jpeg" alt="">
      </pj-track>
      <pj-track id="track2" width="400" height="300" lineColor="pink"  style="margin-left:170px;">
        <path d="m88.5,75.453125c0,0 190,-72 148,1c-42,73 -85,29 -85.5,28.546875c0.5,0.453125 85.5,-88.546875 -19.5,-72.546875c-105,16 157,79 57,106c-100,27 -197,88 -81,80c116,-8 194,145 79,41c-115,-104 61,-121 60.5,-121.453125c0.5,0.453125 20.5,187.453125 -84.5,96.453125c-105,-91 -74,-159 -74,-159z" stroke-width="4" stroke="#409eff" fill="#fff"/>
        <div style="width:12px;height:12px;background:#ebc07f"></div>
      </pj-track>
      <template slot="code">
        id是必传项，通过width,height可指定svg的宽高，通过lineColor可指定图形线条颜色，也可在path元素中指定，
        path之后可以自定义元素用于在svg轨迹上运动，这个元素也可以是图片。
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
import CodeBlock from '../../../examples/components/code-block';
import Track from '../../../examples/components/track-for-doc';
export default {
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  components: {
    'pj-track': Track,
    'pj-code-block': CodeBlock,
  },
  data(){
    return{
      basicCode:`
        <pj-track id="track1" width="400" height="300" style="margin-left:170px;">
          <path d="m183.207758,118.065134c61.431988,-141.165435 302.124531,0 0,181.498416c-302.124531,-181.498416 -61.431988,-322.663852 0,-181.498416z" fill-opacity="null" stroke-opacity="null" stroke-width="4" stroke="pink" fill="#fff"/>
          <img style="width:30px;height:30px;" src="../public/img/heart.jpeg" alt="">
        </pj-track>
        <pj-track id="track2" width="400" height="300" lineColor="pink"  style="margin-left:170px;">
          <path d="m88.5,75.453125c0,0 190,-72 148,1c-42,73 -85,29 -85.5,28.546875c0.5,0.453125 85.5,-88.546875 -19.5,-72.546875c-105,16 157,79 57,106c-100,27 -197,88 -81,80c116,-8 194,145 79,41c-115,-104 61,-121 60.5,-121.453125c0.5,0.453125 20.5,187.453125 -84.5,96.453125c-105,-91 -74,-159 -74,-159z" stroke-width="4" stroke="#409eff" fill="#fff"/>
          <div style="width:12px;height:12px;background:#ebc07f"></div>
        </pj-track>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
  .track-demo{
    overflow:hidden;
  }
</style>