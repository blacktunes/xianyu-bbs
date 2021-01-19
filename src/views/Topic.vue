<template>
  <div class="notelist-wrapper">
    <transition name="slider-top" appear>
      <div class="topic-menu">
        <div class="button" @click="back">
          <card class="card">←</card>
        </div>
        <div class="button" @click="changeTopic(false)">
          <card class="card" :style="{'background': topicName ? '' : '#ccc', 'cursor': topicName ? '' : 'default'}">all</card>
        </div>
        <transition-group name="slider-top" appear>
          <template v-for="(item, index) in topic">
            <div class="button" :key="index" @click="changeTopic(item)">
              <card class="card" :style="{'background': topicName !== item ? '' : '#ccc', 'cursor': topicName !== item ? '' : 'default'}">{{item}}</card>
            </div>
          </template>
        </transition-group>
      </div>
    </transition>
    <waterfall :data="data">
      <template v-slot:item="props">
        <card class="note-card">
          <div slot="header">
            <router-link class="note-title" :to="`/note?id=${props.item.id}`">{{props.item.title}}</router-link>
            <p class="note-time">{{props.item.time}}</p>
          </div>
          <v-md-preview class="note-text" :text="props.item.text"></v-md-preview>
        </card>
      </template>
    </waterfall>
  </div>
</template>

<script type="text/ecmascript-6">
import { getAllNote, getTopic, getNoteList } from '@/api/note'
import Card from '../components/common/Card'
import Waterfall from '../components/common/Waterfall'

export default {
  name: 'topic',
  components: {
    Waterfall,
    Card
  },
  data () {
    return {
      data: [],
      topic: []
    }
  },
  computed: {
    topicName () {
      return this.$route.query.topic
    }
  },
  methods: {
    back () {
      this.$router.push('/home')
    },
    changeTopic (topic) {
      if (this.topicName !== topic) {
        if (!topic) {
          if (this.topicName) {
            this.$router.replace({ path: this.$router.path, query: {} })
            this._getAllNote()
          }
        } else {
          this.$router.replace({ path: this.$router.path, query: { topic } })
          this._getNoteList(this.topicName)
        }
      }
    },
    _getAllNote () {
      getAllNote().then((res) => {
        if (res.status === 200) {
          this.data = []
          this.$nextTick(() => {
            this.data = res.data
          })
        }
      })
    },
    _getNoteList (topic) {
      getNoteList(topic)
        .then(res => {
          if (res.status === 200) {
            this.data = []
            this.$nextTick(() => {
              this.data = res.data
            })
          }
        })
    }
  },
  created () {
    getTopic()
      .then(res => {
        if (res.status === 200) {
          this.topic = res.data
        }
      })
    if (this.topicName) {
      this._getNoteList(this.topicName)
    } else {
      this._getAllNote()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.notelist-wrapper
  max-width 90vw
  margin 0 auto 15px auto
  .topic-menu
    margin-top 15px
    .button
      display inline-block
      user-select none
      .card
        height 32px
        cursor pointer
        &:hover
          background #eee
          box-shadow none
        &:active
          background #ddd
  .note-card
    & >>> .card-text
      position relative
      overflow hidden
      min-height 280px
      max-height 380px
      &:after
        content ""
        position absolute
        bottom 0
        left 0
        width 100%
        height 10%
        background-image linear-gradient(to bottom, transparent, #fff)
    .note-title
      display block
      font-size 18px
      text-align center
      margin 0
      color #666
      text-decoration none
      &:hover
        color #aaa
    .note-time
      font-size 12px
      text-align center
      margin 5px 0 0 0
      color #777
    .note-text
      box-sizing border-box
      pointer-events none
      font-size 14px
      padding 0
      & >>> code
        word-break normal
</style>
