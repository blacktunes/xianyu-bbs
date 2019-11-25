<template>
  <div class="preview">
    <div class="note">
      <div class="title">{{form.title}}</div>
      <div class="subheading">
        <i class="icon el-icon-date"></i>
        <div class="time ">{{form.time}}</div>
      </div>
      <div v-html="form.text" v-highlight></div>
    </div>
    <el-button icon="el-icon-edit" class="button1" @click="submit" round>提交</el-button>
    <el-button icon="el-icon-refresh" class="button2" @click="edit" round>修改</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import COS from 'cos-js-sdk-v5'
import { addNote, editNote } from '@/api/store'

export default {
  props: {
    form: {
      default: null,
      type: Object
    },
    isEdit: {
      default: false,
      type: Boolean
    },
    imgList: {
      default: () => [],
      type: Array
    }
  },
  methods: {
    submit () {
      if (this.imgList.length > 0) {
        this.imgList.forEach((item, index) => {
          const oldUrl = 'bbs-1256427935.cos.ap-guangzhou.myqcloud.com/temp/' + item
          this.cos.putObjectCopy({
            Bucket: 'bbs-1256427935',
            Region: 'ap-guangzhou',
            Key: item,
            CopySource: oldUrl
          }, (err) => {
            if (!err) {
              this.form.text = this.form.text.replace(new RegExp('(temp/)(?=' + item + ')'), '')
              this.cos.deleteObject({
                Bucket: 'bbs-1256427935',
                Region: 'ap-guangzhou',
                Key: 'temp/' + item
              }, (err) => {
                if (err) {
                  console.log(err)
                } else {
                  if (this.imgList.length === index + 1) {
                    this._addNote(this.form)
                  }
                }
              })
            } else {
              console.log(err)
            }
          })
        })
      } else {
        this._addNote(this.form)
      }
    },
    edit () {
      this.$router.go(-1)
    },
    _addNote (form) {
      if (this.isEdit) {
        editNote(form).then((res) => {
          if (res.status === 200) {
            this.$router.push(`/note/${this.form.topic}/${this.form.id}`)
            this.$router.go(0)
          }
        })
      } else {
        addNote(form).then((res) => {
          if (res.status === 200) {
            this.$router.push(`/note/${this.form.topic}/${res.data.id}`)
            this.$router.go(0)
          }
        })
      }
    }
  },
  created () {
    if (!this.form.title) {
      this.$router.go(-1)
    } else {
      this.cos = new COS({
        SecretId: 'AKIDtYkgMnrMQHuHrXpGkRt64rOjpV5RJP0M',
        SecretKey: 'av0VlbDaZJp5A0h8VeZS7XtoV2JLkbDl'
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/note.css'
.preview
  .note
    max-width 960px
    margin 15px auto 0 auto
    .title
      font-size 40px
    .subheading
      display flex
      align-items center
      .time
        font-size 18px
        font-weight lighter
        margin-right 15px
      .icon
        font-size 15px
        margin-right 5px
  .button1
    position fixed
    right 40px
    bottom 160px
  .button2
    position fixed
    right 40px
    bottom 100px
</style>
