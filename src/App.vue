<template>
  <div id="app">
    <top-header></top-header>
    <div class="view">
      <el-scrollbar ref="scrollbar">
        <el-backtop target=".el-scrollbar__wrap"></el-backtop>
        <el-row type="flex" align="middle">
          <el-col :span="18" :offset="3">
            <keep-alive exclude="note,topic">
              <router-view/>
            </keep-alive>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/Header'
export default {
  components: {
    TopHeader
  },
  methods: {
    _scrollUpdate () {
      setTimeout(() => {
        this.$refs.scrollbar.update()
      }, 60)
    }
  },
  updeted () {
    this._scrollUpdate()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
::-webkit-scrollbar
  width 0 !important
::-webkit-scrollbar
  width 0 !important
  height 0
body
  margin 0
.view
  margin-top 61px
</style>
