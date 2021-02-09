<template>
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
