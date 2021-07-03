<template>
  <div style="width: 1330px">
    <el-menu
      :default-active="activeIndex"
      :router="true"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <div class="title" style="">移动互联网用户行为实时分析系统</div>
      <el-menu-item index="Login">注册/登录</el-menu-item>
    </el-menu>
    <div class="block">
      <!--<span class="demonstration">Click 指示器触发</span>-->
      <el-carousel trigger="click" height="400px">
        <el-carousel-item key="0">
          <img src="../assets/ren.png" alt="轮播图" />
        </el-carousel-item>
        <el-carousel-item key="1">
          <img src="../assets/xie.jpg" alt="轮播图" />
        </el-carousel-item>
        <el-carousel-item key="2">
          <img src="../assets/zi.jpg" alt="轮播图" />
        </el-carousel-item>
        <el-carousel-item key="3">
          <img src="../assets/tu.jpg" alt="轮播图" />
        </el-carousel-item>
      </el-carousel>
      <div style="margin-top: 10px">
        <el-row :gutter="20">
          <el-col :span="20" :offset="2">
            <div class="grid-content">
              <div
                style="
                  margin-top: 20px;
                  text-align: center;
                  font-size: 25px;
                  color: #a4a4a4;
                "
              >
                智能时代，数据为王！
              </div>
              <div
                style="
                  height: 3px;
                  width: 60px;
                  margin: 10px auto;
                  background-color: crimson;
                "
              ></div>
              <div
                style="
                  margin: 20px;
                  text-align: center;
                  font-size: 16px;
                  color: #1d1d1d;
                "
              >
                专为您提供我们最专业的数据服务--移动互联网用户行为实时分析系统
              </div>
              <div>
                <el-row :gutter="12">
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-share"></i>
                      实 时 数 据
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-setting"></i>
                      用 户 行 为 分 析
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-download"></i>
                      用 户 存 留 分 析
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-upload"></i>
                      事 件 分 析
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-upload2"></i>
                      表 单 分 析
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-rank"></i>
                      页 面 分 析
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-edit"></i>
                      应 用 排 行
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-share"></i>
                      人 群 画 像
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="el-card1">
                      <i class="el-icon-edit-outline"></i>
                      定 制 服 务
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
        <div style="background-color: rgba(240, 240, 240, 0.98); height: 300px">
          <div style="margin: 0 10% -40px 10%; width: 80%">
            <div class="bow">
              <img src="../assets/banks/柱状图.png" />
              <div class="font">更快的增长率</div>
            </div>
            <div class="bow">
              <img src="../assets/banks/礼包.png" />
              <div class="font">更高活跃度</div>
            </div>
            <div class="bow">
              <img src="../assets/banks/钻石.png" />
              <div class="font">更精准的运营</div>
            </div>
            <div class="bow">
              <img src="../assets/banks/饼状图.png" />
              <div class="font">更极致的体验</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.title {
  float: left;
  color: #409eff;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 20px;
  margin: 15px 21px;
}
.el-menu--horizontal {
  border: none;
  height: auto;
}
.el-menu--horizontal > .el-menu-item {
  float: right;
}
.el-header {
  height: auto;
  z-index: 3;
  border-bottom: solid 1px #e6e6e6;
  padding: 0 0px;
}
.bow img {
  width: 50%;
  margin: 30px 25%;
  /*height:200px;*/
}
.font {
  font-size: 20px;
  color: rgb(36, 101, 128);
}
.el-carousel__item img {
  height: 400px;
  width: 100%;
}
.bow {
  background-color: rgba(240, 240, 240, 0.98);
  margin: 0 5px;
  width: 24%;
  text-align: center;
  min-height: 200px;
  float: left;
}
.el-card1 {
  text-align: center;
  width: 90%;
  margin: 0 auto 20px auto;
}
.el-card i {
  /*width: 50px;*/
  /*height: 50px;*/
  color: #5673ff;
  display: block;
  font-size: 30px;
  margin: 20px;
  font-weight: 900;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
