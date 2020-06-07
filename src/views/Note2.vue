<template>
  <div class="note-wrapper">
      <v-md-preview :text="text" height="400px"  ref="md" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    axios.get('/test/test.md')
      .then(res => {
        this.text = res.data
      })
  }
}
</script>

<style lang="stylus" scoped>
.note-wrapper
  padding 10px 15px
  & >>> .line-numbers-mode
    max-width 800px
    code
      white-space pre-wrap
</style>
