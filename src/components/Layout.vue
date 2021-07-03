<template >
  <el-container>
    <el-header height="auto">
      <myHeader :username="username"></myHeader>
    </el-header>
    <div style="margin-top: 16px">
      <el-container>
        <el-aside width="auto">
          <myAside></myAside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </el-container>
</template >
<script>
import myHeader from "./items/myHeader";
import myAside from "./items/myAside";
import Welcome from "./pages/Welcome";
import realTime from "@/components/pages/realTime";
import appRank from "@/components/pages/appRank";
import Sex from "@/components/pages/Sex";
import userBehavior from "@/components/pages/userBehavior";
import eventAnalysis from "@/components/pages/eventAnalysis";
import pageAnalysis from "@/components/pages/pageAnalysis";
import userAnalysis from "@/components/pages/userAnalysis";

export default {
  components: {
    myAside,
    myHeader,
    Welcome,
    realTime,
    appRank,
    Sex,
    userBehavior,
    eventAnalysis,
    pageAnalysis,
    userAnalysis,
  },
  data() {
    return { username: this.$route.params.username };
  },
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: solid 1px #e6e6e6;
}
.el-container {
  margin-top: 23px;
}
.el-header {
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 0;
}
.el-aside {
  border-right: solid 1px #e6e6e6;
  text-align: left;
  background-color: rgba(235, 245, 255, 0);
  color: #333;
  /*line-height: 200px;*/
}

.el-main {
  background-color: rgba(255, 185, 0, 0);
  color: #dddddd;
  /*text-align: center;*/
  /*line-height: 160px;*/
  margin: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
body {
  display: block;
  margin: 1px;
}

html {
  color: #000;
  background: #fff;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
ol,
ul {
  list-style: none;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
q:before,
q:after {
  content: "";
}
abbr,
acronym {
  border: 0;
}
/*@charset "utf-8";*/
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  /*字体*/
}
li {
  list-style: none;
}
input,
img {
  border: none;
}
</style>
