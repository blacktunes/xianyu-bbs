<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import TopHeader from '@/components/Header'
// import Mouse from '@/components/Mouse'

export default {
  // components: {
  //   TopHeader,
  //   Mouse
  // }
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
      if (to.path === from.path) {
        return
      }
      if (to.path === '/' || to.meta.type) {
        this.removeCss()
      } else {
        this.addCss()
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
::-webkit-scrollbar
  width 0
body
  overflow-y scroll
  margin 0
</style>
