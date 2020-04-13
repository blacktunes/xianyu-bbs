<template>
  <div class="icon-menu-wrapper">
    <div class="icon-menu">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.icon-menu-wrapper
  max-width 100vw
  height 300px
  padding 0
  margin 20px 0 50px 0
  display flex
  justify-content center
  align-items center
  transition all 0.5s ease
  background #666
  &:hover
    background #333
  .icon-menu
    ul
      list-style none
      li
        position relative
        display inline-flex
        justify-content center
        align-items center
        width 70px
        height 70px
        cursor pointer
        margin 0 10px
        background #fff
        border-radius 50%
        &:before
          content ''
          position absolute
          top -10px
          left -10px
          width 80px
          height 80px
          border-radius 50%
          border 5px solid #fff
          filter blur(6px)
          transform scale(0.5)
          transition all 0.5s ease
        &:hover:before
          transform scale(1)
</style>
