<template>
  <div class="show-note">
    <div v-for="(col, index) in showNoteList" :key="index" class="col">
      <transition-group name="el-fade-in-linear">
      <div class="note" v-for="item in col" :key="item.id">
        <el-card shadow="hover" :body-style="{ padding: '5px' }">
          <div slot="header">
            <el-link :underline="false" class="note-title" @click="noteClick(item.topic, item.id)">{{item.title}}</el-link>
            <p class="note-time">{{item.time.split(' ')[0]}}</p>
          </div>
          <div class="note-text" v-html="ellipsis(item.text)" v-highlight></div>
        </el-card>
      </div>
      </transition-group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getShowNoteList } from '@/api/store'

export default {
  data () {
    return {
      showNoteList: [[], [], []]
    }
  },
  methods: {
    ellipsis (value) {
      if (value.length > 325) {
        return value.slice(0, 325) + '<span>...</span>'
      }
      return value
    },
    noteClick (topic, id) {
      this.$router.push(`/note/${topic}/${id}`)
    },
    _getShowNoteList () {
      getShowNoteList().then((res) => {
        if (res.status === 200) {
          let temp = 0
          res.data.showNoteList.forEach(item => {
            this.showNoteList[temp].push(item)
            temp++
            if (temp > 2) {
              temp = 0
            }
          })
        }
      })
    }
  },
  created () {
    this._getShowNoteList()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.show-note
  min-height 500px
  display flex
  flex-wrap wrap
  .col
    flex 0 0 33.333%
    overflow hidden
    .note
      overflow hidden
      max-height 500px
      margin 5px
    & >>> .el-card__header
        padding 5px
    .note-text
      font-size 14px
      line-height 20px
      & >>> code
        overflow hidden
        color #000
        font-weight lighter
        font-size 12px
        border-radius 3px
        padding 3px 5px
        width 100%
        font-family: sans-serif
        background #eee

.note-title
  display block
  font-size 18px
  text-align center
  margin 0
.note-time
  font-size 12px
  text-align center
  margin 5px 0 0 0
  color #777
</style>
