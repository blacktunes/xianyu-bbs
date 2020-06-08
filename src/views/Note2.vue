<template>
  <div>
    <note-list :data="data" />
  </div>
</template>

<script type="text/ecmascript-6">
import { getShowNoteList } from '@/api/store'
import NoteList from '../components/Note/NoteList'

export default {
  components: {
    NoteList
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
    _getShowNoteList () {
      getShowNoteList().then((res) => {
        if (res.status === 200) {
          this.data = res.data.showNoteList
        }
      })
    }
  },
  created () {
    this._getShowNoteList()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
