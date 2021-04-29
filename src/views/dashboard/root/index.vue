<template>
  <div class="dashboard-editor-container">
    <el-alert
      type="success"
    >
      2019级年级主任<strong style="color: blue">{{ name }}</strong>，欢迎您登录
    </el-alert>
    <panel-group-root @handleSetLineChartData="handleSetLineChartData" />
    <el-collapse v-model="activeNames" style="background:#fff;padding:3px 16px 0;margin-bottom:25px;border-radius: 10px;">
      <el-collapse-item title="年级考勤统计图表" name="1">
        <el-row>
          <line-chart :chart-data="lineChartData" />
        </el-row>
      </el-collapse-item>
    </el-collapse>

    <div style="margin-bottom: 25px;">
      <el-card class="box-card" style="border-radius: 10px;padding: 10px">
        <el-tag effect="plain">学工信息统计</el-tag>
        <el-tabs v-model="activeName" style="margin: 5px" @tab-click="handleClick">
          <el-tab-pane label="人数统计" name="first">
            <h2>2019级</h2>
            <el-col :span="12">
              <BulletChartRoot />
            </el-col>
            <el-col :span="12">
              <BulletChartRootTeacher />
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="教师管理" name="second">

            <el-col :span="22" style="padding: 10px">
              <el-select v-model="value" style="border-radius: 10px;" filterable placeholder="请选择科目">
                <el-option
                  v-for="item in teacherList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>

            <el-col :span="12" style="padding: 10px">
              <el-card class="box-card" style="height: 600px">
                <div slot="header" class="clearfix">
                  <span>老师周代课量</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <TeacherBar />
              </el-card>
            </el-col>
            <el-col :span="12" style="padding: 10px;">
              <el-card class="box-card" style="height: 600px">
                <div slot="header" class="clearfix">
                  <span>老师考核</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <el-table
                  :data="tableData"
                  stripe
                  style="width: 100%"
                >
                  <el-table-column
                    prop="name"
                    label="姓名"
                  />
                  <el-table-column
                    prop="scores"
                    label="评价分数"
                    sortable
                  />
                  <el-table-column
                    prop="kpi"
                    label="绩效分数"
                    sortable
                  />
                </el-table>
              </el-card>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="学生成绩" name="third">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>年级成绩统计</span>
              </div>
              <el-tag effect="plain">当前考试：<strong style="color: red">2021年第四次摸底考试</strong></el-tag>
              <el-tabs v-model="activeScores" style="margin: 5px" @tab-click="handleClickScores">
                <el-tab-pane label="各学科成绩分析" name="first">
                  <el-col :span="12" style="padding: 10px;">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>总体平均分</span>
                      </div>
                      <ScoresBar />
                    </el-card>
                  </el-col>
                  <el-col :span="12" style="padding: 10px;">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>成绩分析(分段人数)</span>
                      </div>
                      <ScoresPie />
                    </el-card>
                  </el-col>
                  <el-col :span="24" style="padding: 10px;">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>成绩比较</span>
                      </div>
                      <el-col :span="4">
                        <div style="margin: 5px">
                          <el-tag effect="plain">较上次总平均分<span style="color: red">提升20</span>分</el-tag>
                        </div>
                        <div style="margin: 5px">
                          <el-tag effect="plain">语文<span style="color: green">降低2.7</span>分</el-tag>
                        </div>
                        <div style="margin: 5px">
                          <el-tag effect="plain">数学<span style="color: red">提升8.9</span>分</el-tag>
                        </div>
                        <div style="margin: 5px">
                          <el-tag effect="plain">英语<span style="color: green">降低0.3</span>分</el-tag>
                        </div>
                        <div style="margin: 5px">
                          <el-tag effect="plain">物理<span style="color: red">提升5.7</span>分</el-tag>
                        </div>
                        <div style="margin: 5px">
                          <el-tag effect="plain">化学<span style="color: green">降低1.6</span>分</el-tag>
                        </div>
                        <div style="margin: 5px">
                          <el-tag effect="plain">生物<span style="color: red">提升7.2</span>分</el-tag>
                        </div>
                      </el-col>
                      <el-col :span="20" style="margin-bottom: 5px">
                        <ScoresLine />
                      </el-col>
                    </el-card>
                  </el-col>
                </el-tab-pane>
                <el-tab-pane label="学生成绩分析" name="second">
                  <el-col :span="12" style="padding: 10px;">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>学生排名</span>
                      </div>
                      <el-select v-model="selectSubject" placeholder="请选择" @change="switchSubject">
                        <el-option
                          v-for="item in subjectName"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                      <el-tabs v-model="activeTopTailScores" @tab-click="handleClickTopOrTail">
                        <el-tab-pane label="年级前十名" name="topScores">
                          <TopScoresTable :exam-subject="examSubject" :top-or-tail="TopOrTail" />
                        </el-tab-pane>
                        <el-tab-pane label="年级后十名" name="tailScores">
                          <TopScoresTable :exam-subject="examSubject" :top-or-tail="TopOrTail" />
                        </el-tab-pane>
                      </el-tabs>
                    </el-card>
                  </el-col>
                  <el-col :span="12" style="padding: 10px;">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>突出个人</span>
                      </div>
                    </el-card>
                  </el-col>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="班级管理" name="fourth">班级管理</el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import PanelGroupRoot from './components/PanelGroupRoot'
import LineChart from '../admin/components/LineChart'
import BulletChartRoot from './components/BulletChartRoot'
import BulletChartRootTeacher from './components/BulletChartRootTeacher'
import TeacherBar from './components/TeacherBar'
import ScoresBar from './components/ScoresBar'
import ScoresPie from './components/ScoresPie'
import ScoresLine from './components/ScoresLine'
import TopScoresTable from './components/TopScoresTable'
import { mapGetters } from 'vuex'

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
  name: 'RootEditor',
  components: {
    TeacherBar,
    PanelGroupRoot,
    LineChart,
    BulletChartRoot,
    BulletChartRootTeacher,
    ScoresBar,
    ScoresPie,
    ScoresLine,
    TopScoresTable
  },
  computed: {
    ...mapGetters(['name'])
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      activeNames: ['1'],
      activeName: 'first',
      activeScores: 'first',
      activeTopTailScores: 'topScores',
      examSubject: {
        exam: 'scores_1',
        subject: ''
      },
      TopOrTail: 'topScores',
      teacherList: [{
        value: '语文',
        label: '语文'
      }, {
        value: '数学',
        label: '数学'
      }, {
        value: '英语',
        label: '英语'
      }, {
        value: '物理',
        label: '物理'
      }, {
        value: '化学',
        label: '化学'
      }, {
        value: '生物',
        label: '生物'
      }, {
        value: '体育',
        label: '体育'
      }],
      value: '',
      subjectName: [{
        value: 'chineseRank',
        label: '语文'
      }, {
        value: 'mathRank',
        label: '数学'
      }, {
        value: 'englishRank',
        label: '英语'
      }, {
        value: 'physicsRank',
        label: '物理'
      }, {
        value: 'chemistryRank',
        label: '化学'
      }, {
        value: 'biologyRank',
        label: '生物'
      }, {
        value: 'totalRank',
        label: '总分'
      }],
      selectSubject: '',
      tableData: [{
        name: '李凯',
        scores: 85,
        kpi: 'B'
      },
      {
        name: '李凯',
        scores: 85,
        kpi: 'B'
      },
      {
        name: '常晨',
        scores: 97,
        kpi: 'A'
      }, {
        name: '王乐',
        scores: 83,
        kpi: 'B'
      }, {
        name: '张帆',
        scores: 87,
        kpi: 'B'
      }, {
        name: '刘永波',
        scores: 88,
        kpi: 'B'
      }, {
        name: '朱正',
        scores: 80,
        kpi: 'B'
      }, {
        name: '张晓红',
        scores: 83,
        kpi: 'B'
      }, {
        name: '刘永彬',
        scores: 84,
        kpi: 'B'
      }]
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    handleClick(tab, event) {
    },
    handleClickScores(tab, event) {
    },
    handleClickTopOrTail(event) {
      this.TopOrTail = event.name
    },
    switchSubject() {
      console.log('switchSubject', this.selectSubject)
      this.examSubject.subject = this.selectSubject
    }
  }
}
</script>

<style scoped>
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
