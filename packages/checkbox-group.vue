<template>
  <div class="pj-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PjCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
  .pj-checkbox-group{}
</style>
