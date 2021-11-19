<template>
  <div class="collapse-demo">
    <pj-code-block v-if="type === 'basic'">
      <pj-collapse v-model="activeName">
        <pj-collapse-item title="一致性 Consistency" name="1">
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </pj-collapse-item>
        <pj-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </pj-collapse-item>
        <pj-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </pj-collapse-item>
      </pj-collapse>
      <template slot="code">
        <pre><code>{{basicCode}}</code></pre>
      </template> 
    </pj-code-block>
    <pj-code-block v-if="type === 'accordion'">
      <pj-collapse v-model="activeName" accordion>
        <pj-collapse-item title="一致性 Consistency" name="1">
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </pj-collapse-item>
        <pj-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </pj-collapse-item>
        <pj-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </pj-collapse-item>
      </pj-collapse>
      <template slot="code">
        <pre><code>{{accordionCode}}</code></pre>
      </template> 
    </pj-code-block>
  </div>
</template>

<script>
import CodeBlock from '../../../examples/components/code-block';
import Collapse from '../../../examples/components/collapse'
import CollapseItem from '../../../examples/components/collapse-item'
export default {
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  components: {
    'pj-code-block': CodeBlock,
    'pj-collapse': Collapse,
    'pj-collapse-item': CollapseItem,
  },
  data(){
    return{
      activeName:'1',
      basicCode:`
        <pj-collapse v-model="activeName">
          <pj-collapse-item title="一致性 Consistency" name="1">
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </pj-collapse-item>
          <pj-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </pj-collapse-item>
          <pj-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </pj-collapse-item>
        </pj-collapse>
        <script>
          export default {
            data() {
              return {
                activeName: '1'
              };
            }
          }
        ${'<'}/script>
      `.replace(/^ {8}/gm, '').trim(),
      accordionCode:`
        <pj-collapse v-model="activeName" accordion>
          <pj-collapse-item title="一致性 Consistency" name="1">
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </pj-collapse-item>
          <pj-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </pj-collapse-item>
          <pj-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </pj-collapse-item>
        </pj-collapse>
        <script>
          export default {
            data() {
              return {
                activeName: '1'
              };
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