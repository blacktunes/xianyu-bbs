<template>
  <div id="app">
    <top-header></top-header>
    <div class="view">
      <router-view class="view-item"/>
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
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
  width 7px
  height 7px
  background-color #F5F5F5

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
  box-shadow inset 0 0 6px rgba(0, 0, 0, 0.3)
  -webkit-box-shadow inset 0 0 6px rgba(0, 0, 0, 0.3)
  // border-radius 10px
  background-color #F5F5F5

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
  // border-radius 10px
  box-shadow inset 0 0 6px rgba(0, 0, 0, .1)
  -webkit-box-shadow inset 0 0 6px rgba(0, 0, 0, .1)
  background-color #bbb
body
  overflow-y scroll
  margin 0
.view
  margin-top 76px
  .view-item
    max-width 960px
    min-width 768px
    margin auto
</style>
