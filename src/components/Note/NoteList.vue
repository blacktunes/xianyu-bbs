<template>
  <transition name="slider-left" appear>
    <div class="note-list">
      <div v-for="(col, index) in list" :key="index" class="col" ref="col">
        <transition-group name="slider-left">
        <div class="note" v-for="item in col" :key="item.id">
          <card class="card">
            <div slot="header">
              <router-link class="note-title" :to="`/note?id=${item.id}`">{{item.title}}</router-link>
              <p class="note-time">{{item.time}}</p>
            </div>
            <v-md-preview class="note-text" :text="item.text"></v-md-preview>
          </card>
        </div>
        </transition-group>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Card from '../common/Card'
export default {
  components: {
    Card
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      list: [],
      line: 0
    }
  },
  methods: {
    waterfallInit () {
      this.line = Math.floor(document.documentElement.clientWidth / this.width) || 1
      this.list = []
      for (let i = 0; i < this.line; i++) {
        this.list.push([])
      }
      let temp = 0
      this.data.forEach(item => {
        this.list[temp].push(item)
        temp++
        if (temp === this.line) {
          temp = 0
        }
      })
      this.$nextTick(() => {
        this.$refs.col.forEach(item => {
          item.style.flex = `0 0 ${1 / this.line * 100}%`
        })
      })
    }
  },
  watch: {
    data () {
      this.waterfallInit()
    },
    width () {
      this.waterfallInit()
    }
  },
  created () {
    this.waterfallInit()
    window.addEventListener('resize', this.waterfallInit)
  },
  destroyed () {
    window.removeEventListener('resize', this.waterfallInit)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.note-list
  display flex
  flex-wrap wrap
  .col
    overflow hidden
    .note
      overflow hidden
      margin 0
      .card
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
