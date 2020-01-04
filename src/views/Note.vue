<template>
<div class="note-view">
  <div class="loading" v-show="!showNote" v-loading="!showNote"></div>
  <div class="not-found" v-if="notFound">404</div>
  <div class="note" v-if="showNote && !notFound">
    <div class="title">{{note.title}}</div>
    <div class="subheading">
      <i class="icon1 el-icon-date"></i>
      <div class="time">{{note.time.split(' ')[0]}}</div>
      <i class="icon2 el-icon-view"></i>
      <div class="read">{{note.read}}</div>
    </div>
    <div v-html="note.text" v-highlight></div>
  </div>
  <el-card v-if="showNote && !notFound" shadow="never" class="card" :body-style="{ padding: '0px 20px' }">
    <p>作者:{{note.author}}</p>
    <p>最后修改于:{{note.lastEdit}}</p>
  </el-card>
</div>
</template>

<script type="text/ecmascript-6">
import { getNote } from '@/api/store'

export default {
  name: 'note',
  data () {
    return {
      showNote: false,
      notFound: false,
      note: {},
      num: 0
    }
  },
  methods: {
    _getNote (topic, id) {
      this.showNote = false
      this.notFound = false
      getNote(topic, id).then((res) => {
        if (res.status === 200) {
          if (res.data.length > 0) {
            this.note = res.data[0]
            this.showNote = true
          } else {
            this.showNote = true
            this.notFound = true
          }
        }
      })
    }
  },
  created () {
    this._getNote(this.$route.params.topic, this.$route.params.id)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/note.css'

.note-view
  .loading
    height calc(100vh - 61px - 61px - 30px)
  .not-found
    max-width 960px
    margin 15px auto 0 auto
  .note
    max-width 960px
    margin 15px auto 0 auto
    .title
      font-size 40px
    .subheading
      display flex
      align-items center
      .time
        font-size 18px
        font-weight lighter
        margin-right 15px
        color #777
      .read
        font-size 18px
        font-weight lighter
      .icon1
        font-size 15px
        margin-right 5px
      .icon2
        font-size 17px
        margin-right 5px
  .card
    margin-bottom 20px
</style>
