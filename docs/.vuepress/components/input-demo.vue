<template>
  <div class="button-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-input style="width:180px;" v-model="input" placeholder="请输入内容"></pj-input>
      <template slot="code">
        <pre><code>{{basicCode}}</code></pre>
      </template> 
    </pj-code-block>
    <pj-code-block v-if="type === 'disabled'">
      <pj-input style="width:180px;" v-model="input2" disabled placeholder="请输入内容"></pj-input>
      <template slot="code">
        通过 disabled 属性指定是否禁用 input 组件
        <pre><code>{{disabledCode}}</code></pre>
      </template>
    </pj-code-block>
    <pj-code-block v-if="type === 'clearable'">
      <pj-input style="width:180px;" v-model="input3" clearable placeholder="请输入内容"></pj-input>
      <template slot="code">
        使用clearable属性即可得到一个可清空的输入框
        <pre><code>{{clearableCode}}</code></pre>
      </template>
    </pj-code-block>
    <pj-code-block v-if="type === 'showPassword'">
      <pj-input style="width:180px;" v-model="input4" showPassword placeholder="请输入内容"></pj-input>
      <template slot="code">
        使用show-password属性即可得到一个可切换显示隐藏的密码框
        <pre><code>{{showPasswordCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
import Input from '../../../examples/components/input'
import CodeBlock from '../../../examples/components/code-block';
export default {
  components: {
    'pj-code-block': CodeBlock,
    'pj-input': Input
  },
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  created(){
    import('../public/fonts/font.scss')
  },
  data() {
    return {
      input:'默认input',
      input2:'禁用input',
      input3:'可清空input',
      input4:'密码框',
      basicCode:`
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <script>
        export default {
          data() {
            return {
              input: ''
            }
          }
        }
        ${'<'}/script>
      `.replace(/^ {8}/gm, '').trim(),
      disabledCode:`
        <el-input v-model="input" disabled placeholder="请输入内容"></el-input>
        <script>
        export default {
          data() {
            return {
              input: ''
            }
          }
        }
        ${'<'}/script>
      `.replace(/^ {8}/gm, '').trim(),
      clearableCode:`
        <el-input v-model="input" clearable placeholder="请输入内容"></el-input>
        <script>
        export default {
          data() {
            return {
              input: ''
            }
          }
        }
        ${'<'}/script>
      `.replace(/^ {8}/gm, '').trim(),
      showPasswordCode:`
        <el-input v-model="input" showPassword placeholder="请输入内容"></el-input>
        <script>
        export default {
          data() {
            return {
              input: ''
            }
          }
        }
        ${'<'}/script>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>