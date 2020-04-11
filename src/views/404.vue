<template>
  <div class="not-found">
    <div id="container" @mousemove="mouseMove">
      <div class="content">
        <h2>404</h2>
        <h4>Page Not Found</h4>
        <router-link to="/">
          <el-button type="danger" round>Back To Home</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    mouseMove (e) {
      let x = e.clientX
      let y = e.clientY
      this.container.style.backgroundPositionX = x + 'px'
      this.container.style.backgroundPositionY = y + 'px'
    }
  },
  mounted () {
    this.container = document.getElementById('container')
    window.onmousemove = (e) => {
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.not-found
  user-select none
  margin-top -15px
  max-width 100vw !important
  height calc(100vh - 61px)
  box-sizing border-box
  background linear-gradient(45deg, #666, #fff, #666) !important
  font-family: "Helvetica Neue"
  #container
    position absolute
    top calc(10% + 61px - 15px)
    right 10%
    bottom 10%
    left 10%
    border-radius 10px
    display flex
    justify-content center
    align-items center
    background #151729
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
</style>
