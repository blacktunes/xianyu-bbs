<template>
  <div class="index">
    <message></message>
    <p>↑ 可实时更新的留言板/聊天室</p>
  </div>
</template>

<script>
import Message from '@/components/Index/Message'
export default {
  components: {
    Message
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" sccped>
.index
  max-width 960px
  margin 15px auto 0 auto
</style>
