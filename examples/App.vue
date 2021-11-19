<template>
  <div id="app">
    <pj-code-block>
      
      <template slot="code">
        使用type、plain、round和circle属性来定义 Button 的样式。
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeName: '1',
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
      `
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app{
  .button{
    margin:5px;
  }
}
</style>
