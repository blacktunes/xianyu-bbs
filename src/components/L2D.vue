<template>
  <div id="live2d" :style="{ zIndex }">
    <transition name="fade">
      <div v-show="mainShow">
        <canvas id="live2d-main" width="250" height="365"/>
      </div>
    </transition>
  </div>
</template>

<script>
import '../assets/js/live2d.min.js'

export default {
  name: 'live2d',
  props: {
    zIndex: {
      default: 1,
      type: Number
    }
  },
  data () {
    return {
      mainShow: false
    }
  },
  mounted () {
    this.loadModel()
    this.$nextTick(function () {
      this.loadEvent()
    })
  },
  methods: {
    loadModel () {
      const url = `https://www.feizhouxianyu.cn/Terisa/model.json`
      const callback = this.mainShow = true
      window.loadlive2d('live2d-main', url, callback)
    },
    loadEvent () {
      for (const event in this.tips) {
        for (const obj of this.tips[event]) {
          const selector = obj.selector
          let dom = null
          if (selector === 'document') {
            dom = document
          } else if (document.querySelector(selector)) {
            dom = document.querySelector(selector)
          }
          if (dom == null) continue
          dom.addEventListener(event, () => {
            const arr = obj.text
            const msg = arr[Math.floor(Math.random() * arr.length)]
            this.showMessage(msg, 2000)
          })
        }
      }
    }
  }
}
</script>

<style scoped>
  #live2d {
    position: fixed;
    width: 250px;
    height: 365px;
    bottom: 0;
    right: 10px;
  }
  #live2d-main {
    cursor: grab;
    cursor: -webkit-grab;
    cursor: -o-grab;
    cursor: -ms-grab;
  }
  #live2d-main:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    cursor: -o-grabbing;
    cursor: -ms-grabbing;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
