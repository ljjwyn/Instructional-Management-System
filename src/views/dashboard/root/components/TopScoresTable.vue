<template>
  <el-table
    :data="topScoresData"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="学号">
            <span>{{ props.row.studentId }}</span>
          </el-form-item>
          <el-form-item label="姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="班级 ID">
            <span>{{ props.row.classId }}</span>
          </el-form-item>
          <el-form-item label="语文">
            <span>{{ props.row.chinese }}</span>
          </el-form-item>
          <el-form-item label="数学">
            <span>{{ props.row.math }}</span>
          </el-form-item>
          <el-form-item label="英语">
            <span>{{ props.row.english }}</span>
          </el-form-item>
          <el-form-item label="物理">
            <span>{{ props.row.physics }}</span>
          </el-form-item>
          <el-form-item label="化学">
            <span>{{ props.row.chemistry }}</span>
          </el-form-item>
          <el-form-item label="生物">
            <span>{{ props.row.biology }}</span>
          </el-form-item>
          <el-form-item label="总分">
            <span style="color: red;">{{ props.row.total }}</span>
          </el-form-item>
          <el-form-item label="总排名">
            <span style="color: red;">{{ props.row.totalRank }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name"
    />
    <el-table-column
      label="班级 ID"
      prop="classId"
    />
    <el-table-column
      label="分数"
      sortable
      :prop="subjectScoresShow"
    />
    <el-table-column
      label="排名"
      sortable
      :prop="subjectRankShow"
    />
  </el-table>
</template>

<script>
import { getTopTailScores } from '@/api/scores'

export default {
  props: {
    examSubject: {
      type: Object,
      required: true
    },
    TopOrTail: {
      default: 'topScores',
      type: String,
      required: true
    }
  },
  data() {
    return {
      scoresData: [],
      topScoresData: [],
      subjectScoresShow: 'total',
      subjectRankShow: 'totalRank'
    }
  },
  watch: {
    examSubject: {
      deep: true,
      handler(val) {
        console.log('examSubject handler', val)
        console.log('examSubject this.TopOrTail', this.TopOrTail)
        this.getTopTail()
        this.subjectScoresShow = val['subject'].slice(0, val['subject'].length - 4)
        console.log('subjectScoresShow', this.subjectScoresShow)
        this.subjectRankShow = val['subject']
      }
    },
    TopOrTail: {
      deep: true,
      handler(val) {
        console.log('TopOrTail handler', val)
        this.topScoresData = this.scoresData[val]
      }
    }
  },
  mounted() {
    console.log('examSubject', this.examSubject)
    console.log('TopOrTail', this.TopOrTail)
  },
  methods: {
    getTopTail() {
      getTopTailScores(this.examSubject).then(res => {
        console.log('getTopTailScores', res)
        this.scoresData = res.data
        this.topScoresData = this.scoresData[this.TopOrTail]
      })
    }

  }
}
</script>

<style scoped />
</template>
