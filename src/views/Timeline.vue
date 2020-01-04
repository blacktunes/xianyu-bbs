<template>
  <div>
    <el-timeline class="timeline">
      <el-timeline-item size="large"
                        :type="item.topic ? '' : 'success'"
                        :icon="item.topic ? '' : 'el-icon-plus'"
                        :timestamp="item.time"
                        placement="top" v-for="(item, index) in noteList"
                        :key="index">
        <el-card>
          <h4><span class="author" v-if="item.author">{{item.author}} 发表了 </span>{{item.title}}</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script type="text/ecmascript-6">
import { getAllNote } from '@/api/store'

export default {
  data () {
    return {
      noteList: []
    }
  },
  created () {
    getAllNote().then((res) => {
      let data = res.data[0].concat(res.data[1])
      data.sort(function (a, b) {
        return b.time > a.time ? 1 : -1
      })
      this.noteList = data
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .timeline
    .author
      font-weight normal
</style>
