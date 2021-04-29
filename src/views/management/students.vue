<template>
  <el-row>
    <el-col :span="24" style="padding: 10px">
      <el-card class="box-card" style="border-radius: 10px;">
        <div style="margin-top: 10px;width: 400px">
          <el-input v-model="input" placeholder="请输入检索内容">
            <el-select slot="prepend" v-model="select" placeholder="请选择" style="width: 90px;">
              <el-option label="姓名" value="1" />
              <el-option label="年级" value="2" />
              <el-option label="班级" value="3" />
            </el-select>
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </div>
      </el-card>
    </el-col>
    <el-col :span="24" style="padding: 10px">
      <el-card class="box-card" style="border-radius: 10px;">
        <el-table
          :data="tableData"
          height="500"
          stripe="true"
        >
          <el-table-column
            fixed
            prop="name"
            label="姓名"
          />
          <el-table-column
            prop="studentId"
            label="学号"
          />
          <el-table-column
            prop="sex"
            label="性别"
          />
          <el-table-column
            prop="phoneNumber"
            label="手机号"
          />
          <el-table-column
            prop="className"
            label="班级"
          />
          <el-table-column
            prop="grade"
            label="年级"
          />
          <el-table-column
            prop="dormitory"
            label="宿舍号"
          />
          <el-table-column
            prop="parentName"
            label="家长姓名"
          />
          <el-table-column
            prop="parentPhone"
            label="家长电话"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { getAll } from '@/api/userInformation'
export default {
  data() {
    return {
      tableData: [],
      select: '',
      input: ''
    }
  },
  mounted() {
    getAll().then(res => {
      console.log('getAll', res)
      this.tableData = res.data
    })
  }
}
</script>

<style scoped>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
