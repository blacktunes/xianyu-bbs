<template>
  <transition name="fade" appear>
    <div class="background">
      <div class="banner" ref="banner">
        <div class="text">
          <p class="title">feizhouxianyu.cn</p>
          <p class="tip">一个并没什么用的网站</p>
        </div>
        <div class="icon">↓</div>
      </div>
      <div class="content" ref="content">
        <index-menu class="menu"/>
        <div class="icon">↑</div>
      </div>
      <a class="icp" target="_Blank" href="http://beian.miit.gov.cn" ref="icp">粤ICP备18046932号</a>
    </div>
  </transition>
</template>

<script>
import IndexMenu from '../components/Index/IndexMenu'

export default {
  components: {
    IndexMenu
  },
  methods: {
    scroll (e) {
      let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      if (scrolled >= 0.1) {
        this.$refs.banner.style.opacity = 1 - scrolled
        this.$refs.banner.style.zIndex = 1 - scrolled
        this.$refs.content.style.opacity = scrolled
        this.$refs.icp.style.background = `rgb(${255 - scrolled * 150},${255 - scrolled * 150},${255 - scrolled * 150})`
        this.$refs.icp.style.color = `rgb(${scrolled * 255},${scrolled * 255},${scrolled * 255})`
      } else {
        this.$refs.banner.style.opacity = 1
        this.$refs.banner.style.zIndex = 1
        this.$refs.content.style.opacity = 0
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.background
  max-width 100vw !important
  height calc(100vh + 100px)
  user-select none
  .banner
    z-index 1
    position fixed
    top 0
    width 100%
    height 100vh
    background #666
    .text
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      text-align center
      white-space nowrap
      color #fff
    .title
      font-size 25px
      text-shadow 2px 2px 6px rgba(0, 0, 0, 0.5)
    .tip
      font-size 20px
      transition all 0.3s ease-in
      position relative
      animation shake2 3s linear infinite
      text-shadow 2px 2px 6px rgba(0, 0, 0, 0.5)
      &:hover
        transition all 0.3s linear
        color transparent
        animation none
        text-shadow none
        &:after
          font-size 17px
          position absolute
          top 50%
          left 50%
          transform translate(-50%, -50%)
          width 100%
          content '我都说了没什么用咯...'
          color #fff
          text-shadow 2px 2px 6px rgba(0, 0, 0, 0.5)
  .content
    position fixed
    top 0
    width 100%
    height 100vh
    background #eee
    .icon
      color #000
  .icp
    z-index 10
    font-size 12px
    line-height 16px
    position fixed
    bottom 0
    width 100%
    color #000
    text-align center
    background #fff

.icon
  position fixed
  bottom 25px
  left calc(50% - 10px)
  width 20px
  color #fff
  animation shake 2s ease-out infinite

@keyframes shake
  0%
    transform translate(0, 0)
  50%
    transform translate(0, 25%)
  100%
    transform translate(0, 0)

@keyframes shake2
  0%
    transform translate(0, 0)
  20%
    transform translate(0, 0)
  25%
    transform translate(0, -15%)
  30%
    transform translate(0, 0)
  35%
    transform translate(0, -15%)
  40%
    transform translate(0, 0)
  100%
    transform translate(0, 0)

.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
.fade-enter, .fade-leave-to
  opacity 0
</style>
