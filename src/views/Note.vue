<template>
  <transition name="fade">
    <div class="note" v-show="textReady">
      <div class="title">{{title}}</div>
      <div class="info">
        <div class="time">{{time}}</div>
      </div>
      <v-md-preview class="text" :text="text"></v-md-preview>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { getNote } from '../api/note'

export default {
  data () {
    return {
      title: '',
      time: '',
      text: '',
      read: 1,
      textReady: false
    }
  },
  created () {
    if (this.$route.query.id) {
      getNote(this.$route.query.id)
        .then(res => {
          this.title = res.data.title
          this.time = res.data.time
          this.text = res.data.text
          this.read = res.data.read + 1
          this.textReady = true
        })
    } else {
      this.$router.push('/notelist')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.note
  width 85vw
  margin auto
  .title
    font-size 2rem
    font-weight 600
    margin 20px 0 20px 0
  .info
    display flex
    align-items center
    margin 20px 0 20px 0
    .read
      margin-left 20px
  .text
    & >>> .line-numbers-mode
      min-width 600px
      max-width 100%
      display inline-block

@media (max-width: 600px)
  .note
    width 100vw
    .text
      padding 10px
      & >>> .line-numbers-mode
        min-width 0 !important
        width 100%
        display inline-block
</style>
