/*
 * @Author: LiangChenkang 
 * @Date: 2020-05-13 09:34:55 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-07-24 14:43:48
 */
<template>
  <div class="form-container">
    <el-form ref="form" :rules="rules" :model="formData" label-position="right" label-width="170px">
      <el-divider>基本信息</el-divider>
      <el-form-item label="机构层级：" prop="jgcj">
        <el-select v-model="formData.jgcj" size="small">
          <el-option
            v-for="item in orgHierarchyList"
            :key="item.dm"
            :value="item.dm"
            :label="item.mc"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上级机构：" prop="sjksjgm">
        <el-cascader
          v-model="formData.sjksjgm"
          :options="examOrgTreeOptions"
          :props="{ checkStrictly: true, label: 'ksjgmc', value: 'ksjgId' }"
          size="small"
          @change="handleExamOrgTreeChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item v-if="formData.jgcj !== '4'" label="行政机构：" prop="xzjgm">
        <el-select
          v-model="formData.xzjgm"
          :disabled="!orgTreeOptions.length"
          size="small"
          @change="handleExecutiveChange"
        >
          <el-option
            v-for="item in orgTreeOptions"
            :key="item.xzqhdm"
            :value="item.xzqhdm"
            :label="item.xzqhmc"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="formData.jgcj !== '4'" label="管辖范围：" prop="gxfw">
        <el-select v-model="formData.gxfw" :disabled="!orgTreeOptions.length" size="small">
          <el-option
            v-for="item in orgTreeOptions"
            :key="item.xzqhdm"
            :value="item.xzqhdm"
            :label="item.xzqhmc"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考试管理机构标识码：" prop="ksgljgbsm">
        <el-input v-model="formData.ksgljgbsm" disabled placeholder="考试管理机构标识码" size="small"></el-input>
      </el-form-item>
      <el-form-item label="考试管理机构名称：" prop="ksgljgmc">
        <el-input v-model="formData.ksgljgmc" placeholder="请输入考试管理机构名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="考试管理机构简称：" prop="ksgljgjc">
        <el-input v-model="formData.ksgljgjc" placeholder="请输入考试管理机构简称" size="small"></el-input>
      </el-form-item>
      <el-form-item v-if="formData.jgcj === '4'" label="考点类别：" prop="kdlbm">
        <el-select v-model="formData.kdlbm" placeholder="请选择考点类别" size="small">
          <el-option
            v-for="item in examPointTypeList"
            :key="item.dm"
            :value="item.dm"
            :label="item.mc"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="formData.jgcj === '4'" label="建成时间：" prop="kdjcsj">
        <el-date-picker
          v-model="formData.kdjcsj"
          type="datetime"
          placeholder="请选择建成时间"
          size="small"
          value-format="yyyy-MM-dd HH:mm"
        ></el-date-picker>
      </el-form-item>
      <el-form-item v-if="formData.jgcj === '4'" label="是否标准化考点：" prop="isStandard">
        <el-radio-group v-model="formData.isStandard" size="small">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-divider>地址信息</el-divider>
      <el-form-item label="机构地址：" prop="ksgljgdz">
        <el-input v-model="formData.ksgljgdz" placeholder="请输入机构地址" size="small"></el-input>
      </el-form-item>
      <el-form-item label="经度：" prop="ksgljgjd">
        <el-input v-model="formData.ksgljgjd" placeholder="请输入经度" size="small"></el-input>
      </el-form-item>
      <el-form-item label="纬度：" prop="ksgljgwd">
        <el-input v-model="formData.ksgljgwd" placeholder="请输入纬度" size="small"></el-input>
      </el-form-item>
      <LocationDescription />
      <el-divider>负责人信息</el-divider>
      <el-form-item label="姓名：" prop="fzrxm">
        <el-input v-model="formData.fzrxm" placeholder="请输入姓名" size="small"></el-input>
      </el-form-item>
      <el-form-item label="电话：" prop="fzrdh">
        <el-input v-model="formData.fzrdh" placeholder="请输入电话" size="small"></el-input>
      </el-form-item>
      <section v-if="formData.jgcj === '4'">
        <el-divider>其他联系方式</el-divider>
        <el-form-item label="考务办公室电话：" prop="kwbgsdh">
          <el-input v-model="formData.kwbgsdh" placeholder="请输入考务办公室电话" size="small"></el-input>
        </el-form-item>
        <el-form-item label="试卷保管室电话：" prop="sjbgsdh">
          <el-input v-model="formData.sjbgsdh" placeholder="请输入试卷保管室电话" size="small"></el-input>
        </el-form-item>
        <el-form-item label="视频监考室电话：" prop="spjksdh">
          <el-input v-model="formData.spjksdh" placeholder="请输入视频监考室电话" size="small"></el-input>
        </el-form-item>
      </section>
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
  name: 'OrganizationManagementForm',
  components: { LocationDescription },
  props: {
    data: {
      type: Object,
      default() {
        return {
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
          kdlbm: null,
          kdjcsj: null,
          isStandard: null,
          kwbgsdh: null,
          sjbgsdh: null,
          spjksdh: null
        }
      }
    }
  },
  data() {
    const PHONE_VERIFY = {
      pattern: this.$GV.phoneNumberReg,
      message: '请输入正确的电话！'
    }
    return {
      formData: JSON.parse(JSON.stringify(this.data)),
      rules: {
        jgcj: { required: true, message: '请选择机构层级！' },
        sjksjgm: { required: true, message: '请选择上级机构！' },
        xzjgm: { required: true, message: '请选择行政机构！' },
        gxfw: { required: true, message: '请选择管辖范围！' },
        ksgljgmc: { required: true, message: '请输入考试管理机构名称！' },
        ksgljgjc: { required: true, message: '请输入考试管理机构简称！' },
        kdlbm: { required: true, message: '请选择考点类别！' },
        kdjcsj: { required: true, message: '请选择建成时间！' },
        isStandard: { required: true, message: '请选择是否标准化考点！' },
        ksgljgdz: { required: true, message: '请输入机构地址！' },
        ksgljgjd: [
          { required: true, message: '请输入机构经度！' },
          { pattern: this.$GV.longitudeReg, message: '请输入正确的经度！' }
        ],
        ksgljgwd: [
          { required: true, message: '请输入机构纬度！' },
          { pattern: this.$GV.altitudeReg, message: '请输入正确的纬度！' }
        ],
        fzrxm: { required: true, message: '请输入负责人姓名！' },
        fzrdh: [
          PHONE_VERIFY,
          { required: true, message: '请输入负责人电话！' }
        ],
        ksgljgbsm: { required: true, message: '请输入考试管理机构标识码！' },
        kwbgsdh: [
          PHONE_VERIFY,
          { required: true, message: '请输入考务办公室电话！' }
        ],
        sjbgsdh: [
          PHONE_VERIFY,
          { required: true, message: '请输入试卷保管室电话！' }
        ],
        spjksdh: [
          PHONE_VERIFY,
          { required: true, message: '请输入视频监考室电话！' }
        ]
      },
      orgTreeOptions: []
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