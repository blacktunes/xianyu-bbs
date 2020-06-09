<template>
  <transition name="fade" appear>
    <div class="show-note">
      <div v-for="(col, index) in list" :key="index" class="col" ref="col">
        <transition-group name="fade">
        <div class="note" v-for="item in col" :key="item.id">
          <card class="card">
            <div slot="header">
              <router-link class="note-title" to="/note/test">{{item.title}}</router-link>
              <p class="note-time">{{item.time.split(' ')[0]}}</p>
            </div>
            <div class="note-text" v-html="ellipsis(item.text)"></div>
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
    ellipsis (value) {
      if (value.length > 325) {
        return value.slice(0, 325) + '<span>...</span>'
      }
      return value
    },
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
.show-note
  display flex
  flex-wrap wrap
  .col
    overflow hidden
    .note
      overflow hidden
      margin 0
      .card
        min-height 350px
        max-height 450px
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

.fade-enter-active
  transition all 0.2s
  transition-delay 0.25s
.fade-leave-active
  transition all 0.2s
.fade-enter, .fade-leave-to
  opacity 0
  transform translate(-100%, 0)
.fade-enter-to, .fade-leave
  opacity 1
  transform translate(0, 0)
</style>
