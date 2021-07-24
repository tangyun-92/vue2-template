/*
 * @Author: LiangChenkang 
 * @Date: 2020-05-14 10:12:45 
 * @Last Modified by: LiangChenkang
 * @Last Modified time: 2020-05-19 10:31:08
 */

<template>
  <div class="form-container">
    <el-form ref="form" :rules="rules" :model="formData" label-position="right" label-width="170px">
      <el-divider>基本信息</el-divider>
      <el-form-item label="印刷厂名称：" prop="mc">
        <el-input v-model="formData.mc" placeholder="请输入印刷厂名称" size="small"></el-input>
      </el-form-item>
      <el-divider>地址信息</el-divider>
      <el-form-item label="印刷厂地址：" prop="yscdz">
        <el-input v-model="formData.yscdz" placeholder="请输入印刷厂地址" size="small"></el-input>
      </el-form-item>
      <el-form-item label="经度：" prop="jd">
        <el-input v-model="formData.jd" placeholder="请输入经度" size="small"></el-input>
      </el-form-item>
      <el-form-item label="纬度：" prop="wd">
        <el-input v-model="formData.wd" placeholder="请输入纬度" size="small"></el-input>
      </el-form-item>
      <LocationDescription />
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
  name: 'PrinteryForm',
  components: { LocationDescription },
  props: {
    data: {
      type: Object,
      default() {
        return {
          bsm: '',
          mc: null,
          yscdz: null,
          jd: null,
          wd: null
        }
      }
    }
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(this.data)),
      rules: {
        mc: { required: true, message: '请输入印刷厂名称！' },
        yscdz: { required: true, message: '请输入印刷厂地址！' },
        jd: [
          { required: true, message: '请输入经度！' },
          { pattern: this.$GV.longitudeReg, message: '请输入正确的经度！' }
        ],
        wd: [
          { required: true, message: '请输入纬度！' },
          { pattern: this.$GV.altitudeReg, message: '请输入正确的纬度！' }
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