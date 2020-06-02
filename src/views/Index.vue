<template>
  <div class="background">
    <div class="banner" ref="banner">
      <div class="text">
        <p class="title">feizhouxianyu.cn</p>
        <p class="tip">一个并没什么用的网站</p>
      </div>
      <div class="icon">↓</div>
    </div>
    <div class="banner content" ref="content">
      <div class="text">
        <p class="tip">我还没想好该写什么</p>
        <p class="tip">现在的话什么都还没有</p>
      </div>
      <div class="icon">↑</div>
    </div>
    <a class="icp" target="_Blank" href="http://beian.miit.gov.cn" ref="icp">粤ICP备18046932号</a>
  </div>
</template>

<script>
export default {
  mounted () {
    document.styleSheets[document.styleSheets.length - 1].insertRule('body::-webkit-scrollbar { display: none }', 0)
    window.addEventListener('scroll', (e) => {
      let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      if (scrolled >= 0.1) {
        this.$refs.banner.style.opacity = 1 - scrolled
        this.$refs.content.style.opacity = scrolled
        this.$refs.icp.style.background = `rgb(${255 - scrolled * 150},${255 - scrolled * 150},${255 - scrolled * 150})`
        this.$refs.icp.style.color = `rgb(${scrolled * 255},${scrolled * 255},${scrolled * 255})`
      } else {
        this.$refs.banner.style.opacity = 1
        this.$refs.content.style.opacity = 0
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.background
  max-width 100vw !important
  height calc(100vh + 100px)
  .banner
    user-select none
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
    .icon
      position absolute
      bottom 25px
      left calc(50% - 10px)
      width 20px
      color #fff
      animation shake 2s ease-out infinite
  .content
    z-index -1
    background #eee
    .tip
      color #000
      animation none
      text-shadow none
    .icon
      color #000
  .icp
    font-size 12px
    line-height 16px
    position fixed
    bottom 0
    width 100%
    color #000
    text-align center
    background #fff

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
</style>
