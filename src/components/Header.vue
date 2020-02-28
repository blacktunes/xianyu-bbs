<template>
  <div class="header">
    <el-menu :default-active="activeIndex"
            class="header-menu"
            mode="horizontal"
            background-color="#eee"
            @select="handleSelect">
      <img :src="logo" class="header-logo">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/note/vue">VUE</el-menu-item>
      <el-submenu index="1">
        <template slot="title">Server</template>
        <el-menu-item index="/note/node">Node</el-menu-item>
        <el-menu-item index="/note/nginx">Nginx</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">Other</template>
        <el-menu-item index="/note/other">Other</el-menu-item>
        <el-menu-item index="/note/update">Update</el-menu-item>
      </el-submenu>
      <el-menu-item index="/mood">Mood</el-menu-item>
      <el-menu-item index="/timeline">Timeline</el-menu-item>
  </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      activeIndex: '',
      logo: require('@/assets/img/logo.png'),
      num: 0
    }
  },
  // computed: {
  //   ...mapState([
  //     'xianyu'
  //   ])
  // },
  methods: {
    // ...mapMutations({
    //   setXianyu: 'SET_XIANYU'
    // }),
    handleSelect (key) {
      if (this.activeIndex === key && !this.$route.params.id) {
        return
      }
      this.activeIndex = key
      this.$router.push(key)
    }
    // logoClick () {
    //   if (this.$route.path === '/input') {
    //     return
    //   }
    //   if (this.xianyu) {
    //     this.$router.push('/input')
    //   } else {
    //     this.num++
    //     if (this.num === 5) {
    //       this.activeIndex = ''
    //       this.setXianyu(true)
    //     }
    //   }
    // }
  },
  mounted () {
    setTimeout(() => {
      if (this.$route.params.topic && this.$route.params.id) {
        this.activeIndex = `/${this.$route.params.topic}`
      } else {
        this.activeIndex = this.$route.path
      }
    }, 50)
  },
  watch: {
    $route (to, from) {
      if (to.params.topic && to.params.id) {
        this.activeIndex = `/note/${to.params.topic}`
      } else {
        this.activeIndex = to.path
      }
    }
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
  .header-menu
    position relative
    max-width 960px
    margin auto
    & >>> .is-active
      .el-submenu__title
        border-bottom-color #666 !important
    .header-logo
      outline none
      position absolute
      left -70px
      top 10px
      z-index 500
  & >>> .is-active
    border-bottom-color #666 !important
</style>
