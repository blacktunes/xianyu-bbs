<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    document.onmousemove = (e) => {
      /* eslint-disable no-new */
      for (let i = 0; i < 5; i++) {
        new Circle(e.clientX, e.clientY, 15)
      }
    }

    var canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    document.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }, false)

    var ctx = canvas.getContext('2d')
    var circleArr = []

    function Circle (x, y, r, color) {
      this.x = x
      this.y = y
      this.r = r
      this.color = `rgba(${parseInt(Math.random() * 240) + 9}, ${parseInt(Math.random() * 220) + 18}, 203, 0.3)`

      this.dx = Math.random() * 12 - 7
      this.dy = Math.random() * 12 - 7

      circleArr.push(this)
    }

    Circle.prototype.render = function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true)
      ctx.fillStyle = this.color
      ctx.fill()
    }

    Circle.prototype.updete = function () {
      this.x += this.dx
      this.y += this.dy
      this.r--

      if (this.r < 0) {
        for (let i = 0; i < circleArr.length; i++) {
          if (circleArr[i] === this) {
            circleArr.splice(i, 1)
          }
        }
        return false
      }
      return true
    }

    setInterval(() => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].updete() && circleArr[i].render()
      }
    }, 20)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  canvas
    z-index 9999
    position fixed
    top 0
    left 0
    background-color rgba(0, 0 ,0 , 0)
    pointer-events none
</style>
