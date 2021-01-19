<template>
  <div class="not-found">
    <div class="not-found-wrapper">
      <div id="container" @mousemove="mouseMove">
        <div class="content">
          <h2>404</h2>
          <h4>Page Not Found</h4>
          <router-link to="/home">
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
      let x = e.clientX
      let y = e.clientY
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
      background url('../assets/img/404.png'), #151729
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
