<template>
  <div id="app">
    <keep-alive include="topic">
      <router-view v-if="keepAlive" />
    </keep-alive>
    <router-view v-if="!keepAlive" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      keepAlive: true
    }
  },
  methods: {
    addCss () {
      let link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('type', 'text/css')
      link.setAttribute('href', '/css/scroll.css')
      document.getElementsByTagName('head')[0].appendChild(link)
    },
    removeCss () {
      let links = document.getElementsByTagName('link')
      for (let i = links.length; i >= 0; i--) {
        const link = links[i]
        if (link && link.getAttribute('href') && link.getAttribute('href') === '/css/scroll.css') {
          link.parentElement.removeChild(link)
        }
      }
    }
  },
  watch: {
    $route (to, from) {
      if (to.path === '/' || to.meta.type) {
        this.addCss()
      } else {
        this.removeCss()
      }
      if (from.path === '/note' && to.path === '/notelist') {
        this.keepAlive = true
      } else {
        this.keepAlive = false
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
/* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸 */
::-webkit-scrollbar
  width 7px
  height 7px
  background-color #F5F5F5

/* 定义滚动条轨道 内阴影+圆角 */
::-webkit-scrollbar-track
  box-shadow inset 0 0 6px rgba(0, 0, 0, 0.3)
  -webkit-box-shadow inset 0 0 6px rgba(0, 0, 0, 0.3)
  background-color #F5F5F5

/* 定义滑块 内阴影+圆角 */
::-webkit-scrollbar-thumb
  box-shadow inset 0 0 6px rgba(0, 0, 0, .1)
  -webkit-box-shadow inset 0 0 6px rgba(0, 0, 0, .1)
  background-color #bbb

::-webkit-scrollbar-thumb:active
  background-color #999

body
  overflow-y scroll
  margin 0
</style>
