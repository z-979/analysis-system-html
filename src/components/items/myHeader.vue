<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
    @select="handleSelect"
  >
    <div class="title" style="">移动互联网用户行为实时分析系统</div>
    <el-menu-item index="1">
      <img
        style="width: 30px; height: 30px"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
      {{ username }}
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">个人中心</template>
      <el-menu-item @click="logout()">注销登录</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" @click="index()">回到首页</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  props: {
    username: {
      type: String,
      default: "用户名",
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$router.push({ path: "/Login" });
    },
    index() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
.title {
  float: left;
  color: #409eff;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 20px;
  margin: 0 21px;
}
.el-menu--horizontal {
  border: none;
  height: auto;
}
.el-menu--horizontal > .el-submenu {
  float: right;
}
.el-menu--horizontal > .el-menu-item {
  float: right;
}
.el-header {
  height: auto;
  border-bottom: solid 1px #e6e6e6;
  padding: 0 0px;
}
</style>
