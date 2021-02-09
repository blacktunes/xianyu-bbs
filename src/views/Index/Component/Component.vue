<template>
  <div class="component">
    <div class="header">
      <Card class="back" @click.native="back">←</Card>
      <Card>这个页面用来放点奇怪的组件</Card>
    </div>
    <div>
      <Card>
        <TestButton />
      </Card>
      <Card>
        <IconMenu />
      </Card>
      <Card>
        <Spotlight />
      </Card>
      <Card>
        <GlowingText />
      </Card>
      <Card>
        <NotFound />
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/common/Card'
import TestButton from '@/components/Component/Button'
import IconMenu from '@/components/Component/IconMenu'
import Spotlight from '@/components/Component/Spotlight'
import GlowingText from '@/components/Component/GlowingText'
import NotFound from '@/components/Component/404'

export default {
  components: {
    Card,
    TestButton,
    IconMenu,
    Spotlight,
    GlowingText,
    NotFound
  },
  methods: {
    back() {
      this.$router.push('/index')
    }
  }
}
</script>

<style lang="stylus" scoped>
.component
  width 85vw
  margin 10px auto

  .header
    display flex
    align-items center
    user-select none

    .back
      cursor pointer

      &:hover
        background #eee
        box-shadow none

      &:active
        background #ddd
</style>
