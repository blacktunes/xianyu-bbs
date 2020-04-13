<template>
  <div class="test">
    <el-alert class="message" type="info" center :closable="false" title="该页面为将来可能会用上的组件的测试和预览"></el-alert>
    <test-button/>
    <index-menu/>
    <icon-menu/>
  </div>
</template>

<script>
import TestButton from '../components/Test/Button'
import IndexMenu from '../components/Test/IndexMenu'
import IconMenu from '../components/Test/IconMenu'

export default {
  components: {
    TestButton,
    IndexMenu,
    IconMenu
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  & >>> #container
    top 0 !important
    right 0 !important
    bottom 0 !important
    left 0 !important
</style>
