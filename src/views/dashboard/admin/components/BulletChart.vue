<template>
  <div id="rbtop" style="float: left;width: 800px;height: 110px;margin-left: 20px;" />
</template>
<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

export default {
  mounted() {
    this.buildPlot()
  },
  methods: {
    buildPlot() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('rbtop'))
      // 指定图表的配置项和数据
      const option = {
        title: [{
          text: '班级男女比例',
          x: '340',
          y: '15',
          textStyle: {
            color: '#070707',
            fontSize: 18
          }
        }],
        // 设置图表的位置
        grid: {
          /* x: 20, // 左间距*/
          y: 80, // 上间距
          x2: 20, // 右间距
          y2: 40, // 下间距
          width: 750,
          containLabel: true // grid 区域是否包含坐标轴的刻度标签, 常用于『防止标签溢出』的场景
        },
        // 提示框组件
        tooltip: {
          trigger: 'axis', // 触发类型, axis: 坐标轴触发
          axisPointer: {
            // 指示器类型  'line' 直线指示器 'shadow' 阴影指示器 'none' 无指示器
            // 'cross' 十字准星指示器 其实是种简写，表示启用两个正交的轴的 axisPointer
            type: 'none'
          },
          textStyle: {
            color: '#000000' // 文字颜色
          },
          // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式 折线（区域）图、柱状（条形）图、K线图
          // {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
          formatter: '{a0}: {c0}人<br />{a1}: {c1}人<br />'
        },
        // 图例组件

        // X轴
        xAxis: {
          type: 'value', // 坐标轴类型,   'value' 数值轴，适用于连续数据
          // 坐标轴刻度
          axisTick: {
            show: false // 是否显示坐标轴刻度 默认显示
          },
          // 坐标轴轴线
          axisLine: { // 是否显示坐标轴轴线 默认显示
            show: false // 是否显示坐标轴轴线 默认显示
          },
          // 坐标轴在图表区域中的分隔线
          splitLine: {
            show: false // 是否显示分隔线。默认数值轴显示
          },
          // 坐标轴刻度标签
          axisLabel: {
            show: false // 是否显示刻度标签 默认显示
          }
        },
        yAxis: [
          // 左侧Y轴
          {
            // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
            // 为该类型时必须通过 data 设置类目数据
            type: 'category',
            // 坐标轴刻度
            axisTick: {
              show: false // 是否显示坐标轴刻度 默认显示
            },
            // 坐标轴轴线
            axisLine: { // 是否显示坐标轴轴线 默认显示
              show: false, // 是否显示坐标轴轴线 默认显示
              lineStyle: { // 坐标轴线线的颜色
                color: '#17ad18'
              }
            },
            // 坐标轴在图表区域中的分隔线
            splitLine: {
              show: false // 是否显示分隔线。默认数值轴显示
            },
            // 坐标轴刻度标签
            axisLabel: {
              show: true, // 是否显示刻度标签 默认显示
              fontSize: 16, // 文字的字体大小
              color: '#0c0c0c', // 刻度标签文字的颜色
              // 使用字符串模板，模板变量为刻度默认标签 {value}
              formatter: '{value}'
            },
            // 类目数据，在类目轴（type: 'category'）中有效
            data: ['']
          }
        ],
        legend: {
          data: ['男生', '女生'],
          x: '560',
          y: '40',
          textStyle: { // 图例文字的样式
            color: '#070707',
            fontSize: 16
          }
        },
        // 系列
        series: [
          {
            type: 'bar', // 系列类型
            name: '男生', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            itemStyle: {
              color: '#00d39a', // 设置柱子颜色
              barBorderRadius: [10, 0, 0, 10] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
            },
            label: {
              // eslint-disable-next-line no-mixed-spaces-and-tabs
              normal: {
                // eslint-disable-next-line no-mixed-spaces-and-tabs
                show: true,
                // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10]
                // 相对的百分比 position: ['50%', '50%']
                position: 'inside'
                // eslint-disable-next-line no-mixed-spaces-and-tabs
              }
            },
            data: [31] // 系列中的数据内容数组
          },
          {
            type: 'bar', // 系列类型
            name: '女生', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            itemStyle: {
              color: '#f6084c', // 设置柱子颜色
              barBorderRadius: [0, 10, 10, 0] // 圆角半径, 单位px, 支持传入数组分别指定 4 个圆角半径
            },
            // 图形上的文本标签
            label: {
              // eslint-disable-next-line no-mixed-spaces-and-tabs
            	normal: {
                // eslint-disable-next-line no-mixed-spaces-and-tabs
            		show: true,
                // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10]
                // 相对的百分比 position: ['50%', '50%']
                position: 'inside'
                // eslint-disable-next-line no-mixed-spaces-and-tabs
            	}
            },
            data: [23] // 系列中的数据内容数组
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
