<template>
  <div class="hide">
    <el-alert title="欢迎来到里站，目前仅用于轻小说归档"
              type="info"
              :closable="false"
              center></el-alert>
    <el-tree :data="bookNameList" :props="props" :load="loadNode" :accordion="true" lazy @node-click="nodeClick"></el-tree>
  </div>
</template>

<script type="text/ecmascript-6">
import { getBookNameList, getBookList } from '@/api/store'

export default {
  data () {
    return {
      bookNameList: [],
      props: {
        label: 'name',
        isLeaf: 'book'
      }
    }
  },
  methods: {
    loadNode (node, resolve) {
      getBookList(node.data.name).then((res) => {
        if (res.data.length < 1) {
          return resolve([])
        }
        let data = []
        for (let i = 0; i < res.data.length; i++) {
          data.push({
            name: res.data[i].fileName,
            bookName: node.data.name,
            book: true
          })
          if (i === res.data.length - 1) {
            return resolve(data)
          }
        }
      })
    },
    nodeClick (node) {
      if (node.book) {
        window.open(`https://bbs-1256427935.cos.ap-guangzhou.myqcloud.com/epub/${node.bookName}/${node.name}.epub`, '_blank')
      }
    }
  },
  created () {
    getBookNameList().then((res) => {
      this.bookNameList = res.data
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.hide
  max-width 960px
  margin 15px auto 0 auto
</style>
