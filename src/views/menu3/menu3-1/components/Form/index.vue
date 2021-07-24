<template>
  <div class="mark-addMark">
    <div class="addMark-content">
      <div v-if="status === 'add'" class="dialog-search">
        <el-input v-model="addMarkxm" size="small" placeholder="请输入考生姓名" clearable></el-input>
        <el-input v-model="addMarkkh" size="small" placeholder="请输入考生考号" clearable></el-input>
        <el-input v-model="addMarkzh" size="small" placeholder="请输入考生证件号" clearable></el-input>
        <el-button size="small" type="primary" @click="markQuery">查询</el-button>
      </div>
      <p v-if="errorTip" class="errorTip">{{ errorTip }}</p>
      <div v-if="status === 'add'" class="dialog-table">
        <el-table :data="markDialog" style="width: 100%" max-height="180">
          <el-table-column label="选择" width="80">
            <template slot-scope="scope">
              <el-radio
                v-model="radioVal"
                :label="scope.$index"
                @change="handleRadioChange(scope.row)"
              ></el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="ksh" label="考生考号" width="100"></el-table-column>
          <el-table-column prop="xm" label="考生姓名" width="80"></el-table-column>
          <el-table-column prop="sfzjhm" label="证件号码" width="180"></el-table-column>
          <el-table-column prop="ljkch" label="逻辑考场号" width="100"></el-table-column>
          <el-table-column prop="sskd" label="所属考点"></el-table-column>
        </el-table>
      </div>
      <div v-if="Object.keys(listOjb).length !== 0" class="dialog-show">
        <ul class="dialog-list">
          <li>
            考生姓名:
            <span>{{ listOjb.xm }}</span>
          </li>
          <li>
            考生号:
            <span>{{ listOjb.ksh }}</span>
          </li>
          <li>
            身份证号码:
            <span>{{ listOjb.sfzjhm }}</span>
          </li>
          <li>
            所属考点:
            <span>{{ listOjb.sskd }}</span>
          </li>
          <li>
            逻辑考场号:
            <span>{{ listOjb.ljkch }}</span>
          </li>
        </ul>
      </div>
      <div v-if="Object.keys(listOjb).length !== 0" class="dialog-attention form-container">
        <el-form
          ref="form"
          :rules="rules"
          :model="formData"
          label-position="right"
          label-width="100px"
        >
          <el-form-item label="关注类型 :" prop="attentionVal">
            <el-select v-model="formData.attentionVal" size="small" placeholder="请选择">
              <el-option
                v-for="item in attentionOptions"
                :key="item.dm"
                :label="item.mc"
                :value="item.dm"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注 :" prop="textareaVal">
            <el-input v-model="formData.textareaVal" :rows="5" type="textarea" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="el-dialog-btn-warp">
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="handleSubmit">确 定</el-button>
        <el-button size="small" @click="addMaskClose">取 消</el-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: 'add'
    },
    editobj: {
      type: Object,
      default: function() {
        return {}
      }
    },
    ksbh: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      listOjb: {},
      attentionOptions: [],
      addMarkxm: '',
      addMarkkh: '',
      addMarkzh: '',
      markDialog: [
        {
          ksh: '2020001',
          xm: '赵某某',
          sfzjhm: '512323199808020013',
          ljkch: 'D202301011',
          sskd: 'X市1中'
        },
        {
          ksh: '2020002',
          xm: '李某某',
          sfzjhm: '512323199808020013',
          ljkch: 'D202301011',
          sskd: 'X市2中'
        }
      ],

      radioVal: 0,
      errorTip: '',
      formData: {
        attentionVal: '',
        textareaVal: '',
        ksbh: '',
        ksh: ''
      },
      rules: {
        attentionVal: [{ required: true, message: '类型不能为空' }],
        textareaVal: [{ required: true, message: '备注不能为空' }]
      }
    }
  },
  created() {
    this.formData.ksbh = this.ksbh
    this.attentionOptions = this.$store.state.common.allMbData.jy_zdgzkslbmb
    console.log(this.formData)
    if (this.status === 'edit') {
      this.listOjb = this.editobj
      this.handleAttention(this.listOjb)
    } else {
      this.listOjb = this.markDialog[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.mark-addMark {
  .el-input,
  .el-select {
    width: 260px;
    margin-right: 32px;
  }
  .el-table {
    margin-top: 32px;
  }
  .dialog-show {
    margin-top: 24px;
    font-size: 14px;
    color: #606266;
    .dialog-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li {
        width: 33.33%;
        line-height: 32px;
      }
    }
  }
  .form-container {
    .el-input,
    .el-textarea,
    .el-select {
      width: 320px;
    }
  }
  .dialog-attention {
    margin-top: 32px;
  }
  .edit-dialog {
    margin-top: 0;
  }
  .el-dialog-btn-warp {
    margin-left: 100px;
    margin-top: 20px;
  }
  .errorTip {
    margin-top: 10px;
    color: #f56c6c;
    font-size: 14px;
  }
}
</style>