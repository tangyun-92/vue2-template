/*
 * @Author: 唐云 
 * @Date: 2021-07-24 14:44:09 
 * @Last Modified by:   唐云 
 * @Last Modified time: 2021-07-24 14:44:09 
 */
<template>
  <div class="form-container">
    <el-form ref="form" :rules="rules" :model="formData" label-position="right" label-width="170px">
      <el-divider>基本信息</el-divider>
      <el-form-item label="保密室名称：" prop="mc">
        <el-input v-model="formData.mc" placeholder="请输入保密室名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="保密室建成时间：" prop="bmsjcsj">
        <el-input v-model="formData.bmsjcsj" placeholder="请输入保密室建成时间" size="small"></el-input>
      </el-form-item>
      <el-divider>地址信息</el-divider>
      <el-form-item label="保密室地址：" prop="bmsdz">
        <el-input v-model="formData.bmsdz" placeholder="请输入保密室地址" size="small"></el-input>
      </el-form-item>
      <el-form-item label="经度：" prop="bmsjd">
        <el-input v-model="formData.bmsjd" placeholder="请输入经度" size="small"></el-input>
      </el-form-item>
      <el-form-item label="纬度：" prop="bmswd">
        <el-input v-model="formData.bmswd" placeholder="请输入纬度" size="small"></el-input>
      </el-form-item>
      <LocationDescription />
      <el-divider>联系方式</el-divider>
      <el-form-item label="负责人姓名：" prop="fzrxm">
        <el-input v-model="formData.fzrxm" placeholder="请输入负责人姓名" size="small"></el-input>
      </el-form-item>
      <el-form-item label="负责人电话：" prop="fzrdh">
        <el-input v-model="formData.fzrdh" placeholder="请输入负责人电话" size="small"></el-input>
      </el-form-item>
      <el-form-item label="试卷保密室电话：" prop="bmsdh">
        <el-input v-model="formData.bmsdh" placeholder="请输入试卷保密室电话" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="handleSubmit">保存</el-button>
        <el-button size="small" @click="handleCancle">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import LocationDescription from '@/components/LocationDescription'
export default {
  name: 'SecretRoomForm',
  components: { LocationDescription },
  props: {
    data: {
      type: Object,
      default() {
        return {
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
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(this.data)),
      rules: {
        mc: { required: true, message: '请输入保密室名称！' },
        bmsjcsj: { required: true, message: '请输入保密室建成时间！' },
        bmsdz: { required: true, message: '请输入保密室地址！' },
        bmsjd: [
          { required: true, message: '请输入经度！' },
          { pattern: this.$GV.longitudeReg, message: '请输入正确的经度！' }
        ],
        bmswd: [
          { required: true, message: '请输入纬度！' },
          { pattern: this.$GV.altitudeReg, message: '请输入正确的纬度！' }
        ],
        fzrxm: { required: true, message: '请输入负责人姓名！' },
        fzrdh: [
          { required: true, message: '请输入负责人电话！' },
          { pattern: this.$GV.phoneNumberReg, message: '请输入正确的电话！' }
        ],
        bmsdh: [
          { required: true, message: '请输入试卷保密室电话！' },
          { pattern: this.$GV.phoneNumberReg, message: '请输入正确的电话！' }
        ]
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