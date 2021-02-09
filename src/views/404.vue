<template>
  <div class="not-found">
    <div class="not-found-wrapper">
      <div id="container" @mousemove="mouseMove">
        <div class="content">
          <h2>404</h2>
          <h4>Page Not Found</h4>
          <router-link to="/index">
            <div class="button">
              <card class="card">Back To Home</card>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Card from '../components/common/Card'

export default {
  components: {
    Card
  },
  methods: {
    mouseMove (e) {
      const x = e.clientX
      const y = e.clientY
      this.container.style.backgroundPositionX = x + 'px'
      this.container.style.backgroundPositionY = y + 'px'
    }
  },
  mounted () {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.mouseMove = null
    } else {
      this.container = document.getElementById('container')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.not-found
  user-select none
  box-sizing border-box
  font-family: "Helvetica Neue"
  .not-found-wrapper
    position relative
    height 100vh
    #container
      position absolute
      top 2%
      right 2%
      bottom 2%
      left 2%
      border-radius 10px
      display flex
      justify-content center
      align-items center
      background url('data:image/png;base64,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'), #151729
      background-size 100px 100px
      box-shadow 0 15px 30px rgba(0, 0, 0, .5)
      .content
        max-width 600px
        text-align center
        h2
          font-size 18vh
          color #fff
          margin 0
        h4
          position relative
          font-size 20px
          background #fff
          border-radius 10px
          box-shadow 0 15px 30px rgba(0, 0, 0, .5)
          font-weight 300
          padding 10px 20px
          margin 0 0 35px 0
        .button
          display inline-block
          user-select none
          .card
            cursor pointer
            padding 6px 10px
            background #f56c6c
            border none
            border-radius 40px
            color #fff
            &:hover
              background #f78989
              box-shadow none
            &:active
              background #dd6161
</style>
