<template>
  <div id="container" />
</template>

<script>
import { Bar } from '@antv/g2plot'
export default {
  data() {
    return {
      barData: [
        { range: '600分以上', value: 3 },
        { range: '550-600分', value: 12 },
        { range: '500-549分', value: 14 },
        { range: '450-499分', value: 20 },
        { range: '449分以下', value: 5 }
      ]
    }
  },
  mounted() {
    this.buildBar()
  },
  methods: {
    buildBar() {
      const bar = new Bar('container', {
        data: this.barData,
        xField: 'value',
        yField: 'range',
        seriesField: 'range',
        legend: {
          position: 'top-left'
        },
        barWidthRatio: 0.3
      })

      bar.render()
    }
  }
}
</script>

<style scoped>

</style>
