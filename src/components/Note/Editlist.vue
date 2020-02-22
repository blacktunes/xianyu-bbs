<template>
  <div class="edit-list">
    <p>编辑记录</p>
    <div v-for="item in editList" :key="item.id" @click="toEdit(item.id)">
      <el-card class="card">
        <p>{{item.title}}</p>
        <p>{{item.time}} {{item.author}}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getEditList } from '@/api/store'

export default {
  data () {
    return {
      editList: []
    }
  },
  methods: {
    toEdit (id) {
      this.$router.push(`${this.$route.path + '/' + id}`)
    },
    _getEditList () {
      getEditList(this.$route.params.id).then((res) => {
        if (res.data.ERR_CODE === 0) {
          this.editList = res.data.editList
        }
      })
    }
  },
  created () {
    this._getEditList()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.edit-list
  .card
    margin 5px auto
</style>
