<template>
  <div class="note">
    <div class="title">{{title}}</div>
    <div class="time">{{time}}</div>
    <v-md-preview class="text" :text="text"></v-md-preview>
  </div>
</template>

<script type="text/ecmascript-6">
import { getNote } from '../api/note'

export default {
  data () {
    return {
      title: '',
      time: '',
      text: ''
    }
  },
  created () {
    if (this.$route.query.id) {
      getNote(this.$route.query.id)
        .then(res => {
          this.title = res.data.title
          this.time = res.data.time
          this.text = res.data.text
        })
    } else {
      this.$router.push('/topic')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.note
  width 80vw
  margin auto
  .title
    font-size 2rem
    font-weight 600
    margin 20px
  .time
    margin 0 20px
  .text
    & >>> .line-numbers-mode
      min-width 600px
      display inline-block
</style>
