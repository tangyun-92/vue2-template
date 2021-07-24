/*
 * @Author: LiangChenkang 
 * @Date: 2020-05-14 10:08:56 
 * @Last Modified by: LiangChenkang
 * @Last Modified time: 2020-05-19 13:44:58
 */
<template>
  <div class="form-container">
    <el-form ref="form" :rules="rules" :model="formData" label-position="right" label-width="170px">
      <el-divider>基本信息</el-divider>
      <el-form-item label="指挥中心名称：" prop="zhzxmc">
        <el-input v-model="formData.zhzxmc" placeholder="请输入指挥中心名称" size="small"></el-input>
      </el-form-item>
      <el-divider>地址信息</el-divider>
      <el-form-item label="指挥中心地址：" prop="zhzxdz">
        <el-input v-model="formData.zhzxdz" placeholder="请输入指挥中心地址" size="small"></el-input>
      </el-form-item>
      <el-form-item label="经度：" prop="zhzxjd">
        <el-input v-model="formData.zhzxjd" placeholder="请输入经度" size="small"></el-input>
      </el-form-item>
      <el-form-item label="纬度：" prop="zhzxwd">
        <el-input v-model="formData.zhzxwd" placeholder="请输入纬度" size="small"></el-input>
      </el-form-item>
      <LocationDescription />
      <el-divider>联系方式</el-divider>
      <el-form-item label="指挥中心电话：" prop="zhzxdh">
        <el-input v-model="formData.zhzxdh" placeholder="请输入指挥中心电话" size="small"></el-input>
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
  name: 'CommandCenterForm',
  components: { LocationDescription },
  props: {
    data: {
      type: Object,
      default() {
        return {
          zhzxid: '',
          zhzxmc: null,
          zhzxdz: null,
          zhzxwd: null,
          zhzxjd: null,
          zhzxdh: null
        }
      }
    }
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(this.data)),
      rules: {
        zhzxmc: { required: true, message: '请输入指挥中心名称！' },
        zhzxdz: { required: true, message: '请输入指挥中心地址！' },
        zhzxjd: [
          { required: true, message: '请输入经度！' },
          { pattern: this.$GV.longitudeReg, message: '请输入正确的经度！' }
        ],
        zhzxwd: [
          { required: true, message: '请输入纬度！' },
          { pattern: this.$GV.altitudeReg, message: '请输入正确的纬度！' }
        ],
        zhzxdh: [
          { required: true, message: '请输入指挥中心电话！' },
          { pattern: this.$GV.phoneNumberReg, message: '请输入正确的电话！' }
        ]
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