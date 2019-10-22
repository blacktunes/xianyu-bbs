<template>
  <div class="message">
    <el-collapse accordion v-model="activeNames" class="collapse">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="message-top">
            <i class="icon el-icon-chat-line-round"></i>
          </div>
        </template>
        <el-divider class="divider"></el-divider>
        <div class="message-item">
          <el-scrollbar class="scroll-bar">
            <transition-group name="el-fade-in-linear">
              <div v-for="item in messageList" :key="item.id">
                <div class="text">
                  <span>{{item.username}} : {{item.text}}</span>
                  <span class="time">{{fromNow(item.time)}}</span>
                </div>
              </div>
            </transition-group>
          </el-scrollbar>
          <el-divider class="divider"></el-divider>
          <div class="message-bottom">
            <el-input class="input" v-model="text"></el-input>
            <el-button class="button" icon="el-icon-edit" @click="send"></el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { getMessage } from '@/api/store'

export default {
  data () {
    return {
      username: '',
      text: '',
      messageList: [],
      activeNames: '1'
    }
  },
  methods: {
    send () {
      if (this.text.length < 1) {
        return
      }
      this.$socket.emit('sendMessage', {
        username: this.username || '咸鱼',
        text: this.text,
        time: new Date().toLocaleString('chinese', { hour12: false })
      })
      this.text = ''
    },
    fromNow (time) {
      if (this.$moment(time, 'YYYYMMDDHHmm').isBefore(this.$moment().subtract(1, 'days'))) {
        return time.split(' ')[0]
      } else {
        return this.$moment(time, 'YYYYMMDDHHmm').fromNow()
      }
    },
    _getMessage () {
      getMessage().then((res) => {
        console.log(res)
        this.messageList = res.data.message
      })
    },
    refresh () {
      this.timer = setTimeout(() => {
        this.$forceUpdate()
        console.log('refresh')
        this.refresh()
      }, 1000 * 60)
    }
  },
  sockets: {
    // 建立连接自动调用connect
    connect: function () {
      // 与socket.io连接后回调
      console.log('conn')
    },
    connect_error: () => {
      console.log('connErr')
    },
    disconnect: () => {
      console.log('disconn')
    },
    receiveMessage: function (data) {
      console.log(data)
      let temp = data
      if (this.messageList.length > 1) {
        temp.id = this.messageList[0].id + 1 || 0
      } else {
        temp.id = 0
      }
      this.messageList.unshift(temp)
    }
  },
  created () {
    this._getMessage()
  },
  activated () {
    console.log('activated')
    this.refresh()
  },
  deactivated () {
    console.log('deactivated')
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" sccped>
.message
  max-width 960px
  margin 15px auto 0 auto
  .collapse
    .el-collapse-item__header
      background #ddd
      border-radius 6px 6px 0 0
    .el-collapse-item__content
      padding-bottom 35px
    .divider
      margin 2px
  .message-top
    .icon
      font-size 16px
      margin-left 10px
  .message-item
    height 150px
    background #eee
    border-radius 0
    margin-bottom 10px
    .text
      display flex
      justify-content space-between
      margin 0 15px 0 5px
      font-size 12px
      border-width 1px
      border-color #ddd
      border-bottom-style dashed
    .scroll-bar
      height 100%
    .message-bottom
      display flex
      .input
        .el-input__inner
          padding 5px
          height 26px
          border-radius 0 0 0 6px
          border 1px #ddd solid
          border-top-style none
      .button
        padding 0 15px
        border-radius 0 0 6px 0
        border-left-style none
        border-top-style none
    .divider
      margin 2px 0 4px 0
</style>
