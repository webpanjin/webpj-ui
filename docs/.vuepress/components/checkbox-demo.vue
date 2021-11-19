<template>
  <div class="checkbox-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-checkbox v-model="checked">备选项</pj-checkbox>
      <template slot="code">
        在pj-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
    <pj-code-block v-if="type === 'checkboxGroup'">
      <pj-checkbox-group v-model="checkList">
        <pj-checkbox label="复选框 A"></pj-checkbox>
        <pj-checkbox label="复选框 B"></pj-checkbox>
        <pj-checkbox label="复选框 C"></pj-checkbox>
      </pj-checkbox-group>
      <template slot="code">
        checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 pj-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
        <pre><code>{{radioGroupCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
import Checkbox from '../../../examples/components/checkbox'
import CheckboxGroup from '../../../examples/components/checkbox-group'
import CodeBlock from '../../../examples/components/code-block';
  export default {
    components:{
      'pj-code-block': CodeBlock,
      'pj-checkbox': Checkbox,
      'pj-checkbox-group': CheckboxGroup
    },
    props: {
      type: {
        type: String,
        default: 'basic'
      }
    },
    data () {
      return {
        checked: true,
        checkList: ['复选框 A'],
        basicCode:`
          <template>
            <!-- 'checked' 为 true 或 false -->
            <pj-checkbox v-model="checked">备选项</pj-checkbox>
          </template>
          <script>
            export default {
              data() {
                return {
                  checked: true
                };
              }
            };
          ${'<'}/script>
        `.replace(/^ {10}/gm, '').trim(),
        radioGroupCode:`
          <template>
            <pj-checkbox-group v-model="checkList">
              <pj-checkbox label="复选框 A"></pj-checkbox>
              <pj-checkbox label="复选框 B"></pj-checkbox>
              <pj-checkbox label="复选框 C"></pj-checkbox>
            </pj-checkbox-group>
          </template>

          <script>
            export default {
              data () {
                return {
                  checkList: ['复选框 A']
                };
              }
            };
          ${'<'}/script>
        `.replace(/^ {10}/gm, '').trim()
      };
    }
  }
</script>