<template>
  <div style="width: 100%; margin-top: 10px">
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <el-tabs type="border-card" style="min-height: 300px">
            <el-tab-pane label="登录">
              <el-form
                :model="userLogin"
                :rules="rules"
                ref="userLogin"
                label-width="100px"
                class="demo-userForm"
              >
                <el-form-item label="用户名" prop="name">
                  <el-input v-model="userLogin.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    type="password"
                    v-model="userLogin.password"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitLogin('userLogin')"
                    >立即登录</el-button
                  >
                  <el-button @click="resetLogin('userLogin')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册">
              <el-form
                :model="userForm"
                :rules="rules"
                ref="userForm"
                label-width="100px"
                class="demo-userForm"
              >
                <el-form-item label="用户名称" prop="name">
                  <el-input v-model="userForm.name"></el-input>
                </el-form-item>
                <el-form-item
                  prop="email"
                  label="邮箱"
                  :rules="[
                    {
                      required: true,
                      message: '请输入邮箱地址',
                      trigger: 'blur',
                    },
                    {
                      type: 'email',
                      message: '请输入正确的邮箱地址',
                      trigger: 'blur,change',
                    },
                  ]"
                >
                  <el-input v-model="userForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    type="password"
                    v-model="userForm.password"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('userForm')"
                    >立即创建</el-button
                  >
                  <el-button @click="resetForm('userForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div></el-col
      >
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userForm: {
        email: "",
        password: "",
        name: "",
      },
      userLogin: {
        password: "",
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度大于 6个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          this.$axios
            .post("http://localhost:8989/users/add", this.userForm)
            .then(function (response) {
              if (response.data) {
                _this.$alert(
                  _this.userForm.name + "用户添加成功，请使用用户名、密码登录",
                  "添加用户",
                  {
                    confirmButtonText: "确定",
                    callback: (action) => {
                      location.reload();
                    },
                  }
                );
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          _this.$axios
            .post("http://localhost:8989/users/login", _this.userLogin)
            .then((response) => {
              //             console.log(_this.userLogin.password);
              //              console.log(response.data.toString());
              if (response.data.toString() == _this.userLogin.password) {
                _this.$alert(
                  "用户 " + _this.userLogin.name + "，欢迎登录！",
                  "登录成功",
                  {
                    confirmButtonText: "确定",
                    callback: (action) => {
                      // _this.$router.push({ path: "/Layout" });
                      _this.$router.push({
                        name: "Layout",
                        params: { username: _this.userLogin.name },
                      });
                    },
                  }
                );
              } else {
                _this.$alert("用户名或密码错误，请重新登录", "登录失败", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    location.reload();
                  },
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetLogin(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    this.$axios.get("http://localhost:8989/users").then(function (response) {
      console.log(response);
    });
  },
};
</script>
<style>
div#tab-0 {
  width: 462px;
  text-align: center;
}
div#tab-1 {
  width: 462px;
  text-align: center;
}
.el-row {
  margin-bottom: 0px;
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
