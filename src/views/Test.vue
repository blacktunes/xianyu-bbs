<template>
  <div class="test">
    <glowing-text/>
    <spotlight/>
    <test-button/>
    <icon-menu/>
    <!-- <live2d/> -->
  </div>
</template>

<script>
import TestButton from '../components/Test/Button'
import IconMenu from '../components/Test/IconMenu'
import Spotlight from '../components/Test/Spotlight'
import GlowingText from '../components/Test/GlowingText'
// import live2d from '../components/L2D'

export default {
  components: {
    TestButton,
    IconMenu,
    Spotlight,
    GlowingText
    // live2d
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  & >>> #container
    top 0 !important
    right 0 !important
    bottom 0 !important
    left 0 !important
</style>
