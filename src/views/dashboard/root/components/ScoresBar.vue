<template>
  <div id="barScores" />

</template>

<script>
import { Bar } from '@antv/g2plot'
import { getARecord } from '@/api/scores'

export default {
  data() {
    return {
      barData: []
    }
  },
  mounted() {
    getARecord('total').then(res => {
      console.log('getARecord', res)
      const scoresRecord = res.data
      this.barData.push({ subject: '语文', value: scoresRecord['chineseAverage'] })
      this.barData.push({ subject: '数学', value: scoresRecord['mathAverage'] })
      this.barData.push({ subject: '英语', value: scoresRecord['englishAverage'] })
      this.barData.push({ subject: '物理', value: scoresRecord['physicsAverage'] })
      this.barData.push({ subject: '化学', value: scoresRecord['chemistryAverage'] })
      this.barData.push({ subject: '生物', value: scoresRecord['biologyAverage'] })
      this.barData.push({ subject: '总分', value: scoresRecord['totalAverage'] })
      this.buildBar()
    })
  },
  methods: {
    buildBar() {
      const bar = new Bar('barScores', {
        label: {
          style: {
            fill: 'red',
            opacity: 0.7,
            fontSize: 15
          }
        },
        data: this.barData,
        xField: 'value',
        yField: 'subject',
        seriesField: 'subject',
        legend: {
          position: 'top-left'
        }
      })

      bar.render()
    }
  }

}
</script>

<style scoped>

</style>
