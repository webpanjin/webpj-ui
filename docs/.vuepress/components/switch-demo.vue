<template>
  <div class="switch-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </pj-switch>
      <template slot="code">
        绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>
<script>
import Switch from '../../../examples/components/switch'
import CodeBlock from '../../../examples/components/code-block';
  export default {
    props: {
      type: {
        type: String,
        default: 'basic'
      }
    },
    components:{
      'pj-code-block': CodeBlock,
      'pj-switch':Switch
    },
    data() {
      return {
        value: true,
        basicCode:`
          <pj-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </pj-switch>

          <script>
            export default {
              data() {
                return {
                  value: true
                }
              }
            };
          ${'<'}/script>
        `.replace(/^ {10}/gm, '').trim()
      }
    }
  };
</script>