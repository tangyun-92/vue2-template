<template>
  <div class="mark-students">
    <transition name="fade-transform" mode="out-in">
      <div v-if="!addMark && !editMark">
        <div class="students-select">
          <div>
            <el-select v-model="itemValue" size="small" placeholder="==请选择考试项目==">
              <el-option v-for="item in options" :key="item.dm" :label="item.mc" :value="item.dm"></el-option>
            </el-select>
            <el-select v-model="seachValue" size="small" placeholder="请选择">
              <el-option
                v-for="item in seachOptions"
                :key="item.dm"
                :label="item.mc"
                :value="item.dm"
              ></el-option>
            </el-select>
          </div>

          <div class="mark-btn">
            <el-button size="small" type="primary">查询</el-button>
          </div>
        </div>
        <div class="create-btn-wrap">
          <el-button size="small" type="primary">新增关注</el-button>
        </div>
        <div class="students-table">
          <el-table :data="studentData" style="width: 100%">
            <el-table-column prop="ksh" label="考生号" width="100"></el-table-column>
            <el-table-column prop="xm" label="考生姓名" width="80"></el-table-column>
            <el-table-column prop="sfzjhm" label="身份证件号码" width="180"></el-table-column>
            <el-table-column prop="bjlx" label="标记类型" width="100px"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column prop="sskd" label="所属考点" width="120"></el-table-column>
            <el-table-column prop="cjjg" label="创建机构" width="100"></el-table-column>
            <el-table-column label="操作" width="160"></el-table-column>
          </el-table>
        </div>
        <div class="pagination-container">
          <el-pagination :total="1000" background layout="prev, pager, next, sizes, jumper"></el-pagination>
        </div>
      </div>
      <div v-else key="form">
        <Form :status="status" :editobj="editobj" :ksbh="getData.ksbh" @handleClose="handleClose"></Form>
      </div>
    </transition>
  </div>
</template>
<script>
import Form from './components/Form'
export default {
  name: 'MarkStudents',
  components: { Form },

  data() {
    return {
      itemValue: '',
      seachValue: '',
      options: [],
      seachOptions: [],
      studentData: [],
      editobj: {},
      addMark: false,
      editMark: false,
      status: '',
      getData: {
        currentPage: 1,
        pageSize: 10,
        ksbh: '',
        bjlxdm: ''
      }
    }
  },

  methods: {}
}
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>