<template>
  <div id="scoresLine" />
</template>

<script>
import { Line } from '@antv/g2plot'
const data = [
  { name: '数学', exam: '2021年第四次摸底考试', value: 90.46 },
  { name: '数学', exam: '2021年第三次摸底考试', value: 80.91 },
  { name: '数学', exam: '2021年第二次摸底考试', value: 85.12 },
  { name: '数学', exam: '2021年第一次摸底考试', value: 78.90 },
  { name: '语文', exam: '2021年第四次摸底考试', value: 100.51 },
  { name: '语文', exam: '2021年第三次摸底考试', value: 103.23 },
  { name: '语文', exam: '2021年第二次摸底考试', value: 99.15 },
  { name: '语文', exam: '2021年第一次摸底考试', value: 96.78 },
  { name: '英语', exam: '2021年第四次摸底考试', value: 87.61 },
  { name: '英语', exam: '2021年第三次摸底考试', value: 87.90 },
  { name: '英语', exam: '2021年第二次摸底考试', value: 84.29 },
  { name: '英语', exam: '2021年第一次摸底考试', value: 80.12 },
  { name: '物理', exam: '2021年第四次摸底考试', value: 60.89 },
  { name: '物理', exam: '2021年第三次摸底考试', value: 53.12 },
  { name: '物理', exam: '2021年第二次摸底考试', value: 54.98 },
  { name: '物理', exam: '2021年第一次摸底考试', value: 49.78 },
  { name: '化学', exam: '2021年第四次摸底考试', value: 65.81 },
  { name: '化学', exam: '2021年第三次摸底考试', value: 67.21 },
  { name: '化学', exam: '2021年第二次摸底考试', value: 61.19 },
  { name: '化学', exam: '2021年第一次摸底考试', value: 58.78 },
  { name: '生物', exam: '2021年第四次摸底考试', value: 65.24 },
  { name: '生物', exam: '2021年第三次摸底考试', value: 57.98 },
  { name: '生物', exam: '2021年第二次摸底考试', value: 56.28 },
  { name: '生物', exam: '2021年第一次摸底考试', value: 50.31 }
]
export default {
  mounted() {
    this.buildScoresLine()
  },
  methods: {
    buildScoresLine() {
      const linePlot = new Line('scoresLine', {
        data,
        xField: 'exam',
        yField: 'value',
        seriesField: 'name',
        yAxis: {
          label: {
            formatter: (v) => `${v} 分`
          }
        },
        legend: {
          position: 'top'
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
          appear: {
            animation: 'path-in',
            duration: 5000
          }
        }
      })

      linePlot.render()
    }
  }
}
</script>

<style scoped>

</style>
