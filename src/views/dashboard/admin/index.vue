<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-collapse v-model="activeNames" style="background:#fff;padding:3px 16px 0;margin-bottom:25px;border-radius: 10px;">
      <el-collapse-item title="班级考勤统计图表" name="1">
        <el-row>
          <line-chart :chart-data="lineChartData" />
        </el-row>
      </el-collapse-item>
    </el-collapse>

    <div style="margin-bottom: 25px;">
      <el-card class="box-card" style="border-radius: 10px;padding: 10px">
        <h2>高一(1)班</h2>
        <el-col :span="18">
          <BulletChart />
          <el-col :span="24">
            <el-card class="box-card" style="border-radius: 10px;">
              <div slot="header" class="clearfix">
                <span>上次考试情况统计</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
              </div>
              <el-col :span="24" style="margin: 5px">
                <el-tag>最近一次考试：<strong style="color: red">2021学年第三次月考</strong></el-tag>
              </el-col>
              <el-col :span="13" style="margin-top: 20px">
                <ScoresChart />
              </el-col>
              <el-col :span="11">
                <ScoresBar />
              </el-col>
            </el-card>
          </el-col>
        </el-col>

        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <box-card />
        </el-col>
      </el-card>
    </div>

    <!--    <el-row :gutter="32">-->
    <!--      <el-col :xs="24" :sm="24" :lg="8">-->
    <!--        <div class="chart-wrapper">-->
    <!--          <raddar-chart />-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--      <el-col :xs="24" :sm="24" :lg="8">-->
    <!--        <div class="chart-wrapper">-->
    <!--          <pie-chart />-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--      <el-col :xs="24" :sm="24" :lg="8">-->
    <!--        <div class="chart-wrapper">-->
    <!--          <bar-chart />-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->

    <!--    <el-row :gutter="8">-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">-->
    <!--        <transaction-table />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
    <!--        <todo-list />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
    <!--        <box-card />-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import BulletChart from './components/BulletChart'
import ScoresChart from './components/ScoresChart'
import ScoresBar from './components/ScoresBar'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    BoxCard,
    BulletChart,
    ScoresChart,
    ScoresBar
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      activeNames: ['1']
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 30px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 25px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
