<template>
  <div>
    <!-- <message></message> -->
    <note></note>
    <div class="footer">
      <el-link class="icp" target="_Blank" href="http://beian.miit.gov.cn">粤ICP备18046932号</el-link>
      <transition name="el-zoom-in-center">
        <span v-show="UV">今日访问:{{UV}}</span>
      </transition>
    </div>
  </div>
</template>

<script>
// import Message from '@/components/Index/Message'
import Note from '@/components/Index/Note'
import { getUV } from '@/api/store'

export default {
  components: {
    // Message,
    Note
  },
  data () {
    return {
      UV: null
    }
  },
  created () {
    getUV().then((res) => {
      if (res.status === 200) {
        this.UV = res.data.items[0][2]
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    display flex
    justify-content center
    font-size 10px
    line-height 12px
    margin-top 30px
    .icp
      font-size 10px
      margin-right 5px
</style>
