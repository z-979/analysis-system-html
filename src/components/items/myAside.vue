<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="realTime">
            <i class="el-icon-view"></i>
            <span slot="title">实时展台</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">人群画像</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="appRank">应用排行</el-menu-item>
              <el-menu-item index="Sex">性别分布</el-menu-item>
              <el-menu-item index="userBehavior">用户行为</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>定制服务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="eventAnalysis">事件分析</el-menu-item>
              <el-menu-item index="pageAnalysis">页面分析</el-menu-item>
              <el-menu-item index="userAnalysis">用户分析</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //        isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  border-right: none;
  /*height: auto;*/
  /*height: 100%;*/
  /*min-height: 400px;*/
  float: left;
}
.el-submenu .el-menu-item {
  min-width: 0px;
}
</style>
