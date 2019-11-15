<template>
  <div class="show-note">
    <el-row :gutter="10" class="show-note">
      <transition-group name="el-zoom-in-top">
      <el-col :span="8" class="note" v-for="item in showNoteList" :key="item.id">
        <el-card shadow="hover" :body-style="{ padding: '5px' }">
          <div slot="header">
            <el-link :underline="false" class="note-title" @click="noteClick(item.topic, item.id)">{{item.title}}</el-link>
            <p class="note-time">{{item.time.split(' ')[0]}}</p>
          </div>
          <div class="note-text" v-html="ellipsis(item.text)" v-highlight></div>
        </el-card>
      </el-col>
      </transition-group>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import { getShowNoteList } from '@/api/store'

export default {
  data () {
    return {
      showNoteList: []
    }
  },
  methods: {
    ellipsis (value) {
      if (value.length > 300) {
        return value.slice(0, 300) + '...'
      }
      return value
    },
    noteClick (topic, id) {
      this.$router.push(`/note/${topic}/${id}`)
    },
    _getShowNoteList () {
      getShowNoteList().then((res) => {
        if (res.status === 200) {
          this.showNoteList = res.data.showNoteList
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
  max-width 960px
  margin 15px auto 0 auto
  .note
    overflow hidden
    max-height 50vw
    margin-top 5px
   & >>> .el-card__header
      padding 5px
  .note-text
    overflow hidden
    font-size 14px
    line-height 20px
    & >>> code
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
