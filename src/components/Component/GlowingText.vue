<template>
  <div class="glowing-text">
    <h1>
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>·</span>
      <span>·</span>
      <span>·</span>
    </h1>
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
    margin 0
    padding 0
    color #111
    font-size 50px
    span
      display table-cell
      margin 0
      padding 0
      animation animation 5s linear infinite
      &:nth-child(1)
        animation-delay 0s
      &:nth-child(2)
        animation-delay 0.5s
      &:nth-child(3)
        animation-delay 1s
      &:nth-child(4)
        animation-delay 1.5s
      &:nth-child(5)
        animation-delay 2s
      &:nth-child(6)
        animation-delay 2.5s
      &:nth-child(7)
        animation-delay 3s
      &:nth-child(8)
        animation-delay 3.5s
      &:nth-child(9)
        animation-delay 4s
      &:nth-child(10)
        animation-delay 4.5s

@keyframes animation
  0%, 100%
    color #fff
    filter blur(2px)
    text-shadow 0 0 10px #00b3ff,
               0 0 20px #00b3ff,
               0 0 40px #00b3ff,
               0 0 80px #00b3ff,
               0 0 120px #00b3ff,
               0 0 200px #00b3ff,
               0 0 300px #00b3ff,
               0 0 400px #00b3ff
  5%, 95%
    color #111
    filter blur(0px)
    text-shadow none
</style>
