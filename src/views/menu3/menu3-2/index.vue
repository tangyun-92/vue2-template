/*
 * @Author: LiangChenkang 
 * @Date: 2020-05-14 13:35:21 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-07-24 14:44:21
 * @description: 事项编排页面
 */

<template>
  <div class="matters-arrangement container">
    <transition name="fade-transform" mode="out-in">
      <div v-if="!isCreate && !isEdit" key="table" class="matters-arrangement-main">
        <div class="search-container">
          <div class="search-condition">
            <el-select v-model="search.ksbh" size="small" placeholder="考试项目"></el-select>
          </div>
        </div>
        <div class="create-btn-wrap">
          <el-button type="primary" size="small">新增事项</el-button>
        </div>
        <div class="content-container">
          <el-table :data="tableData">
            <el-table-column prop="xh" label="序号"></el-table-column>
            <el-table-column prop="sxmc" label="事项名称"></el-table-column>
            <el-table-column prop="sxyq" label="事项要求"></el-table-column>
            <el-table-column prop="kssj" label="开始时间"></el-table-column>
            <el-table-column prop="jssj" label="结束时间"></el-table-column>
            <el-table-column prop="jsbm" label="关联角色"></el-table-column>
            <el-table-column prop="glxtid" label="关联功能"></el-table-column>
            <el-table-column prop="date" label="操作"></el-table-column>
          </el-table>
        </div>
        <div class="pagination-container">
          <el-pagination
            :total="pageData.total"
            :current-page="pageData.currPage"
            :page-size="pageData.pageSize"
            background
            layout="prev, pager, next, sizes, jumper"
          ></el-pagination>
        </div>
      </div>
      <div v-else key="form">
        <Form :data="formData" @close="handleCloseForm" />
      </div>
    </transition>
  </div>
</template>
<script>
import Form from './components/Form'
export default {
  name: 'MattersArrangement',
  components: { Form },
  data() {
    return {
      search: {
        ksbh: ''
      },
      pageData: {
        total: 0,
        currPage: 1,
        pageSize: 10
      },
      isCreate: false,
      isEdit: false,
      tableData: [],
      createDialogVisible: false,
      formData: {
        sxxh: null,
        sxmc: null,
        sxyq: null,
        kssj: null,
        jssj: null,
        xtbh: null,
        zxtbh: null,
        gnbh: null,
        jsbh: null
      }
    }
  },
  computed: {
    examPlanList() {
      return this.$store.state.common.examPlanList
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>