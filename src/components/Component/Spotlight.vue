<template>
  <div class="glowing-text">
    <h1 data-spotlight="Spotlight!">Spotlight</h1>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.glowing-text
  display flex
  justify-content center
  align-items center
  background #222
  height 200px
  user-select none

  h1
    color #333
    position relative
    font-size 50px

    &:after
      content attr(data-spotlight)
      color transparent
      position absolute
      top 0
      left 0
      height 100%
      width 100%
      animation spotlight 5s infinite
      background linear-gradient(to right, #e66465, #9198e5)
      background-clip text

@keyframes spotlight
  0%
    clip-path ellipse(30px 30px at 0 50%)

  50%
    clip-path ellipse(30px 30px at 100% 50%)

  100%
    clip-path ellipse(30px 30px at 0 50%)
</style>
