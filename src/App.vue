<template>
  <div id="app">
    <top-header></top-header>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from '@/components/Header'
export default {
  components: {
    TopHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" sccped>

</style>
