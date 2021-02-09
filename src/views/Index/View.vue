<template>
  <div>
    <div class="view" v-if="$route.meta.desc">
      <div class="header">
        <Card class="back" @click.native="back">←</Card>
        <Card>
          <div style="font-weight: 600">
            {{ $route.meta.desc }}
          </div>
        </Card>
      </div>
      <div class="item">
        <router-view />
      </div>
      <div class="footer">
        <a href="https://github.com/blacktunes">blacktunes</a>
      </div>
    </div>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import Card from '@/components/common/Card'

export default {
  components: {
    Card
  },
  methods: {
    back() {
      this.$router.push('/index')
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="stylus" scoped>
.view
  width 90vw
  margin 10px auto 0px auto

  .header
    display flex
    align-items center
    user-select none
    height 43px

    .back
      cursor pointer

      &:hover
        background #eee
        box-shadow none

      &:active
        background #ddd

  .item
    margin-bottom 10px
    min-height calc(100vh - 43px - 20px - 31px)

  .footer
    border-top 1px solid rgba(100, 100, 100, 0.5)
    height 20px
    text-align center
    a
      color #888
      text-decoration none
</style>
