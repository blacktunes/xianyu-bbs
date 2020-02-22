<template>
  <div>
    <el-timeline class="timeline">
      <el-timeline-item size="large"
                        :type="item.id ? 'success' : ''"
                        :icon="item.id ? 'el-icon-plus' : ''"
                        :timestamp="item.time"
                        placement="top" v-for="(item, index) in noteList"
                        :key="index">
        <el-card>
          <h4>
            <span class="author" v-if="item.author">{{item.author}} 发表了 </span>
            <span class="author" v-if="item.editor">{{item.editor}} 修改了 </span>
            {{item.title}}
          </h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script type="text/ecmascript-6">
import { getTimeLine } from '@/api/store'

export default {
  data () {
    return {
      noteList: []
    }
  },
  created () {
    getTimeLine().then((res) => {
      this.noteList = res.data.timeLine
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .timeline
    .author
      font-weight normal
</style>
