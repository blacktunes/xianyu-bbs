<template>
  <div class="mood" v-loading="loading">
    <div v-for="item in moodList" :key="item.id" class="mood-card">
      <el-card>
        <div slot="header">
          <span class="mood-author">{{item.author}}</span>
          <span class="mood-time">{{item.time}}</span>
        </div>
        <div v-html="item.text" class="mood-text"></div>
        <div class="mood-img">
          <div v-for="(pic, index) in item.pic" :key="index">
            <el-image style="width: 150px; height: 150px"
                      :src="pic.split('.' + pic.split('.').pop())[0] + '-less.jpg'"
                      :preview-src-list="item.pic"
                      :lazy="true"
                      fit="cover"
                      class="img"></el-image>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Message } from 'element-ui'
import { messageList } from '@/api/store'

export default {
  data () {
    return {
      moodList: []
    }
  },
  computed: {
    loading () {
      if (this.moodList.length < 1) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    this.message = Message({
      message: '该页为mood的消息预览',
      center: true,
      offset: 83,
      duration: 2000,
      iconClass: 'el-icon-mobile-phone'
    })
  },
  created () {
    messageList().then((res) => {
      console.log(res.data)
      this.moodList = res.data.messageList
    })
  },
  deactivated () {
    this.message.close()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.mood
  max-width 960px
  margin 15px auto
  height calc(100vh - 61px)
  .mood-card
    margin 10px auto
    .mood-author
      font-size 18px
    .mood-time
      margin-left 20px
      font-size 12px
    .mood-text
      font-size 14px
      line-height 20px
    .mood-img
      display flex
      flex-wrap wrap
      .img
        flex 1
        margin 2px
</style>
