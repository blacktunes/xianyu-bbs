<template>
  <div class="tucao">
    <div>还 没 做</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.timer = setTimeout(() => {
      this.$router.go(-1)
    }, 1500)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="stylus" scoped>
.tucao
  height 100vh
  width 100vw
  display flex
  justify-content center
  align-items center
  font-size 20px
  font-weight 600
  user-select none
</style>
