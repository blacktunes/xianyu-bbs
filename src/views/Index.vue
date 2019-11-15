<template>
  <div class="index">
    <message></message>
    <note></note>
  </div>
</template>

<script>
import Message from '@/components/Index/Message'
import Note from '@/components/Index/Note'

export default {
  components: {
    Message,
    Note
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.index
  max-width 960px
  margin 15px auto 0 auto
</style>
