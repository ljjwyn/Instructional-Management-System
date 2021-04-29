<template>
  <div id="scoresPie" />
</template>

<script>
import { Pie } from '@antv/g2plot'
import { getARecord } from '@/api/scores'

export default {
  data() {
    return {
      pieData: []
    }
  },
  mounted() {
    getARecord('total').then(res => {
      console.log('getARecord', res)
      const scoresData = res.data
      this.pieData.push({ level: '优秀 x>530分', value: scoresData['excellent'] })
      this.pieData.push({ level: '良好 430<x<=530分', value: scoresData['good'] })
      this.pieData.push({ level: '差 x<=430分', value: scoresData['fail'] })
      this.buildScoresPie()
    })
  },
  methods: {

    buildScoresPie() {
      const piePlot = new Pie('scoresPie', {
        appendPadding: 5,
        data: this.pieData,
        angleField: 'value',
        colorField: 'level',
        radius: 0.50,
        label: {
          type: 'spider',
          labelHeight: 28,
          content: '{percentage}\n{name}'
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }]
      })

      piePlot.render()
    }
  }
}
</script>

<style scoped>

</style>
