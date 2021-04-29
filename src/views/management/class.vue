<template>
  <el-col :span="24" style="padding: 10px">
    <el-card class="box-card" style="border-radius: 10px;">
      <h3 style="text-align: center">2020-2021学年春季学期课表</h3>
      <el-tag type="success" effect="dark">高一(1)班</el-tag>
      <div style="float: right">
        <el-select v-model="valueYear" placeholder="请选择学年" style="padding: 5px">
          <el-option
            v-for="item in optionsYear"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select v-model="valueLevel" placeholder="请选择学期" style="padding: 5px">
          <el-option
            v-for="item in optionsLevel"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select v-model="valueWeek" placeholder="请选择单双周" style="padding: 5px">
          <el-option
            v-for="item in optionsWeek"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>

      <CourseTable />
    </el-card>
  </el-col>
</template>

<script>
import CourseTable from './components/CourseTable'
export default {
  name: 'Class',
  components: {
    CourseTable
  },
  data() {
    return {
      optionsYear: ['2020-2021', '2019-2020', '2018-2019'],
      valueYear: '2020-2021',
      optionsLevel: ['春季', '秋季'],
      valueLevel: '春季',
      optionsWeek: ['单周', '双周'],
      valueWeek: '单周'
    }
  }
}
</script>

<style scoped>

</style>
