<template>
  <div class="radio-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-radio v-model="radio" label="1">备选项1</pj-radio>
      <pj-radio v-model="radio" label="2">备选项2</pj-radio>
      <template slot="code">
        要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
    <pj-code-block v-if="type === 'radioGroup'">
      <pj-radio-group v-model="radio2">
        <pj-radio :label="3">备选项1</pj-radio>
        <pj-radio :label="6">备选项2</pj-radio>
        <pj-radio :label="9">备选项3</pj-radio>
      </pj-radio-group>
      <template slot="code">
        结合pj-radio-group元素和子元素pj-radio可以实现单选组，在pj-radio-group中绑定v-model，在pj-radio中设置好label即可，无需再给每一个pj-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。
        <pre><code>{{radioGroupCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
import Radio from '../../../examples/components/radio'
import RadioGroup from '../../../examples/components/radio-group'
import CodeBlock from '../../../examples/components/code-block';
  export default {
    components:{
      'pj-code-block': CodeBlock,
      'pj-radio': Radio,
      'pj-radio-group': RadioGroup
    },
    props: {
      type: {
        type: String,
        default: 'basic'
      }
    },
    data () {
      return {
        radio: '1',
        radio2: 3,
        basicCode:`
          <template>
            <pj-radio v-model="radio" label="1">备选项</pj-radio>
            <pj-radio v-model="radio" label="2">备选项</pj-radio>
          </template>

          <script>
            export default {
              data () {
                return {
                  radio: '1'
                };
              }
            }
           ${'<'}/script>
        `.replace(/^ {10}/gm, '').trim(),
        radioGroupCode:`
          <template>
            <pj-radio-group v-model="radio">
              <pj-radio :label="3">备选项</pj-radio>
              <pj-radio :label="6">备选项</pj-radio>
              <pj-radio :label="9">备选项</pj-radio>
            </pj-radio-group>
          </template>

          <script>
            export default {
              data () {
                return {
                  radio: 3
                };
              }
            }
          ${'<'}/script>
        `.replace(/^ {10}/gm, '').trim()
      };
    }
  }
</script>