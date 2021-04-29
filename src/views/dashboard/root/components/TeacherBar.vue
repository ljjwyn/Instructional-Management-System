<template>
  <div id="teacherBar" />
</template>

<script>
import { Column } from '@antv/g2plot'

export default {
  name: 'TeacherBar',
  data() {
    return {
      workloadData: [
        {
          name: '李凯',
          count: 18
        },
        {
          name: '常晨',
          count: 20
        },
        {
          name: '王乐',
          count: 12
        },
        {
          name: '张帆',
          count: 15
        },
        {
          name: '刘永波',
          count: 18
        },
        {
          name: '朱正',
          count: 10
        },
        {
          name: '张晓红',
          count: 13
        },
        {
          name: '刘永彬',
          count: 11
        }
      ]
    }
  },
  mounted() {
    this.buildColumn()
  },
  methods: {
    buildColumn() {
      const columnPlot = new Column('teacherBar', {
        title: {
          visible: true,
          text: 'g2折线图示例'
        },
        description: {
          visible: true,
          text: '折线图示例，这是一个副标题'
        },
        data: this.workloadData,
        xField: 'name',
        yField: 'count',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6
          }
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false
          }
        },
        meta: {
          name: {
            alias: '姓名'
          },
          count: {
            alias: '周代课量'
          }
        }
      })
      columnPlot.render()
    }
  }
}
</script>

<style scoped>

</style>
