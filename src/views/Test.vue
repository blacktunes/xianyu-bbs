<template>
  <div class="test">
    <el-alert class="message" type="info" center :closable="false" title="该页面为将来可能会用上的组件的测试和预览"></el-alert>
    <index-menu class="test-menu"/>
    <icon-menu/>
    <not-found class="test-not-found"/>
  </div>
</template>

<script>
import NotFound from '../views/404'
import IndexMenu from '../views/IndexMenu'
import IconMenu from '../views/IconMenu'

export default {
  components: {
    NotFound,
    IndexMenu,
    IconMenu
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.test-not-found
  margin-top 50px
  border-radius 10px
  & >>> #container
    top 0 !important
    right 0 !important
    bottom 0 !important
    left 0 !important
.test-menu
  margin 20px 0 50px 0
</style>
