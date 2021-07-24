/*
 * @Author: 唐云 
 * @Date: 2021-07-24 14:44:03 
 * @Last Modified by:   唐云 
 * @Last Modified time: 2021-07-24 14:44:03 
 */
<template>
  <div class="form-container">
    <el-form ref="form" :rules="rules" :model="formData" label-position="right" label-width="170px">
      <el-divider>基本信息</el-divider>
      <el-form-item label="考务办公室名称" prop="kwbgsmc">
        <el-input v-model="formData.kwbgsmc" placeholder="请输入考务办公室名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="考务办公室实际位置" prop="kwbgssjwz">
        <el-input v-model="formData.kwbgssjwz" placeholder="请输入考务办公室实际位置" size="small"></el-input>
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
  name: 'ExamBusinessOfficeForm',
  props: {
    data: {
      type: Object,
      default() {
        return {
          kwbgsmc: null,
          kwbgssjwz: null,
          kwbgsid: ''
        }
      }
    }
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(this.data)),
      rules: {
        kwbgsmc: { required: true, message: '请输入考务办公室名称！' },
        kwbgssjwz: { required: true, message: '请输入考务办公室位置！' }
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.form-container {
  min-width: 500px;
  width: 40%;
  margin: 0 auto;
}
</style>