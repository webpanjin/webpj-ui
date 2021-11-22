<template>
  <div class="pj-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PjForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
