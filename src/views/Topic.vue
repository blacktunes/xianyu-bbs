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
    <note-list :data="data" />
  </div>
</template>

<script type="text/ecmascript-6">
import { getAllNote, getTopic, getNoteList } from '@/api/note'
import NoteList from '../components/Note/NoteList'
import Card from '../components/common/Card'

export default {
  name: 'topic',
  components: {
    NoteList,
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
      this.$router.push('/')
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
        cursor pointer
        &:hover
          background #eee
          box-shadow none
        &:active
          background #ddd
</style>
