<template>
  <div class="header">
    <el-row type="flex" align="middle">
      <el-col :span="18" :offset="3" class="header-col">
        <el-menu :default-active="activeIndex"
                class="header-menu"
                mode="horizontal"
                background-color="#eee"
                @select="handleSelect">
          <img :src="logo" class="header-logo">
          <el-menu-item index="/">主页</el-menu-item>
          <el-menu-item index="/moodlist">mood</el-menu-item>
          <el-menu-item index="/note">笔记</el-menu-item>
      </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      activeIndex: '',
      logo: require('@/assets/img/logo.png')
    }
  },
  methods: {
    handleSelect (key) {
      if (this.activeIndex === key) {
        return
      }
      this.activeIndex = key
      this.$router.push(key)
    }
  },
  mounted () {
    this.activeIndex = this.$route.path
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  z-index 2000
  position fixed
  top 0
  width 100%
  height 61px
  background #eee
  .header-col
    .header-menu
      position relative
      max-width 960px
      margin auto
      .header-logo
        outline none
        position absolute
        left -70px
        top 10px
        z-index 500
</style>
