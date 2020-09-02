<template>
  <transition name="slider-left" appear>
    <div class="waterfall">
      <div v-for="(col, index) in list" :key="index" class="col" ref="col">
        <transition-group name="slider-left">
          <div class="item" v-for="(item, key) in col" :key="'item' + key">
            <slot :item="item" name="item"></slot>
          </div>
        </transition-group>
      </div>
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
    window.addEventListener('resize', this.waterfallInit)
  },
  destroyed () {
    window.removeEventListener('resize', this.waterfallInit)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.waterfall
  display flex
  flex-wrap wrap
  .col
    overflow hidden
    .item
      overflow hidden
      margin 0
</style>
