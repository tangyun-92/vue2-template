/* 考生报名信息 */

<template>
  <div class="students-infomation">
    <div class="students-select">
      <el-select
        v-model="itemValue"
        size="small"
        placeholder="==请选择考试项目=="
        @change="handleDataChange"
      >
        <el-option v-for="item in options" :key="item.dm" :label="item.mc" :value="item.dm"></el-option>
      </el-select>
      <el-input v-model="inputValue" size="small" clearable placeholder="请输入内容"></el-input>
      <div>
        <el-button size="small" type="primary" @click="handleSearch">搜索</el-button>
      </div>
    </div>
    <div class="dr-btn">
      <el-button size="small" type="primary">导入</el-button>
    </div>
    <div class="students-table">
      <el-table :data="studentData" style="width: 100%">
        <el-table-column prop="ksh" label="考生号"></el-table-column>
        <el-table-column prop="xm" label="考生姓名" width="80"></el-table-column>
        <el-table-column prop="xb" label="性别" width="50"></el-table-column>
        <el-table-column prop="sfzjlx" label="身份证件类型码"></el-table-column>
        <el-table-column prop="sfzjhm" label="身份证件号码"></el-table-column>
        <el-table-column prop="csrq" label="出生日期"></el-table-column>
        <el-table-column prop="mz" label="民族" width="50"></el-table-column>
        <el-table-column prop="hkszdm" label="户口所在地码"></el-table-column>
        <el-table-column prop="hkszdm" label="户口所在地"></el-table-column>
        <el-table-column prop="zp" label="照片路径"></el-table-column>
        <el-table-column prop="wyyz" label="应试外语语种代码"></el-table-column>
        <el-table-column prop="wyyzm" label="应试外语语种"></el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        :pageSize="studentsData.pageSize"
        :current-page="studentsData.currentPage"
        :total="1000"
        background
        layout="prev, pager, next, sizes, jumper"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StudentArrgementData',
  data() {
    return {
      options: [],
      studentData: [],
      itemValue: '',
      inputValue: '',
      pageSize: 10,
      currentPage: 0,
      studentsData: {
        pageSize: 10,
        currentPage: 1,
        keywords: '',
        ksbh: ''
      }
    }
  },
  created() {
    this.options = this.$store.state.common.allMbData.jy_kslxmb
    this.itemValue = this.options[0].mc
    this.studentData.ksbh = this.options[0].dm
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
.students-infomation .el-table th.is-leaf {
  background-color: #cccccc;
}
</style>