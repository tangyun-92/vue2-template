/*
 * @Author: 唐云 
 * @Date: 2021-07-24 14:43:31 
 * @Last Modified by:   唐云 
 * @Last Modified time: 2021-07-24 14:43:31 
 */
<template>
  <div class="organization-management">
    <transition name="fade-transform" mode="out-in">
      <div v-if="!isCreate && !isEdit" key="table" class="organization-main">
        <div class="search-container">
          <div class="search-condition">
            <span>机构层级：</span>
            <el-select v-model="search.jgcj" size="small" placeholder="请选择机构层级">
              <!-- <el-option
                v-for="item in orgHierarchyList"
                :key="item.dm"
                :value="item.dm"
                :label="item.mc"
              ></el-option>-->
            </el-select>
          </div>
          <div class="search-condition">
            <span>名称/编号：</span>
            <el-input v-model="search.keywords" size="small" placeholder="请输入名称或编号"></el-input>
          </div>
          <div class="search-btns">
            <el-button type="primary" size="small">查询</el-button>
            <el-button size="small">重置</el-button>
          </div>
        </div>
        <div class="create-btn-wrap">
          <el-button type="primary" size="small">新建机构</el-button>
        </div>
        <div class="content-container">
          <el-table
            :data="tableData"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            row-key="ksgljgid"
          >
            <el-table-column prop="ksgljgid" label="机构标识码"></el-table-column>
            <el-table-column prop="ksgljgmc" label="机构名称"></el-table-column>
            <el-table-column prop="ksgljgjc" label="机构简称"></el-table-column>
            <el-table-column prop="ksgljgcj" label="机构层级"></el-table-column>
            <el-table-column prop="ksgljgdz" label="机构地址"></el-table-column>
            <el-table-column prop="date" label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                <el-popconfirm
                  confirmButtonText="确定"
                  cancelButtonText="取消"
                  icon="el-icon-info"
                  iconColor="red"
                  title="确认删除该数据？"
                  @onConfirm="handleDelete(scope.row.ksgljgid)"
                >
                  <el-button slot="reference" type="text">删除</el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
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
      <div v-else key="form" class="organization-main organization-form">
        <!-- <transition
        name="fade-transform"
        mode="in-out"
        >-->
        <Form :data="formData" @close="closeForm" />
        <!-- </transition> -->
      </div>
    </transition>
  </div>
</template>
<script>
import Form from './components/Form'
export default {
  name: 'OrganizationManagement',
  components: { Form },
  data() {
    return {
      search: {
        jgcj: null,
        keywords: ''
      },
      pageData: {
        total: 0,
        currPage: 1,
        pageSize: 10
      },
      tableData: [],
      isCreate: false,
      isEdit: false,
      formData: {
        jgcj: null,
        sjksjgm: null,
        xzjgm: null,
        gxfw: null,
        ksgljgmc: null,
        ksgljgjc: null,
        ksgljgdz: null,
        ksgljgjd: null,
        ksgljgwd: null,
        fzrxm: null,
        fzrdh: null,
        ksgljgbsm: null,
        kwbgsdh: null,
        sjbgsdh: null,
        spjksdh: null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>