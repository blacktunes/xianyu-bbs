<template>
  <div class="note">
    <el-alert :title="alertText"
              type="info"
              :closable="false"
              center></el-alert>
    <el-form :inline="true" label-position="top" :model="form" :rules="rules" ref="form" v-show="showForm">
      <div class="header">
        <el-form-item label="标题" class="title" prop="title" >
          <el-input v-model.trim="form.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" class="author">
          <el-input v-model.trim="form.author"></el-input>
        </el-form-item>
      </div>
      <div id="toolbar" class="toolbar"></div>
      <el-divider class="divider"></el-divider>
      <div id="editor" class="editor"></div>
      <el-divider class="divider"></el-divider>
      <div class="footer">
        <el-form-item class="select" prop="topic">
          <el-select v-model="form.topic" placeholder="请选择分类" @click.native="selectClick">
            <div v-for="item in topicList" :key="item.id">
              <el-option :label="item.title" :value="item.title"></el-option>
            </div>
          </el-select>
        </el-form-item>
        <el-form-item class="button">
          <el-button @click="submitForm('form')" icon="el-icon-finished">预览</el-button>
        </el-form-item>
      </div>
      <el-divider class="divider"></el-divider>
    </el-form>
    <router-view :form="form" :isEdit="isEdit" :imgList="imgList"></router-view>
    <div class="progress">
      <el-progress v-if="showProgress" :text-inside="true" :stroke-width="26" :percentage="uploadPercent" color="#aaa"></el-progress>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import E from 'wangeditor'
import COS from 'cos-js-sdk-v5'
import { getTopic } from '@/api/store'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      uploadPercent: 0,
      showProgress: false,
      showForm: true,
      imgList: [],
      form: {
        title: '',
        topic: '',
        text: '',
        author: null
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入标题',
            trigger: 'blur'
          }
        ],
        topic: [
          {
            required: true,
            message: '请选择分类',
            trigger: 'change'
          }
        ]
      },
      topicList: [],
      isEdit: false
    }
  },
  computed: {
    ...mapState([
      'xianyu',
      'edit'
    ]),
    alertText () {
      if (this.isEdit) {
        return '当前处于编辑模式，提交后将会修改原文章'
      } else {
        return '当前处于新建模式，提交后将会创建新文章'
      }
    }
  },
  methods: {
    // reset () {
    //   this.uploadPercent = 0
    //   this.imgList = []
    //   this.form = {
    //     title: '',
    //     topic: '',
    //     text: '',
    //     author: null
    //   }
    //   this.editor.txt.html('')
    // },
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.form.text = this.editor.txt.html()
          if (!this.isEdit) {
            this.form.time = new Date().toLocaleString('chinese', { hour12: false })
          }
          this.showForm = false
          this.$router.push('/input/preview')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    selectClick () {
      if (this.topicList.length < 1) {
        this._getTopic()
      }
    },
    _getTopic () {
      getTopic().then((res) => {
        if (res.status === 200) {
          this.topicList = res.data
        }
      })
    }
  },
  mounted () {
    this.editor = new E('#toolbar', '#editor')
    this.editor.customConfig.zIndex = 100
    // 隐藏网络图片tab
    this.editor.customConfig.showLinkImg = false
    // 单次上传图片张数
    this.editor.customConfig.uploadImgMaxLength = 1
    // 图片上传配置
    this.editor.customConfig.customUploadImg = (files, insert) => {
      this.showProgress = true
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法
      const filename = 'pic-' + Date.now() + '.' + files[0].name.split('.').pop()
      this.cos.putObject({
        Bucket: 'bbs-1256427935',
        Region: 'ap-guangzhou',
        Key: 'temp/' + filename,
        Body: files[0],
        onProgress: (progressData) => {
          this.uploadPercent = progressData.percent * 100
        }
      }, (err, data) => {
        if (!err) {
          this.imgList.push(filename)
          insert('https://' + data.Location)
          this.showProgress = false
          this.uploadPercent = 0
        } else {
          console.log(err)
        }
      })
    }
    this.editor.customConfig.menus = [
      // 'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      // 'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      // 'video', // 插入视频
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ]
    this.editor.create()
    if (this.$route.query.id) {
      this.form.title = this.edit.title
      this.form.author = this.edit.author
      this.editor.txt.html(this.edit.text)
      this.form.topic = this.edit.topic
      this.form.time = this.edit.time
      this.form.id = this.edit.id
      this.isEdit = true
    }
  },
  created () {
    this.cos = new COS({
      SecretId: 'AKIDtYkgMnrMQHuHrXpGkRt64rOjpV5RJP0M',
      SecretKey: 'av0VlbDaZJp5A0h8VeZS7XtoV2JLkbDl'
    })
    if (this.$route.path === '/input' && !this.xianyu) {
      this.$router.push('/')
    }
    this._getTopic()
  },
  activated () {
    this.showForm = true
    if (!this.$route.query.id) {
      this.isEdit = false
    }
  },
  watch: {
    $route (to, from) {
      if (from.path === '/input/preview') {
        this.showForm = true
      } else if (to.path === '/input' && !this.xianyu) {
        this.$router.push('/')
      } else if (from.name === 'note' && this.$route.query.id) {
        this.form.title = this.edit.title
        this.form.author = this.edit.author
        this.editor.txt.html(this.edit.text)
        this.form.topic = this.edit.topic
        this.form.time = this.edit.time
        this.form.id = this.edit.id
        this.isEdit = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/note.css'

.note
  max-width 960px
  margin 15px auto
  height calc(100vh - 61px - 30px)
  .header
    display flex
    .title
      flex 0 0 70%
    .author
      flex 0 0 29%
  .editor
    border-left 1px solid #ddd
    border-right 1px solid #ddd
    & >>> .w-e-text
      min-height 300px
  .footer
    display flex
    align-items center
    margin-top 25px
    .button
      font-size 10px
  .divider
    margin 12px auto
  .progress
    z-index 500
    position fixed
    width 200px
    bottom 180px
    right -40px
    transform:rotate(-90deg)
</style>
