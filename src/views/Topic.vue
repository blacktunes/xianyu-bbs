<template>
<div class="topic">
  <div class="loading" v-show="!showNote" v-loading="!showNote"></div>
  <div class="not-found" v-if="noteEmpty && !notFound && showNote">该分类暂无内容</div>
  <div class="not-found" v-if="notFound">404</div>
  <div v-for="item in noteList" :key="item.id">
    <el-card shadow="hover" :body-style="{ padding: '15px' }" class="note">
      <div>
        <el-link :underline="false" class="title" @click="noteClick(item.topic, item.id)">{{item.title}}</el-link>
        <div class="text" v-html="ellipsis(item.text)"></div>
        <div class="subheading">
          <i class="icon1 el-icon-date"></i>
          <div class="time">{{item.time}}</div>
          <i class="icon2 el-icon-view"></i>
          <div class="read">{{item.read}}</div>
        </div>
      </div>
    </el-card>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import { getNoteList } from '@/api/store'

export default {
  name: 'topic',
  data () {
    return {
      topic: '',
      noteList: [],
      showNote: false,
      notFound: false
    }
  },
  computed: {
    noteEmpty () {
      return this.noteList.length === 0
    }
  },
  methods: {
    noteClick (topic, id) {
      this.$router.push(`/note/${topic}/${id}`)
    },
    ellipsis (value) {
      let temp = value.replace(/<img[^>]*>/g, '[图片]').replace(/<pre>.*?<\/pre>/isg, '[代码块]')
      // if (temp.length > 200) {
      //   return temp.slice(0, 200) + '...'
      // }
      return temp
    },
    _getNoteList (topic) {
      this.showNote = false
      getNoteList(topic).then((res) => {
        if (res.data.ERR_CODE === 0) {
          this.showNote = true
          this.noteList = res.data.noteList.reverse()
        } else {
          this.showNote = true
          this.notFound = true
        }
      })
    }
  },
  created () {
    this.topic = this.$route.params.topic
    this._getNoteList(this.topic)
  },
  watch: {
    $route (to) {
      this.noteList = []
      this.notFound = false
      if (to.params.topic) {
        this.topic = to.params.topic
        this._getNoteList(this.topic)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.topic
  .loading
    height calc(100vh - 61px - 61px - 30px)
  .not-found
    max-width 960px
    margin 15px auto 0 auto
  .note
    margin 5px auto
    .title
      font-weight bold
      font-size 25px
    .text
      font-size 15px !important
      overflow hidden
      max-height 150px
      margin-bottom 8px
      text-overflow ellipsis
      white-space nowrap
    .subheading
      display flex
      align-items center
      .time
        font-size 14px
        font-weight lighter
        margin-right 15px
        color #777
      .read
        font-size 14px
        font-weight lighter
      .icon1
        font-size 12px
        margin-right 5px
      .icon2
        font-size 14px
        margin-right 5px
</style>
