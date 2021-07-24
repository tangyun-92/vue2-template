/*
 * @Author: LiangChenkang 
 * @Date: 2020-05-14 14:24:38 
 * @Last Modified by: LiangChenkang
 * @Last Modified time: 2020-05-20 14:00:09
 */
 
<template>
  <div class="form-container">
    <el-form ref="form" :rules="rules" :model="formData" label-position="right" label-width="100px">
      <el-divider>事项信息</el-divider>
      <el-form-item label="事项序号：" prop="sxxh">
        <el-input v-model="formData.sxxh" placeholder="请输入事项序号" size="small"></el-input>
      </el-form-item>
      <el-form-item label="事项名称：" prop="sxmc">
        <el-input v-model="formData.sxmc" placeholder="请输入事项名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="事项要求：" prop="sxyq">
        <el-input v-model="formData.sxyq" type="textarea" placeholder="请输入事项要求" size="small"></el-input>
      </el-form-item>
      <el-form-item label="开始时间：" prop="kssj">
        <el-date-picker v-model="formData.kssj" type="date" placeholder="选择日期" size="small"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间：" prop="jssj">
        <el-date-picker v-model="formData.jssj" type="date" placeholder="选择日期" size="small"></el-date-picker>
      </el-form-item>
      <el-form-item label="关联系统：" prop="xtbh">
        <el-select
          v-model="formData.xtbh"
          placeholder="请选择"
          size="small"
          @change="handleApplicationChange"
        >
          <el-option
            v-for="item in applicationList"
            :key="item.xtbh"
            :label="item.xtmc"
            :value="item.xtbh"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择系统：" prop="zxtbh">
        <el-select
          v-model="formData.zxtbh"
          :disabled="!formData.xtbh"
          placeholder="请选择"
          size="small"
          @change="handleSubsystemChange"
        >
          <el-option
            v-for="item in subsystemList"
            :key="item.zxtbh"
            :label="item.zxtmc"
            :value="item.zxtbh"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关联功能：" prop="gnbh">
        <el-select
          v-model="formData.gnbh"
          :disabled="!formData.zxtbh"
          placeholder="请选择"
          size="small"
        >
          <el-option
            v-for="item in functionList"
            :key="item.gnbh"
            :label="item.gnmc"
            :value="item.gnbh"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关联角色：" prop="jsbh">
        <el-select v-model="formData.jsbh" placeholder="请选择" size="small">
          <el-option
            v-for="item in roleList"
            :key="item.code"
            :label="item.name"
            :value="item.code"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="handleSubmit">保存</el-button>
        <el-button size="small" @click="handleCancle">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'AccountManagementForm',
  props: {
    data: {
      type: Object,
      default() {
        return {
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
    }
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(this.data)),
      rules: {
        sxxh: { required: true, message: '请输入事项序号！' },
        sxmc: { required: true, message: '请输入事项名称！' },
        sxyq: { required: true, message: '请输入事项要求！' },
        kssj: { required: true, message: '请选择开始时间！' },
        jssj: { required: true, message: '请选择结束时间！' },
        xtbh: { required: true, message: '请选择关联系统！' },
        zxtbh: { required: true, message: '请选择关联子系统！' },
        gnbh: { required: true, message: '请选择关联功能！' },
        jsbh: { required: true, message: '请选择关联角色！' }
      },
      subsystemList: [],
      functionList: []
    }
  },
  computed: {
    applicationList() {
      return this.$store.state.common.applicationList
    },
    roleList() {
      return this.$store.state.common.roleList
    }
  },
  mounted() {
    this.formData.confirmPassword = this.formData.pwd
  }
}
</script>
<style lang="scss" scoped>
.form-container {
  min-width: 500px;
  width: 40%;
  margin: 0 auto;
}
</style>