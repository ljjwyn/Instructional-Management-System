<template>
  <div>
    <el-col id="containerA" :span="8" style="width: 135px;height: 135px" />
    <el-col id="containerB" :span="8" style="width: 135px;height: 135px" />
    <el-col id="containerC" :span="8" style="width: 135px;height: 135px" />
  </div>
</template>
<script>
import { Liquid } from '@antv/g2plot'
export default {
  mounted() {
    this.buildLiquid()
  },
  methods: {
    buildLiquid() {
      const liquidPlotA = new Liquid('containerA', {
        percent: 0.22,
        outline: {
          border: 2,
          distance: 4
        },
        statistic: {
          title: {
            formatter: () => '优秀率',
            style: ({ percent }) => ({
              fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)'
            })
          }
        },
        color: 'green',
        wave: {
          length: 150
        }
      })
      liquidPlotA.render()
      const liquidPlotB = new Liquid('containerB', {
        percent: 0.60,
        outline: {
          border: 2,
          distance: 4
        },
        radius: 0.9,
        statistic: {
          title: {
            formatter: () => '良好率',
            style: ({ percent }) => ({
              fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)'
            })
          }
        },
        color: '#deec20',
        title: '良好比例',
        wave: {
          length: 100
        }
      })
      liquidPlotB.render()
      const liquidPlotC = new Liquid('containerC', {
        percent: 0.13,
        outline: {
          border: 2,
          distance: 4
        },
        statistic: {
          title: {
            formatter: () => '不及格率',
            style: ({ percent }) => ({
              fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)'
            })
          }
        },
        title: '不及格',
        color: 'red',
        wave: {
          length: 80
        }
      })
      liquidPlotC.render()
    }
  }
}
</script>

<style scoped>

</style>
