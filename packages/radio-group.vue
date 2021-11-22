<template>
  <div class="pj-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PjRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style lang="scss" scoped>
  .pj-radio-group{}
</style>
