<template>
  <div class="button-wrapper">
    <a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </a>
    <a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </a>
    <a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.button-wrapper
  padding 0
  box-sizing border-box
  display flex
  justify-content center
  align-items center
  height 250px
  background #050801
  font-family consolas

  a
    position relative
    display inline-block
    padding 25px 30px
    margin 0 40px
    color #03e9f4
    text-decoration none
    text-transform uppercase
    overflow hidden
    transition 0.5s
    letter-spacing 4px
    -webkit-box-reflect below 0px linear-gradient(transparent, transparent 15%, rgba(255, 255, 255, 0.3))
    cursor pointer
    user-select none

    &:nth-child(1)
      filter hue-rotate(290deg)

    &:nth-child(3)
      filter hue-rotate(110deg)

    &:hover
      background #03e9f4
      color #050801
      box-shadow 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4

    & span
      position absolute
      display block

      &:nth-child(1)
        top 0
        left -100%
        width 100%
        height 2px
        background linear-gradient(90deg, transparent, #03e9f4)
        animation animate1 1s linear infinite

      &:nth-child(2)
        top 0
        right 0
        width 2px
        height 100%
        background linear-gradient(180deg, transparent, #03e9f4)
        animation animate2 1s linear infinite
        animation-delay 0.25s

      &:nth-child(3)
        bottom 0
        right -100%
        width 100%
        height 2px
        background linear-gradient(270deg, transparent, #03e9f4)
        animation animate3 1s linear infinite
        animation-delay 0.5s

      &:nth-child(4)
        bottom -100%
        left 0
        width 2px
        height 100%
        background linear-gradient(360deg, transparent, #03e9f4)
        animation animate4 1s linear infinite
        animation-delay 0.75s

@keyframes animate1
  0%
    left -100%

  50%, 100%
    left 100%

@keyframes animate2
  0%
    top -100%

  50%, 100%
    top 100%

@keyframes animate3
  0%
    right -100%

  50%, 100%
    right 100%

@keyframes animate4
  0%
    bottom -100%

  50%, 100%
    bottom 100%
</style>
