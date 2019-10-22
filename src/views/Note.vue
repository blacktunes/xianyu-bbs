<template>
  <div class="note">
    <div id="editor">
      <p>测试用编辑器，暂无上传功能</p>
    </div>
    <el-divider></el-divider>
    <el-button @click="click">test</el-button>
    <el-divider></el-divider>
    <div v-html="text"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import E from 'wangeditor'

export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    click () {
      this.text = this.editor.txt.html()
    }
  },
  mounted () {
    this.editor = new E('#editor')
    this.editor.customConfig.uploadImgServer = 'https://www.feizhouxianyu.cn:4001/upload'
    this.editor.customConfig.uploadFileName = 'avatar'
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
      // 'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      // 'emoticon', // 表情
      // 'image', // 插入图片
      'table', // 表格
      // 'video', // 插入视频
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ]
    this.editor.create()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
/* table 样式 */
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

/* code 样式 */
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}

/* ul ol 样式 */
ul, ol {
  margin: 10px 0 10px 20px;
}

.note
  max-width 960px
  margin 15px auto
</style>
