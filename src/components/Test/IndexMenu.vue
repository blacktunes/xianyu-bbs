<template>
  <div class="inedx-menu-wrapper">
    <ul>
      <li><router-link data-text="Vue" to="/">VUE</router-link></li>
      <li><router-link data-text="SERVER" to="/">SERVER</router-link></li>
      <li><router-link data-text="Other" to="/">OTHER</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.inedx-menu-wrapper
  display flex
  justify-content center
  align-items center
  overflow hidden
  transition all 0.5s ease
  height 100%
  user-select none
  ul
    position relative
    margin 0
    padding 0
    &:hover li a
      color #0002
    li
      text-align center
      list-style none
      margin 0
      &:hover a
        color #000
        background #fff
      &:nth-child(5n+1) a:before
        background #81ecec
      &:nth-child(5n+2) a:before
        background #ff7675
      &:nth-child(5n+3) a:before
        background #55efc4
      &:nth-child(5n+4) a:before
        background #a29bfe
      &:nth-child(5n+5) a:before
        background #fd79a8
      a
        width 270px
        display inline-flex
        justify-content center
        color #333
        text-decoration none
        font-size 60px
        padding 10px 20px
        font-weight 700
        transition 0.5s
        &:before
          content ''
          position absolute
          top 50%
          left 100%
          transform translate(-50%, -50%)
          display flex
          justify-content center
          align-items center
          font-size 180px
          color rgba(0, 0, 0, 0.1)
          z-index -1
          opacity 0
          font-weight 900
          text-transform uppercase
          letter-spacing 500px
          transition letter-spacing 0.5s, left 0.5s, opacity 0.5s
        &:hover:before
          content attr(data-text)
          opacity 1
          left 50%
          letter-spacing 10px
          width 130vw
          height 100vh
</style>
