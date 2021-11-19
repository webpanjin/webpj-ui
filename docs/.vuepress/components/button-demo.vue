<template>
  <div class="button-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-button class="button">默认按钮</pj-button>
      <pj-button class="button" type="primary">主要按钮</pj-button>
      <pj-button class="button" type="success">成功按钮</pj-button>
      <pj-button class="button" type="warning">警告按钮</pj-button>
      <pj-button class="button" type="danger">危险按钮</pj-button>
      <pj-button class="button" type="info">信息按钮</pj-button><br>
      <pj-button class="button" plain>默认按钮</pj-button>
      <pj-button class="button" type="primary" plain>主要按钮</pj-button>
      <pj-button class="button" type="success" plain>成功按钮</pj-button>
      <pj-button class="button" type="warning" plain>警告按钮</pj-button>
      <pj-button class="button" type="danger" plain>危险按钮</pj-button>
      <pj-button class="button" type="info" plain>信息按钮</pj-button><br>
      <pj-button class="button" round>默认按钮</pj-button>
      <pj-button class="button" type="primary" round>主要按钮</pj-button>
      <pj-button class="button" type="success" round>成功按钮</pj-button>
      <pj-button class="button" type="warning" round>警告按钮</pj-button>
      <pj-button class="button" type="danger" round>危险按钮</pj-button>
      <pj-button class="button" type="info" round>信息按钮</pj-button><br>
      <pj-button class="button" circle>默认按钮</pj-button>
      <pj-button class="button" type="primary" circle>主要按钮</pj-button>
      <pj-button class="button" type="success" circle>成功按钮</pj-button>
      <pj-button class="button" type="warning" circle>警告按钮</pj-button>
      <pj-button class="button" type="danger" circle>危险按钮</pj-button>
      <pj-button class="button" type="info" circle>信息按钮</pj-button><br>
      <template slot="code">
        使用type、plain、round和circle属性来定义 Button 的样式。
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
    <pj-code-block v-if="type === 'disabled'">
      <pj-button class="button" disabled>默认按钮</pj-button>
      <pj-button class="button" disabled type="primary">主要按钮</pj-button>
      <pj-button class="button" disabled type="success">成功按钮</pj-button>
      <pj-button class="button" disabled type="warning">警告按钮</pj-button>
      <pj-button class="button" disabled type="danger">危险按钮</pj-button>
      <pj-button class="button" disabled type="info">信息按钮</pj-button><br>
      <pj-button class="button" disabled plain>默认按钮</pj-button>
      <pj-button class="button" disabled type="primary" plain>主要按钮</pj-button>
      <pj-button class="button" disabled type="success" plain>成功按钮</pj-button>
      <pj-button class="button" disabled type="warning" plain>警告按钮</pj-button>
      <pj-button class="button" disabled type="danger" plain>危险按钮</pj-button>
      <pj-button class="button" disabled type="info" plain>信息按钮</pj-button><br>
      <template slot="code">
        你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。
        <pre><code>{{disabledCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
import CodeBlock from '../../../examples/components/code-block';
import Button from '../../../examples/components/button';
export default {
  components: {
    'pj-button': Button,
    'pj-code-block': CodeBlock,
  },
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  data() {
    return {
      basicCode:`
        <pj-button class="button">默认按钮</pj-button>
        <pj-button type="primary">主要按钮</pj-button>
        <pj-button type="success">成功按钮</pj-button>
        <pj-button type="warning">警告按钮</pj-button>
        <pj-button type="danger">危险按钮</pj-button>
        <pj-button type="info">信息按钮</pj-button>

        <pj-button plain>默认按钮</pj-button>
        <pj-button type="primary" plain>主要按钮</pj-button>
        <pj-button type="success" plain>成功按钮</pj-button>
        <pj-button type="warning" plain>警告按钮</pj-button>
        <pj-button type="danger" plain>危险按钮</pj-button>
        <pj-button type="info" plain>信息按钮</pj-button>
        
        <pj-button round>默认按钮</pj-button>
        <pj-button type="primary" round>主要按钮</pj-button>
        <pj-button type="success" round>成功按钮</pj-button>
        <pj-button type="warning" round>警告按钮</pj-button>
        <pj-button type="danger" round>危险按钮</pj-button>
        <pj-button type="info" round>信息按钮</pj-button>
        
        <pj-button circle>默认按钮</pj-button>
        <pj-button type="primary" circle>主要按钮</pj-button>
        <pj-button type="success" circle>成功按钮</pj-button>
        <pj-button type="warning" circle>警告按钮</pj-button>
        <pj-button type="danger" circle>危险按钮</pj-button>
        <pj-button type="info" circle>信息按钮</pj-button>
      `.replace(/^ {8}/gm, '').trim(),
      disabledCode:`
        <pj-button class="button" disabled>默认按钮</pj-button>
        <pj-button class="button" disabled type="primary">主要按钮</pj-button>
        <pj-button class="button" disabled type="success">成功按钮</pj-button>
        <pj-button class="button" disabled type="warning">警告按钮</pj-button>
        <pj-button class="button" disabled type="danger">危险按钮</pj-button>
        <pj-button class="button" disabled type="info">信息按钮</pj-button>
        
        <pj-button class="button" disabled plain>默认按钮</pj-button>
        <pj-button class="button" disabled type="primary" plain>主要按钮</pj-button>
        <pj-button class="button" disabled type="success" plain>成功按钮</pj-button>
        <pj-button class="button" disabled type="warning" plain>警告按钮</pj-button>
        <pj-button class="button" disabled type="danger" plain>危险按钮</pj-button>
        <pj-button class="button" disabled type="info" plain>信息按钮</pj-button>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../examples/assets/css/code.scss';
.button-demo{
  .button{
    margin:3px;
  }
}
</style>