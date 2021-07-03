<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>请选择数据分析条件 : </span>
    </div>
    <div style="padding: 10px 10px">
      <el-form ref="form" :model="form" label-width="80px" size="small ">
        <el-form-item label="比较数量">
          <el-input-number
            v-model="sum"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
        <el-form-item v-for="(o, index) in sum" label="对比选项" :key="index">
          <el-cascader
            v-model="form.options[index]"
            :options="options"
            :filterable="true"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="时间范围">
          <el-date-picker
            v-model="form.date"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>
<script>
import ElCard from "../../../node_modules/element-ui/packages/card/src/main.vue";

export default {
  props: ["cdOptions"],
  components: { ElCard },
  data() {
    return {
      sum: 1,
      options: [],
      form: {
        options: [],
        date: [new Date(2021, 5, 1, 0, 0), new Date(2021, 5, 8, 0, 0)],
      },
    };
  },
  mounted() {
    this.options = this.cdOptions.options;
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.form, this.options);
      console.log("submit!");
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
</style>
