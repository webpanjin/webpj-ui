<template>
  <div class="form-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-form :model="formModel" label-width="100px">
        <pj-form-item label="username">
          <pj-input
            style="width:180px;"
            v-model="formModel.username"
            clearable
            placeholder="please input username"
          ></pj-input>
        </pj-form-item>
        <pj-form-item label="switch active">
          <pj-switch v-model="formModel.active"></pj-switch>
        </pj-form-item>
      </pj-form>
      <template slot="code">
        在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </pj-code-block>
  </div>
</template>

<script>
import Input from '../../../examples/components/input'
import FormItem from '../../../examples/components/form-item'
import Form from '../../../examples/components/form'
import Switch from '../../../examples/components/switch'
import CodeBlock from '../../../examples/components/code-block';
export default {
  components:{
    'pj-input':Input,
    'pj-form-item':FormItem,
    'pj-form':Form,
    'pj-switch':Switch,
    'pj-code-block':CodeBlock
  },
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  data(){
    return{
      formModel:{
        username:'图图',
        active:true
      },
      basicCode:`
        <pj-form :model="formModel" label-width="150px">
          <pj-form-item label="username">
            <pj-input
              v-model="formModel.username"
              clearable
              placeholder="please input username"
            ></pj-input>
          </pj-form-item>
          <pj-form-item label="switch active">
            <pj-switch v-model="formModel.active"></pj-switch>
          </pj-form-item>
        </pj-form>
        <script>
          export default {
            data() {
              return {
                formModel:{
                  username:'图图',
                  active:true
                },
              }
            }
          }
        ${'<'}/script>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>