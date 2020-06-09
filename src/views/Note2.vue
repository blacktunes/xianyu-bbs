<template>
  <div class="notelist-wrapper" :style="{'max-width': width1 + 'px'}">
    <input type="number" minlength="1" min="1" v-model.number="width1">
    <input type="number" minlength="1" min="1" v-model.number="width2">
    <div class="topic-menu">
      <div class="button" @click="changeTopic(false)">
        <card class="card" :style="{'background': topicName ? '' : '#ccc', 'cursor': topicName ? '' : 'default'}">all</card>
      </div>
      <template v-for="(item, index) in topic">
        <div class="button" :key="index" @click="changeTopic(item)">
          <card class="card" :style="{'background': topicName !== item ? '' : '#ccc', 'cursor': topicName !== item ? '' : 'default'}">{{item}}</card>
        </div>
      </template>
    </div>
    <note-list :data="data" :width="width2" />
  </div>
</template>

<script type="text/ecmascript-6">
import { getAllNote, getTopic, getNoteList } from '@/api/note'
import NoteList from '../components/Note/NoteList'
import Card from '../components/common/Card'

export default {
  components: {
    NoteList,
    Card
  },
  data () {
    return {
      data: [],
      topic: [],
      width1: 1200,
      width2: 300
    }
  },
  computed: {
    topicName () {
      return this.$route.query.topic
    }
  },
  methods: {
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
          this.data = res.data
        }
      })
    },
    _getNoteList (topic) {
      getNoteList(topic)
        .then(res => {
          if (res.status === 200) {
            this.data = res.data
          }
        })
    }
  },
  watch: {
    width1 (newNum, oldNum) {
      if (newNum <= 0) {
        this.width1 = 1
      }
    },
    width2 (newNum, oldNum) {
      if (newNum <= 0) {
        this.width2 = 1
      }
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
  // max-width 1200px
  margin auto
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
