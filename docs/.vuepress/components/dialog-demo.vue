<template>
  <div class="dialog-demo">
    <pj-code-block v-if="type === 'basic'">
      <div style="color:#409eff;cursor:pointer;margin-bottom:10px;" @click="visible=true">点击打开 dialog</div><br>
      对话框提供了四个参数：title指定对话框标题，width指定对话框宽度，top指定对话框距离顶部高度，visible控制对话框显隐
      <pj-dialog title="标题" width="50%" top="200px" :visible.sync="visible">
        对话框内容 
        <template slot="footer">
          <pj-button type="success" @click="visible=false">确认</pj-button>
        </template>
      </pj-dialog>
      <template slot="code">
        <pre><code>{{basicCode}}</code></pre>
      </template> 
    </pj-code-block>
  </div>
</template>

<script>
import Button from '../../../examples/components/button';
import CodeBlock from '../../../examples/components/code-block';
import Dialog from '../../../examples/components/dialog';
export default {
  components: {
    'pj-button': Button,
    'pj-code-block': CodeBlock,
    'pj-dialog': Dialog
  },
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  data(){
    return{
      visible:false,
      basicCode:`
        <template>
          <div>
            <span style="color:#409eff;cursor:pointer" @click="visible=true">点击打开 dialog</span><br>
            <pj-dialog title="标题" width="50%" top="200px" :visible.sync="visible">
              对话框内容 
              <template slot="footer">
                <pj-button type="success" @click="visible=false">确认</pj-button>
              </template>
            </pj-dialog>
            <template slot="code">
              <pre><code>{{basicCode}}</code></pre>
            </template> 
          </div>
        </template>
        <script>
          export default {
            data(){
              return{
                visible:false
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