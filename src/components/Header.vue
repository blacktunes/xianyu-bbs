<template>
  <div class="header">
    <el-row type="flex" align="middle">
      <el-col :span="2" :offset="2">
        <i class="el-icon-box header-logo"></i>
      </el-col>
      <el-col :span="18">
        <el-menu :default-active="activeIndex"
                class="header-menu"
                mode="horizontal"
                background-color="#eee"
                @select="handleSelect">
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="2">笔记</el-menu-item>
      </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  background #eee
  .header-logo
    font-size 45px
</style>
