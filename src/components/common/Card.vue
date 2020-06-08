<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.card
  margin 0
  border-radius 4px
  border 1px solid #EBEEF5
  background-color #FFF
  overflow hidden
  color #303133
  .card-header
    border-bottom 1px solid #EBEEF5
    padding 5px
  .card-text
    padding 5px 10px
</style>
