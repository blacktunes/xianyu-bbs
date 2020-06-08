<template>
  <div>
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'

export default {
  data () {
    return {
      text: ''
    }
  },
  created () {
    axios.get('/test/test.md')
      .then(res => {
        this.text = res.data
      })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
