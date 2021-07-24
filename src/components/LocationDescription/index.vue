<template>
  <div class="location-description">
    <el-link
      type="primary"
      href="http://api.map.baidu.com/lbsapi/getpoint/"
      target="blank"
    >百度坐标拾取系统</el-link>
    <div class="el-upload__tip">
      <p>
        地理坐标说明：1.进入百度拾取坐标系统，输入机构名称或所属门牌号，支持精确/模糊查询。
      </p>
      <p>2.在搜索结果中选取正确/接近的，复制坐标信息，填写。</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.location-description {
  text-align: center;
  p {
    color: #999999;
    margin: 12px 0;
  }
}
</style>