/*
 * @Author: 唐云 
 * @Date: 2021-07-24 14:43:57 
 * @Last Modified by:   唐云 
 * @Last Modified time: 2021-07-24 14:43:57 
 */
<template>
  <div class="site-management">
    <transition name="fade-transform" mode="out-in">
      <div v-if="!isCreate && !isEdit" class="site-management-main container">
        <div class="search-tabs">
          <el-tabs v-model="activeName">
            <el-tab-pane label="考场" name="examRoom"></el-tab-pane>
            <el-tab-pane label="考务办公室" name="examBusinessOffice"></el-tab-pane>
            <el-tab-pane label="保密室" name="secretRoom"></el-tab-pane>
            <el-tab-pane label="指挥中心" name="commandCenter"></el-tab-pane>
            <el-tab-pane label="印刷厂" name="printery"></el-tab-pane>
            <el-tab-pane label="扫描点" name="scanPoint"></el-tab-pane>
            <el-tab-pane label="其他" name="others"></el-tab-pane>
          </el-tabs>
        </div>
        <div v-if="activeName !== 'others'" class="search-container">
          <div class="search-condition">
            <!-- <el-cascader
              v-model="search.ksjgid"
              :options="examOrgTreeOptions"
              :props="{ checkStrictly: true, label: 'ksjgmc', value: 'ksjgId'}"
              size="small"
              placeholder="全部机构"
            ></el-cascader>-->
          </div>
          <div class="search-btns">
            <el-button size="small" type="primary">查询</el-button>
            <el-button size="small">重置</el-button>
          </div>
        </div>
        <div v-if="activeName !== 'others'" class="create-btn-wrap">
          <el-button size="small" type="primary">{{ createBtnText }}</el-button>
        </div>
        <div class="content-container">
          <el-table :data="tableData">
            <el-table-column prop="mc" label="holder"></el-table-column>
            <el-table-column v-if="activeName !== 'others'" label="操作">
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
                  <el-button type="text">删除</el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
          <transition-group name="fade-transform" mode="in-out">
            <el-table v-if="activeName === 'examRoom'" key="examRoom" :data="tableData">
              <el-table-column prop="bzhkcmc" label="考点名称"></el-table-column>
              <el-table-column prop="bzhkcjc" label="考点简称"></el-table-column>
              <el-table-column prop="bzhkcid" label="标准化考场标识码"></el-table-column>
              <el-table-column prop="sfbzhkc" label="是否标准化考场"></el-table-column>
              <el-table-column prop="kcsjwz" label="场所地址"></el-table-column>
              <el-table-column label="操作">
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
                    <el-button type="text">删除</el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
            <el-table
              v-if="activeName==='examBusinessOffice'"
              key="examBusinessOffice"
              :data="tableData"
            >
              <el-table-column prop="bzhkdmc" label="考点名称"></el-table-column>
              <el-table-column prop="kwbgsmc" label="考务办公室名称"></el-table-column>
              <el-table-column prop="kwbgsid" label="考务办公室标识码"></el-table-column>
              <el-table-column prop="kwbgssjwz" label="场所地址"></el-table-column>
              <el-table-column label="操作">
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
                    <el-button type="text">删除</el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
            <el-table v-if="activeName === 'secretRoom'" key="secretRoom" :data="tableData">
              <el-table-column prop="sjbmsmc" label="保密室名称"></el-table-column>
              <el-table-column prop="sjbmsid" label="保密室标识码"></el-table-column>
              <el-table-column prop="sjbmsdz" label="保密室标地址"></el-table-column>
              <el-table-column label="操作">
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
                    <el-button type="text">删除</el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
            <el-table v-if="activeName === 'commandCenter'" key="commandCenter" :data="tableData">
              <el-table-column prop="zhzxmc" label="指挥中心名称"></el-table-column>
              <el-table-column prop="zhzxid" label="指挥中心标识码"></el-table-column>
              <el-table-column prop="zhzxdz" label="指挥中心地址"></el-table-column>
              <el-table-column label="操作">
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
                    <el-button type="text">删除</el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
            <el-table v-if="activeName === 'printery'" key="printery" :data="tableData">
              <el-table-column prop="sjbmsid" label="印刷厂名称"></el-table-column>
              <el-table-column prop="sjbmsmc" label="印刷厂标识码"></el-table-column>
              <el-table-column prop="sjbmsdz" label="印刷厂地址"></el-table-column>
              <el-table-column label="操作">
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
                    <el-button type="text">删除</el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
            <el-table v-if="activeName === 'scanPoint'" key="scanPoint" :data="tableData">
              <el-table-column prop="sjbmsmc" label="扫描点名称"></el-table-column>
              <el-table-column prop="sjbmsid" label="扫描点标识码"></el-table-column>
              <el-table-column prop="sjbmsdz" label="扫描点地址"></el-table-column>
              <el-table-column label="操作">
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
                    <el-button type="text">删除</el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
            <el-table v-if="activeName === 'others'" key="others" :data="tableData">
              <el-table-column prop="dm" label="场所类型码"></el-table-column>
              <el-table-column prop="mc" label="场所类型"></el-table-column>
            </el-table>
          </transition-group>
        </div>
        <div v-if="activeName !== 'others'" class="pagination-container">
          <el-pagination
            :total="pageData.total"
            :current-page="pageData.currPage"
            :page-size="pageData.pageSize"
            background
            layout="prev, pager, next, sizes, jumper"
          ></el-pagination>
        </div>
      </div>
      <div v-else class="container site-management-form">
        <ExamRoomForm
          v-if="activeName === 'examRoom'"
          :data="examRoomForm"
          @close="handleCloseForm('examRoomForm')"
        />
        <CommandCenterForm
          v-if="activeName === 'commandCenter'"
          :data="commandCenterForm"
          @close="handleCloseForm('commandCenterForm')"
        />
        <ExamBusinessOfficeForm
          v-if="activeName === 'examBusinessOffice'"
          :data="examBusinessOfficeForm"
          @close="handleCloseForm('examBusinessOfficeForm')"
        />
        <PrinteryForm
          v-if="activeName === 'printery'"
          :data="printeryForm"
          @close="handleCloseForm('printeryForm')"
        />
        <ScanPointForm
          v-if="activeName === 'scanPoint'"
          :data="scanPointForm"
          @close="handleCloseForm('scanPointForm')"
        />
        <SecretRoomForm
          v-if="activeName === 'secretRoom'"
          :data="secretRoom"
          @close="handleCloseForm('secretRoom')"
        />
      </div>
    </transition>
  </div>
</template>
<script>
import {
  CommandCenterForm,
  ExamBusinessOfficeForm,
  ExamRoomForm,
  PrinteryForm,
  ScanPointForm,
  SecretRoomForm
} from './components'
export default {
  name: 'SiteManagement',
  components: {
    CommandCenterForm,
    ExamBusinessOfficeForm,
    ExamRoomForm,
    PrinteryForm,
    ScanPointForm,
    SecretRoomForm
  },
  data() {
    return {
      pageData: {
        total: 0,
        currPage: 1,
        pageSize: 10
      },
      search: {
        ksjgid: []
      },
      activeName: 'examRoom',
      createBtnText: '新增考场',
      isCreate: false,
      isEdit: false,
      tableData: [],
      examRoomForm: {
        bzhkcmc: null,
        bzhkcjc: null,
        kxrl: null,
        kcsjwz: null,
        sfbzhkc: null,
        bzhkcbsm: ''
      },
      commandCenterForm: {
        zhzxid: '',
        zhzxmc: null,
        zhzxdz: null,
        zhzxwd: null,
        zhzxjd: null,
        zhzxdh: null
      },
      examBusinessOfficeForm: {
        kwbgsmc: null,
        kwbgssjwz: null,
        kwbgsid: ''
      },
      printeryForm: {
        bsm: '',
        mc: null,
        yscdz: null,
        jd: null,
        wd: null
      },
      scanPointForm: {
        bsm: '',
        mc: null,
        smddz: null,
        jd: null,
        wd: null
      },
      secretRoom: {
        sjbmsid: '',
        mc: null,
        bmsjcsj: null,
        bmsdz: null,
        bmsjd: null,
        bmswd: null,
        fzrxm: null,
        fzrdh: null,
        bmsdh: null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>