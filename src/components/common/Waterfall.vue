<template>
  <transition name="fade" appear>
    <div class="waterfall">
      <transition-group name="fade">
        <div v-for="(col, index) in list" :key="'col' + index" class="col" ref="col">
          <transition-group name="slider">
            <div class="item" v-for="item in col" :key="item.id">
              <slot :item="item" name="item"></slot>
            </div>
          </transition-group>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
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
    window.onresize = () => {
      this.waterfallInit(false)
    }
  },
  destroyed () {
    window.onresize = null
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.waterfall
  span
    display flex
    flex-wrap wrap
    .col
      overflow hidden
      .item
        width 100%
        overflow hidden
        margin 0
</style>
