<template>
  <div class="button-demo">
    <div class="row" v-if="type === 'basic'">
      <pj-button class="button">默认按钮</pj-button>
      <pj-button type="primary" class="button">主要按钮</pj-button>
      <pj-button type="success" class="button">成功按钮</pj-button>
      <pj-button type="warning" class="button">警告按钮</pj-button>
      <pj-button type="danger" class="button">危险按钮</pj-button>
      <pj-button type="info" class="button">信息按钮</pj-button>
    </div>
  </div>
</template>

<script>
import Button from '../../../examples/components/button';
export default {
  components: {
    'pj-button': Button
  },
  props: {
    type: {
      type: String,
      default: 'basic'
    }
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../../../examples/assets/css/code.scss';

</style>