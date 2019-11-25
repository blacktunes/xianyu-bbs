<template>
<div class="note-view">
  <div class="loading" v-show="!showNote" v-loading="!showNote"></div>
  <div class="not-found" v-if="notFound">404</div>
  <div class="note" v-if="showNote && !notFound">
    <div class="title" @click="titleClick">{{note.title}}</div>
    <div class="subheading">
      <i class="icon1 el-icon-date"></i>
      <div class="time">{{note.time.split(' ')[0]}}</div>
      <i class="icon2 el-icon-view"></i>
      <div class="read">{{note.read}}</div>
    </div>
    <div v-html="note.text" v-highlight></div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import { getNote } from '@/api/store'
import { mapMutations } from 'vuex'

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
    ...mapMutations({
      setEdit: 'SET_EDIT',
      setXianyu: 'SET_XIANYU'
    }),
    titleClick () {
      this.num++
      if (this.num === 5) {
        this.num = 0
        this.setXianyu(true)
        this.setEdit(this.note)
        this.$router.push({ path: '/input', query: { id: this.note.id } })
      }
    },
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
  },
  watch: {
    $route (to, from) {
      if (to.params.topic && to.params.id) {
        this._getNote(this.$route.params.topic, this.$route.params.id)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/note.css'

.note-view
  height calc(100vh - 61px)
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
</style>
