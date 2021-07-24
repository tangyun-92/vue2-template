/*
 * @Author: LiangChenkang 
 * @Date: 2020-05-13 17:45:58 
 * @Last Modified by: LiangChenkang
 * @Last Modified time: 2020-05-19 10:24:40
 */
<template>
  <div class="form-container">
    <el-form ref="form" :rules="rules" :model="formData" label-position="right" label-width="170px">
      <el-divider>基本信息</el-divider>
      <el-form-item label="考场名称：" prop="bzhkcmc">
        <el-input v-model="formData.bzhkcmc" placeholder="请输入考场名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="考场简称：" prop="bzhkcjc">
        <el-input v-model="formData.bzhkcjc" placeholder="请输入考场简称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="最大考生数" prop="kxrl">
        <el-input v-model="formData.kxrl" placeholder="请输入最大考生数" size="small"></el-input>
      </el-form-item>
      <el-form-item label="考场实际位置" prop="kcsjwz">
        <el-input v-model="formData.kcsjwz" placeholder="请输入考场实际位置" size="small"></el-input>
      </el-form-item>
      <el-form-item label="是否标准化考场：" prop="sfbzhkc">
        <el-radio-group v-model="formData.sfbzhkc">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
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
  name: 'ExamRoomForm',
  props: {
    data: {
      type: Object,
      default() {
        return {
          bzhkcmc: null,
          bzhkcjc: null,
          kxrl: null,
          kcsjwz: null,
          sfbzhkc: null,
          bzhkcbsm: ''
        }
      }
    }
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(this.data)),
      rules: {
        bzhkcmc: { required: true, message: '请输入考场名称！' },
        bzhkcjc: { required: true, message: '请输入考场简称！' },
        kxrl: [
          { required: true, message: '请输入最大考生数！' },
          { pattern: /^[0-9]{3}$/, message: '请输入三位正整数' }
        ],
        kcsjwz: { required: true, message: '请输入考场实际位置！' },
        sfbzhkc: { required: true, message: '请选择是否标准化考场！' }
      }
    }
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